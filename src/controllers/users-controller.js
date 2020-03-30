import { User } from '../models'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { encryptPassword, generateJWTToken } from '../helpers'

const UserController = {
  login: async ctx => {
    try {
      const { body: { email, password } } = ctx.request
      const user = await User.findByEmail(email).then(res => res[0])

      if(!user) {
        ctx.status = 400
        return ctx.body = 'User email not found'
      }

      const isValid = await bcrypt.compare(
        password,
        user.password
      )

      if(!isValid) {
        ctx.status = 400
        return ctx.body = 'Wrong password'
      }

      ctx.status = 200

      return ctx.body = {
        user,
        token: generateJWTToken({ id: user.id })
      }

    } catch (err) {
      console.log('err', err)
      ctx.status = 500
      return ctx.body = 'Internal server error'
    }
  },
  show: async ctx => {
    try {
      const { id } = ctx.params
      const response = await User.findById(id)

      ctx.status = 200
      return ctx.body = response
    } catch (err) {
      console.log('err', err)
      ctx.status = 500
      return ctx.body = 'Internal server error'
    }
  },
  index: async ctx => {
    try {
      const response = await User.fetchAllUsers()

      ctx.status = 200
      return ctx.body = response
    } catch (err) {
      console.log('err', err)
      ctx.status = 500
      return ctx.body = 'Internal server error'
    }
  },
  create: async ctx => {
    try {
      const { body } = ctx.request

      const newUser = {
        id: uuidv4(),
        name: body.name,
        phone: body.phone,
        birthday: body.birthday,
        city: body.city,
        email: body.email,
        password: await encryptPassword(body.password)
      }
      const response = await User.create(newUser)

      ctx.status = 200
      return ctx.body = response
    } catch (err) {
      console.log('err', err)
      ctx.status = 500
      return ctx.body = 'Internal server error'
    }
  },
  destroy: async ctx => {
    try {
      const { id } = ctx.params

      await User.deleteUser(id)

      ctx.status = 200
      return ctx.body = 'User deleted'
    } catch (err) {
      console.log('err', err)
      ctx.status = 500
      return ctx.body = 'Internal server error'
    }
  }


}

export default UserController
