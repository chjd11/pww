import styles from "./Heading.module.css";

//customizable heading
const Heading = props => {
    const classes = [styles["style" + props.style]];
    if (props.small) { classes.push(styles.small); }
    if (props.bottomMargin) { classes.push(styles["bottom-margin"]); }

    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    );
}

export default Heading;