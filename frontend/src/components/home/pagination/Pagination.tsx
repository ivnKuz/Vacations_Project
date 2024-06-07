import "./Pagination.css";

interface pagination_props {
    vocationPerPage:number;
    totalVocations:number;
    pageNumber: number;
    paginate(number:number):void;
}

function Pagination(props:pagination_props): JSX.Element {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(props.totalVocations / props.vocationPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav className="Pagination">
			{pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <button onClick={()=> props.paginate(number)} className={props.pageNumber === number ? "current_page" :"page-link"}>
                        {number}
                    </button>

                </li>
            ))}
        </nav>
       
    );
}

export default Pagination;
