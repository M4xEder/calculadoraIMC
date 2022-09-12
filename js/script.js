//capitura o evento de submit do formulario.
const form = document.querySelector("#formulario");
form.addEventListener("submit", function(event){

    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if( !peso){
        setresult(' -- Peso inválido -- ', false);
        return;
    }
    if(!altura){
        setresult(' -- Altura Iválida --', false);
        return;
    }
    const imc = getImc( peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).` ;

    setresult(msg, true);
 
});

function getNivelImc(imc){
    const nivel =[ 'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade de grau 1', 'Obesidade de grau 2', 'Obesidade de grau 3'];
    if( imc >= 39.9) return nivel[5];
    if( imc >= 34.9) return nivel[4];
    if( imc >= 29.9) return nivel[3];
    if( imc >= 24.9) return nivel[2];
    if( imc >= 18.5) return nivel[1];
    if( imc < 18.5) return nivel[0];
    
    
}

function getImc( peso, altura){
const imc = peso / altura ** 2;
return imc.toFixed(2);
}


function criarP(){
    const p = document.createElement('p');
    return p;
}

function setresult(msg, isvalid){
    const result = document.querySelector("#result");
    result.innerHTML ='';

    const p = criarP();

    if (isvalid){
        p.classList.add('paragResult');
    }else{
        p.classList.add('bad');

    }

    p.innerHTML =msg;
    result.appendChild(p);
}

 