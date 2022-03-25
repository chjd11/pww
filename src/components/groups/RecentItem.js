import InfoLabel from "../UI/InfoLabel";
import Link from "../UI/Link";
import styles from "./RecentItem.module.css";

//recent item includes a heading hyperlink, optional body text and a footnote which contains a date
const RecentItem = props => {
    return (
        <div className={styles["recent-item"]}>
            <Link href={props.recentItem.linkUrl} size="2">{props.recentItem.linkText}</Link>
            <div className={styles["recent-item-text"]}>{props.recentItem.text}</div>
            <div className={styles.footnote}><span>{props.recentItem.dateText}</span> {props.recentItem.date}<InfoLabel bg-color="gray" horizontalMargin>{props.recentItem.label}</InfoLabel></div>
        </div>
    );
};

export default RecentItem;