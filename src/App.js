import {BrowserRouter, Switch, Route} from 'react-router-dom'

import PaginaInicio from './Pages/PaginaInicio';
import PaginaLogin from './Pages/PaginaLogin';
import PaginaRegistro from './Pages/PaginaRegistro';
import PaginaPeliculas from './Pages/PaginaPeliculas';
import PaginaLista from './Pages/PaginaLista';
import PaginaForm from './Pages/PaginaForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicio} />
        <Route exact path="/login" component={PaginaLogin} />
        <Route exact path="/registro" component={PaginaRegistro} />
        <Route exact path="/peliculas" component={PaginaPeliculas}/>
        <Route exact path="/lista" component={PaginaLista}/>
        <Route exact path="/form" component={PaginaForm}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
