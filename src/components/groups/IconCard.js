import styles from "./IconCard.module.css";

//card hyperlink that contains an icon followed by a heading.
const IconCard = props => {
    return (
        <a className={styles["icon-card"]} href="https://www.portlandwebworks.com/">
            <img src={props.img} alt="" />
            <div>{props.children}</div>
        </a>
    );
};

export default IconCard;