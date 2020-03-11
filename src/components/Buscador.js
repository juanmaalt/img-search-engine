import React, { Component } from 'react';
import {Select, Input, FormControl, Button} from '@material-ui/core';

class Buscador extends Component{

    busquedaRef = React.createRef();
    cantidadRef = React.createRef();

    handleDatos = (e) =>{
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        const cantidad = this.cantidadRef.current.value;
        console.log("termino:"+termino+" cantidad: "+cantidad);
        this.props.BuscarDatos(termino, cantidad);
    }

    render(){
        return(
            <form onSubmit={this.handleDatos} className="searchForm">
                <FormControl className="formControl" margin="normal" fullWidth="true">
                    <Input
                        inputRef={this.busquedaRef}
                        type="text"
                        placeholder="What are you looking for today?"
                    />
                </FormControl>
                <FormControl className="formControl" margin="normal">
                    <Select 
                        inputRef={this.cantidadRef}
                        defaultValue={5}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                    </Select>
                </FormControl>
                <FormControl className="formControl" margin="normal">
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained">
                            Search
                    </Button>
                </FormControl>
            </form>
        )
    }
}

export default Buscador;