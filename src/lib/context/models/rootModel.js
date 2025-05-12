import { persist } from 'easy-peasy'
import { userModel } from './userModel'

export const rootModel = {
  user: persist(userModel),
}
