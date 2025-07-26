
//Desafio Classificador de nível de Herói

//Variaveis
let personagem = [["Kael da Tempestade" , "752"],["Thorgar Punho de Pedra" , "1.230"], ["Eliris Guardian da Luz" , "2008"],["Dornak Coracao Selvagem" , "6881"],["Nerion Olho de Falcao" , "7558"],["Braknor, o Incansavel" , "9167"],["Varya da Nevoa Eterna" , "12765"]]

let niveis = [["Ferro","1000"],["bronze","2000"],["prata","5000"],["ouro","7000"],["platina","8000"],["ascendente","9000"],["imortal","10000"]]

//Estruturas Condicionais
if(personagem[0] <= niveis){
    console.log("O Herói de nome: " + personagem[0][0] + " esta no nivel: " + niveis[0][0])
}
if(personagem[1] >= niveis){
    console.log("O Herói de nome: " + personagem[1][0] + " esta no nivel: " + niveis[1][0])
}
if(personagem[0] >= niveis){
    console.log("O Herói de nome: " + personagem[2][0] + " esta no nivel: " + niveis[2][0])
}
if(personagem[0] >= niveis){
    console.log("O Herói de nome: " + personagem[3][0] + " esta no nivel: " + niveis[3][0])
}
if(personagem[0] >= niveis){
    console.log("O Herói de nome: " + personagem[4][0] + " esta no nivel: " + niveis[4][0])
}
if(personagem[0] >= niveis){
    console.log("O Herói de nome: " + personagem[5][0] + " esta no nivel: " + niveis[5][0])
}
if(personagem[0] > niveis){
    console.log("O Herói de nome: " + personagem[6][0] + " esta no nivel: " + niveis[6][0])
}