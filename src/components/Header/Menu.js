import Nav from "../UI/Nav";
import FourColumnContainer from "../containers/FourColumnContainer";
import Heading from "../UI/Heading";
import InputField from "../UI/InputField";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.css";

const links = [
    [
        { text: "Home" }, { text: "News & Events" }, { text: "About Us" }, { text: "Contact Us" }, { text: "Boards & Committees" },
    ],
    [
        { text: "Economy" }, { text: "State Finances" }, { text: "Education" }, { text: "Healthcare" }, { text: "Local Government" }, { text: "Population and Demographics" }, { text: "State Register Calculations" }, { text: "Presentations" }
    ],
    [
        { text: "Transportation Carrier Network (Uber)" }, { text: "SC Real Time Network" }, { text: "SC State GIS" }, { text: "Maps" }, { text: "Interactive Mapping" }, { text: "Statewide Aerial Imagery" }
    ],
    [
        { text: "Precinct Demographics and Redistricting" }, { text: "State 911 Program" }, { text: "Data Services and Online Solutions" }, { text: "Geodetic Survey" }, { text: "Fiscal Analysis" }, { text: "2020 Census" }
    ],
    [
        { text: "Current General Assembly Session" }, { text: "Previous General Assembly Session" }, { text: "Forms" }
    ]
];

for (const ar of links) {
    ar.map(link => link.href = "https://www.portlandwebworks.com/");
}

const headings = ["Data & Research", "Geography & Mapping", "Programs & Services", "Legislative Fiscal Impacts"];

//header menu shown when "menu" button is clicked
const Menu = () => {
    return (
        <div id={styles["menu-container"]}>
            <form id={styles["search-frm"]}>
                <InputField placeholder="Search rfa.sc.gov" name="search-site2" labelText="Search rfa.sc.gov" />
                <Button type="submit" noText><FontAwesomeIcon icon="magnifying-glass" /></Button>
            </form>
            <nav id={styles.nav}>
                <Nav links={links[0]} linkStyle="4" linkBold linkNoUnderline center border extraPadding />
            </nav>
            <FourColumnContainer>
                {
                    headings.map((heading, index) => (
                        <nav key={index}>
                            <Heading style="2" small bottomMargin>{heading}</Heading>
                            <Nav links={links[index + 1]} linkStyle="4" linkNoUnderline lessPadding />
                        </nav>
                    ))
                }
            </FourColumnContainer>
        </div>
    );
};

export default Menu;