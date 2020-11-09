import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { db, timestamp } from '../../services/firebase';
import { Alert } from 'react-bootstrap';

=======
import { db } from '../../services/firebase';
import Alert from 'react-bootstrap/Alert';
>>>>>>> c6fa67f2df6f334de6c4b775d9ec8b6302071c19
import './style.css'
import '../../components/alerts/alertCiNotFound.jsx';

const Home = () => {

<<<<<<< HEAD
    const [timeOut, setTimeout] = useState(0)

    const [data, setData] = useState([]);
    const [cic, setCi] = useState();
    const [persona, setPersona] = useState([]);

    const loadRegistros = async () => {
        var lista = [];
        var count = 1;

        await db.collection('registros').orderBy("createdAt", "desc").limit(4).get().then(
            (snapshot) => {
                // console.log(snapshot)
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
                console.log(lista);
                console.log(count);


            }
        ).catch(err => <Link to="/error404" />)
=======
  // const [timeOut, setTimeout] = useState(0)

  const [data, setData] = useState([]);
  const [cic, setCi] = useState();
  const [show, setShow] = useState(true);


  const loadRegistros = async () => {
    var lista = [];
    var count = 1;

    await db.collection('registros').orderBy("createdAt", "desc").limit(4).get().then(
      (snapshot) => {
        // console.log(snapshot)
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
        console.log(lista);
        console.log(count);


      }
    ).catch(err => <Link to="/error404" />)
  }

  const consultarCi = async () => {
    var ci = cic;
    if (ci.length > 5 & ci.length < 8) {
      await db.collection('personas').where("ci", "==", ci).get().then(
        (querySnapshot) => {
          if (querySnapshot.empty) {
            AlertCiNotFound()
          } else {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, "=>", doc.data())
            })
          }
        }

      )
    } else {
      return (<Alert> El campo CI deve tener al menos 6 carácteres</Alert>)
>>>>>>> c6fa67f2df6f334de6c4b775d9ec8b6302071c19
    }
  }

<<<<<<< HEAD
    const agregarRegistro = async (linkObject) => {

        await db.collection('account/').doc().set({ linkObject, createdAt: timestamp }).then(
            console.log("Registro guardado"))
    }

    const consultarCi = async () => {
        var ci = cic;
        const personasRef = await db.collection('personas');
        if (ci.length > 5 & ci.length < 8) {
            console.log("entro para validar el ci " + ci);
            personasRef
                // .where("ci", "==", ci)
                .get()
                .then(
                    (snapshot) => {
                        if (snapshot.empty) {
                            return console.log("La consulta no retorno registros")
                        } else {
                            snapshot.docs.forEach(doc => {
                                var datos = doc.data();
                                console.log(snapshot.docs[0].id)
                                // var id = datos;
                                var linkObject = datos.linkObject;
                                var ci = linkObject.ci;
                                agregarRegistro(linkObject);
                            })
                        }
                    }
                    // (querySnapshot) => {
                    //     console.log(querySnapshot.docs)
                    //     var datos = querySnapshot;
                    //     var objeto = datos.linkObject;
                    //     console.log(objeto)
                    //     if (querySnapshot.empty) {
                    //         console.log("el registro no se encontró")
                    //     } else {
                    //         // agregarRegistro()
                    //         querySnapshot.forEach((doc) => {
                    //             console.log(doc.id, "=>", doc.data())
                    //             agregarRegistro()
                    //             return console.log("operacion concluida con exito")
                    //         })
                    //     }
                    // }

                ).catch(err => console.log(err))
        } else {
            return console.log("No funciono kk")
        }
    }
=======
  const AlertCiNotFound = () => {

>>>>>>> c6fa67f2df6f334de6c4b775d9ec8b6302071c19

    if (show) {
      console.log("Esta intentando alertar")
      return (<>
        <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>
            C.I. no encontrada
                    </Alert.Heading>
        </Alert>
      </>
      )
    } else {
      return <button onclick={() => setShow(true)}>Show Alert modafoca</button>;

    }
  }


  const handleInput = (e) => {
    var ci = e.target.value;
    setCi(ci)
  }

  useEffect(() => {
    loadRegistros();

  }, [])

  return (
    <div >
      <div className="registro-container col-6">
        <label htmlFor="ci" >CONSULTE POR CI *</label>
        <div className="row d-flex " id="row-home">
          <input id="ci-home"
            required
            className="col-6"
            type="number"
            maxLength='7'
            name="ci"
            // autoComplete="off"
            onChange={handleInput}
            placeholder="Ingrese su ci" />
          <button className="btn btn-success" onClick={consultarCi} id="consultar"> Registrar </button>
        </div>
      </div>


      <div className="ult-registros col-4">
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
      {/* <div className="row cuadrados">
                <div className="cards col-6" id="textos-home">
                    <div className="card-title" id="title-home">AYUDEMOS A FRENAR EL CORONGA.</div>
                    <p id="text-home">Registrando tu entrada en algún establecimiento aherido
                    al servicio, estás ayudando a tratar de forma temprana
                    los sintomas del covid-19. Ayudándonos es la forma de
que todos estemos prevenidos.</p>
                </div>
                <div className="cards col-4 justify-content-center " id="status" >
                    <img src={ok} alt="" id="vector-ok" />
                    <span id="text-status">ESTAS APTO PARA REGISTRAR!</span>
                    <button className="btn btn-large" id="empecemos">EMPEZAR</button>
                </div>
            </div> */}
    </div >
  )
}

export default Home;