import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class'

const ComponentB = ({ contacto }) => {
  return (
    <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Correo: { contacto.email }
            </h4>
            <h5>
                Contacto: { contacto.conectado ? 'En Línea':'No Disponible' }
            </h5>
            
        </div>
  )
}

ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponentB
