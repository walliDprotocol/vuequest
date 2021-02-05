export default {
  signin: {
    title: "Crie e emita credenciais verificáveis para a sua comunidade",
    button: "Entre com a sua carteira MyWalliD",
    signup: ["Ainda não tem uma carteira MyWalliD?", "Crie uma aqui"],
  },
  signup: {
    step: ["Passo", "de"],
    steps: [
      {
        title: "Crie uma carteira MyWalliD",
        subtitle:
          "Crie e gira a sua conta com uma carteira MyWalliD. Instale o plug-in da carteira e mantenha os seus dados sempre privados e protegidos no browser.",
        button: "Instalar plug-in",
        signup: ["Já tem uma carteira MyWalliD? ", "Entre"],
      },
      {
        title: "Configure a carteira MyWalliD",
        subtitle:
          "Siga os passos apresentados no plug-in MyWalliD à direita do ecrã e termina a configuração da sua carteira.",
        button: "Criar carteira",
        signup: ["Já tem uma carteira MyWalliD? ", "Entre"],
      },
    ],
  },
  successModal: {
    email: {
      title: "Credencial enviada com suecsso",
      text:
        " O membro da sua comunidade recebeu um email para criar uma carteira MyWalliD e armazenar a sua credencial. Assim que o tiver feito, você irá receceber uma notificação para aprovar a partilha da credencial e habilitar as funções de verificação por terceiros.",
    },
    wallet: {
      title: "Credencial emitida com sucesso.",
      text:
        "A credencial foi emitida com sucesso para carteira MyWalliD do membro da sua comunidade.",
    },
    credential: {
      title: "Credencial emitida com sucesso.",
      text:
        "A credencial foi emitida com sucesso para carteira MyWalliD do membro da sua comunidade.",
    },
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Todos os templates de credenciais",
    emptyTemplate: "Adicionar novo template",
    counters: {
      pending: "Aprovações pendentes",
      revoked: "Credenciais revogadas",
      templates: "Templates criados",
      issued: "Credenciais emitidas",
      approved: "Credenciais Aprovadas",
    },
  },
  profile: {
    title: "Perfil",
    linkBlockChain: "Verificar Emissor de Credenciais na Blockchain ",
    issuerID: "ID do Emissor de Credenciais na Blockchain",
    admins: {
      title: "Todos os admins",
      tabs: ["Todos os admins", "Masters", "Managers"],
      menu: ["Adicionar novo Admin"],
    },
    credentials: {
      title: "Templates de credenciais",
      menu: ["Adicionar novo template", "Apagar template"],
    },
  },
  issue: {
    title: "Emitir Credenciais",
    new: "Emitir credenciais",
    menu: ["Emitir credenciais manualmente", "Emitir credenciais por ficheiro"],
    wallet: "Este membro já tem uma carteira MyWalliD",
    radio: ["Sim", "Não"],
    walletField: "Endereço da carteira MyWalliD do membro credenciado",
    emailField: "Endereço de email do membro credenciado",
    emailHint:
      "Um email automático será gerado e enviado para este membro da sua comunidade para que ele possa criar uma carteira MyWalliD e armazenar a sua credencial.",
    button: "Seguinte",
  },
  inBulkModal: {
    title: "Emitir credenciais por ficheiro",
    text1:
      "Carregue um ficheiro com uma tabela contendo a informação dos membros respectiva a esta credencial.",
    text2:
      "Garanta que os atributos descritos no ficheiro correspondem aos que criou no template desta credencial e que aparecem pela mesma ordem.",
    text3:
      "Confirme os dados das credenciais a emitir e envie-as a todos os membros apresentados em baixo.",
    upload: ["Arraste ou ", "carregue ", " o seu ficheiro"],
    hint: "Formato de ficheiros compatíveis: .xls, .csv, .numbers",
  },
  createCertModal: {
    title: "Adicionar novo template de credencial",
    upload: [
      "Importar logo do Emissor de Credenciais",
      "Max. file size: 5 MB",
      "apenas JPG ou PNG",
    ],
    errorUrlPhoto: "Por favor carregue um ficheiro de imagem",
    uploadButton: "importar ficheiro de imagem",
    name: "Nome de template de credencial",
    errorCertName: "Por favor atribua um nome ao template da credencial",
    radio: ["Tipo de credencial", "frente", "frente e verso"],
    front: "Frente",
    back: "verso",
    frontSide: {
      add: ["Adicione atributos à credencial:", "Adicionar"],
      dropdown: ["Atributo", ""],
      mandatory: "Obrigatório",
    },
    backSide: {
      add: ["Adicione atributos à credencial:", "Adicionar"],
      dropdown: ["Atributo", "Tipo", "Tipo de input"],
    },
    errorModule: "Por favor adicione um módulo",
    errorType: "Por favor adicione um tipo",
    errorAttribute: "Por favor adicione um atributo",
    errorInput: "Por favor associe um tipo de input ao atributo",
    publicField: ["Atributo publico", "Seleccione atributo público"],
    errorPublicField:
      "Por favor escolha um atributo público. Não será uma funcionalidade visível mas vai ajudar-te a identificar esta credencial no meio de todas as outras emitidas e apresentadas pelo dashboard",
    hint:
      "O atributo público deverá ser facilmente identificado pelos utilizadores desta plataforma.",
    card:
      "Confirme o layout da credencial e se os atributos estão bem configurados.",

    hintCard:
      "Assim que criar este template de credencial não irá poder voltar atrás e editá-la.",
  },
  createCAModal: {
    title: [
      "Bem-vindo à WalliD para Emissores de Credenciais",
      "Configure a infrastrutura digital da Entidade Emissora",
    ],
    subtitle: "Vamos começar!",
    text1:
      "Parabéns! O poder de gerir uma entidade emissora de credenciais digitais está agora nas suas mãos. Percorra os passos seguintes para a configurar num instante",
    text2: "Atribua um nome à sua Instituição ou comunidade:",
    caName: "Nome da entidade emissora",
    email: "E-mail",
    hint:
      "Certifique-se que este é um nome reconhecido publicamente uma vez que será associado a todas as credenciais que vier a emitir, e não poderá ser alterado mais à frente",
    errorCaName: "Por favor atribua um nome à entidade Emissora de Credenciais",
    errorEmail: "Adicione um email",
  },
  cancelModal: {
    title: "Cancelar credencial",
    text:
      "De certeza que quer cancelar esta credencial? <br> Não será possível desfazer esta acção depois",
  },
  viewCredential: {
    tabs: ["Todas as credenciais", "Pendentes", "Aprovadas", "Revogadas"],
    approved: "Ainda não tem numa credencial aprovada.",
    pending: " Nenhuma aprovação pendente.",
    revoked: " Nenhuma credencial revogada.",
    noCredentials: [
      "Ainda não tem nenhuma credencial emitida.",
      "Emitir primeira credencial",
      "agora!",
    ],
    modal: {
      title: "Ver credencial",
    },
  },
  pendingTasks: {
    title: "Aprovações pendentes",
    tabs: ["Credenciais pendentes ", "Aprovada "],
    emptyTable: "Sem aprovações pendentes por agora",
  },
  header: {
    dashboard: "Dashboard",
    issuing: "Perfil Emissor de Credenciais",
    settings: "Definições",
  },
  footer: {
    language: "Língua:",
    contacts: "Contactos",
  },
  table: {
    search: "Procurar por 'nome' ou 'ID de credencial' ",
    searchAdmin: "Procurar por 'nome' ou 'Nível' ",
    roles: {
      MASTER: "Master",
      MANAGER: "Manager",
    },
    noData: "Nenhum resultado encontrado",
    menu: {
      view: "Ver credencial",
      approve: "Aprovar credencial",
      revoke: "Revogar credencial",
      cancel: "Cancelar credencial",
    },
  },
  status: {
    waiting_wallet: "À espera da carteira",
    pending_approval: "Aprovação pendente",
    active: "Aprovado",
    revoke: "Revogado",
    pending: "Pendente",
    activeA: "Activo",
  },
  links: {
    copyright: "©2021 Todos os Direitos Reservados. WalliD®",
    terms: "Termos e condições",
    privacy: "Política de Privacidade",
  },
  button: {
    next: "Seguinte",
    back: "Anterior",
    continue: "Continuar",
    create: "Adicionar template",
    issue: "Emitir credencial",
    confirm: "Confirmar",
    cancel: "Cancelar Credencial",
  },
  tooltips: [
    {
      title: "Dashboard",
      text:
        "Uma vista geral da actividade da entidade Emissora de Credenciais. Aceda e complete todas as tarefas pendentes através deste dashboard ",
    },
    {
      title: "Perfil do Emissor de Credenciais",
      text: "Gira os templates do Emissor de Credenciais.",
    },
    {
      title: "Definições",
      text:
        "Aceda à sua conta e verifique as perimissões para esta entidade Emissora de Credenciais.",
    },
    {
      title: "Barra de aprovações pendentes",
      text:
        "Gira as tarefas pendentes e rápidas como aprovar ou regovar credenciais.",
    },
    {
      title: "Templates de credenciais",
      text:
        "Aceda e crie templates de credenciais para esta entidade Emissora de Credenciais",
    },
    {
      title: "Sign out",
      text:
        "Faça Sign out da conta através do plug-in MyWallID, acessível através do ícone na barra de pesquisa do seu browser.",
    },
  ],
};
