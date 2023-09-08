import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Team from './componentes/Team';
function App() {

  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    
  ]

  const [colaboradores,setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
  
    setColaboradores([...colaboradores,colaborador])

  }

  return (
    <div className="App">
        <Banner />
        <Formulario teamsName={teams.map(team => team.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) } />
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
