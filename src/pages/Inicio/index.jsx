import React, { useState, useEffect } from 'react';
import { db, auth } from '../../services/firebase';

import ok from '../../assets/home/ok.png';

const Home = () => {

  // const history = useHistory();

  const [email, setEmail] = useState({});
  const [data, setData] = useState({});
  const { setCi } = useState('')



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
    ).catch((err => console.log(err)))
  }

  const consultarCi = async () => {
    var ci = ci;
    if (ci.length > 5 & ci.length < 8) {
      await db.collection('personas').where("ci", "==", ci).get().then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
          })
        }

      )
    }
  }


  const handleInput = (e) => {
    var ci = e.target.value;
    setCi(ci)
  }

  useEffect(() => {
    loadRegistros();
    const user = auth.currentUser;
    setEmail(user.email);
    console.log(user.email);

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