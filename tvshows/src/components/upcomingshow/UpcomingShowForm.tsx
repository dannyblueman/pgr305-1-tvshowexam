import { ChangeEvent, FC, useState } from "react";
import { IUpcomingShow } from "../../interfaces/IUpcomingShow";
import { UpcomingShowService } from "../../services/UpcomingShowService";

const CreateUpcomingShowForm : FC = () => {

    const [ newUpcomingShow, setNewUpcomingShow ] = useState<IUpcomingShow>({name: "", image: ""});
    const [ newImage, setNewImage ] = useState<File>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;

        switch( name ){
            case "name":
                let { value } = event.target;
                setNewUpcomingShow( { ...newUpcomingShow, name: value } );
            break;
            case "image":
                let { files } = event.target;
                if( files ){
                    console.log( files[0] );
                    setNewUpcomingShow( {...newUpcomingShow, image: files[0].name} );
                    setNewImage( files[0] );
                }
            break;
        }
    }

    const postNewUpcomingShow = () => {
        console.log( newUpcomingShow );
        console.log( newImage );
        UpcomingShowService.postUpcomingShow(newUpcomingShow, newImage as File);
    }

    return (
        <section>
            <div>
                <label>Show</label>
                <input onChange={handleChange} name="name" type="text"/>
            </div>
            <div>
                <label>Choose image</label>
                <input onChange={handleChange} name="image" type="file"/>
            </div>
            <input onClick={postNewUpcomingShow} type="button" value="Save Upcoming Show"/>
        </section>
    )
}

export default CreateUpcomingShowForm;