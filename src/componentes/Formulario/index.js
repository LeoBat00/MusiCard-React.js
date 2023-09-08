import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import DropDown from '../DropDown'

import './Formulario.css';
const Formulario = (props) => {

    const times = [
        'programação',
        'front-end',
        'data-science',
        'devops',
        'ux e design',
        'mobile',
        'inovação e gestão'
    ]
    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [imagem,setImagem] = useState('');
    
    const [time,setTime] = useState('');

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        
    }

   
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>

                <CampoTexto obrigatorio={true} label="Nome" valor={nome} aoAlterado={valor => setNome(valor)} placeholder="Digite seu Nome" />
                <CampoTexto obrigatorio={true} label ="Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} placeholder="Digite seu Cargo" />
                <CampoTexto label ="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <DropDown obrigatorio={true} label ="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)}/>

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario;