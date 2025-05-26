import { replace } from "lodash";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePrivateRoutes = (isAuthenticated) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login", { replace: true })
        }
    }, [isAuthenticated,navigate])

}

export default usePrivateRoutes

