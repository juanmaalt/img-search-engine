import React, { Component } from 'react';
import Imagen from './Imagen.js';
import Paginas from './Paginas.js';
import GridList from '@material-ui/core/GridList';


class Resultado extends Component{
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;

        return(
            <div className="gridList-container">
                <GridList cellHeight={160} className="gridList" cols={3}>
                {imagenes.map(imagen => (
                    <Imagen
                        key={imagen.id}
                        imagen={imagen}
                    />
                ))}
                </GridList>
                <Paginas 
                    pagina={this.props.pagina}
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </div>
        )
    }

    render(){
        return(
            <>
                {this.mostrarImagenes()}
            </>
        )
    }
}

export default Resultado;