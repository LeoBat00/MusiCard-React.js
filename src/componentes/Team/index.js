import Colaborador from '../Colaborador';
import './Team.css'

const Time = (props) =>{
    return(
        (props.colaboradores.length > 0) ? <section className='team' style={{ backgroundColor: props.corSecundaria}}>
            <h3 className='team__titulo' style={{borderColor: props.corPrimaria
            }}>{props.nome}</h3>
            
            <div className='team__cards'>
                {props.colaboradores.map(colaborador => <Colaborador corPrimaria={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}                
            </div>
        </section>  
        : ''
    )
}

export default Time;