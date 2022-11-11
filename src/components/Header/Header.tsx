import React, { useContext } from "react";
import { HeaderStyled } from "./style";
import { Link } from "react-router-dom";
import SearchContext from "../../contextAPI";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
    const { setSearch } = useContext(SearchContext);
    // document.body.classList.add("noscroll")
    // console.log(document.body.clientWidth);

    const test = () => {
        document.body.classList.contains("noscroll") ? document.body.classList.remove("noscroll") : document.body.classList.add("noscroll");
    };

    return (
        <HeaderStyled>
            <Link to="/">Tasty</Link>
            {/* <span className="user">User</span> */}
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
