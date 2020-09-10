import React, { useState, useMemo } from 'react';
import '../CrearEmpresa/style.css';

export default function Registro() {
    return (
        <div className="container-new">
            <form onSubmit={handleSubmit} >
                <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
                    <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                    <img src={imagen} alt="Seleccionar Imagen" />

                </label>
                <label htmlFor="ruc" >RUC *</label>
                <input id="ruc" placeholder="Ingrese su ruc" value={ruc} onChange={event => setRuc(event.target.value)} />
                <label htmlFor="razonSocial">RAZON SOCIAL *</label>
                <input id="razonSocial" placeholder="Ingrese el nombre de su empresa" value={razonSocial} onChange={event => setRazonSocial(event.target.value)} />
                <label htmlFor="rubro">RUBRO *</label>
                <input id="rubro" placeholder="Ingrese su rubro" value={rubro} onChange={event => setRubro(event.target.value)} />
                <label htmlFor="direccion">DIRECCIÓN *</label>
                <input id="direccion" placeholder="Ingrese su rubro" value={direccion} onChange={event => setDireccion(event.target.value)} />
                <label htmlFor="telef">TELÉFONO *</label>
                <input id="telef" placeholder="Ingrese su rubro" value={telef} onChange={event => setTelef(event.target.value)} />
                <label htmlFor="ciudad">CIUDAD *</label>
                <input id="ciudad" placeholder="Ingrese su rubro" value={ciudad} onChange={event => setCiudad(event.target.value)} />

                <button type="submit" className="btn">Crear</button>
            </form>
        </div>
    )
}