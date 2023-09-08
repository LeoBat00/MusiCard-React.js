import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className="colaborador">
            <div className='colaborador__cabecalho' style={{backgroundColor:props.corPrimaria}}>
                <img className='colaborador__imagem' src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{props.nome}</h4>
                <h5 className='colaborador__classe'>{props.cargo}</h5>
            </div>

        </div>
    )
}

export default Colaborador;