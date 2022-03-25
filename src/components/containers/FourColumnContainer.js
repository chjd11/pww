import styles from "./FourColumnContainer.module.css";

//responsive four column container
const FourColumnContainer = props => {
    return (
        <div className={styles["four-column-container"]}>
            {props.children}
        </div>
    );
};

export default FourColumnContainer;