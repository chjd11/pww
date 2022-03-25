import IconCard from "./IconCard";
import ScreenContainer from "../containers/ScreenContainer";
import styles from "./IconCardGroup.module.css";
import dataIcon from "../../assets/Data-Research-Icon.svg";
import geoIcon from "../../assets/Geography-Icon.svg";
import programsIcon from "../../assets/Programs-Icon.svg";
import legIcon from "../../assets/Legislative-Icon.svg";

const cards = [
    { icon: dataIcon, text: "Data & Research" },
    { icon: geoIcon, text: "Geography & Mapping" },
    { icon: programsIcon, text: "Programs & Services" },
    { icon: legIcon, text: "LEGISLATIVE FISCAL IMPACTS" }
];

//4 column max group of icon cards
const IconCardGroup = () => {
    return (
        <div className={styles["icon-card-container"]}>
            <ScreenContainer>
                <div className={styles["icon-cards"]}>
                    {
                        cards.map((card, index) => (
                            <IconCard key={index} img={card.icon}>{card.text}</IconCard>
                        ))
                    }
                </div>
            </ScreenContainer>
        </div>
    );
};

export default IconCardGroup;