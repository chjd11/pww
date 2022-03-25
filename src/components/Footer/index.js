import ScreenContainer from "../containers/ScreenContainer";
import ThreeColumnContainer from "../containers/ThreeColumnContainer";
import Nav from "../UI/Nav";
import Section from "./Section";
import styles from "./index.module.css";

const links = [
    { text: "Privacy Statement", href: "https://www.portlandwebworks.com/" },
    { text: "FOIA", href: "https://www.portlandwebworks.com/" },
    { text: "Disclosures and Reporting", href: "https://www.portlandwebworks.com/" },
    { text: "Report Fraud", href: "https://www.portlandwebworks.com/" },
    { text: "Accessibility", href: "https://www.portlandwebworks.com/" },
    { text: "Contact Us", href: "https://www.portlandwebworks.com/" }
];
const sections = [
    { heading: "Main Office", body: <>1000 Assembly St, Rembert Dennis Building, Suite 421<br />Columbia, SC 29201</> },
    { heading: "Geodetic Survey Section", body: <>5 Geology Rd<br />Columbia, SC 29212</> },
    { heading: "Health and Demographics Division", body: <>1000 Assembly St, Rembert Dennis Building, Suite 420<br />Columbia, SC 29201</> }
];

//page footer
const Footer = props => {
    return (
        <footer id={styles["main-footer"]}>
            <ScreenContainer>
                <ThreeColumnContainer>
                    <div id={styles["footer-logo-with-text"]}>
                        <div>South Carolina<br />Revenue and Fiscal Affairs Office</div>
                        <a href="#"><img src={require("../../assets/Group 262.png")} alt="Go to homepage." /></a>
                    </div>
                    <nav>
                        <Nav links={links} linkStyle={3} linkNoUnderline />
                    </nav>
                    <div>
                        {
                            sections.map((section, index) => (
                                <Section key={index} heading={section.heading}>
                                    {section.body}
                                </Section>
                            ))
                        }
                    </div>
                </ThreeColumnContainer>
            </ScreenContainer>
        </footer>
    );
};

export default Footer;