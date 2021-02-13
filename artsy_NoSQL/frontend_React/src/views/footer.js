import React from 'react';


function Footer(){
    return(
<footer class="artsy-footer">
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3">
        <ul>
            <h2>Sobre a Artsy</h2>
        </ul>
        <li>
            <p>Somos apaixonados por arte e estamos comprometidos com todos que querem fazer arte.</p>
        </li>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3">
        <ul>
            <h2>Segue a gente</h2>
        </ul>
        <li><i class="fab fa-twitter"></i> @ARTsy</li>
        <li><i class="fab fa-instagram-square"></i> @ARTsy</li>
        <li><i class="fab fa-facebook"></i> Loja ARTsy</li>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3">
        <ul>
            <h2>Ajuda</h2>
        </ul>
        <li>Reembolso</li>
        <li>Troca ou Devolução</li>
        <li>Como comprar no site</li>
        <li>Prazo de entrega</li>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-md-4 col-lg-3">
        <ul>
            <h2>Contato</h2>
        </ul>
        <li><i class="fas fa-envelope-open-text"></i> atendimento@artsy.com</li>
        <li>Central de Atendimento</li>
    </div>
</div>
</footer>
    );
};

export default Footer;