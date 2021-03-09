import React, { useEffect, useState } from 'react'
import RegistroForm from './components/registroForm.jsx'
import { timestamp, db } from '../../services/firebase'

// import '../CrearEmpresa/style.css';
// import { Link } from 'react-router-dom';

const Registro = () => {
  const [data, setData] = useState([])
  const [user] = useState(localStorage.getItem('fbase_key'))

  const addOrEditLink = async (linkObject) => {
    console.log(user)
    await db
      .collection('personas')
      .doc()
      .set({ linkObject, createdAt: timestamp, user })
    console.log('Registro guardado :)')
    loadRegistroGetDocs()
  }

  const loadRegistroGetDocs = async () => {
    var lista = []
    var count = 1

    await db
      .collection('personas')
      .orderBy('createdAt', 'desc')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var datos = doc.data()
          var usuario = datos.user
          if (usuario === user) {
            console.log('si es')
            var objeto = datos.linkObject
            var fecha = datos.createdAt.toDate()
            var fechitalo = new Intl.DateTimeFormat('es-PY', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }).format(fecha)
            lista.push({ ...objeto, count, fechitalo, user })
            console.log(lista)
            console.log(objeto)
            count++
          }
        })
        setData(lista)
        // console.log(lista);
        // console.log(count);
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    try {
      loadRegistroGetDocs()
    }catch{
        
    }
  }, [])

  return (
    <div className="row col-10">
      <RegistroForm addOrEditLink={addOrEditLink} />

      <div className="col-5 container-1">
        {data.map((data) => {
          return (
            <div key={data.count} className="card">
              <div className="card-body">
                <span className="card-title card-letter title-title">
                  {' '}
                  {data.nombre}{' '}
                </span>
                <p className="card-text card-letter">{data.fechitalo} Hs.</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Registro
