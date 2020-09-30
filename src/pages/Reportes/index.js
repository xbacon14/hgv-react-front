import React from 'react';
import './style.css';

export default function Reportes() {

    return (
        <>
            <div className="container tabla col-11">
                <input className="form-control mb-6 col-4" id="tableSearch" type="text"
                    placeholder="Filtre por Nombre, Apellido, o CI" />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre y Apellido</th>
                            <th scope="col">CI</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Ciudad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Av Paraguay c/ Calle San Miguel N 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Italo Golin</td>
                            <td>5243358</td>
                            <td>0981 383 068</td>
                            <td>Calle San Miguel 912</td>
                            <td>Salto del Guairá</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="controlador-pagina">
                <div className="row">
                    <a href=""><svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg></a>
                    <a href=""><svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg></a>
                </div>
            </div>
        </>
    )
}