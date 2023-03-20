function coletarDados(){
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    //console.log(peso)
    //console.log(altura)
    CalcularIMC(peso, altura)
}

function CalcularIMC(argPeso, argAltura){
    /*
        IMC = Peso / (altura * altura)
    */

    //console.log(argPeso)
    //console.log(argAltura)

    let imc = argPeso / (argAltura * argAltura)
    //console.log(imc)
    document.getElementById("res").innerHTML = imc
    ClassificarIMC(imc)

}

function ClassificarIMC(argImc){
    /*
        IMC MENOR OU IGUAL A 18.5 = Desnutrição
        IMC MAIOR QUE 18.5 E MENOR OU IGUAL A 25 = Peso Normal
        IMC MAIOR QUE 25 E MENOR OU IGUAL A 30 = Sobrepeso
        IMC MAIOR QUE 30 E MENOR OU IGUAL A 35 = Obesidade Nivel 1
        IMC MAIOR QUE 35 E MENOR OU IGUAL A 40 = Obesidade Nivel 2
        IMC MAIOR QUE 40 = Obesidade Nivel 3
    */
    let classificacao = ""

   if (argImc <= 18.5){
        classificacao = "Desnutrição"
   }
   else if(argImc <= 25){
        classificacao = "Peso Normal"
   }
   else if(argImc <= 30){
       classificacao = "Sobrepeso"
   }
   else if(argImc <= 35){
       classificacao = "Obesidade I"
   }
   else if(argImc <= 40){
       classificacao = "Obesidade II"
   }
   else{
       classificacao = "Obesidade III"
   }

   //console.log(classificacao)
   document.getElementById("status").innerHTML = classificacao
}