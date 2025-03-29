import React from "react";

function Logo({ width = "100px" }) {
    return (
        <div>
            <img src="/SignUp.jpg"
                alt="Logo"
                width={width}
                className="object-contain" />
        </div>
    );
}

export default Logo;
