import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { api } from "../Api/api";
import { useLogin } from "./LoginContext";

const AccountContext = createContext(null);





export const AccountProvider = ({ children }) => {
    const { userIsLogged } = useLogin();
    const [balance, setBalance] = useState(100);

    if (!userIsLogged) {

        return (
            <AccountContext.Provider value={null}>
                {children}
            </AccountContext.Provider>
        );
    }



    const addMoney = (amount) => setBalance((b) => b + amount);
    const spendMoney = (amount) => setBalance((b) => b - amount);

    return (
        <AccountContext.Provider value={{ balance, addMoney, spendMoney }}>
            {children}
        </AccountContext.Provider>
    );
};

AccountProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAccount = () => useContext(AccountContext);
