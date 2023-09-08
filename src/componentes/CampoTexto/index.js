import './CampoTexto.css';

const CampoTexto = (props) => {

    //let valor = '';
    const aoDigitado = (evento) =>{ 
        props.aoAlterado(evento.target.value); 
    }
    return(
        <div className='campo-texto'>
            <label className='campo-texto__rotulo'>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} className='campo-texto__input' placeholder={props.placeholder} id=""></input>

        </div>
    )
}

export default CampoTexto;