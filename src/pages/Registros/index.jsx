import React, { Component } from 'react';
import RegistroForm from './components/registroForm.jsx';
import { db } from "../../services/firebase";


import '../CrearEmpresa/style.css';

export default class Registro extends Component {

    state = {
        data: []
    }

    async addOrEditLink(linkObject) {
        // await db.collection('registros').doc().set(linkObject);
        console.log('Registro guardado :)');
    }

    componentDidMount() {
        this.loadRegistroGetDocs();
    }

    async loadRegistroGetDocs() {
        var lista = new Array();

        // function dateToTime(secs) {
        //     var t = new Date(Date.UTC(1, 0, 1970));
        //     t.setUTCSeconds(secs);
        //     return t;
        // }
        const registrosRef = await db.collection('registros').get().then(
            (snapshot) => {
                snapshot.docs.forEach(
                    doc => {
                        var datos = doc.data();
                        // var fecha = dateToTime(doc.data.timestamp);
                        lista.push({ ...datos });
                    }
                );
                this.setState({ data: lista })
                console.log(this.state.data);


            }
        )
    }

    // const getRegistros = async () => {
    //     const querySnapShot = await db.collection('registros').get();
    //     var nombre = querySnapShot.nombre;
    //     var horaEntrada = querySnapShot.horaEntrada;
    //     querySnapShot.forEach(doc => {
    //         // console.log(doc.data())
    //         console.log(doc.data());
    //     })
    // }

    // useEffect(() => {
    //     getRegistros();
    // })

    render() {
        return (

            <div className="row"
                id="row" >
                <RegistroForm addOrEditLink={this.addOrEditLink} />

                <div className="col-4">

                    {
                        this.state.data.map((data) => {
                            return (
                                <div className="card" >
                                    <div className="card-body" >
                                        <h5 className="card-title" > {data.nombre} </h5> <p className="card-text" > 
                                        {/* {data.timestamp.toString()} */}
                                         </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* <div className="col-4 " >
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
                </div> */}

            </div>
        )
    }
}