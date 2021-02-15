import React, { useState, useContext } from 'react'
import navLinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links:[]})

    const openSubmenu = (text, coordinates) => {
        const page = navLinks.find((link) => link.page === text)
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }



    return (
        <AppContext.Provider
    value={{isSubmenuOpen,  
    openSubmenu, 
    closeSubmenu,  location, page}}>{children}
    </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};