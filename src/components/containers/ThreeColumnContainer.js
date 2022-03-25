import styles from "./ThreeColumnContainer.module.css";

//responsive three column container
const ThreeColumnContainer = props => {
    return (
        <div className={styles["three-column-container"]}>
            {props.children}
        </div>
    );
};

export default ThreeColumnContainer;