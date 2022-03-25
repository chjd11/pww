import styles from "./TwoColumnContainer.module.css";

//responsive two column container
const TwoColumnContainer = props => {
    return (
        <div className={styles["two-col-container"]}>
            {props.children}
        </div>
    );
};

export default TwoColumnContainer;