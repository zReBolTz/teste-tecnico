import { dados } from "./dados";

let indice: number = 13;
let soma: number = 0;
let k: number = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
  console.log(soma);
}

function sequenciaDeFibonacci(num: number): string {
  if (num === 0 || num === 1)
    return `${num} pertence à sequência de Fibonacci.`;
  let a: number = 0;
  let b: number = 1;
  while (b < num) {
    const next: number = a + b;
    a = b;
    b = next;
  }
  if (b === num) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
} //

const resultadoFibonacci = sequenciaDeFibonacci(6);
console.log("=====================================");
console.log(resultadoFibonacci);
console.log("=====================================");

function faturamento() {
  const valores = dados.map((d) => d.valor).filter((v) => v > 0);
  const menorFaturamento = Math.min(...valores);
  const maiorFaturamento = Math.max(...valores);
  const mediaMensal =
    valores.reduce((acc, val) => acc + val, 0) / valores.length;
  const diasAcimaMedia = valores.filter((v) => v > mediaMensal).length;
  console.log(`Menor Faturamento: ${menorFaturamento}`);
  console.log(`Maior Faturamento: ${maiorFaturamento}`);
  console.log(`Faturamento acima da média: ${diasAcimaMedia}`);
}
faturamento();

interface FaturamentoPorEstado {
  estado: string;
  valor: number;
}

const faturamento2: FaturamentoPorEstado[] = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

function calcularPercentual(faturamento: FaturamentoPorEstado[]): void {
  const total = faturamento.reduce((acc, item) => acc + item.valor, 0);
  faturamento.forEach((item) => {
    const percentual = ((item.valor / total) * 100).toFixed(2);
    console.log(
      `Estado: ${item.estado}, Percentual de Representação: ${percentual}%`
    );
  });
}
calcularPercentual(faturamento2);

function inverterString(str: string): string {
  let inverted = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverted += str[i];
  }
  return inverted;
}

const resultadoInverterStrint = inverterString("Esse é um teste tecnico");
console.log(resultadoInverterStrint);
