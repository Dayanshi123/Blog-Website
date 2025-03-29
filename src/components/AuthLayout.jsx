import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
            return; // Prevents setLoader from running
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
            return; //  Prevents setLoader from running
        }

        setLoader(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <h1 className="text-[#8B4513]">Loading...</h1> : <>{children}</>;
}
