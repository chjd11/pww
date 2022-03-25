import InfoLabel from "../UI/InfoLabel";
import EventItemLabel from "./EventItemLabel";
import styles from "./EventItem.module.css";

//event item. include event date, heading and additional info
const EventItem = props => {
    return (
        <div className={styles["event-container"]}>
            <div className={styles["event-date"]}>
                <span>{props.eventItem.date.month}</span><br />
                {props.eventItem.date.day}
            </div>
            <div className={styles["event-content"]}>
                {props.eventItem.label !== undefined && <InfoLabel color={props.eventItem.label.color}>{props.eventItem.label.text}</InfoLabel>}
                <div className={styles["event-title"]}>{props.eventItem.title}</div>
                {
                    props.eventItem.labels.map((label, index) => (
                        <EventItemLabel key={index} icon={label.icon} color="#8C6910">{label.text}</EventItemLabel>
                    ))
                }
            </div>
        </div>
    );
};

export default EventItem;