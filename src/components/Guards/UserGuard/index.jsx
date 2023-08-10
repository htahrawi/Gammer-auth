import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../../../constants/roles';
import { PATHS } from '../../../router/paths';
import { useAuthContext } from '../../../contexts/AuthContext';

const UserGuard = () => {
  // const { role } = useAuthContext();
  const role = "ADMIN";

  if (role === ROLES.USER) return <Outlet />
  if (role === ROLES.ADMIN) return <Navigate to={PATHS.HOME} replace={true} />
  return <Navigate to={PATHS.LOGIN} replace={true} />
}

export default UserGuard;