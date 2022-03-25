import styles from "./Section.module.css";

//footer section used for "main office", "geodetic survey section", etc.
const Section = props => {
    return (
        <div className={styles["section"]}>
            <div className={styles["section-head"]}>
                {props.heading}
            </div>
            <div>
                {props.children}
            </div>
        </div>    
    );
};

export default Section;