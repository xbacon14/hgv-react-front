import React, { useState, useEffect } from 'react';

import AccountForm from './components/accountForm';
// import '../CrearEmpresa/style.css';
import { db, timestamp } from "../../services/firebase";


const Account = () => {

    const [data, setData] = useState([]);

    const addOrEditLink = async (linkObject) => {
        await db.collection('account').doc().set({ linkObject, createdAt: timestamp });
        console.log("Registro guardado :)")
        loadEmpresaGetDocs();
    }

    const loadEmpresaGetDocs = async () => {
        var lista = [];
        var count = 1;

        await db.collection('account').orderBy("createdAt", "desc").limit(4).get().then(
            (snapshot) => {
                snapshot.docs.forEach(doc => {
                    var datos = doc.data();
                    var objeto = datos.linkObject;
                    var fecha = datos.createdAt.toDate();
                    // console.log(fecha);
                    var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(fecha);
                    // console.log(fechitalo);
                    lista.push({ ...objeto, count, fechitalo });
                    count++;
                });
                setData(lista);
                // console.log(lista);
                // console.log(count);
            }
        )
    }

    useEffect(() => {
        loadEmpresaGetDocs();
    }, [])
    // const getAccounts = async () => {
    //     const querySnapShot = await db.collection('account').get();
    //     querySnapShot.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // }

    // useEffect(() => {
    //     getAccounts();
    // })

    return (
        <div className="row" id="row">
            <AccountForm
                addOrEditLink={addOrEditLink}
            />
            <div className="col-5 ">

                {
                    data.map((data) => {
                        return (
                            <div key={data.count} className="card">
                                <div className="card-body">
                                    <span className="card-title"> {data.razonSocial} </span>
                                    <p className="card-text">
                                        {data.fechitalo} Hs.
                                        </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Account;