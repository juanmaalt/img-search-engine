import React, {Component} from 'react';
import './App.css';
import Buscador from './components/Buscador.js'
import Resultado from './components/Resultado.js'
import Container from '@material-ui/core/Container';


class App extends Component{
	//Definimos estados inmutables
	state = {
    termino: '',
    cantidad: 0,
    imagenes:[],
    totalResults:0,
    paginasTotales:0,
		pagina:0
	}
  
  BuscarDatos = (termino, cantidad) => {
    this.setState({
      termino: termino,
      cantidad: cantidad,
      pagina: 1,
      paginasTotales: this.totalResults/cantidad
    },
    () => {
      this.consultarAPI()
    })
  }

  consultarAPI = () => {
    const termino = this.state.termino;
    const cantidad = this.state.cantidad;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=15481955-ef48d914d079d7669f4e579de&q=${termino}&per_page=${cantidad}&page=${pagina}`;

    fetch(url)
    .then(res => res.json())
    .then (res => this.setState({
        imagenes:res.hits,
        totalResults:res.totalHits
    }));

    console.log(this.state.totalResults);
  }

  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    
    if(pagina===1){
      return null;
    }    
    pagina --;

    this.setState({pagina}, ()=> {this.consultarAPI();})
  }

  paginaSiguiente = () =>{
    let pagina = this.state.pagina;
    
    if(this.state.paginasTotales === pagina){
      return null;
    }else{
      pagina ++;
      this.setState({pagina}, ()=>{this.consultarAPI();})
    }
  }

	render(){
		return (
      <Container className="bodyContainer">
        <header className="headerContainer">
          <h1>Image Search Engine</h1>
          <Buscador BuscarDatos={this.BuscarDatos}/>
          {this.state.imagenes.pageURL}
        </header>
        <main>
          <Resultado 
            imagenes={this.state.imagenes}
            pagina={this.state.pagina}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </main>
      </Container>
		)
	}

}

export default App;
