import React, { useState, useContext } from "react";
import{Redirect} from "react-router-dom";
import{HOME_PATH} from "../../constants/routs";
import{AUTH_TOKEN} from "../../constants/Constants";
import{itemExists} from "../../helper/LocalStorage";
import{AuthContext} from "../../Providers/AuthProvider";


export const PrivateComponent= ({ Component, ...props }) => {
    const { loggedIn } = useContext(AuthContext);
  
    return loggedIn ? <Component {...props} /> : <Redirect to={HOME_PATH} />;
  };

