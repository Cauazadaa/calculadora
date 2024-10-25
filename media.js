onload = () => {
    document.querySelector('#bt-1').onclick= () => digito(1);
    document.querySelector('#bt-2').onclick= () => digito(2);
    document.querySelector('#bt-3').onclick= () => digito(3);
    document.querySelector('#bt-4').onclick= () => digito(4);
    document.querySelector('#bt-5').onclick= () => digito(5);
    document.querySelector('#bt-6').onclick= () => digito(6);
    document.querySelector('#bt-7').onclick= () => digito(7);
    document.querySelector('#bt-8').onclick= () => digito(8);
    document.querySelector('#bt-9').onclick= () => digito(9);
    document.querySelector('#bt-0').onclick= () => digito(0);
    document.querySelector('#bt-comma').onclick=  virgula; 
    document.querySelector('#bt-ac').onclick= limpa;
    document.querySelector('#bt-divide').onclick= () => operador('/');
    document.querySelector('#bt-minus').onclick= () => operador('-');
    document.querySelector('#bt-plus').onclick= () => operador('+');
    document.querySelector('#bt-times').onclick= () => operador('*');


    //variaveis para armazenar o valor, alterar o estado da calculaodra
}
let sValor = '0';
let newNumber = true;
const atualizarVisor = () => {
    let [parteInt, parteDec] = sValor.split(',');
    let v='';
    let c =0;
    for(let i = parteInt.length -1; i> 0; i --){
        if(++c>3){
            v = '.' + v;
            c = 1;
        }
        v = parteInt[i] +v;
    }
    v = v + (parteDec ? ',' + parteDec.substring(0,10 -v.length): '' );
    document.querySelector('#display').innerText = v;
}
//tratamento de click no botao
const digito = (n) => {
    if(newNumber){
        sValor =''+ n;
        newNumber = false;
    }
    else{
        sValor += n;
    atualizarVisor();
}
}
//clique na virgula(casas decimais)//
const virgula = () => {
    if(newNumber){
        sValor = '0,';
        newNumber = false;
    }
    else if (sValor .indexOf(',') == -1){
        sValor += ',';

    }
    atualizarVisor();
}
//clique no botao ALL CLEAR
const limpa = () => {
    sValor = '0';
    newNumber = true;
    atualizarVisor();
}
const operador = (op) => {
calcula();
//acumula a operação
}

