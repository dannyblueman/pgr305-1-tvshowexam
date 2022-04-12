import { FC } from "react";
import { IUpcomingShow } from "../../interfaces/IUpcomingShow";
import { UpcomingShowService } from "../../services/UpcomingShowService";

const UpcomingShowItem : FC<IUpcomingShow> = ({id, name, image}) => {
    return (
        <article>
            <h3>{name}</h3>
            <img src={`https://localhost:5001/images/${image}`} alt={name}/>
            <input onClick={() => deleteNewUpcomingShow(id as string)} type="button" value="Remove show"/>
        </article>
    )
}

const deleteNewUpcomingShow = (id: string) => {
    UpcomingShowService.deleteUpcomingShow(id);
}

export default UpcomingShowItem;