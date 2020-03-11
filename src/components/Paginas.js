import React from 'react';
import Button from '@material-ui/core/Button';


const Paginas = (props) => {
    return(
        <div className="pageNumber">
            <p>{props.pagina}</p>
            <Button
                className="pageButton"
                onClick={props.paginaAnterior} 
                variant="contained"
                color="primary">
                Prev
            </Button>
            <Button
                className="pageButton"
                onClick={props.paginaSiguiente} 
                variant="contained"
                color="primary">
                    Next
            </Button>
        </div>
    )
}

export default Paginas;