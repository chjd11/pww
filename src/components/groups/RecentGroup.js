import Button from "../UI/Button";
import Heading from "../UI/Heading";
import styles from "./RecentGroup.module.css";
import RecentItem from "./RecentItem";

const items = [
    { linkText: "Local Government Finance", linkUrl: "https://www.portlandwebworks.com/", text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales", dateText: "Published:", date: "Jan 2, 2020", label: "Updated" },
    { linkText: "Transportation Network Carrier Maps", linkUrl: "https://www.portlandwebworks.com/", dateText: "Published:", date: "Jan 2, 2020", label: "New" },
    { linkText: "BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23", linkUrl: "https://www.portlandwebworks.com/", text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales", dateText: "Published:", date: "Dec 16, 2019", label: "Updated" },
    { linkText: "Budget Development", linkUrl: "https://www.portlandwebworks.com/", dateText: "Published:", date: "Dec 16, 2019", label: "New" },
    { linkText: "November 2019 General Fund Revenue Digest", linkUrl: "https://www.portlandwebworks.com/", dateText: "Published:", date: "Dec 13, 2019", label: "New" }
];

//container for a group of recent items
const RecentGroup = props => {
    return (
        <div>
            <Heading style="2">{props.heading}</Heading>
            <div className={styles["recent-items-container"]}>
                {items.map((item, index) => (
                    <RecentItem key={index} recentItem={item}></RecentItem>
                ))}
            </div>
            <Button type="button">VIEW MORE</Button>
        </div>
    );
};

export default RecentGroup;