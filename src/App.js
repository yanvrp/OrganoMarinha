import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Piratas do Chapéu de Palha',
      corPrimaria:'#57C278',
      corSecundaria:'#D9f7E9'
    },
    {
      nome: 'Piratas das Feras',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome: 'Piratas do Coração',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome: 'Piratas do Ruivo',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'Piratas Donquixote',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome: 'Piratas do Barba Branca',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'Piratas do Roger',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [colaboradores,setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  

  return (
    <div className="App">
      <Banner />
      <Formulario nomesTimes={times.map(time => time.nome)} aoColaboradorAdicionado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/> )}
      <Rodape />
    </div>
  );
}

export default App;
