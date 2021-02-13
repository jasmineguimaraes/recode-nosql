import './css/App.css';
import Navbar from './views/navbar'
import {Main} from './views/main';
import Lojas from './views/lojas';
import Produtos from './views/produtos';
import Contato from './views/contato';
import Footer from "./views/footer.js";
import CRUD from './views/crud.js'

import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Main} />
      <Route exact path='/produtos' component={Produtos} />
      <Route exact path="/lojas" component={Lojas} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/crud" component={CRUD} />
      <Footer />
    </div>
  );
}

export default App;
