const Data = [
  {id: 0, type: "Simple",
  question:"Olá visitante, nós do Museu MM Gerdau contamos com sua colaboração respondendo este questionário, para que nossa equipe possa melhorar o espaço para você!",
  answers:["Vamos Lá"]}, 
  {id: 1, type: "Simple",
  question:"Gênero:",
  answers:["Masculino","Feminino","Outros"]},
  {id: 2, type: "Simple",
  question:"Faixa Etária:",
  answers:["13 a 19 anos", "20 a 29 anos","30 a 39 anos","40 a 49 anos","50 a 59 anos","60+",]},
  {id: 3, type: "Simple",
  question:"Escolaridade:",
  answers:["Sem instrução escolar","Ensino fundamental incompleto", "Ensino Fundamental completo", "Ensino Médio incompleto", "Ensino Médio completo", "Ensino Superior incompleto", " Ensino Superior completo", "Pós-graduação incompleta", "Pós-graduação completa"]},
  {id: 4, type: "Simple",
  question:"Em relação à sua cor ou raça/etnia, como você se considera:",
  answers:[" Branca", "Preta", "Parda","Amarela","Indígena","Não desejo informar."]},
  {id: 5, type: "Simple",
    question:"Você possui alguma dificuldade ou deficiência permanente, que limite as suas atividades habituais?",
    answers:["Não","Auditiva","Intelectual/mental","Física/motora","Visual"]},
  {id: 6, type: "MoreOption",
  question:"Onde você mora?",
  answers:["BH","Região Metropolitana de BH","Interior de Minas Gerais", "Outro Estado", "Outro País"]},
  {id: 7, type: "Simple",
    question:"Em qual faixa de renda, aproximadamente, encontra-se a renda total de sua família por mês?",
    answers:["Zero a 1 Salário Mínimo","Acima de 1 a 2 Salários Mínimos","Acima de 2 a 5 Salários Mínimos","Acima de 5 a 10 Salários Mínimos","Acima de 10 a 20 Salários Mínimos","Acima de 20 Salários Mínimos", "Não desejo informar."]},
  {id: 8, type: "Simple",
  question:"Quantas vezes você nos visitou?",
  answers:["1ª Vez","2","3 ou mais"]},
  {id: 9, type: "MoreOption",
    question:"Você veio:",
    answers:["Sozinho","Acompanhado"]},
  {id: 10, type: "Simple",
  question:"Como você conheceu o MM Gerdau? Marque quantas opções desejar:",
  answers:["Internet","Redes sociais", "Rádio", "TV", "Jornal impresso","Amigos","Lona na frente do Museu", "Outros:"]},
  {id: 11, type: "Multiple",
    question:"Por que você veio ao MM Gerdau?",
    answers:["Turismo","Visita com escola","Trabalho escolar","Trabalho acadêmico ", "Ir à Loja","Ir à Cafeteria","Outros:"]},
  {id: 12, type: "Multiple",
    question:"Quais temas você procura aqui?",
    answers:["Cultura","Minerais","Arquitetura","Ciências", "História","Educação", "Outros:"]},
  {id: 13, type: "Multiple",
  question:"Marque onde você esteve ou por onde passou(quantas opções desejar):",
  answers:["Piso Liberdade (Exposição Térreo)"," Andar das Minas (Exposição 1º andar)","Andar do Metal (Exposição 2º Andar)"," Exposição Temporária","Evento ou Programação","Loja","Cafeteria","Ateliê Científico", "Banheiro", "Outros:"]},
  {id: 14, type: "Simple",
  question:"Como você avalia nossos serviços? HORÁRIO DE FUNCIONAMENTO",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 15, type: "Simple",
  question:"Como você avalia nossos serviços? ACESSO (facilidade de transporte, sinalização nas ruas)",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 16, type: "Simple",
  question:"Como você avalia nossos serviços? ACESSIBILIDADE DO ESPAÇO FÍSICO",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 17, type: "Simple",
  question:"Como você avalia nossos serviços? SINALIZAÇÃO (orientação de entrada, saída, banheiros…)",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 18, type: "Simple",
    question:"Como você avalia nossos serviços? CONFORTO (banheiros, guarda volumes, temperatura das salas…)",
    answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 19, type: "Simple",
    question:"Como você avalia nossos serviços? CONSERVAÇÃO (das exposições, dos equipamentos e objetos expostos…)",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 20, type: "Simple",
    question:"Como você avalia nossos serviços? LIMPEZA",
    answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 21, type: "Simple",
    question:"Como você avalia nossos serviços? ILUMINAÇÃO",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 22, type: "Simple",
    question:"Como você avalia nossos serviços? SEGURANÇA",
    answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 23, type: "Simple",
    question:"Como você avalia nossos serviços? ACOLHIMENTO (recepção, mediadores…)",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 24, type: "Simple",
    question:"Como você avalia nossos serviços? INFORMAÇÕES SOBRE AS EXPOSIÇÕES (totens, painéis, textos, filmes…)",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 25, type: "Simple",
    question:"Como você avalia nossos serviços? HORÁRIO DE FUNCIONAMENTO",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 26, type: "Simple",
    question:"Como você avalia nossos serviços? ACERVO/RÉPLICAS TÁTEIS OU EM RELEVO",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 27, type: "Simple",
    question:"Como você avalia nossos serviços? RECURSOS EM ALTO CONTRASTE E EM BRAILE",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 28, type: "Simple",
    question:"Como você avalia nossos serviços? LEITURA DE TELA COM VOZ DIGITAL E AUDIOGUIA",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 29, type: "Simple",
    question:"Como você avalia nossos serviços? TRADUÇÃO EM LIBRAS",
  answers:["ótimo","bom","regular","ruim","péssimo","não sei"]},
  {id: 30, type: "Simple",
    question:"Você recomendaria a visita ao MM Gerdau - Museu das Minas e do Metal?",
  answers:["Sim","Não","Não desejo informar"]},
]
export default Data