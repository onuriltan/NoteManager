const express = require("express");
const router = express.Router();
const AuthValidation = require("../validation/auth");
const AuthDbService = require("../repository/auth");
const bcrypt = require("bcrypt");
const JwtOperations = require("../../../middlewares/jwt");
const MailOperations = require("../../../config/mail");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let fieldErrors = AuthValidation.validateLogin(req.body);
  let isValid = fieldErrors.email === "" && fieldErrors.password === "";
  let errors = [];

  if (!isValid) {
    res.status(400).json({ fieldErrors });
  } else {
    let user = await AuthDbService.findUser(email);
    if (user) {
      let isPasswordCorrect = bcrypt.compareSync(password, user.local.password);
      if (!user.active) {
        errors.push({ msg: "You need to activate your account" });
        res.status(401).json({ errors });
      } else if (user.active && isPasswordCorrect) {
        let token = await JwtOperations.signToken(user, process.env.JWT_SECRET);
        res.json({ token });
      } else {
        errors.push({ msg: "Username or password is wrong" });
        res.status(401).json({ errors });
      }
    } else {
      errors.push({ msg: "Username or password is wrong" });
      res.status(401).json({ errors });
    }
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  let errors = [];
  let messages = [];
  let fieldErrors = AuthValidation.validateRegister(req.body); //Check required fields
  let isValid =
    fieldErrors.email === "" &&
    fieldErrors.password === "" &&
    fieldErrors.password2 === "";
  if (!isValid) {
    res.status(400).json({ fieldErrors });
  } else {
    let foundUser = await AuthDbService.findUser(email, password);
    if (!foundUser) {
      let newUser = await AuthDbService.createUser(email, password);
      if (newUser) {
        MailOperations.sendConfirmationMail(
          newUser.local.email,
          newUser.confirmationToken
        )
          .then((response) => {
            messages.push({ msg: "Check your email to confirm your account!" });
            res.status(200).json({ messages });
          })
          .catch((err) => {
            errors.push({ msg: "An error occurred while sending e-mail." });
            res.status(400).json({ errors });
          });
      } else {
        let deletedUser = await AuthDbService.deleteUser(newUser.id);
        errors.push({ msg: "An error occurred" });
        res.status(400).json({ messages });
      }
    } else {
      errors.push({ msg: "This email is already registered" });
      res.status(400).json({ errors });
    }
  }
});

router.post("/resendConfirmationEmail", async (req, res) => {
  const { email, password } = req.body;
  let errors = [];
  let messages = [];
  let fieldErrors = AuthValidation.validateRegister(req.body); //Check required fields
  let isValid =
    fieldErrors.email === "" &&
    fieldErrors.password === "" &&
    fieldErrors.password2 === "";
  if (!isValid) {
    res.status(400).json({ fieldErrors });
  } else {
    let foundUser = await AuthDbService.findUser(email);
    if (foundUser && !foundUser.active) {
      let isPasswordCorrect = bcrypt.compareSync(password, foundUser.password);
      if (isPasswordCorrect) {
        let user = await AuthDbService.regenerateUserConfirmationToken(email);
        if (user) {
          MailOperations.sendConfirmationMail(
            user.email,
            user.confirmationToken
          )
            .then(() => {
              messages.push({ msg: "Confirmation email is resent!" });
              res.status(200).json({ messages });
            })
            .catch(() => {
              errors.push({ msg: "An error occurred while sending e-mail." });
              res.status(400).json({ errors });
            });
        }
      } else {
        errors.push({ msg: "Username or password is wrong" });
        res.status(400).json({ errors });
      }
    } else {
      errors.push({ msg: "An error occurred" });
      res.status(400).json({ errors });
    }
  }
});

router.get("/confirm/:confirmationToken", async (req, res) => {
  let errors = [];
  const confirmationToken = req.params.confirmationToken;
  let user = await AuthDbService.findUserWithConfirmationToken(
    confirmationToken
  );
  if (user) {
    let expiry = user.confirmationTokenExpiry;
    let compare = new Date().setDate(new Date().getDate() + 3);
    if (expiry < compare) {
      user.confirmationToken = undefined;
      user.confirmationTokenExpiry = undefined;
      user.active = true;
      user.save((err, updatedUser) => {
        if (err) console.log(err);
        else console.log(updatedUser.name + " activated");
      });
      let token = await JwtOperations.signToken(user, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      await AuthDbService.deleteUser(user.id);
      errors.push({ msg: "Your account is expired, please re-register" });
      res.status(401).json({ errors });
    }
  } else {
    errors.push({ msg: "No new user found with that token" });
    res.status(404).json({ errors });
  }
});

module.exports = router;
