import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  isAuthorized: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({isAuthorized}) => {
  return isAuthorized ? <Navigate to="/user" /> : <Outlet/>;
}