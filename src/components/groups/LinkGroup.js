import Heading from "../UI/Heading";
import Link from "../UI/Link";
import styles from "./LinkGroup.module.css";

const links = [
    { text: "Overview and History of the South Carolina State Budget", url: "https://www.portlandwebworks.com/" },
    { text: "Overview and History of the South Carolina State Budget", url: "https://www.portlandwebworks.com/" },
    { text: "Overview and History of the South Carolina State Budget", url: "https://www.portlandwebworks.com/" },
    { text: "Employer Contribution Trends", url: "https://www.portlandwebworks.com/" },
    { text: "Employer Contribution Trends - June 4, 2019", url: "https://www.portlandwebworks.com/" },
    { text: "Employer Contribution Trends - June 4, 2019", url: "https://www.portlandwebworks.com/" },
    { text: "Approriation Bills Acts", url: "https://www.portlandwebworks.com/" },
    { text: "Executive Budget Office State Agency Budget Plans(Requests)", url: "https://www.portlandwebworks.com/" },
    { text: "Executive Budget Office State Agency Budget Plans(Requests)", url: "https://www.portlandwebworks.com/" }
];

//3 column max group of links
const LinkGroup = props => {
    return (
        <div className={styles["link-group"]}>
            <Heading style="3">{props.heading}</Heading>
            <div className={styles["link-grid"]}>
                {
                    links.map((link, index) => (
                        <div key={index}><Link href={link.url} size="2">{link.text}</Link></div>
                    ))
                }
            </div>
        </div>
    );
};

export default LinkGroup;