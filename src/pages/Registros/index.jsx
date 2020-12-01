import React, { useEffect, useState } from 'react';
import RegistroForm from './components/registroForm.jsx';
import { db, timestamp } from "../../services/firebase";


import '../CrearEmpresa/style.css';
import { Link } from '@material-ui/core';

const Registro = () => {

    const [data, setData] = useState([]);

    const addOrEditLink = async (linkObject) => {
        await db.collection('personas').doc().set({ linkObject, createdAt: timestamp });
        console.log('Registro guardado :)');
        loadRegistroGetDocs();
    }

    const loadRegistroGetDocs = async () => {
        var lista = [];
        var count = 1;

        await db.collection('personas').orderBy("createdAt", "desc").limit(4).get().then(
            (snapshot) => {
                snapshot.docs.forEach(
                    doc => {
                        var datos = doc.data();
                        var objeto = datos.linkObject;
                        var fecha = datos.createdAt.toDate();
                        var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(fecha);
                        lista.push({ ...objeto, count, fechitalo });
                        // console.log(lista);
                        count++;

                    }
                );
                setData(lista)
                // console.log(lista);
                // console.log(count);


            }
        ).catch(err => <Link to="/error404" />)
    }

    useEffect(() => {
        loadRegistroGetDocs();
    }, [])

    return (

        <div className="row"
            id="row" >
            <RegistroForm addOrEditLink={addOrEditLink} />

            <div className="col-5">

                {
                    data.map((data) => {
                        return (
                            <div key={data.count} className="card" >
                                <div className="card-body" >
                                    <span className="card-title" > {data.nombre} </span>
                                    <p className="card-text" >
                                        {data.fechitalo} Hs.
                                                </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Registro;
// export default class Registro extends Component {

//     state = {
//         data: []
//     }

//     async addOrEditLink(linkObject) {
//         // await db.collection('registros').doc().set(linkObject);
//         console.log('Registro guardado :)');
//     }

//     componentDidMount() {
//         this.loadRegistroGetDocs();
//     }

//     async loadRegistroGetDocs() {
//         var lista = [];
//         var count = 1;

//          await db.collection('registros').get().then(
//             (snapshot) => {
//                 snapshot.docs.forEach(
//                     doc => {
//                         var datos = doc.data();
//                         var fecha = datos.timestamp.toDate();
//                         var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(fecha);
//                         lista.push({ ...datos, count, fechitalo });
//                         count++;

//                     }
//                 );
//                 this.setState({ data: lista })
//                 console.log(this.state.data);
//                 console.log(count);


//             }
//         )
//     }

//     // const getRegistros = async () => {
//     //     const querySnapShot = await db.collection('registros').get();
//     //     var nombre = querySnapShot.nombre;
//     //     var horaEntrada = querySnapShot.horaEntrada;
//     //     querySnapShot.forEach(doc => {
//     //         // console.log(doc.data())
//     //         console.log(doc.data());
//     //     })
//     // }

//     // useEffect(() => {
//     //     getRegistros();
//     // })

//     render() {
//         return (

//             <div className="row"
//                 id="row" >
//                 <RegistroForm addOrEditLink={this.addOrEditLink} />

//                 <div className="col-5">

//                     {
//                         this.state.data.map((data) => {
//                             return (
//                                 <div key={data.count} className="card" >
//                                     <div className="card-body" >
//                                         <span className="card-title" > {data.nombre} </span>
//                                         <p className="card-text" >
//                                             {/* {data.fecha.toString()} */}
//                                             {data.fechitalo} Hs.
//                                         </p>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//                 {/* <div className="col-4 " >
//                     <div className="card" >
//                         <div className="card-body" >
//                             <h5 className="card-title" > Italo Golin </h5> <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p>
//                         </div>
//                     </div>
//                     <div className="card" >
//                         <div className="card-body" >
//                             <h5 className="card-title" > Italo Golin </h5>
//                             <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p> </div> </div>
//                     <div className="card" >
//                         <div className="card-body" >
//                             <h5 className="card-title" > Italo Golin </h5>
//                             <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p>
//                         </div>
//                     </div>
//                     <div className="card" >
//                         <div className="card-body" >
//                             <h5 className="card-title" > Italo Golin </h5>
//                             <p className="card-text" > 15: 03: 06 - 24 / 10 / 2020 </p>
//                         </div>
//                     </div>
//                 </div> */}

//             </div>
//         )
//     }
// }