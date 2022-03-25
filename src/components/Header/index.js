import { useState } from "react";
import LogoWithText from "./LogoWithText";
import Nav from "../UI/Nav";
import SearchPopup from "./SearchPopup";
import Menu from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css";

const links = [
    { text: "ABOUT US", href: "https://www.portlandwebworks.com/" },
    { text: "EVENTS", href: "https://www.portlandwebworks.com/" },
    { text: "BOARDS & COMMITTEES", href: "https://www.portlandwebworks.com/" }
];

//main header
const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const searchClickHandler = () => setShowSearch(!showSearch);//toggle search visibility
    const menuClickHandler = () => {//toggle menu visibility
        setShowSearch(false);
        setShowMenu(!showMenu);
    }

    return (
        <header id={styles["main-header"]}>
            <div>
                <button id={styles["menu-btn"]} onClick={menuClickHandler}>
                    <FontAwesomeIcon icon={showMenu ? faClose : faBars} size="2x" fixedWidth /><br />
                    {showMenu ? <span>CLOSE</span> : <span>MENU</span>}
                </button>
                <LogoWithText text={["SOUTH CAROLINA", "REVENUE AND FISCAL AFFAIRS OFFICE", "Transforming data into solutions for South Carolina"]} />
                <nav><Nav links={links} linkStyle={2} linkSize={0} linkNoUnderline inline /></nav>
                <div id={styles["search-btn-container"]}>
                    <button id={styles["search-btn"]} className={showSearch ? styles["show-search"] : ""} onClick={searchClickHandler}>
                        <FontAwesomeIcon icon="magnifying-glass" />
                    </button>
                    {
                        showSearch && <SearchPopup />
                    }
                </div>
            </div>
            {
                showMenu && <Menu />
            }
        </header>
    );
};

export default Header;