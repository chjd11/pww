import styles from "./ScreenContainer.module.css";

//container used for the main content
const ScreenContainer = props => {
    return (
        <div className={styles["screen-container"]}>
            {props.children}
        </div>
    );
};

export default ScreenContainer;