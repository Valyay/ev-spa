import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute: React.ComponentType<any> = ({
    component: Component,
    ...rest
}: {
    component: any;
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('auth') ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};
