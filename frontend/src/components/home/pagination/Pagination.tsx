import "./Pagination.css";

interface pagination_props {
    prevPage:() => void;
    nextPage:()=> void;
    pageNumber:number;
    totalPages:number;
}

function Pagination(props:pagination_props): JSX.Element {
  
    return (
        <div className="pagination">
     
        <div>
          <button onClick={props.prevPage} disabled={props.pageNumber === 1}>Previous</button>
          <span>Page {props.pageNumber} of {props.totalPages}</span>
          <button onClick={props.nextPage} disabled={props.pageNumber === props.totalPages}>Next</button>
        </div>
      </div>
       
    );
}

export default Pagination;
