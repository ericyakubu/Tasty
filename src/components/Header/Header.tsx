import React from "react";
import { HeaderStyled } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderStyled>
            <Link to="/">Tasty</Link>
            {/* <span className="user">User</span> */}
        </HeaderStyled>
    );
};

export default Header;
