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
                setValue('startDate', formatDate(vacationsFromServer?.startDate) || '');
                setValue('endDate', formatDate(vacationsFromServer?.endDate) || '');
                setValue('price', vacationsFromServer?.price);
                setSrc(vacationsFromServer?.imageUrl || '')
            })
            .catch(err => notify.error(err))

    }, []);

    //format date because format that is coming from the server is not assignable to yyyy-MM-dd input date format
    function formatDate(dateStr: string | Date | undefined): string | undefined {
        if (!dateStr) return undefined;
        if (typeof dateStr === 'string') {
            // Parse the ISO 8601 formatted string as UTC to avoid time zone conversion
            const date = new Date(dateStr);
            // setting + 1 day to date because when it formats it to UTC time zone it gets the date of one day earlier
            date.setDate(date.getDate() + 1);
            return date.toISOString().split('T')[0];
        } else {
            // Convert Date object to string in yyyy-MM-dd format
            return dateStr.toISOString().split('T')[0];
        }
    }
    
 
    async function submitVacation(vacation: Vacation) {
        try {
            vacation.image = (vacation.image as unknown as FileList)[0];
            vacation.id = vacationId;
            const updatedVacation = await vacationsService.editVacation(vacation);
            notify.success(`updated Vacation: ${updatedVacation.destination}`)
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
                <input className="editVacation__input" type="text" {...register('destination')} />
                <label className="editVacation__label">Description:</label>
                <textarea className="editVacation__input" rows={5} {...register('description')} />
                <label className="editVacation__label">Begining Date:</label>
                <input className="editVacation__input" type="date" {...register('startDate')} />
                <label className="editVacation__label">End Date:</label>
                <input className="editVacation__input" type="date" {...register('endDate')} />
                <label className="editVacation__label">Price:</label>
                <input className="editVacation__input" type="number" step="0.01" {...register('price')}/>
                <label className="editVacation__label">Image:</label>
                <input className="editVacation__input" type="file" accept="image/*" {...register("image")}/>
                <ImageWatched control={control} />
                <button id="btn-submit">Update</button>
            </form>
        </div>
    );
}


export default Edit;

