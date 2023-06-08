import { NavLink, Outlet } from 'react-router-dom';

export default function NavBar({theme}) {
    return (
        <div className={`flex justify-center color text-skin-muted ${theme}`}>
            <NavLink to="page1">page1</NavLink>
            <NavLink to="page2">page2</NavLink>
        <main>
            <Outlet />
        </main>
        </div>
        
    )
}