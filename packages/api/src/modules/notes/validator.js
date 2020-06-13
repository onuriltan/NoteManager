const { query, param, body } = require('express-validator')

exports.validateFindNotes = [
  query('email').isEmail(),
  query('page').isInt().toInt(),
  query('limit').isInt().toInt(),
]

exports.validateFindNotesBetweenDatesandKeyword = [
  param('fromDate').isISO8601().toDate(),
  param('toDate').isISO8601().toDate(),
]

exports.validateCreatePost = [body('text').notEmpty()]
exports.validateEditPost = [body('text').notEmpty(), param('id').isMongoId()]
exports.validateDeletePost = [param('id').isMongoId()]
