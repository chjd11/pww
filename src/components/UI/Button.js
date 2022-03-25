import styles from "./Button.module.css";

//customizable button
const Button = props => {
    const classes = [styles.button];
    if (props.whiteBorder !== undefined) {
        classes.push(styles["white-border"]);
    }
    if (props.noText === undefined) { classes.push(styles["has-text"]); }
    return (
        <button className={classes.join(' ')} type={props.type}>{props.children}</button>
    );
};

export default Button;