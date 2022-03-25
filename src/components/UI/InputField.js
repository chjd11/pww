import styles from "./InputField.module.css";

//text input for forms. includes label for screen readers
const InputField = props => {
    return (
        <>
            <label className="visually-hidden" htmlFor={props.name}>{props.labelText}</label>
            <input id={props.name} type="text" name={props.name} className={styles["form-text"]} placeholder={props.placeholder} />
        </>
    );
};

export default InputField;