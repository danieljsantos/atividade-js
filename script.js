let saudacao = alert("Bem vindo a Escadas S.A.");

let degraus;

while(isNaN(degraus)){
    degraus = Number(prompt("Informe a quantidade de degraus"));
}
let tipo = prompt("Escolha o tipo do material \n1-#\n2-@\n3-$");

let i;
let x = [degraus];

for(i = 1; i <= degraus; i++){    
    if(tipo == 1){
        x.push('#');
        console.log(x);
    }else if (tipo == 2){
        x.push('@');
        console.log(x);
    } else{
        x.push('$');
        console.log(x);
    }
   
}