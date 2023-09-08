import './CampoTexto.css';

const CampoTexto = (props) => {
    return(
        <div className='campo-texto'>
            <label className='campo-texto__rotulo'>{props.label}</label>
            <input required={props.obrigatorio} className='campo-texto__input' placeholder={props.placeholder} id=""></input>

        </div>
    )
}

export default CampoTexto;