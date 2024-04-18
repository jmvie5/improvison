import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import authService from "../services/authService";

export default function Navbar() {
    const [isLogged, setIsLogged] = useState(false);
    /* useEffect(() => {
        authService.getLoginStatus(
            () => {
                setIsLogged(true);
            },
            () => {
                setIsLogged(false);
            },
        );
    }, []); */
    return (
        <div>
            <nav className="flex flex-col sm:flex-row justify-between items-center">
                <NavLink className="my-4 mx-2 md:m-8" to="/">
                    <h1 className="text-3xl font-bold">Lick to lick</h1>
                </NavLink>

                <div className="" id="navbarSupportedContent">
                    {isLogged ? (
                        <ul className="flex gap-4 m-4">
                            <li>
                                <NavLink to="/profile" className="btn-primary">
                                    Profil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/game" className="btn-primary">
                                    Jeu
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul className="flex gap-4 m-4">
                            <li>
                                <NavLink to="/register" className="btn-primary">
                                    Créer un compte
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className="btn-primary">
                                    Connection
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
}
