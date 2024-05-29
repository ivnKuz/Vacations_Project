
class Vacation{
    public id?: number;
    public destination?:string;
    public description?:string;
    public startDate?:Date | string;
    public endDate?:Date | string;
    public price?:number;
    public image?:File;
    public imageUrl?:string;
    public totalVacationsCount?: number;
}

export default Vacation;
