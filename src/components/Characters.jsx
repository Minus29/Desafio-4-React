import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Characters = ({ characters = [] }) => {

    const [valorDeLaCaja, setValorDeLaCaja] = useState('');
    const [valorDelSelec, setValorDelSelect] = useState('ascendente');

    const filtrando = (e) => {
        e.preventDefault();
    }

    const obtenerDatos = (e) => {
        setValorDeLaCaja(e.target.value)
    }

    const ordenes = (e) => {
        setValorDelSelect(e.target.value);
    }
    const AZ = (a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0;

    const ZA = (a, b) =>
        a.name < b.name ? 1 : a.name > b.name ? -1 : 0;

    return (
        <div>
            <Form onSubmit={filtrando}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Filtrar por nombre de los personajes </Form.Label>
                    <Form.Control type="text" name='busqueda' placeholder="Character" onChange={obtenerDatos} />
                </Form.Group>
                <Form.Select onChange={ordenes}>
                    <option value="ascendente" >Ordenar de la A - Z</option>
                    <option value="descendente">Ordenar de la Z - A</option>
                </Form.Select>
                <br />
            </Form>

            <div className='row'>
                {characters.sort(valorDelSelec === "ascendente" ? AZ:ZA)
                .filter((e) => {
                    return e.name.toLowerCase().includes(valorDeLaCaja.toLowerCase());
                })
                    .map((item, index) => (
                        <div key={index} className='col mb-4'>
                            <div className='card' style={{ minWidth: "200px" }}>
                                <img src={item.image} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name} </h5>
                                    <hr />
                                    <p>location: {item.location.name} </p>
                                    <p>species: {item.species} </p>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    )
}

export default Characters