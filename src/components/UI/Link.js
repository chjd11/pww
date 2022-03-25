import styles from "./Link.module.css";

//customizable link
const Link = props => {
    const classes = [styles.link, styles["link" + (props.style !== undefined ? props.style : "1")]];
    if (props.size !== undefined) { classes.push(styles["size" + props.size]); }
    if (props.noUnderline) { classes.push(styles["no-underline"]); }
    if (props.bold) { classes.push(styles.bold); }

    return (
        <a className={classes.join(' ')} href={props.href}>{props.children}</a>
    );
};

export default Link;