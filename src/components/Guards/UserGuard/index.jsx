import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../../../constants/roles';
import { PATHS } from '../../../router/paths';
import { useAuthContext } from '../../../contexts/AuthContext';

const UserGuard = () => {
  const { role } = useAuthContext();
  if (role === ROLES.USER) return <Outlet />;
  return <Navigate to={PATHS.HOME} replace={true} />;
}

export default UserGuard;