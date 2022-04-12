import axios from "axios";
import { IUpcomingShow } from "../interfaces/IUpcomingShow";

export const UpcomingShowService = (function(){

    const urlToUpcomingShowController = "https://localhost:5001/UpcomingShow";
    const urlToImageUploadController = "https://localhost:5001/ImageUpload/SaveImage";

    const getAllUpcomingShows = async () => {
        const result = await axios.get( urlToUpcomingShowController );
        return result.data as IUpcomingShow[];
    }

    const postUpcomingShow = ( newUpcomingShow: IUpcomingShow, image: File ) => {

        let formData = new FormData();
        formData.append( "file", image );

        axios.post( urlToUpcomingShowController, newUpcomingShow );
        axios({
            url: urlToImageUploadController,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
    }

    const deleteUpcomingShow = (id: string) => {
        return axios.delete(`https://localhost:5001/UpcomingShow/${id}`);
    }

    return {
        getAllUpcomingShows,
        postUpcomingShow,
        deleteUpcomingShow
    }

}())