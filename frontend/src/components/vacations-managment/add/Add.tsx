import { Control, useForm, useWatch } from "react-hook-form";
import "./Add.css";

import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";
import vacationsService from "../../../services/Vacations";
import Vacation from "../../../models/Vacation";
import { useState } from "react";

function Add(): JSX.Element {
    const {register, handleSubmit, control} = useForm<Vacation>();
    const navigate = useNavigate();

    const [src, setSrc] = useState<string>('');
    
    function ImageWatched({ control }: { control: Control<Vacation> }) {
        const imageSrc = useWatch({
            control,
            name: 'image',
        })
        if (imageSrc) {
            const file = ((imageSrc as unknown as FileList)[0])
            if (file) {
                const newSrc = window.URL.createObjectURL(file)
                return <img src={newSrc} />
            }
        }
        return <img src={src} />
    }

    async function submitVacation(vacation: Vacation){
        console.log(vacation);
        try{
            //to turn File to FileList we gotta first make it unknown then FileList. lmao typescript am I right
            vacation.image = (vacation.image as unknown as FileList)[0];
            const newVacation = await vacationsService.addVacation(vacation);
            notify.success(`Vacation: ${newVacation.destination} was successfuly added.`);
            navigate('/home')
            
        }catch(err){
            notify.error(err)
        }
    }
    return (
        <div className="addVacation">
			<h2>Add new vacation</h2>
            <form onSubmit={handleSubmit(submitVacation)}>
                <label>Destination:</label>
                <input type="text" {...register('destination')} />
                <label>Description:</label>
                <input type="text" {...register('description')} />
                <label>Begining Date:</label>
                <input type="date" {...register('startDate')} />
                <label>End Date:</label>
                <input type="date" {...register('endDate')} />
                <label>Price:</label>
                <input type="number" step="0.01" {...register('price')}/>
                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image")}/>
                <ImageWatched control={control} />
                <button>add</button>
            </form>
        </div>
    );
}


export default Add;
