import createError from 'http-errors'
import { User } from '../models/userModel.js'
import { loginPerson } from '../services/authServices.js'

export const login = async (req, res, next) => {
  /* #swagger.requestBody = {
        required: true,
        description: "Login user",
        content: {
          "application/json ": {
           schema: { $ref: '#/components/schemas/loginUser' },
         }
       } 
     } 
     #swagger.responses[401] */
  try {
    let token = await loginPerson(req.body, 'user')
    let TTL_COOKIE = 3600 * 1000
    return res
      .cookie('access_token', token, { httpOnly: true, maxAge: TTL_COOKIE })
      .send('login successful')
  } catch (e) {
    next(e)
  }
}
export const signup = async (req, res, next) => {
  /* #swagger.requestBody = {
      required: true,
      description: "Create a new user",
      content:{
        "application/json ":{
          schema: { $ref: '#/components/schemas/addUser'},
         }
       } 
     }  
     #swagger.responses[400] = { description: "user already exist or Bad request"} */
  try {
    console.log(req.body)
    const { username, fullName, email, password } = req.body
    //check user exist
    let userExist = await User.exists({
      $or: [{ username: username }, { email: email }],
    })
    console.log(userExist, 'lok')
    if (userExist) {
      //if a email alredy registered, throw new error
      throw createError(400, 'user already exist')
    }
    // new user, create new doc
    let user = await User.create({
      username,
      email,
      password,
      fullName,
    })
    return res.status(201).json(`succcessfully created user ${user.fullName}`)
  } catch (e) {
    next(e)
  }
}
export const logout = (req, res) => {
  /* #swagger.description = "Logout user"
     #swagger.responses[202] */
  return res
    .clearCookie('access_token')
    .status(202)
    .json({ message: 'Logout sucessfully' })
}
