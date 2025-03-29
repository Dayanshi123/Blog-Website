import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
      className='inline-block px-6 py-2 duration-200 bg-[#FAF0E6] text-[#8B4513] border border-[#8B4513] rounded-full hover:bg-[#f4f4cb] hover:text-[#654321]'
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn