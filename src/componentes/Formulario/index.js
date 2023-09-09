import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import DropDown from '../DropDown'

import './Formulario.css';
const Formulario = (props) => {

    const [nome,setNome] = useState('');
    const [Musica,setMusica] = useState('');
    const [imagem,setImagem] = useState('');
    
    const [Genêro,setGenêro] = useState('');

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome,
            musica: Musica,
            imagem: imagem,
            team: Genêro
        })

        setNome('');
        setMusica('');
        setImagem('');
        setGenêro('');
        
    }

   
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar seus Cards Musicais!</h2>

                <CampoTexto obrigatorio={true} label="Banda" valor={nome} aoAlterado={valor => setNome(valor)} placeholder="Digite o nome da Banda" />
                <CampoTexto obrigatorio={true} label ="Música" valor={Musica} aoAlterado={valor => setMusica(valor)} placeholder="Digite sua Música favorita desta Banda" />
                <CampoTexto label ="Icone" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <DropDown obrigatorio={true} label ="Genêro Musical" itens={props.generoName} valor={Genêro} aoAlterado={valor => setGenêro(valor)}/>

                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>

    )
}

export default Formulario;