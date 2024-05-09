import { Control, useForm, useWatch } from "react-hook-form";
import "./Edit.css";

import { useNavigate, useParams } from "react-router-dom";
import notify from "../../../services/Notify";
import vacationsService from "../../../services/Vacations";
import Vacation from "../../../models/Vacation";
import { useEffect, useState } from "react";

function Edit(): JSX.Element {
    const params = useParams();
    const vacationId = Number(params.id);
    const {register, handleSubmit, setValue, control} = useForm<Vacation>();
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


    useEffect(() => {
        vacationsService.getOne(vacationId)
            .then(vacationsFromServer => {
                setValue('destination', vacationsFromServer?.destination);
                setValue('description', vacationsFromServer?.description);
                setValue('startDate', vacationsFromServer?.startDate);
                setValue('endDate', vacationsFromServer?.endDate);
                setValue('price', vacationsFromServer?.price);
                setSrc(vacationsFromServer?.imageUrl || '')
            })
            .catch(err => notify.error(err))

    }, [])
    async function submitVacation(vacation: Vacation) {
        try {
            vacation.image = (vacation.image as unknown as FileList)[0];
            console.log(vacation.image)
            vacation.id = vacationId;
            const updatedVacation = await vacationsService.editVacation(vacation);
            // alert(`updated a product with id ${updatedProduct.id}`)
            notify.success(`updated Vacation: ${updatedVacation.destination}`)
            // navigate(`/products/details/${updatedProduct.id}`);
            navigate(`/home`);

        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="editVacation">
			<h2>Edit Vacation</h2>
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
                <button>Update</button>
            </form>
        </div>
    );
}


export default Edit;

