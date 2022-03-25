import ScreenContainer from "./containers/ScreenContainer";
import InputField from "./UI/InputField";
import Button from "./UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainPageSearchArea.module.css";

//main page search area. includes heading and search. uses a background image.
const MainPageSearchArea = () => {
    return (
        <div id={styles["main-page-search-area"]}>
            <ScreenContainer>
                <div id={styles.container}>
                    <h1 id={styles["main-heading"]}>
                        Providing insightful research, analysis, and resources to facilitate informed policy decisions and administration of services
                    </h1>
                    <form id={styles["search-frm"]} action="#">
                        <InputField placeholder="Search rfa.sc.gov" name="search-site3" labelText="Search rfa.sc.gov" />
                        <Button type="submit">SEARCH<FontAwesomeIcon icon="magnifying-glass" /></Button>
                    </form>
                </div>
            </ScreenContainer>
        </div>
    );
};

export default MainPageSearchArea;