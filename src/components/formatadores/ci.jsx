import React from 'react';

const FormatCi = (ci) => {
    var separador = ".";
    var ciFormat = ci.split(separador);

    

    console.log('El ci es "' + ci + '"');
    console.log('El separador es "' + separador + '"');


    // var ciString = "5243358"
    var punto = ".";

    return ciFormat;

}

export default FormatCi;