

import {FormSoma} from '../elementos/form-soma'
function somar(){
    let valor1 = parseInt(document.getElementById('v1').value);
    //alert(valor1);
    let valor2 = parseInt(document.getElementById('v2').value);
    //alert(valor2);
    let soma = valor1 + valor2;
   // alert(soma);
    let eResul = document.getElementById('resultado2');
    if(eResul.textContent == undefined){
        eResul.textContent = String(soma);
    }else{
        eResul.innerHTML = String(soma);
    }
    
}

function fatorial(){
    let valor1 = parseInt(document.getElementById('fac1').value);
    let fact = valor1;
    while(valor1 > 1){
        valor1 = valor1 -1;
        fact *= valor1;
    }
    let eResul = document.getElementById('resultado');
    if(eResul.textContent == undefined){
        eResul.textContent = String(fact);
    }else{
        eResul.innerHTML = String(fact);
    }
    
}

export {somar}
export {fatorial}