import React from 'react';
import axios from 'axios';

class Produtos extends React.Component{
    constructor(){ 
        super();
        this.state={
            produtos:[],
            cat:[],
            est:[],
            sCat:"",
            sEst:""
        };
        this.handleCatChange = this.handleChange.bind(this, 'sCat');
        this.handleEstChange = this.handleChange.bind(this, 'sEst');
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(keyName, e) {
        this.setState({ [keyName]: e.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let data = {
            cat:this.state.sCat,
            est:this.state.sEst,
        }
        axios.post('http://localhost:1337/api/getprod', {}, { 
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            params: data}).then(resposta => {
                this.setState({produtos:resposta.data.query})
            })


        /*
        let query = "http://localhost/react/src/backend/listproducts.php?cat=" + this.state.sCat;
        query += "&est=" + this.state.sEst;
        axios.post(query).then(resposta => { this.setState({produtos:resposta.data})});
        event.preventDefault();
            */
    };

    componentDidMount = () =>{ 
        axios.get('http://localhost:1337/api/listprod').then(resposta => {this.setState({produtos:resposta.data.query})});

        axios.get('http://localhost:1337/api/geracat').then(resposta => {this.setState({cat:resposta.data.query})});
        
        axios.get('http://localhost:1337/api/listest').then(resposta => {this.setState({est:resposta.data.query})});
    };
    

    GeraCat(){
        return(
            this.state.cat.map((item) => { //console.log(item)
                return(
                <option value={item}>{item}</option>
                )
            })
        )
    };

    GeraCatForm(){
        return(
            <div class="container-fluid d-flex">
                <form onSubmit={ this.handleSubmit }>
                    <div class="input-group">
                        <select name="FILTRO" class="custom-select" onChange={this.handleCatChange}>
                            <option value="">Todos</option>
                            {this.GeraCat()}
                        </select>
                        <div class="input-group-append">
                            <button class="btn-sm btn-outline-dark" type="submit" value='Filtrar' > Filtrar <i class="fas fa-filter"/></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    };

    GeraEst(){
        return(
            this.state.est.map((item) => { //console.log(item)
                return(
                <option value={item}>{item}</option>
                )
            })
        )
    };

    GeraEstForm(){
        return(
            <div class="container-fluid d-flex">
                <form onSubmit={this.handleSubmit}>
                    <div class="input-group">
                        <select name="FILTRO" class="custom-select" onChange={this.handleEstChange}>
                            <option value="">Todos</option>
                            {this.GeraEst()}
                        </select>
                        <div class="input-group-append">
                            <button class="btn-sm btn-outline-dark" type="submit" value='Filtrar' > Filtrar <i class="fas fa-filter"/></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    };

    ProdList() {
        return(
            this.state.produtos.map((item) => { //console.log(item)
                return(
                    <div class="product-container col-xs-12 col-sm-6 col-md-5 col-lg-3 col-xl-2">
                        <div class=" container-fluid d-flex flex-wrap product-wrapper">
                            <div class="product-wrapper">
                                <img class="picture-tag img-fluid img-thumbnail" src={"img/" + item.imagem}
                                    alt={item.descricao}/>
                            <button type="button" class="btn btn-outline-dark btn-artsy">Comprar</button>
                            <p class="product-tag">{item.descricao}</p>
                            <hr/>
                            <p class="pricing">{item.preco}</p>
                            <p class="current-pricing">{item.precofinal}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    };



    render(){
        return(
            <section class="products">
                {this.GeraCatForm()}
                <br/>
                {this.GeraEstForm()}
                <div class="container-fluid d-flex flex-wrap justify-content-center">
                    {this.ProdList()}
                </div>
            </section>
        )
    };

};

export default Produtos;