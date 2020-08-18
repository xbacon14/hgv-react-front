import React from 'react';

import ok from '../../assets/home/ok.png';

export default function Home() {
    return (
        <>
            <div className="row cuadrados">
                <div className="col">
                    <div className="card">
                        <h5 className="card-title" id="title-home">AYUDEMOS A FRENAR EL CORONGA.</h5>
                        <p id="text-home">Registrando tu entrada en algún establecimiento aherido
                        al servicio, estás ayudando a tratar de forma temprana
                        los sintomas del covid-19. Ayudándonos es la forma de
que todos estemos prevenidos.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src={ok} alt="" id="vector-ok" />
                        <h5 id="text-status" style={{ color: '#0F8A0F' }}>ESTAS APTO PARA REGISTRAR!</h5>
                        <button className="btn btn-large" id="empecemos">EMPEZAR</button>
                    </div>
                </div>
            </div>
        </>
    )
}