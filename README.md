# PRUEBA LÓGICA

Solucción al algoritmo en Javascript que interpreta la variable fecha y entrega el día del año correspondiente



####Codigo Javascript　

```javascript
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
```