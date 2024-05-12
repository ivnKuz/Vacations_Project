import { Control, useForm, useWatch } from "react-hook-form";
import "./Add.css";

import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";
import vacationsService from "../../../services/Vacations";
import Vacation from "../../../models/Vacation";

function Add(): JSX.Element {
    const {register, handleSubmit, control} = useForm<Vacation>();
    const navigate = useNavigate();
    
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
        return <img src='' />
    }

    async function submitVacation(vacation: Vacation){
        console.log(vacation);
        try{
            //to turn File to FileList we gotta first make it unknown then FileList
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
                <label className="addVacation__label">Destination:</label>
                <input className="addVacation__input" type="text" {...register('destination')} />

                <label className="addVacation__label">Description:</label>
                <textarea className="addVacation__input" rows={5} {...register('description')} />

                <label className="addVacation__label">Begining Date:</label>
                <input className="addVacation__input" type="date" {...register('startDate')} />

                <label className="addVacation__label">End Date:</label>
                <input className="addVacation__input" type="date" {...register('endDate')} />

                <label className="addVacation__label">Price:</label>
                <input className="addVacation__input" type="number" step="0.01" {...register('price')}/>

                <label className="addVacation__label">Image:</label>
                <input className="addVacation__input" type="file" accept="image/*" {...register("image")}/>

                <ImageWatched control={control} />
                <button id="btn-submit">add</button>
            </form>
        </div>
    );
}


export default Add;
