import Colaborador from '../Colaborador';
import './Team.css'

const Time = (props) =>{
    return(
        <div>
            {props.colaboradores.length > 0 ? (
                <section className='team' style={{ background: props.corSecundaria}}>
                    <h3 className='team__titulo' style={{borderColor: props.corPrimaria
                    }}>{props.nome}</h3>
                    
                    <div className='team__cards'>
                        
                        {props.colaboradores.map(colaborador => <Colaborador corPrimaria={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} musica={'"'+colaborador.musica+'"'} imagem={colaborador.imagem}/>)}                
                    </div>
                </section>) : ('') }
                
        </div>
    )
}

export default Time;