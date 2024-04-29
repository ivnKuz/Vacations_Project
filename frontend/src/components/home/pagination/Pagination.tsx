import "./Pagination.css";

interface pagination_props {
    vocationPerPage:number;
    totalVocations:number;
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
                    <a onClick={()=> props.paginate(number)} className="page-link">
                        {number}
                    </a>

                </li>
            ))}
        </nav>
       
    );
}

export default Pagination;
