import React, { createContext, useContext, useState } from 'react'
import { ROLES } from '../constants/roles';

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(ROLES.GUEST);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ role, setRole, user, setUser }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;