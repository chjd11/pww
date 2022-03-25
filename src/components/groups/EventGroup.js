import Heading from "../UI/Heading";
import EventItem from "./EventItem";
import Button from "../UI/Button";
import { faLocationDot, faClock, faMobileRetro } from '@fortawesome/free-solid-svg-icons'
import styles from "./EventGroup.module.css";

const eventItems = [
    { date: { month: "NOV", day: 22 }, title: "Board of Economic Advisors Meeting", label: { text: "Updated", color: "gold" }, labels: [{ icon: faLocationDot, text: "Room 417, Bowers Conference Room, Rembert Building" }, { icon: faClock, text: "1:30 pm" }, { icon: faMobileRetro, text: "(803) 734-2265" }] },
    { date: { month: "NOV", day: 23 }, title: "Board of Economic Advisors Meeting", label: { text: "Cancelled", color: "red" }, labels: [{ icon: faLocationDot, text: "Room 417, Bowers Conference Room, Rembert Building" }, { icon: faClock, text: "1:30 pm" }, { icon: faMobileRetro, text: "(803) 734-2265" }] },
    { date: { month: "NOV", day: 25 }, title: "Board of Economic Advisors Meeting", labels: [{ icon: faLocationDot, text: "Room 417, Bowers Conference Room, Rembert Building" }, { icon: faClock, text: "1:30 pm" }, { icon: faMobileRetro, text: "(803) 734-2265" }] },
    { date: { month: "NOV", day: 28 }, title: "Board of Economic Advisors Meeting", labels: [{ icon: faLocationDot, text: "Room 417, Bowers Conference Room, Rembert Building" }, { icon: faClock, text: "1:30 pm" }, { icon: faMobileRetro, text: "(803) 734-2265" }] }
];

//container for a group of event items
const EventGroup = props => {
    return (
        <div>
            <Heading style="2">{props.heading}</Heading>
            <div className={styles["event-items-container"]}>
                {
                    eventItems.map((item, index) => (
                        <EventItem key={index} eventItem={item} />
                    ))
                }
            </div>
            <Button type="button">VIEW ALL EVENTS</Button>
        </div>
    );
};

export default EventGroup;