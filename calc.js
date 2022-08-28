var teclas = document.querySelectorAll(".keys");
var telinha = document.querySelector(".calculator_display");

var calculo;
teclas.forEach((tecla)=>{

    tecla.addEventListener('click',()=>{

     switch(tecla.classList[1]){


        case 'key--number':

        if(telinha.innerHTML.toString()!= "0" && telinha.innerHTML.toString()!= calculo){
                telinha.innerHTML += `${tecla.value}`;
        }else{
                telinha.innerHTML= `${tecla.value}`;
        }
        break;
    case 'key--operator':

        telinha.innerHTML+= `${tecla.value}`;

        break;
    case 'key--pointer':
        telinha.innerHTML+= `${tecla.value}`;

        break;
    case 'key--limpar':
        telinha.innerHTML+="0";
        calculo=null;

        break;
    case 'key--equal':
    var calculoT = telinha.innerHTML.toString();

    calculo = eval(calculoT);

    telinha.innerHTML = `${calculo}`;

    break;
    
    default:
        telinha.innerHTML - "error"

}});


})
