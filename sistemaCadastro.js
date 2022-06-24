const rl =  require("readline-sync")
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

console.log("Bem vindo ao sistema de cadastro de eventos");
let nomeEvento = rl.question("Por favor, digite o nome do evento: ");
let anoEvento = rl.questionFloat("Informe o ano do evento ");
if(anoEvento < ano){
    console.log("Ano invalido, Por favor reinicie o processo.");
    return
};
let mesEvento = rl.questionFloat("Informe o mes do evento: ");
if(anoEvento == ano && mesEvento < (mes - 1) ){
    console.log("Mes invalido, por favor reinicie o processo. ");
    return
}
if(mesEvento > 12){
    console.log("Mes invalido, por favor reinicie o processo.");
    return
}
let diaEvento = rl.questionFloat("Informe o dia do Evento: ");
if( mesEvento == mes && diaEvento < dia){
    console.log("Data invalida, por favor reinicie o processo.");
    return
};
let dataEvento = (diaEvento + '/' + mesEvento + '/' + anoEvento);
let palestrante  = rl.question('Informe o nome do Palestrante: ');
let participantes = rl.questionFloat("Qual sera o Numero de participantes do evento? ");
if(participantes > 99){
    console.log("Quantidade invalida")
    return
}
for( cadastro = 0 ; cadastro <= (participantes-1); cadastro++){
participante = rl.question('Informe o nome do participante: ')
let idade = rl.questionFloat('Informe a idade do participante: ')
if (idade <= 17) {
    console.log("Idade inválida para cadastro!!");
}
}
console.log("-------------Cadastro realizado com sucesso------------");
console.log("-------------------------------------------------------");
console.log("   ");
console.log("Nome do evento: " + nomeEvento);
console.log("   ");
console.log("Palestrante: " + palestrante);
console.log("   ");
console.log("Numero de participantes: " + participantes);
console.log("   ");
console.log("Data do evento: " + dataEvento);