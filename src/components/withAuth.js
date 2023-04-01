// manca export
// !non si chiama più Redirect ma Navigate -> https://stackabuse.com/redirects-in-react-router/

import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) {
      return <Component />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return AuthRoute;
};

export default withAuth;