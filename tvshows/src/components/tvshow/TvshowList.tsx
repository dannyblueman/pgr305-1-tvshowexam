import { useContext, FC } from "react"
import { TvshowContext } from "../../contexts/TvshowContext"
import { ITvshow } from "../../interfaces/ITvshow";
import { TvshowContextType } from "../../types/TvshowContextType"
import TvshowItem from "./TvshowItem";

const TvshowList: FC = () => {

    const {tvshows} = useContext(TvshowContext) as TvshowContextType;

    const createTvshowList = () => {
        return tvshows.map( ( tvshow: ITvshow, key: number ) => {
            return (
                <TvshowItem
                    key = {key}
                    id = {tvshow.id}
                    show = {tvshow.show}
                />
            )
        } )
    }

    return (
        <section>
            { createTvshowList() }
        </section>
    )
}

export default TvshowList;