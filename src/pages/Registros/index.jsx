import React, { useEffect } from 'react';
import RegistroForm from './components/registroForm.jsx';
import { db } from "../../services/firebase";


import '../CrearEmpresa/style.css';

export default function Registro() {

    // const addOrEditLink = async (linkObject) => {
    //     await db.collection('registros').doc().set(linkObject);
    //     console.log('Registro guardado :)');
    // }

    const getRegistros = async () => {
        const querySnapShot = await db.collection('registros').get();
        var nombre = querySnapShot.nombre;
        var horaEntrada = querySnapShot.horaEntrada;
        querySnapShot.forEach(doc => {
            // console.log(doc.data())
            console.log(doc.data());
        })
    }

    useEffect(() => {
        getRegistros();
    })

    return (

        <div className="row"
            id="row" >
            <RegistroForm />


            <div className="col-4 " >
                <div className="card" >
                    <div className="card-body" >
                        <h5 className="card-title" > Italo Golin </h5> <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-body" >
                        <h5 className="card-title" > Italo Golin </h5>
                        <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p> </div> </div>
                <div className="card" >
                    <div className="card-body" >
                        <h5 className="card-title" > Italo Golin </h5>
                        <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-body" >
                        <h5 className="card-title" > Italo Golin </h5>
                        <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-body" >
                        <h5 className="card-title" > Italo Golin </h5>
                        <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p>
                    </div>
                </div>
            </div>

        </div>
    )
}