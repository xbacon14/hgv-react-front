import React, { useState } from 'react';
import './style.css';
import { db } from '../../services/firebase';
import { Component } from 'react';


export default class Reportes extends Component {

    state = {
        data: []
    }

    async componentDidMount() {
        // this.loadregistroGetDocs();
        const registrosRef = await db.collection('registros').get().then(
            (snapshot) => {
                snapshot.docs.forEach(doc => {
                    console.log(doc.data());
                    this.setState = doc.data();
                });
                // const registros = snapshot.docs;
                // console.log(registros);
            }
        );
    }

    // async loadregistroGetDocs() {
    //     this.registrosRef(
    //         (snapshot) => {
    //             //  snapshot.docs.forEach(doc => doc.data());
    //             snapshot.docs.forEach(doc => {
    //                 console.log(doc.data())
    //                 this.data = doc.data();
    //             })
    //         }
    //     );
    //     console.log(registrosRef);

    //     (function (doc) {
    //         if (doc.exists) {
    //             console.log("Document data: ", doc.data());
    //         } else {
    //             console.log("undefinido!");
    //         }
    //     });

    // }

    render() {
        return (
            <>

                <div className="container-tabla tabla col-12">
                    <input className="form-control mb-6 col-4" id="tableSearch" type="text"
                        placeholder="Filtre por Nombre, Apellido, o CI" />
                    <table className="table table-dark col-12">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre y Apellido</th>
                                <th scope="col">CI</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Ciudad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.state.map((doc) => {
                                <tr>
                                    <td>{doc.id}</td>
                                    <td>{doc.nombre}</td>
                                    <td>{doc.ci}</td>
                                    <td>{doc.direccion}</td>
                                    <td>{doc.ciudad}</td>
                                </tr>
                            })
                            } */}
                        </tbody>
                    </table>
                </div>
                <div className="controlador-pagina">
                    <div className="row">
                        {/* <a href=""><svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg></a>
                    <a href=""><svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg></a> */}
                    </div>
                </div>
            </>
        )
    }

}