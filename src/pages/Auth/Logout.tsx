import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../api/hooks'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/user'

function Logout() {
  const navigate = useNavigate()
  const { data, mutate, error } = useApi()
  const dispatch = useDispatch()
  useEffect(() => {
    if (data?.success) {
      dispatch(logout())
      navigate('/')
    }
    return () => {}
  }, [data])
  useEffect(() => {
    mutate('/auth/logout')
  }, [])

  if (error) {
    console.log(error)
  }
  return <div>Logoutingggg....</div>
}

export default Logout
