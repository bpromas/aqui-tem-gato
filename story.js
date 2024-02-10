const pages = [
  {
    id: 1,
    paragraphs: ["gatinho", "gatinho no mato"],
    options: [
      { text: "otro gato", goto: 2 },
      { text: "mais gato", goto: 6 },
    ],
  },
  {
    id: 2,
    paragraphs: ["gatinho", "a mimir"],
    options: [
      { text: "otro gato", goto: 3 },
      { text: "mais gato", goto: 6 },
    ],
  },
  {
    id: 3,
    paragraphs: ["gatinho", "gatinho crente temente a deus"],
    options: [
      { text: "otro gato", goto: 4 },
      { text: "mais gato", goto: 6 },
    ],
  },
  {
    id: 4,
    paragraphs: ["gatinho", "gatinho mim deixa mimir"],
    options: [
      { text: "otro gato", goto: 5 },
      { text: "mais gato", goto: 6 },
    ],
  },
  {
    id: 5,
    paragraphs: ["gatinha", "gatinha princesa"],
    options: [{ text: "mais gato", goto: 6 }],
  },
  {
    id: 6,
    paragraphs: ["gatinhos", "two mimir"],
    options: [
      { text: "acorda eles", goto: 7 },
      { text: "mais gato", goto: 11 },
    ],
  },
  {
    id: 7,
    paragraphs: ["gatinhos", "two mimindo ainda"],
    options: [
      { text: "acorda esses vagabundo desempregado", goto: 8 },
      { text: "bota mais gato", goto: 11 },
    ],
  },
  {
    id: 8,
    paragraphs: ["gatinhos", "um acordou"],
    options: [
      { text: "manda ele acordar o irmão", goto: 9 },
      { text: "3 gato agora pfv", goto: 11 },
    ],
  },
  {
    id: 9,
    paragraphs: ["gatinhos", "briga fraterna"],
    options: [
      { text: "otros gato", goto: 10 },
      { text: "mais gato mano", goto: 11 },
    ],
  },
  {
    id: 10,
    paragraphs: [
      "nunca mais me acorda",
      "ta me ouvindo? nunca mais me acorda quando eu tô a mimir",
    ],
    options: [{ text: "chama otro gato pra apazigua ", goto: 11 }],
  },
  {
    id: 11,
    paragraphs: ["3 gato", "eles tão tramando algo"],
    options: [
      { text: "dá nada", goto: 12 },
      { text: "preparar para a batalha", goto: 13 },
    ],
  },
  {
    id: 12,
    paragraphs: ["emboscada", "cê morreu"],
    options: [
      { text: "putz morri", goto: 1 },
      { text: "voltar no tempo tipo o bem 10", goto: 11 },
    ],
  },
  {
    id: 13,
    paragraphs: ["3 gato", "é a hora da batalha"],
    options: [
      { text: "acabar com um deles", goto: 14 },
      { text: "se render", goto: 16 },
    ],
  },
  {
    id: 14,
    paragraphs: ["restam 2", "se render não é mais opção"],
    options: [
      { text: "usar a violência", goto: 16 },
      { text: "usar a estratégia", goto: 15 },
    ],
  },
  {
    id: 15,
    paragraphs: [
      "espere",
      "você nos venceu, mas me escute, eu tenho uma oferta importante para você",
    ],
    options: [
      { text: "escute-o", goto: 18 },
      { text: "manda o gato se lascar", goto: 16 },
    ],
  },
  {
    id: 16,
    paragraphs: [
      "você foi capturado e levado perante a alta cúpula da realeza felina",
      "você está sendo acusando de não dar sachê quando voce claramente tinha um monte de sachê na gavetinha, como responde?",
    ],
    options: [
      { text: "culpado", goto: 17 },
      { text: "inocente vossa excelência", goto: 17 },
      {
        text: "explicar que no capitalismo não tem como dar sachê sempre que tem porque senão acaba",
        goto: 17,
      },
    ],
  },
  {
    id: 17,
    paragraphs: ["a alta cúpula nem te escutou", "te mandaram foi pra jaula"],
    options: [{ text: "me ferrei (recomeçar)", goto: 1 }],
  },
  {
    id: 18,
    paragraphs: [
      "você está perante ao gato galático",
      "escolha uma recompensa, e deixe nosso povo em paz",
    ],
    options: [
      { text: "dinheiro infinito", goto: 100 },
      { text: "só quero minha paz de volta", goto: 101 },
      { text: "quero a paz e a união entre os nossos povos", goto: 102 },
      { text: "atacar o gato galático", goto: 103 },
    ],
  },
  {
    id: 100,
    paragraphs: ["você tem dinheiro infinito", "boa"],
    options: [
      { text: "recomeçar", goto: 1 },
      { text: "voltar pro gato galato", goto: 18 },
      { text: "voltar pra batalha", goto: 11 },
    ],
  },
  {
    id: 101,
    paragraphs: ["tudo voltou ao normal", "pena que o normal é uma merda"],
    options: [
      { text: "recomeçar", goto: 1 },
      { text: "voltar pro gato galato", goto: 18 },
      { text: "voltar pra batalha", goto: 11 },
    ],
  },
  {
    id: 102,
    paragraphs: [
      "porra caralho",
      "não esse tipo de união gato burro do caralho",
      "credooooooo ai q nojo desse filme",
    ],
    options: [
      { text: "recomeçar", goto: 1 },
      { text: "voltar pro gato galato", goto: 18 },
      { text: "voltar pra batalha", goto: 11 },
    ],
  },
  {
    id: 103,
    paragraphs: ["você morreu", "boa"],
    options: [{ text: "recomeçar", goto: 1 }],
  },
];

export default pages;
