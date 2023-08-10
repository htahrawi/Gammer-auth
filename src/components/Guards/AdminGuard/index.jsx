import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../../router/paths';
import { ROLES } from '../../../constants/roles';
import { useAuthContext } from '../../../contexts/AuthContext';

const AdminGuard = () => {
  const { role } = useAuthContext();
  // const  role  = "ADMIN";
  if(role === ROLES.ADMIN) return <Outlet />
  if(role === ROLES.USER) return <Navigate to={PATHS.HOME } replace={true} />
    return <Navigate to={PATHS.LOGIN} replace={true} />
}

export default AdminGuard