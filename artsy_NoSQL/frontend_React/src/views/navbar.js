import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav class=" navbar navbar-light navbar-expand-lg shadow p-3 mb-5 bg-white rounded bg-white-artsy">
        <div class="container-artsy d-flex flex-wrap justify-content-end">
            <Link to="/"><img src={"img/logo-small.png"} alt='logo'/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="custom-toggler-icon navbar-toggler"><i class="fas fa-bars"></i></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link className="nav-link" to="/produtos">Produtos</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/lojas">Nossas Lojas</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/contato">Fale Conosco</Link>
                    </li>
                </ul>

            </div>
        </div>
        </nav>
    );
}

export default Navbar;