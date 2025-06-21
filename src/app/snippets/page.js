"use client";

import { useState } from "react";

const snippets = [
  {
    id: 0,
    title: "Definição de Ponteiro",
    code: `\\exemplo
    int num = 10;
    int* ptr = &num;`,
    explanation: "Um ponteiro é uma variável capaz de armazenar um endereço de memória ou o endereço de outra variável."
  },
  {
    id: 1,
    title: "Inicialização de Ponteiros",
    code: `int* ptr = &x;`,
    explanation: "O ponteiro `ptr` é inicializado com o endereço da variável `x`. Ele agora pode ser usado para acessar ou modificar o valor de `x` indiretamente."
  },
  {
    id: 2,
    title: "Ponteiros de Tipos Diferentes",
    code: `float* ptr = &y;`,
    explanation: "O ponteiro `ptr` é específico para o tipo `float`. Ponteiros devem ter o mesmo tipo da variável que estão apontando."
  },
  {
    id: 3,
    title: "Ponteiros Nulos",
    code: `int* ptr = nullptr;`,
    explanation: "Um ponteiro inicializado como `nullptr` indica que ele não está apontando para nenhuma região de memória válida. Isso ajuda a evitar ponteiros selvagens."
  },
  {
    id: 4,
    title: "Acesso a valor através de Ponteiro",
    code: `int valor = *ptr;`,
    explanation: "Ao usar o operador `*`, acessamos o valor armazenado no endereço para o qual o ponteiro aponta. Neste exemplo, `valor` recebe o conteúdo de `ptr`."
  },
   {
    id: 5,
    title: "Acesso ao endereço de memória",
    code: `ptr = &variavel;`,
    explanation: "O operador & é usado para obter o endereço de uma variável. "
  },
  {
    id: 6,
    title: "Ponteiros para Arrays",
    code: `int* ptr = array;`,
    explanation: "O ponteiro `ptr` aponta para o primeiro elemento do array. Podemos usá-lo para percorrer o array com aritmética de ponteiros."
  },
  {
    id: 7,
    title: "Alocação Dinâmica de Inteiros",
    code: `int* ptr = new int(10);`,
    explanation: "O ponteiro `ptr` é inicializado com memória alocada dinamicamente para armazenar um inteiro. O valor `10` é atribuído a esta memória."
  },
  {
    id: 8,
    title: "Liberação de Memória",
    code: `delete ptr;`,
    explanation: "Usamos `delete` para liberar a memória que foi alocada dinamicamente para evitar vazamentos de memória."
  },
  {
    id: 9,
    title: "Ponteiro de Ponteiro",
    code: `int** ptr2 = &ptr;`,
    explanation: "`ptr2` é um ponteiro que armazena o endereço de outro ponteiro (`ptr`). Isso permite acesso indireto a múltiplos níveis de endereçamento."
  },
  {
    id: 10,
    title: "Passagem de Parâmetro",
    code: `void func(int* ptr) {\n    *ptr = 20;\n}`,
    explanation: "Neste exemplo, a função `func` recebe um ponteiro como parâmetro e modifica o valor original da variável para a qual ele aponta."
  },
  {
    id: 11,
    title: "Ponteiros Constantes",
    code: `const int* ptr = &x;`,
    explanation: "Um ponteiro para uma constante (`const int*`) permite acessar o valor da variável, mas impede que o ponteiro modifique o valor."
  }
];

export default function PointerHelper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectSnippet = (index) => {
    setCurrentIndex(index);
  };

  const { title, code, explanation } = snippets[currentIndex];

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Snippets</h2>
        <ul className="snippet-list">
          {snippets.map((snippet, index) => (
            <li
              key={snippet.id}
              className={`snippet-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => selectSnippet(index)}
            >
              {snippet.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="content-title">C++ Pointer Helper</h1>
        <div className="snippet-card">
          <h2 className="snippet-title">{title}</h2>
          <pre className="snippet-code">
            <code>{code}</code>
          </pre>
          <p className="snippet-explanation">{explanation}</p>
        </div>
      </div>
    </div>
  );
}

