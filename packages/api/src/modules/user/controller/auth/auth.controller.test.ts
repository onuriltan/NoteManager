/* eslint-disable @typescript-eslint/no-explicit-any */
import * as jwt from '../../../../middlewares/jwt'
import { AppUser, SignUpMethod } from '../../entity/user.entity'
import * as authRepository from '../../repository/auth'
import * as authService from '../../service/auth/auth.service'

import { loginWithSocial, registerWithEmail } from './auth.controller'

jest.mock('../../../../middlewares/jwt')
jest.mock('../../repository/auth')
jest.mock('../../service/auth/auth.service')

describe('loginWithSocial tests', () => {
  const mockRequest = {
    appUser: {
      method: 'facebook',
    },
  }
  const mockResponse = {
    json: jest.fn(),
    status: jest.fn(),
    redirect: jest.fn(),
  }

  const OLD_ENV = process.env

  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules() // most important - it clears the cache
    process.env = { ...OLD_ENV } // make a copy
  })

  afterAll(() => {
    process.env = OLD_ENV // restore old env
  })

  it('should call jwt.signToken and call the res.json with jwt.signToken result', async () => {
    // Arrange
    const req = { ...mockRequest } as any
    const res = { ...mockResponse } as any
    const signToken = jest
      .spyOn(jwt, 'signToken')
      .mockResolvedValue('token' as never)
    process.env.CLIENT_URL = 'http://localhost:8080'

    // Act
    await loginWithSocial(req, res)

    // Assert
    expect(signToken).toHaveBeenCalledWith(req.appUser)
    expect(res.redirect).toHaveBeenCalledWith(
      `${process.env.CLIENT_URL}/login/?${
        req.appUser.method
      }Token=${encodeURIComponent('token')}`
    )
  })

  it('should call res.status as 401 if no user is in the req object', async () => {
    // Arrange
    const req = { ...mockRequest, appUser: null } as any
    const res = { ...mockResponse } as any

    // Act
    await loginWithSocial(req, res)

    // Assert
    expect(res.status).toHaveBeenCalledWith(401)
  })
})

describe('registerWithEmail tests', () => {
  let req: any
  let res: any
  beforeEach(() => {
    const resStatus = jest.fn()
    const resSend = jest.fn()
    const resJson = jest.fn()
    res = ({
      status: resStatus,
      send: resSend,
      json: resJson,
    } as unknown) as Response
    resStatus.mockImplementation(() => res)
    resSend.mockImplementation(() => res)
    resJson.mockImplementation(() => res)
  })

  it('should not find existing user and send confirmation mail to the new user', async () => {
    // Arrange
    req = ({
      body: { email: 'onur@iltan.com', password: '1234' },
    } as unknown) as Request
    const createdUser: AppUser = {
      active: true,
      method: SignUpMethod.LOCAL,
    }
    const findUser = jest
      .spyOn(authRepository, 'findUser')
      .mockResolvedValue(null)
    const createUser = jest
      .spyOn(authRepository, 'createUser')
      .mockResolvedValue(createdUser)
    const sendConfirmationMail = jest
      .spyOn(authService, 'sendConfirmationMail')
      .mockResolvedValue(true)

    // Act
    await registerWithEmail(req, res)

    // Assert
    expect(findUser).toHaveBeenCalledWith(req.body.email)
    expect(createUser).toHaveBeenCalledWith(req.body.email, req.body.password)
    expect(sendConfirmationMail).toHaveBeenCalledWith(createdUser)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
      messages: [{ msg: 'Check your email to confirm your account!' }],
    })
  })
})
