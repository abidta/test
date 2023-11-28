import User from '../models/userModel.js'

export const login = (req, res) => {
  res.send('login success')
}
export const signup = async (req, res, next) => {
  try {
    console.log(req.body)
    const { name, email, password } = req.body
    let user = await User.create({
      name,
      email,
      password,
      date: Date.now(),
    })
    res.status(201).json(`succcessfully created user ${user.name}`)
  } catch (e) {
    res.status(400).send(e.message)
    next(e)
  }
}
