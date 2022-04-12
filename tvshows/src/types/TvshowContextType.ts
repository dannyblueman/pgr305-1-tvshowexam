import { ITvshow } from "../interfaces/ITvshow";

export type TvshowContextType = {
    tvshows: ITvshow[];
    getTvshowById: ( id: string ) => ITvshow;
}