export default {
  signin: {
    title: "Crea y emite credenciales verificables para tu comunidad",
    button: "Inicia sesión con tu billetera MyWalliD",
    signup: ["¿Aún no tienes una billetera MyWalliD? "," Crea una aquí"],
  },
  signup: {
    step: ["Paso", "de"],
    steps: [
      {
        title: "Crea una billetera MyWalliD",
        subtitle:
          "Crea y administra tu cuenta con una billetera MyWalliD. Instala el plug-in de billetera y mantiene tus datos privados y protegidos en el navegador.",
        button: "Instalar plug-in",
        signup: ["¿Ya tienes una billetera MyWalliD?", "Inicia sesión"],
      },
      {
        title: "Configura la billetera MyWaliD",
        subtitle:
          "Sigue los pasos presentados en el plug-in MyWalliD a la derecha de la pantalla y termina de configurar la billetera.",
        button: "Crear billetera",
        signup: ["¿Ya tienes una billetera MyWalliD?", "Inicia sesión"],
      },
    ],
  },
  successModal: {
    email: {
      title: "Credencial enviada con éxito",
      text:
        " El miembro de tu comunidad recibió un correo electrónico para crear una billetera MyWalliD y almacenar su credencial. Una vez que lo haya hecho, recibirás una notificación para aprobar el compartimiento de la credencial y habilitar las funciones de verificación de terceros.",
    },
    wallet: {
      title: "Credencial emitida con éxito.",
      text:
        "La credencial se emitió con éxito a la billetera MyWalliD de tu miembro de la comunidad.",
    },
    credential: {
      title: "Credencial emitida con éxito.",
      text:
        "La credencial se emitió con éxito a la billetera MyWalliD de su miembro de la comunidad.",
    },
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "todas las plantillas de credenciales",
    emptyTemplate: "Añadir nueva plantilla",
    counters: {
      pending: "Aprobaciones pendientes",
      revoked: "Credenciales derogadas",
      templates: "Plantillas creadas",
      issued: "Credenciales emitidas",
      approved: "Credenciales aprobadas",
    },
  },
  profile: {
    title: "Perfil",
    linkBlockChain: "Verificar emisor de credenciales en Blockchain ",
    issuerID: "ID de emisor de credenciales en Blockchain",
    admins: {
      title: "Todos los admins",
      tabs: ["Todos los admins", "Masters", "Managers"],
      menu: ["Añadir nuevo administrador"],
    },
    credentials: {
      title: "Plantillas de credenciales",
      menu: ["Añadir nueva plantilla "," Eliminar plantilla"],
    },
  },
  issue: {
    title: "Emitir credenciales",
    new: "Emitir credenciales",
    menu: ["Emitir credenciales manualmente", "Emitir credenciales por archivo"],
    wallet: "Este miembro ya tiene una billetera MyWalliD",
    radio: ["Sí", "No"],
    walletField: "Dirección de la billetera MyWalliD del miembro acreditado",
    emailField: "Dirección de email del miembro acreditado",
    emailHint:
      "Se enviará un email automático a este miembro de tu comunidad para que pueda crear una billetera MyWalliD y almacenar su credencial..",
    button: "Siguiente",
  },
inBulkModal: {
    title: "Emitir credenciales por archivo",
        text1:
          "Sube un archivo con una tabla que contenga la información de los miembros para esta acreditación.",
        text2:
          "Asegura que los atributos descritos en el archivo se correspondan con los creados en la plantilla de esta credencial y que aparezcan en el mismo orden.",
        text3:
          "Confirma los detalles de las credenciales que se emitirán y envíalas a todos los miembros a continuación",
        upload: ["Arrastra o", "sube", "tu archivo"],
        hint: "Formato de archivo compatible: .xls, .csv, .numbers",
  },
  createCertModal: {
    title: "Añadir nueva plantilla de credenciales",
    upload: [
      "Importar logotipo del emisor de credenciales",
      "Tamaño máximo de archivo: 5 MB",
      "JPG o PNG solamente",
    ],
    errorUrlPhoto: "Sube un archivo de imagen",
    uploadButton: "importar archivo de imagen",
    name: "título de la plantilla de credencial",
    errorCertName: "Asigna un título a la plantilla de credenciales",
    radio: ["Tipo de credencial "," anverso "," anverso y reverso"],
    front: "Anverso",
    back: "Reverso",
    frontSide: {
      add: ["Añadir atributos a la credencial: "," Añadir"],
      dropdown: ["Atributo", "Tipo"],
      mandatory: "Obligatorio",
    },
    backSide: {
      add: ["Añadir atributos a la credencial: "," Añadir"],
      dropdown: ["Atributo "," Tipo "," Tipo de entrada"],
    },
    errorModule: "Agregue un módulo",
    errorType: "Agregue un tipo",
    errorAttribute: "Agregue un atributo",
    errorInput: "Asocie un tipo de entrada con el atributo",
    publicField: ["Atributo público "," elige un atributo público"],
    errorPublicField:
      "Elije un atributo público. No será una característica visible, pero te ayudará a identificar esta credencial entre todas las demás emitidas y presentadas por el dashboard.",
    hint:
      "Los usuarios de esta plataforma deben identificar fácilmente el atributo público..",
    card:
      "Confirme el diseño de la credencial y que los atributos estén bien configurados.",

    hintCard:
      "Una vez que crees esta plantilla de credenciales, no podrás volver atrás y editarla...",
  },
  createCAModal: {
    title: [
      "Bienvenido a WalliD para emisores de credenciales",
      "Configura la infraestructura digital de la entidad emisora",
    ],
    subtitle: "¡Vamos empezar!",
    text1:
      "¡¡Enhorabuena! El poder de administrar una entidad que emite credenciales digitales ahora está en tus manos. Sigue los pasos para configurarlo de un vistazo.",
    text2:
      "Nombra tu institución o comunidad:",
    caName: "Nombre de la entidad emisora",
    email: "Email",
    hint:
      "Asegúrate de que este sea un nombre reconocido públicamente, ya que estará asociado con todas las credenciales que emitirás y no podrás cambiarlo más adelante",
    errorCaName: "Asigna un nombre a la entidad de credenciales emisoras",
    errorEmail: "Añade un email",
  },
  cancelModal: {
    title: "Cancelar credencial",
    text:
      "¿Estás seguro de que deseas cancelar esta credencial? <br> No podrás deshacer esta acción después.",
  },
  viewCredential: {
    tabs: ["Todas las credenciales", "Pendiente", "Aprobado", "Derogado"],
    approved: "Aún no tienes una credencial aprobada.",
    pending: "No hay aprobaciónes pendientes.",
    revoked: "Sin credenciales derogadas.",
    noCredentials: [
      "Aún no tienes credenciales emitidas.",
      "Emitir la primera credencial",
      "¡ahora!",
    ],
    modal: {
      title: "Ver credencial",
    },
  },
  pendingTasks: {
    title: "Aprobaciones pendientes",
    tabs: ["Credenciales pendientes", "Aprobado"],
    emptyTable: "No hay aprobaciones pendientes por ahora",
  },
  header: {
    dashboard: "Dashboard",
    issuing: "Perfil de emisor de credenciales",
    settings: "Definiciones",
  },
  footer: {
    language: "Idioma:",
    contacts: "Contactos",
  },
  table: {
    search: "Buscar por 'nombre' o 'ID de credencial' ",
    searchAdmin: "Buscar por 'nombre' o 'Nivel' ",
    roles: {
      MASTER: "Master",
      MANAGER: "Manager",
    },
    noData: "Ningún resultado encontrado",
    menu: {
      view: "Ver credencial",
      approve: "Aprobar credencial",
      revoke: "Derogar credencial",
      cancel: "Cancelar credencial",
    },
  },
  status: {
    waiting_wallet: "Esperando billetera",
    pending_approval: "Aprobación pendiente",
    active: "Aprobado",
    revoke: "Derogado",
    pending: "Pendiente",
    activeA: "Activo",
  },
  links: {
    copyright: "©2021 Todos los derechos reservados. WalliD®",
    terms: "Términos y Condiciones",
    privacy: "Política de privacidad",
  },
  button: {
    next: "Siguiente",
    back: "Anterior",
    continue: "Siguiente",
    create: "Añadir plantilla",
    issue: "Emitir credencial",
    confirm: "Confirmar",
    cancel: "Cancelar Credencial",
  },
  tooltips: [
    {
      title: "Dashboard",
      text:
        "Una descripción general de la actividad de la entidad Emisora de Credenciales. Accede y completa todas las tareas pendientes a través de este panel",
    },
    {
      title: "Perfil de emisor de credenciales",
      text: "Administrar las plantillas de emisor de credenciales.",
    },
    {
      title: "Definiciones",
      text:
        "Accede a tu cuenta y verifca los permisos de esta entidad emisora de credenciales.",
    },
    {
      title: "Barra de aprobaciones pendientes",
      text:
        "Administra tareas pendientes y rápidas como aprobar o volver a registrar credenciales.",
    },
    {
      title: "Plantillas de credenciales",
      text:
        "Accede y crea plantillas de credenciales para este emisor de credenciales",
    },
    {
      title: "Desconectar",
      text:
        "Cierra la sesión en la cuenta a través del plug-in MyWallID, accesible a través del ícono en la barra de búsqueda de tu navegador.",
    },
  ],
};
