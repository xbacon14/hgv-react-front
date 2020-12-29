import React, { useState, useContext, useEffect } from 'react';
import { db, timestamp } from '../../services/firebase';
import {AuthContext } from '../../context/AuthContext';

import FormularioInicio from './formularioInicio';
import CardRegistro from './cardRegistro';
import { useHistory } from 'react-router-dom';


 const Home =(props) => {
  

  const setError = useState(null);
  const [data, setData] = useState({})
  const registro = useState({});
  const { currentUser } = useContext(AuthContext);

  
  const loadRegistros = async () => {
    var lista = [];
    var count = 1;

    await db.collection('registros').orderBy("createdAt", "desc").get().then(
      (snapshot) => {
        snapshot.docs.forEach(
          doc => {
            var datos = doc.data();
            console.log(datos)
            var objeto = datos.registro[0];
            var fecha = datos.createdAt.toDate();
            var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(fecha);
            lista.push({ ...objeto, count, fechitalo });
            count++;
            setData(lista)

          }
        );


      }
    ).catch((err => setError(err)))
  }


  const registrar = async () =>{
    const usuario = currentUser.uuid;
    console.log(usuario);
     await db.collection('registros').doc().set({registro, createdAt: timestamp}).then(
       console.log("Se registró a " + registro.nombre)
     );
     
  }

  // const consultarCi = async (e) => {
  //   e.preventDefault();
  //   const ci = values;
  //   var lista = [];

  //   await db.collection('personas').where("linkObject.ci", "==", ci).get().then(
  //     (snapshot) => {
  //       if (!snapshot.empty) {
  //         snapshot.forEach(doc => {
  //           var datos = doc.data();
  //           var objeto = datos.linkObject;
  //           // console.log(objeto);
  //           lista.push({ ...objeto });
  //           setRegistro(lista);
  //           registrar();
  //         });
  //       }
  //       if (snapshot.empty) {
  //         console.log("error")
  //         setError("Persona no encontrada");
  //         setTimeout(() => setError(''), 4000);
  //       }
  //     })
  // }


  const addOrEditLink = async (linkObject) => {
    // console.log(user);
    await db.collection('registros').doc().set({datosRegistro: linkObject, createdAt: timestamp})
    console.log('Registro guardado :)');
    loadRegistros();
  }



  return (
    <div className="registro-container" >
     
    <FormularioInicio formRegistro={addOrEditLink}/>
    <CardRegistro listaRegistro={data}  />

    </div>
    )



}
export default Home;