import React, { useState } from 'react'

const AccountForm = (props) => {
  var idUsuario = 42

  const initialStateValues = {
    idUsuario: idUsuario,
  }

  const [values, setValues] = useState(initialStateValues)

  const handleInput = (e) => {
    // const { name, value } = e.target;
    // setValues({ ...values, [name]: value })
    // valores.push({ ...values, [name]: value })
    const { name, value } = e.target
    if (name === 'ruc') {
      var ruc = value
      console.log(ruc)
      setValues({ ...values, [name]: ruc })
    }
    if (name === 'razonSocial') {
      var razonSocial = value.toUpperCase()
      console.log(razonSocial)
      setValues({ ...values, [name]: razonSocial })
    }
    if (name === 'direccion') {
      var direccion = value.toUpperCase()
      console.log(direccion)
      setValues({ ...values, [name]: direccion })
    }
    if (name === 'rubro') {
      var rubro = value.toUpperCase()
      console.log(rubro)
      setValues({ ...values, [name]: rubro })
    }
    if (name === 'ciudad') {
      var ciudad = value.toUpperCase()
      console.log(ciudad)
      setValues({ ...values, [name]: ciudad })
    } else {
      if (
        (name !== 'razonSocial') &
        (name !== 'direccion') &
        (name !== 'ciudad')
      ) {
        // console.log("rafa gay")
        setValues({ ...values, [name]: value })
      }
    }
  }

  const handleSubmit = (e) => {
    console.log(values)

    // var enviado = true
    // e.preventDefault()
    // props.addOrEditLink(values)
    // document.getElementById('ruc').value = ''
    // document.getElementById('razonSocial').value = ''
    // document.getElementById('rubro').value = ''
    // document.getElementById('direccion').value = ''
    // document.getElementById('telefono').value = ''
    // document.getElementById('ciudad').value = ''
  }

  return (
    <div className="form-container  col-6">
      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="ruc" className="labels">
          RUC *
        </label>
        <input
          id="ruc"
          name="ruc"
          className="inputs"
          defaultValue=""
          //   onChange={handleInput}
          placeholder="Ingrese su ruc"
          maxLength="10"
          onChange={handleInput}
        />
        <label htmlFor="razonSocial" className="labels">
          RAZÓN SOCIAL *
        </label>
        <input
          id="razonSocial"
          name="razonSocial"
          className="inputs"
          defaultValue=""
          onChange={handleInput}
          placeholder="Ingrese el nombre de su empresa"
        />
        <label htmlFor="rubro" className="labels">
          RUBRO *
        </label>
        {/* <input id="rubro"
                    name="rubro"
                    className="inputs"
                    onChange={handleInput}
                    placeholder="Especifique su rubro" />
                <label htmlFor="direccion" className="labels">DIRECCIÓN COMERCIAL *</label> */}
        <input
          id="direccion"
          name="direccion"
          className="inputs"
          onChange={handleInput}
          placeholder="Especifique la dirección"
        />
        <label htmlFor="telefono" className="labels">
          TELÉFONO *
        </label>
        <input
          id="telefono"
          name="telefono"
          className="inputs"
          onChange={handleInput}
          placeholder="Especifique su número de teléfono"
        />
        <label htmlFor="ciudad" className="labels">
          CIUDAD *
        </label>
        <input
          id="ciudad"
          name="ciudad"
          className="inputs"
          onChange={handleInput}
          placeholder="Defina la ciudad"
        />

        <button type="submit" className="btn btn-primary btn-lg btn-form">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default AccountForm

// export default class RegistroForm extends Component {

//     state = {
//         values: []
//     }

//     handleInput(e) {
//         var valores = [];
//         const { name, value } = e.target;
//         console.log(name, value);

//     valores.push({ ...values, [name]: value })
//     }

//     handleSubmit(e) {
//         var now = Date.now();
//         values.push({ timestamp: now });
//         console.log(this.state.values);
//         e.preventDefault();
//         this.props.addOrEditLink(values);
//     }
