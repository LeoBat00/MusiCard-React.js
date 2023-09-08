import './DropDown.css'


const DropDown = (props) =>{

    return(
        <div className='campo-dropdown'>
            <label className='campo-dropdown__rotulo'>{props.label}</label>
            <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required className='campo-dropdown__input'>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>

        </div>
    )
}

export default DropDown;