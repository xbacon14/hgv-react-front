import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { db, auth } from '../../services/firebase';

import ok from '../../assets/home/ok.png';

const Home = () => {

  const history = useHistory();

  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [value, setValue] = useState({});
  const [user, setUser] = useState(null);



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
    ).catch((err => setError(err)))
  }

  const handleInput = (e) => {
    const { name, value } = e.target;

    setValue({ name, value });
  }

  const consultarCi = async () => {
    console.log(value);

    await db.collection('personas').where("ci", "==", value.value).get().then(
      (querySnapShot) => {
        querySnapShot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data())
        })
      }
    ).catch((err) => setError(err))
    // if (cedula.length > 5 & cedula.length < 8) {
    //   await db.collection('personas').where("ci", "==", cedula).get().then(
    //     (querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         console.log(doc.id, "=>", doc.data())
    //       })
    //     }

    //   )
    // }
  }

  const crearPersona = () => {
    history.push('/registro')
  }

  useEffect(() => {
    loadRegistros();
    if (!user) {
      const user = auth.currentUser;
      setUser(user);
    }

  }, [])

  return (
    <div className="registro-container" >
      <div className="registro-form col-6">
        <form>
          <label htmlFor="ci" className="label-home title-title">CONSULTE POR CI *</label>
          <div className="row d-flex row-home ">
            <input id="ci-home"
              required
              className="col-6"
              type="text"
              name="ci"
              // autoComplete="off"
              onChange={handleInput}
              // value={(e) => setCi(e.target.value)}
              placeholder="Ingrese su ci" />
            <button className="btn btn-success" onClick={consultarCi} id="consultar"> Registrar </button>
            <button className="btn btn-primary" onClick={crearPersona} id="crear"> Crear </button>
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