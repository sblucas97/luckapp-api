import { v4 as uuidv4 } from 'uuid'
import { encryptPassword } from '../../helpers'

export const seed = async knex => {
  await knex('users').del()
  await knex('users').insert([
    {
      id: uuidv4(),
      name: 'John Doe',
      email: 'john.doe@nave.rs',
      phone: '53991513097',
      password: await encryptPassword('mypassword'),
      city: 'Pelotas',
      birthday: new Date(),
    }
  ])
}
