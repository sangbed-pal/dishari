import Banner from "../components/Banner.jsx";
import Quotes from "../components/Quotes.jsx";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.jsx";
import Feedback from "../components/Feedback.jsx";

const Home = () => {
    return (
        <div>
            <Banner />
            <Quotes />
            <FrequentlyAskedQuestions />
            <Feedback />
        </div>
    );
};

export default Home;