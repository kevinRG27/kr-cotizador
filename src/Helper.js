//Obtiene diferencia de años
export function obtenerDiferenciaYear(year){
    var fecha = new Date();
    var ano = fecha.getFullYear();
    return ano - year;
}

//Calcular segun año
export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'americano': 
            incremento = 1.15;
            break;
         
        case 'asiatico': 
            incremento = 1.05;
            break;
            
        case 'europeo': 
            incremento = 1.30 ;
            break;
        default : 
            break;
    }
    return incremento
}

//Calcular tipo
export function calcularPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

//Primer letra mayuscula
export function primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}