import PropTypes from "prop-types";
import {
    createContext,
    useCallback,
    useEffect,
    useState,
} from "react";
import { api } from "../Api/api";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Vérifie s’il y a un token déjà en localStorage au montage
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
            setIsLoggedIn(true);
        }
    }, []);

    // Fonction login (appel API + stockage du token)
    const login = useCallback(async ({ email, password }) => {
        try {
            const data = await api.userlogin({ email, password });
            const newToken = data.body.token;
            setToken(newToken);
            setIsLoggedIn(true);
            localStorage.setItem("token", newToken);
            return true;
        } catch (error) {
            console.error("Erreur login :", error);
            return false;
        }
    }, []);

    // Fonction logout (nettoyage)
    const logout = useCallback(() => {
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
    }, []);

    return (
        <LoginContext.Provider value={{ token, isLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

LoginProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
