import React, { Component, component } from "react";
import { Route} from "react-router";

//layout
import HomeLayout from "../Layout/Home.layout";

const HomeLayoutHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Route
            {...rest}
            component={(props) => (
                <HomeLayout>
                    <Component {...rest} />
                </HomeLayout>
            )}
            />
        </>
    );
};

export default HomeLayoutHOC;