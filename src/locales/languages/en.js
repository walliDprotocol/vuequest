export default {
  signin: {
    title: "Customise and issue verifiable credentials for your community",
    button: "Sign in with MyWalliD wallet",
    signup: ["Don't have a MyWalliD wallet?", "Create one"],
  },
  signup: {
    step: ["Step", "of"],
    steps: [
      {
        title: "Create a MyWalliD wallet",
        subtitle:
          "Create and manage your account with MyWalliD wallet. Install the wallet plug-in and keep your data always private in your browser.",
        button: "Install plug-in",
        signup: ["Already have a MyWalliD wallet? ", "Sign in"],
      },
      {
        title: "Setup MyWalliD wallet",
        subtitle:
          "Follow the steps on MyWalliD plug-in on the right and complete your wallet setup.",
        button: "Create wallet",
        signup: ["Already have a digital wallet? ", "Sign in"],
      },
      {
        title: "Sign in",
        subtitle:
          "Sign in with MyWalliD wallet and keep your data always private.",
      },
    ],
  },
  successModal: {
    email: {
      title: "Credential successfully sent",
      text:
        " Your member has received an email to setup his MyWalliD wallet. Once he's done that,  you will be notified to approve the issuance of the credential and enable the thir party verification features.",
    },
    wallet: {
      title: "Credential successfully issued",
      text:
        "The credential was successfully issued to your member's MyWalliD wallet.",
    },
    credential: {
      title: "Credential successfully issued",
      text:
        "The credential was successfully issued to your member MyWalliD wallet.",
    },
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "All credential templates",
    emptyTemplate: "Add new template",
    counters: {
      pending: "Pending approvals",
      revoked: "Revoked credentials",
      templates: "Templates created",
      issued: "Credentials issued",
      approved: "Approved Credentials",
    },
  },
  profile: {
    title: "Profile",
    linkBlockChain: "Verify Credential Issuer on the Blockchain ",
    issuerID: "Credential Issuer ID on the Blockchain",
    admins: {
      title: "All admins",
      tabs: ["All admins", "Masters", "Managers"],
      menu: ["Add new Admin"],
    },
    credentials: {
      title: "Credential templates",
      menu: ["Add new template", "Delete template"],
      empty: [
        "It seems that you don't have any credential templates.",
        "Add a credential template",
        "now!",
      ],
    },
  },
  issue: {
    title: "Issue Credentials",
    new: "Issue Credentials",
    menu: ["Issue credentials manually", "Issue credentials in bulk"],
    wallet: "Does the credentialed person have a MyWalliD wallet?",
    radio: ["Yes", "No"],
    walletField: "Credentialed person MyWalliD address",
    emailField: "Credentialed person email address",
    emailHint:
      "An automatic email will be generated and sent so the credentialed person can setup a MyWalliD wallet and receive this credential.",
    button: "Next",
  },
  inBulkModal: {
    title: "Issue Credentials in bulk",
    text1:
      "Upload a file with a table containing all the members information for this credential.",
    text2:
      "Make sure your file has the same atributes and in the same order as you defined in the credential template on the platform and that they are ordered from left to right in the same line on the table.",
    text3:
      "Confirm the data on the credentials to be issued and send them to all the members displayed below.",
    upload: ["Drag and drop or ", "upload ", " your spreadsheet"],
    hint: "Accepted spreadsheet document extensions: .xls, .csv, .numbers",
  },
  createCertModal: {
    title: "Add new credential template",
    upload: [
      "Upload Credential Issuer Logo",
      "Max. file size: 5 MB",
      "JPG or PNG only",
    ],
    errorUrlPhoto: "Please upload a photo",
    uploadButton: "Upload photo",
    name: "Credential template name",
    errorCertName: "Please add a name for your credential template",
    radio: ["Credential template type", "Front side", "Front and back side"],
    front: "Front side",
    back: "Back side",
    frontSide: {
      add: ["Add attributes to your credential:", "Add"],
      dropdown: ["Attribute", "Input type"],
      mandatory: "Mandatory",
    },
    backSide: {
      add: ["Add attributes categories to your credential template:", "Add"],
      dropdown: ["Attribute", "Type", "Input type"],
    },
    errorModule: "Please add a module",
    errorType: "Please add a type",
    errorAttribute: "Please add an attribute",
    errorInput: "Please add an input type to the attribute",
    publicField: ["Public Attribute", "Select public attribute"],
    errorPublicField:
      "Please choose a public attribute. It won't be visible anywhere else but will help you identify this credential amongst all others in your credentials table",
    hint:
      "The public attribute will be visible by anyone accessing the platform and will act as the identifier for this credential.",
    card:
      "Confirm credential layout and if the attributes are rightly configured.",

    hintCard:
      "Once you create this credential template you won't be able to come back and edit it.",
  },
  createCAModal: {
    title: [
      "Welcome to WalliD for Credential Issuers",
      "Setup the digital infrastructure for the Credential Issuer",
    ],
    subtitle: "Let's Get started!",
    text1:
      "Congratulations! You now have the power to manage a digital credential issuer infrastructure. Follow the next steps to set it up in an instant.",
    text2:
      "Provide the name of your institution or community in order to generate a unique and verificable online ID:",
    caName: "Credential Issuer name",
    email: "E-mail",
    hint:
      "Make sure it is a publicly recognised name since it will be associated to every credential you will issue and you won't be able to change it later on.",
    errorCaName: "Please add a name to this Credential Issuer entity",
    errorEmail: "Please add an valid email",
  },
  cancelModal: {
    title: "Cancel Credencial",
    text:
      "Are you sure you want cancel this credential? <br> You won't be able to undo this action.",
  },
  viewCredential: {
    tabs: ["All credentials", "Pending", "Approved", "Revoked"],
    approved: "It seems that you don't have any approved credentials yet.",
    pending: "No pending approvals.",
    revoked: "No revoked credentials.",
    noCredentials: [
      "It seems that you don't have any credentials issued yet.",
      "Issue your first credential",
      "now!",
    ],
    modal: {
      title: "View credential",
    },
  },
  pendingTasks: {
    title: "Pending approvals",
    tabs: ["Pending Credentials ", "Approved "],
    emptyTable: "It looks like you don't have any pending approvals for now",
  },
  header: {
    dashboard: "Dashboard",
    issuing: "Credential Issuer Profile",
    settings: "Settings",
  },
  footer: {
    language: "Language:",
    contacts: "Contact us",
  },
  table: {
    search: "Search by name or Credential ID",
    searchAdmin: "Search by name or role",
    roles: {
      MASTER: "Master",
      MANAGER: "Manager",
    },
    noData: "No matching records found",
    menu: {
      view: "View credential",
      approve: "Approve credential",
      revoke: "Revoke credential",
      cancel: "Cancel credential",
    },
  },
  status: {
    waiting_wallet: "Waiting for wallet",
    pending_approval: "Pending approval",
    active: "Approved",
    revoke: "Revoked",
    pending: "Pending",
    activeA: "Active",
  },
  links: {
    copyright: "©2021 All Rights Reserved. WalliD®",
    terms: "Terms and conditions",
    privacy: "Privacy Policy",
  },
  button: {
    add: "Add Another",
    next: "Next",
    back: "Back",
    continue: "Continue",
    create: "Add template",
    issue: "Issue credential",
    confirm: "Confirm",
    cancel: "Cancel Credential",
  },
  tooltips: [
    {
      title: "Dashboard",
      text:
        "An overview for the Credential Issuer entity activity. Access and complete all pending tasks from this dashboard.",
    },
    {
      title: "Credential Issuer profile",
      text: "Manage Credential Issuer templates, admins and permissions.",
    },
    {
      title: "Settings",
      text:
        "Access your account and check permissions for this Credential Issuer entity",
    },
    {
      title: "Pending approvals tab",
      text:
        "Manage quick and pending tasks such as approving or revoking issued credentials.",
    },
    {
      title: "Credential templates",
      text:
        "Access and create credential templates for this Credential Issuer entity.",
    },
    {
      title: "Sign out",
      text:
        "Go to MyWalliD wallet plug-in through the icon on your browser to sign out.",
    },
  ],

  templateEditor: {
    categories: { issuerInfo: "issuerInfo", courseInfo: "courseInfo" },
    attributes: {
      issuer_name: "**issuer_name**",
      course_name: "**course_name**",
      credencial_id: "**credencial_id**",
      issue_date: "**issue_date**",
      expiry_date: "**expiry_date**",
      start_date: "**start_date**",
      end_date: "**end_date**",
      grade: "**grade**",
      signatures: "**signatures**",
    },
  },
};
