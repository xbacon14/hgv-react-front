import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import ok from '../../assets/home/ok.svg';
import add from '../../assets/home/add.svg';

const FormularioInicio = (props) =>{

const history = useHistory();

const [values, setValues] = useState({});



const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(values);
    console.log(values);
}

const crearPersona = (e) => {
    // const ci = values.value;
    // console.log(values)  
    e.preventDefault();
    history.push({
        pathname: "/registro",
        state : {  ci: values}
      })
}



    return(
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
              onChange={(e) => setValues(e.target.value)}
              // value={}
              placeholder="Ingrese su ci" />
            <button className="btn btn-success" onClick={handleSubmit} id="consultar"> <img src={ok} className="svg" alt="Registrar" />  Registrar </button>
            <button className="btn btn-primary" onClick={crearPersona} id="crear"> <img src={add} className="svg" alt="Crear" /> Crear </button>
          </div>
        </form>
        {/* {error && <p className="error">{error}</p>} */}
      </div>
    )

}

export default FormularioInicio;