import React from 'react'
import "./Contact.scss"

const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span>Suscríbete para recibir novedades y promociones</span>
                <div className="mail">
                    <input type="text" placeholder='Ingrese su correo'/>
                    <button>Ingresar</button>
                </div>
            </div>
        </div>
    )
}

export default Contact