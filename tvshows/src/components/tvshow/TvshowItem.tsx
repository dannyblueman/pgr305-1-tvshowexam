import { FC } from "react";
import { ITvshow } from "../../interfaces/ITvshow";
import { Link } from "react-router-dom";

const TvshowItem: FC<ITvshow> = ({id, show}) => {
    return (
        <article>
            <h3>{show}</h3>
            <Link to={`/tvshow-details/${id}`}>Info about {show}</Link>
        </article>
    )
}

export default TvshowItem;