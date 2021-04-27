let estudante = {
  nome: 'Joana',
  idade: 43,
  hardSkills: 3,
  softSkills: 6,
  carreiraSkills: 5
};

estudante.cidade = 'São Paulo';
estudante['comidaFavorita'] = 'Doritos';
estudante['nome'] = 'João';
estudante.apelidos = ['apelido1', 'apelido2', 'apelido3'];
estudante.endereco = {
  lagradouro: 'Rua Dalvo Trombeta',
  numero: 357
}

for (let key in estudante) {
  // console.log(key, estudante[key]);
};


//----------------------------------------------------//
//FUNÇÕES

function trybe(estudanteTrybe) {
  let pessoaDesenvolvedora = estudanteTrybe;

  pessoaDesenvolvedora.hardSkills = 10;
  pessoaDesenvolvedora.softSkills = 10;
  pessoaDesenvolvedora.carreiraSkills = 10;
  pessoaDesenvolvedora.tryber = true;

  return pessoaDesenvolvedora;
};

console.log(trybe(estudante));

console.log(estudante);



function soma (num1, num2) {
  return num1 + num2;
};

let valorSomado = soma(2, 5);

// console.log(valorSomado);