import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponentB from '../pure/forms/componentB';

const ComponentA = () => {

    const defaultContacto = new Contacto('Michel', 'Heredia', 'herediamichel18@gmail.com', false);

    return (
        <div>
            <div>
                <h1>Your Contact:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <ComponentB contacto={defaultContacto}></ComponentB>
        </div>
    );
}

export default ComponentA;
