import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./BackToTop.module.css";

//"Back to Top" hyperlink with up arrow
const BackToTop = () => {
    return (
        <div className={styles.btt}>
            <Link href="#" style="2" noUnderline>Back to Top<span className={styles["btt-icon"]}><FontAwesomeIcon icon={faChevronUp} color="#0074c1" /></span></Link>
        </div>
    );
};

export default BackToTop;