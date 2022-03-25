import InputField from "../UI/InputField";
import Button from "../UI/Button";
import styles from "./SearchPopup.module.css";

//search popup shown when "search" icon in header is clicked
const SearchPopup = () => {
    return (
        <div id={styles["search-popup"]}>
            <form id={styles["search-frm"]}>
                <InputField placeholder="Enter search term" name="search-site1" labelText="Search rfa.sc.gov"></InputField>
                <Button whiteBorder>SEARCH</Button>
            </form>
        </div>
    );
};

export default SearchPopup;