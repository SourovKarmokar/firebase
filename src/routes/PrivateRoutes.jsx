import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from "../firebase"
import {Outlet , Navigate} from "react-router-dom"

const PrivateRoutes = () => {
    const [user, loading, error] = useAuthState(auth)

    if (loading) return <p>Loading user data...</p>

  return (
    <div>
       
    {user ? <Outlet/> : <Navigate to="/login" /> }

    </div>
  )
}

export default PrivateRoutes
