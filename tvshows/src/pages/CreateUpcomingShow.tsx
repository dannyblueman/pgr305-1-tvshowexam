import { FC } from "react";
import UpcomingShowForm from "../components/upcomingshow/UpcomingShowForm";

const CreateUpcomingShow : FC = () => {
    return (
        <section>
            <h3>Save new upcoming show</h3>
            <UpcomingShowForm/>
        </section>
    )
}

export default CreateUpcomingShow;