var area=document.getElementById("area");

function entrar(){
   // alert("clicou");
   var nome =prompt ("digite seu nome");
   //console.log(nome);
   area.innerHTML="bem vindo " +nome+ " ";

   //criando um botao dentro do HTML a partir do JS
   let botaoSair = document.createElement('button');
   botaoSair.innerHTML = "sair da conta";
   botaoSair. onclick = sair;
   area.appendChild(botaoSair);
}

function sair(){
    alert("ate mais");
    area.innerHTML = "voce saiu";
}