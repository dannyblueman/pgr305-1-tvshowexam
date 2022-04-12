import axios from "axios";
import { ITvshow } from "../interfaces/ITvshow";

export const TvshowService = ( function(){

    const tvshowController = "https://localhost:5001/tvshow";

    const getAll = async () => {
        const result = await axios.get(tvshowController);
        return result.data as ITvshow[];
    }

    return {
        getAll
    }
    
}())