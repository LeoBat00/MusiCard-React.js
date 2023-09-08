import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Team from './componentes/Team';
function App() {


  const [colaboradores,setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])

  }
  return (
    <div className="App">
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) } />
        <Team nome="Programação"/>
        <Team nome="Front-end"/>
        <Team nome="Data-science"/>
    </div>
  );
}

export default App;
