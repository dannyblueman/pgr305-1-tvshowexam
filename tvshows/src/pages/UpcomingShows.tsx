import { FC } from "react";
import UpcomingShowList from "../components/upcomingshow/UpcomingShowList";

const UpcomingShows : FC = () => {
    return (
        <section>
            <h2>Interesting Upcoming Shows:</h2>
            <UpcomingShowList/>
        </section>
    )
}

export default UpcomingShows;