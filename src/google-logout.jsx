import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "895055691815-aojd165i73d4rhkffalldgs70immehve.apps.googleusercontent.com";

const Logout = () => {
    const onSuccess = () => {
        alert("Logout made successfully")
    };

    return (
        <div>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
        </div>
    );
}

export default Logout;