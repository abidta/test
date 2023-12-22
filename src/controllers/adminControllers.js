import { role, tokenDef } from '../config/constants.js'
import { loginPerson } from '../services/authServices.js'

export const adminPanel = (req, res, next) => {
  res.send('admin api')
}
export const adminLogin = async (req, res, next) => {
  try {
    let token = await loginPerson(req.body, role.admin)
    let TTL_COOKIE = 3600 * 1000
    return res
      .cookie(tokenDef.admin, token, { httpOnly: true, maxAge: TTL_COOKIE })
      .send('login successful')
  } catch (e) {
    next(e)
  }
}
export const adminLogout = (req, res, next) => {}
