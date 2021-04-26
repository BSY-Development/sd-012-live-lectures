//posicao da rainha
let posicaoRainhaLinha = 8;
let posicaoRainhaColuna = 8;

//posicao peca alvo
let posicaoPecaLinha = 9;
let posicaoPecaColuna = 9;

let ataqueBemSucedido = false;

if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) {
  ataqueBemSucedido = true;
};

//Diagonal superior direita
for (let supDir = 1; supDir < 8; supDir += 1) {
  let linhaRainha = posicaoRainhaLinha + supDir;
  let colunaRainha = posicaoRainhaColuna + supDir;

  if (linhaRainha > 8 || coluna > 8) {
    break;
  };

  if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
    ataqueBemSucedido = true;
  };
};


console.log(ataqueBemSucedido);