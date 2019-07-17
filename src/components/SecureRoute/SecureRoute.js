import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

function SecureRoute({ component: Component, ...rest }) {
    const isAuthenticated = !!sessionStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ?
                    (<Component {...props} />) :
                    (<Redirect
                        to={{
                            pathname: "/home",
                            state: { from: props.location }
                        }}
                    />)
            }
        />
    );
}

export default SecureRoute;