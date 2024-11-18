export const ShowonLogin = ({ children }) => {
    if (sessionStorage.getItem('myproject') != null)
        return children;
    else return null
}

export const ShowonLogout = ({ children }) => {
    if (sessionStorage.getItem('myproject') == null)
        return children;
    else return null
}