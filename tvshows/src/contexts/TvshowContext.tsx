import { createContext, FC, useEffect, useState } from "react";
import { ITvshow } from "../interfaces/ITvshow";
import { TvshowService } from "../services/TvshowService";
import { TvshowContextType } from "../types/TvshowContextType";

export const TvshowContext = createContext<TvshowContextType | null>( null );

export const TvshowProvider:FC = ({children}) => {

    const [tvshows, setTvshows] = useState<ITvshow[]>([]);

    useEffect( () => {
        getTvshowsFromService();
    }, [tvshows])

    const getTvshowsFromService = async () => {
        const result = await TvshowService.getAll();
        setTvshows(result);
    }

    const getTvshowById = (id: string) => {
        return tvshows.find( tvshow => tvshow.id === id ) as ITvshow;
    }

    return (
        <TvshowContext.Provider value={{tvshows, getTvshowById}}>
            {children}
        </TvshowContext.Provider>
    )

} 