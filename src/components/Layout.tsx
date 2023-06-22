import React from "react";

import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <main>
            text
            <Outlet />
        </main>
    );
}

export default Layout;
