import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Team from './componentes/Team';
function App() {

  const teams = [
    {
      nome: 'Rock',
      corPrimaria: '#F5A8A8',
      corSecundaria: 'linear-gradient(180deg, #252525 0%, #8F2424 100%)'
    },
    {
      nome: 'Pop',
      corPrimaria: '#1C836B',
      corSecundaria: 'linear-gradient(180deg, #242424 0%, #0D8568 100%)'
    },
    {
      nome: 'Metal',
      corPrimaria: '#4B4B4B',
      corSecundaria: 'linear-gradient(180deg, #242424 0%, #000 100%)'
    },
    {
      nome: 'Reggae',
      corPrimaria: '#ACC368',
      corSecundaria: 'linear-gradient(180deg, #212121 0%, rgba(26, 69, 30, 0.52) 47.92%, rgba(173, 175, 47, 0.56) 75%, rgba(175, 171, 48, 0.56) 75.01%, rgba(218, 68, 48, 0.60) 100%)'
    },
    {
      nome: 'Lofi',
      corPrimaria: '#8172A0',
      corSecundaria: '#linear-gradient(180deg, #212121 0%, rgba(85, 67, 199, 0.60) 100%)'
    },
    {
      nome: 'Sertanejo',
      corPrimaria: '#F2CD6C',
      corSecundaria: 'linear-gradient(180deg, #212121 0%, #FFA149 100%)'
    },
    {
      nome: 'Eletrônica',
      corPrimaria: '#F06CF2',
      corSecundaria: 'linear-gradient(180deg, #212121 0%, #E42E9B 100%)'
    },
    {
      nome: 'Outros',
      corPrimaria: '#FFFFFF',
      corSecundaria: 'rgba(144, 144, 144, 0.26);'
    },
    
  ]

  const [colaboradores,setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
  
    setColaboradores([...colaboradores,colaborador])

  }

  return (
    <div className="App">
        <Banner />
        <Formulario generoName={teams.map(team => team.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) } />

        {teams.map(team => <Team 
          key={team.nome} 
          nome={team.nome} 
          corPrimaria={team.corPrimaria} 
          corSecundaria={team.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.team === team.nome)}
        />)}
          
        

    </div>
  );
}

export default App;
