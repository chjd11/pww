import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./EventItemLabel.module.css";

//label for an event item. an icon followed by text. example: a phone icon followed by phone number
const EventItemLabel = props => {
    return (
        <div className={styles["event-label"]}>
            <FontAwesomeIcon icon={props.icon} color={props.color} fixedWidth />
            <div>{props.children}</div>
        </div>
    );
};

export default EventItemLabel;