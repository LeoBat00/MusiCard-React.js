import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import DropDown from '../DropDown'

import './Formulario.css';
const Formulario = () => {

    const times = [
        'programação',
        'front-end',
        'data-science',
        'devops',
        'ux e design',
        'mobile',
        'inovação e gestão'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        console.log('Salvando')
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>

                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto obrigatorio={true} label ="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label ="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDown obrigatorio={true} label ="Time" itens={times}/>

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario;