import { NavLink, Outlet } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex justify-center color text-skin-muted">
            <NavLink to="../app">App</NavLink>
            <Outlet />
        </div>
    )  
}