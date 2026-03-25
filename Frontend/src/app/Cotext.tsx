import { FC, useEffect, useState, createContext } from "react";

// Создаем контекст для передачи данных в дочерние компоненты
export const ThemeContext = createContext<any>(null);

type AdministratorType ={
    children: React.ReactNode
}

// Компонент-обертка, который предоставляет контекст всем дочерним компонентам
const Administrator: FC<AdministratorType> = ({children}) => {
    
    //хранит данные пользователей (роли и разрешения) в UserData
    const [userData, setUserData] = useState({    
        roles: ["ADMIN","USER"],
        permission: ["EDIT","CREATE","ADMIN_PANEL"]
    })
    // при первой отрисовке хук запрашивает всех пользоватетелей с сервера
    useEffect(()=> {
        fetch('http://localhost:3001/api/users')
        .then(res => res.json())
        .then(setUserData)
    },[])
    // проеверяет на наличие определенныой роли
   const checkRole = (role: string) => {
        return userData.roles.includes(role)
    };
    // проверяет наличие разрешений
   const checkPermission = (permission: string) => {
        return userData.permission.includes(permission)
    };
    //Формируем объект с функциями, которые будут доступны в дочерних компонентах
    const value ={
        checkPermission: checkPermission,
        checkRole: checkRole,
        
    };
    // Оборачиваем дочерние компоненты в Provider, чтобы они имели доступ к value
    // {children} - это все компоненты, которые будут вложены в Administrator
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )      
}
export {Administrator}
