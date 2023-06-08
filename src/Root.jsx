// import { NavLink, Outlet } from "react-router-dom"
// export default function Root() {
//     return (
//         <div>
//             <div className="m-4 flex justify-center color text-skin-muted">
//             <NavLink to="login">login</NavLink>
//             </div>
//             <NavLink to="app">App</NavLink>
            
//             <Outlet />
//         </div>
//     )
// }

import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();

  const isRoot = location.pathname === "/";
  const navigationElements = isRoot ? (
    <div>
      <div className="m-4 flex justify-center color text-skin-muted">
        <NavLink to="/login">login</NavLink>
      </div>
      <NavLink to="/app">App</NavLink>
    </div>
  ) : null;

  return (
    <div>
      {navigationElements}
      <Outlet />
    </div>
  );
}


// import { Navigate } from 'react-router-dom';

// export default function Root() {
//   return <Navigate to="login" replace />;
// }




