
function diastranscurridos(fecha){
    if(fecha.includes('/')){
        fecha = fecha.split('/');        
        fecha = fecha[1] + "/" + fecha[0] + "/" + fecha[2];
    }
    let fechaInicio = new Date('0/0/2019');
    let fechaFinal = new Date(fecha);
    fechaInicio.setFullYear(fechaFinal.getUTCFullYear());
    let miliSegundosDia = 24 * 60 * 60 * 1000;
    let miliSegundosTranscurridos = Math.abs(fechaInicio.getTime() - fechaFinal.getTime());
    let diasTranscurridos = Math.round(miliSegundosTranscurridos/miliSegundosDia) + 1;
    return diasTranscurridos;
}

console.log('************************* EJEMPLOS QUE VIENEN EN EL EJERCICIO *************************');

let fechaDias = diastranscurridos('01/01/2019');
console.log(fechaDias); // 1

fechaDias = diastranscurridos('04/02/2019');
console.log(fechaDias); // 35

fechaDias = diastranscurridos('31/December/2019');
console.log(fechaDias); // 365

console.log('************************* FEBRERO 04 2019 *************************');

fechaDias = diastranscurridos('04/02/2019');
console.log(fechaDias);

fechaDias = diastranscurridos('2019-02-04');
console.log(fechaDias);

fechaDias = diastranscurridos('04/February/2019');
console.log(fechaDias);

console.log('************************* ENERO 01 2019 *************************');
fechaDias = diastranscurridos('01/01/2019');
console.log(fechaDias);

fechaDias = diastranscurridos('2019-01-01');
console.log(fechaDias);

fechaDias = diastranscurridos('01/January/2019');
console.log(fechaDias);

console.log('************************* DICIEMBRE 31 2019 *************************');
fechaDias = diastranscurridos('31/12/2019');
console.log(fechaDias);

fechaDias = diastranscurridos('2019-12-31');
console.log(fechaDias);

fechaDias = diastranscurridos('31/December/2019');
console.log(fechaDias);

console.log('************************* OTROS EJEMPLOS *************************');
fechaDias = diastranscurridos('30/11/2050');
console.log(fechaDias);

fechaDias = diastranscurridos('2040-03-01');
console.log(fechaDias);

fechaDias = diastranscurridos('30/December/2015');
console.log(fechaDias);