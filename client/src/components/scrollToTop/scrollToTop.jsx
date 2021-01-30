import React, { useEffect } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const ScrollToTop = ({ children, location:{ pathname } }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('pathname:', pathname);
    }, [pathname]);

    return <></>;
}

export default withRouter(ScrollToTop);