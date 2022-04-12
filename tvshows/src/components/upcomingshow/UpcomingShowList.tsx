import { FC, useEffect, useState } from "react";
import { IUpcomingShow } from "../../interfaces/IUpcomingShow";
import { UpcomingShowService } from "../../services/UpcomingShowService";
import UpcomingShowItem from "./UpcomingShowItem";

const UpcomingShowList : FC = () => {
    
    const [ upcomingShows, setUpcomingShows ] = useState<IUpcomingShow[]>();

    useEffect( () => {
        getAllUpcomingShows();
    }, [upcomingShows] );

    const getAllUpcomingShows = async () => {
        const result = await UpcomingShowService.getAllUpcomingShows();
        setUpcomingShows( result );
    }

    const createUpcomingShowList = () => {
        return upcomingShows?.map( ( upcomingShow: IUpcomingShow, key: number ) => {
            return (
                <UpcomingShowItem
                    key={key}
                    id={upcomingShow.id}
                    name={upcomingShow.name}
                    image={upcomingShow.image}
                />
            )
        } )
    }

    return (
        <section>
            { createUpcomingShowList() }
        </section>
    )
}

export default UpcomingShowList;