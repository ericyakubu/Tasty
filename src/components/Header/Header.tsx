import React, { useContext } from "react";
import { HeaderStyled } from "./style";
import { Link } from "react-router-dom";
import SearchContext from "../../contextAPI";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
    const { setSearch } = useContext(SearchContext);

    const test = () => {
        document.body.classList.contains("noscroll") ? document.body.classList.remove("noscroll") : document.body.classList.add("noscroll");
    };

    return (
        <HeaderStyled>
            <Link to="/">Tasty</Link>
            <button
                onClick={() => {
                    setSearch((prev: boolean) => !prev);
                    test();
                }}
            >
                <RiMenuFill />
            </button>
        </HeaderStyled>
    );
};

export default Header;
