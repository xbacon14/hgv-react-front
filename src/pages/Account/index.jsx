import React, { Component } from 'react';

import AccountForm from './components/accountForm';
import '../CrearEmpresa/style.css';
import { db } from '../../services/firebase';


export default class Empresa extends Component {

    state = {
        data: []
    }

    async addOrEditLink(linkObject) {
        console.log("Registro guardado :)")
    }

    componentDidMount() {
        this.loadEmpresaGetDocs();
    }

    async loadEmpresaGetDocs() {
        var lista = [];
        var count = 1;

        const accountRef = await db.collection('account').get().then(
            (snapshot) => {
                snapshot.docs.forEach(doc => {
                    var datos = doc.data();
                    var fecha = datos.timestamp.toDate();
                    var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(fecha);
                    console.log(fechitalo);
                    lista.push({ ...datos, count, fechitalo });
                    count++;
                });
                this.setState({ data: lista });
                console.log(this.state.data);
                console.log(count);
            }
        )
    }
    // const getAccounts = async () => {
    //     const querySnapShot = await db.collection('account').get();
    //     querySnapShot.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // }

    // useEffect(() => {
    //     getAccounts();
    // })

    render() {
        return (
            <div className="row" id="row">
                <AccountForm
                //  addOrEditLink={addOrEditLink}
                />
                <div className="col-5 ">

                    {
                        this.state.data.map((data) => {
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

                    {/* <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Italo Golin</h5>
                        <p className="card-text">15:03:06 - 24/10/2020</p>
                    </div>
                </div> */}

                </div>
            </div>
        )
    }
}