import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { db, timestamp } from '../../services/firebase';

import ok from '../../assets/home/ok.svg';
import add from '../../assets/home/add.svg';

const Home = () => {

  useEffect(() => {
    loadRegistros();
  }, [])

  const history = useHistory();

  const [error, setError] = useState(null);
  const [registro, setRegistro] = useState({});
  const [data, setData] = useState({});
  const [values, setValues] = useState({});
  // const [user, setUser] = useState(null);



  const loadRegistros = async () => {
    var lista = [];
    var count = 1;

    await db.collection('registros').orderBy("createdAt", "desc").get().then(
      (snapshot) => {
        snapshot.docs.forEach(
          doc => {
            var datos = doc.data();
            var objeto = datos.registro[0];
            var fecha = datos.createdAt.toDate();
            var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(fecha);
            lista.push({ ...objeto, count, fechitalo });
            count++;

          }
        );
        setData(lista)


      }
    ).catch((err => setError(err)))
  }

  const handleInput = (e) => {
    setValues(e.target.value);
  }

  const consultarCi = async (e) => {
    e.preventDefault();
    const ci = values;
    var lista = [];
    var count = 1;

    await db.collection('personas').where("linkObject.ci", "==", ci).get().then(
      (snapshot) => {
        if (!snapshot.empty) {
          snapshot.forEach(doc => {
            var datos = doc.data();
            var objeto = datos.linkObject;
            var fecha = datos.createdAt.toDate();
            var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(fecha);
            console.log(objeto);
            lista.push({ ...objeto, count, fechitalo });
          });
          count++;
          setRegistro(lista);

        }
        if (snapshot.empty) {
          console.log("error")
          setError("Persona no encontrada");
          setTimeout(() => setError(''), 4000);
        }
      })
    registrar()
  }

  const registrar = async () => {
    if (registro) {
      console.log(registro)
      await db.collection('registros').add({ registro, createdAt: timestamp });
      loadRegistros();
      resetStates();
    }
  }

  const resetStates = () => {
    setRegistro(null);
    setValues(null)
  }

  const crearPersona = () => {
    // history.push('/registro')
    history.push({
      pathname: "/registro",
    })
  }



  return (
    <div className="registro-container" >
      <div className="registro-form col-6">
        <form>
          <label htmlFor="ci" className="label-home title-title">Consulte por Numero de CI *</label>
          <div className="row d-flex row-home ">
            <input id="ci-home"
              required
              className="col-6"
              type="number"
              name="ci"
              // autoComplete="off"
              onChange={handleInput}
              // value={(e) => setCi(e.target.value)}
              placeholder="Ingrese su ci" />
            <button className="btn btn-success" onClick={consultarCi} id="consultar"> <img src={ok} className="svg" alt="Registrar" />  Registrar </button>
            <button className="btn btn-primary" onClick={crearPersona} id="crear"> <img src={add} className="svg" alt="Crear" /> Crear </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>


      <div className="ult-registros col-4">
        {/* {
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
        } */}
      </div>
    </div>)
}

export default Home;