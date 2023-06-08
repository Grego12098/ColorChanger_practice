// MainRouter.jsx
import { Route, Switch, createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Login from './Login';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';

function MainRouter() {
    const router = createBrowserRouter(
        createRoutesFromElements(
        <Switch>
        <Route path="/" element={<Root />}>
        <Route path="login" element={<Login />} />
        <Route path="app" element={<App />}>
            {/* Child routes */}
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
        </Route>
        </Route>
        </Switch>
       
        ));
  return (
    <RouterProvider router={router}/>
    // <Outlet />
  );
}

export default MainRouter;
