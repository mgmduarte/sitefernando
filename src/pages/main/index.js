import React from 'react'
import './styles.css'
import BarraSuperior from '../../componentes/barraSuperior'

function Main (props) {
    return (

        <div className="div-main">
            <BarraSuperior/>
            <div className='div-main-inferior'>
                <div className="div-main-esq">
                    <div className='div-texto'>
                    </div>
                </div>
                <div className="div-main-dir">
                    <div className='div-botoes'>
                        <div className ='div-botao-login'>
                            <button type='button'>
                                Quero ajudar!
                            </button>

                        </div>
                        <div className ='div-botao-login'>
                            <button type='button'>
                                Preciso de ajuda!
                            </button>

                        </div>
                        <div className ='div-botao-login'>
                            <button type='button'>
                                Saber mais!
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Main