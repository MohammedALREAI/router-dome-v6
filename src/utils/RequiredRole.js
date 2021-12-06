import { Navigate, Route, useLocation } from 'react-router-dom';

const PrivateRoute = (children ,) => {
  let location = useLocation();

   const role =localStorage.getItem("role")


  if (!role) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;