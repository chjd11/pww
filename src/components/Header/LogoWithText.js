import styles from "./LogoWithText.module.css";

//logo hyperlink followed by 3 lines of text (last line is subheading)
const LogoWithText = props => {
    return (
        <>
            <a id={styles["logo-link"]} href="#"><img id={styles.logo} src={require("../../assets/RFA Logo Final.png")} alt="Go to homepage." /></a>
            <div id={styles["logo-text"]}>
                <div>{props.text[0]}</div>
                <div>{props.text[1]}</div>
                <div id={styles.subhead}>{props.text[2]}</div>
            </div>
        </>
    );
}

export default LogoWithText;