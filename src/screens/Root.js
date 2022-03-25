import Header from "../components/Header/index";
import MainPageSearchArea from "../components/MainPageSearchArea";
import IconCardGroup from "../components/groups/IconCardGroup";
import ScreenContainer from "../components/containers/ScreenContainer";
import LinkGroup from "../components/groups/LinkGroup";
import TwoColumnContainer from "../components/containers/TwoColumnContainer";
import RecentGroup from "../components/groups/RecentGroup";
import EventGroup from "../components/groups/EventGroup";
import BackToTop from "../components/UI/BackToTop";
import Footer from "../components/Footer/index";
import "./Root.css";

//application root
const Root = () => {
    return (
        <>
            <Header />
            <MainPageSearchArea />
            <IconCardGroup />
            <ScreenContainer>
                <LinkGroup heading="Popular Services and Links" />
                <TwoColumnContainer>
                    <RecentGroup heading="Recent Updates" />
                    <EventGroup heading="Calendar of Events" />
                </TwoColumnContainer>
                <BackToTop />
            </ScreenContainer>
            <Footer />
        </>
    );
};

export default Root;