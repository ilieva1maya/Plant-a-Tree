import { createContext } from "react";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
  
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(-1);
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;