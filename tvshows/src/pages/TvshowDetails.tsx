import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TvshowContext } from "../contexts/TvshowContext";
import { IStar } from "../interfaces/IStar";
import { ITvshow } from "../interfaces/ITvshow";
import { TvshowContextType } from "../types/TvshowContextType";

const TvshowDetails: FC = () => {
    
    const {id} = useParams();

    const {getTvshowById} = useContext( TvshowContext ) as TvshowContextType;
    const [tvshow, setTvshow] = useState<ITvshow>();

    useEffect( () => {
        if(id){
            const _tvshow = getTvshowById( id );
            setTvshow( _tvshow );
        }
    }, [])

    const createStarList = () => {
        return tvshow?.stars?.map( ( star: IStar, key: number ) => {
            return(
                <li key={key}>{star.name}</li>
            )
        } );
    }

    return (
        <section>
            <article>
                <h3>{tvshow?.show}</h3>
                <h4>These are the stars of the show:</h4>
                <ul>{createStarList()}</ul>
            </article>
        </section>
    )
}

export default TvshowDetails;