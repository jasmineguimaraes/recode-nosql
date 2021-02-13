import axios from 'axios';
import React from 'react';

class Contato extends React.Component{
    constructor(){ 
        super();
        this.state={
            email:"",
            nome:"",
            mensagem:""
        };
        this.handleEmailChange = this.handleChange.bind(this, 'email');
        this.handleNomeChange = this.handleChange.bind(this, 'nome');
        this.handleMsgChange = this.handleChange.bind(this, 'mensagem');
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(keyName, e) {
        this.setState({ [keyName]: e.target.value });
    }

/*  
    handleSubmit(event) {
        let query = "http://localhost/react/src/backend/contato.php?nome=" + this.state.nome;
        query += "&email=" + this.state.email;
        query += "&msg=" + this.state.mensagem;
        console.log(query)
        axios.post(query).then(response => {alert(response.data)});
        event.preventDefault();
    };
*/
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit");
        let data = {
            nome: this.state.nome,
            email:this.state.email,
            msg:this.state.mensagem,
        }
        axios.post('http://localhost:1337/api/contato', {}, { 
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            params: data})
            .then(response => {
                alert(response.data.message);
                window.location.reload()});
    };

// <form action="http://localhost:1337/api/contato" method="POST" >

    render(){
    return(
        <section class="central-de-atendimento">
        <div class="container-fluid d-flex flex-wrap justify-content-center">
            <div class="col-xs-12 col-sm-10 col-md-8">
                <h2> Central de Atendimento</h2>
                <br/>
                <form onSubmit={ this.handleSubmit }>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <label for="emailField">E-mail</label>
                                <input type="text" class="form-control" name="emailField" id="emailField"
                                    aria-describedby="emailHelp" placeholder="Digite seu e-mail" onChange={this.handleEmailChange}/>
                                <small id="emailHelp" class="form-text text-muted">Digite o mesmo e-mail de login que
                                    você
                                    usa na ARTsy
                                </small>
                            </div>
                            <div class="col">
                                <label for="nomeCompletoField">Nome completo</label>
                                <input type="text-area" class="form-control" name="nomeCompletoField"
                                    id="nomeCompletoField" placeholder="Nome completo" onChange={this.handleNomeChange}/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="mensagemField">Como podemos te ajudar?</label>
                        <textarea class="form-control" name="mensagemField" id="mensagemField" rows="3" onChange={this.handleMsgChange}/>
                    </div>
                    <button type="submit" class="btn btn-dark">Enviar</button>
                </form>
            </div>
        </div>
        </section>
    );
    }
}

export default Contato;