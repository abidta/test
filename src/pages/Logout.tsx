import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../api/hooks'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/user'

function Logout() {
  const navigate = useNavigate()
  const { data, submitApi, error } = useApi('/auth/logout', 'POST')
  const dispatch = useDispatch()
  useEffect(() => {
    submitApi()
    if (data) {
      dispatch(logout())
      navigate('/')
    }
    return () => {}
  }, [data])
  if (error) {
    console.log(error)
  }
  return <div>Logoutingggg....</div>
}

export default Logout
