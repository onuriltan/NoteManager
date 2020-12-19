/* eslint-disable @typescript-eslint/no-explicit-any */
import * as jwt from '../../../../middlewares/jwt'
import { loginWithSocial } from './auth.controller'

jest.mock('../../../../middlewares/jwt')

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
