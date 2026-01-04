import React, { ReactNode } from 'react';

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  // For now, just return children. In a real app, check auth state.
  return <>{children}</>;
};

export default RequireAuth;