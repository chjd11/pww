import styles from "./InfoLabel.module.css";

//small label next to text. example uses are "updated", "new", "cancelled"
const InfoLabel = props => {
    const classes = [styles["info-label"]];
    classes.push(styles["bg-" + props.color]);
    if (props.horizontalMargin !== undefined) { classes.push(styles["h-margin"]); }

    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    );
};

export default InfoLabel;