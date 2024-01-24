import React from "react"
import  { Admin, Resource, useAuthenticated  } from "react-admin"   

const DashBoard = () => {
    useAuthenticated();

    return(
        <h3>In dev.</h3>
    )
    
}

export default DashBoard