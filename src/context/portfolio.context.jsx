import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../services/authService";

const PortfolioContext = createContext() 

const PortfolioProvider = ({ children }) => {

    const [portfolios, setPortfolios] = useState([])

    const getPortfolios = () => {

        get('/portfolios')
        .then((response) => {
            console.log("Portfolio", response.data)
            setPortfolios(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPortfolios()
    }, [])

    return (
        <PortfolioContext.Provider value={{portfolios, getPortfolios, setPortfolios}}>
            {children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioProvider}