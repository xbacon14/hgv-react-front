import React from 'react';

import ok from '../../assets/home/ok.png';
import './style.css'

export default function Home() {
    // function validarLogin(){
    //     const id = localStorage.getItem('user', _id);
    //     if(!id){
    //         history.push('/login')
    //     }
    // }

    return (
        <>
            <div className="row cuadrados">
                <div className="cards col-6">
                    <h5 className="card-title" id="title-home">AYUDEMOS A FRENAR EL CORONGA.</h5>
                    <p id="text-home">Registrando tu entrada en algún establecimiento aherido
                    al servicio, estás ayudando a tratar de forma temprana
                    los sintomas del covid-19. Ayudándonos es la forma de
que todos estemos prevenidos.</p>
                </div>
                <div className="cards col-4" >
                    <img src={ok} alt="" id="vector-ok" />
                    <h5 id="text-status">ESTAS APTO PARA REGISTRAR!</h5>
                    <button className="btn btn-large" id="empecemos">EMPEZAR</button>
                </div>
            </div>
        </>
    )
}