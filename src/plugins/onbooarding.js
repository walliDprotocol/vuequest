const WALLID = "Wallid";

const ONBOARDING_STATE = {
  INSTALLED: "INSTALLED",
  NOT_INSTALLED: "NOT_INSTALLED",
  REGISTERED: "REGISTERED",
  REGISTERING: "REGISTERING",
  RELOADING: "RELOADING",
};
// localStorage key
const REGISTRATION_IN_PROGRESS = "REGISTRATION_IN_PROGRESS";
const PLUGIN_INSTALLED = "PLUGIN_INSTALLED";
// forwarder iframe id
const FORWARDER_ID = "FORWARDER_ID";

const refreshInterval = 6000;

let t;

class Onboarding {
  #state = "";
  #forwarderOrigin;

  constructor(forwarderOrigin = "https://dev.wallid.io") {
    console.log("Constructor");
    this.#forwarderOrigin = forwarderOrigin;
    this.#state = this.isPluginInstalled()
      ? ONBOARDING_STATE.INSTALLED
      : ONBOARDING_STATE.NOT_INSTALLED;

    this.downloadUrl =
      "https://chrome.google.com/webstore/detail/wallid-wallet/eknlkogikcabnjbjnhmjllabckeapdii?hl=pt-PT";

    this._openForwarder = this._openForwarder.bind(this);
    this._openDownloadPage = this._openDownloadPage.bind(this);
    this.startOnboarding = this.startOnboarding.bind(this);
    this.stopOnboarding = this.stopOnboarding.bind(this);
    this.initializeReloader = this.initializeReloader.bind(this);

    if (localStorage.getItem(PLUGIN_INSTALLED) === "false" && this.inIframe()) {
      this.initializeReloader();
    }
  }
  isPluginInstalled() {
    const { wallid } = window;
    return wallid ? WALLID : undefined;
  }

  inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  /**
   * Starts onboarding by opening the Wallid Plugin download page and the Onboarding forwarder
   */
  startOnboarding() {
    localStorage.setItem(PLUGIN_INSTALLED, "false");
    localStorage.setItem(REGISTRATION_IN_PROGRESS, "true");

    this._openDownloadPage();
    this._openForwarder(this.#forwarderOrigin);
  }

  /**
   * Stops onboarding registration, including removing the injected forwarder (if any)
   *
   * Typically this function is not necessary, but it can be useful for cases where
   * onboarding completes before the forwarder has registered.
   */
  stopOnboarding() {
    if (localStorage.getItem(REGISTRATION_IN_PROGRESS) === "true") {
      console.log("Removing forwarder");
      localStorage.setItem(REGISTRATION_IN_PROGRESS, "false");
      Onboarding._removeForwarder();
    }
  }

  _openForwarder(forwarderOrigin) {
    console.log("InjectingForwarder", forwarderOrigin);
    const container = document.body;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("style", "display: none;");
    iframe.setAttribute("src", forwarderOrigin);
    iframe.setAttribute("id", FORWARDER_ID);
    container.insertBefore(iframe, container.children[0]);
  }

  _openDownloadPage() {
    window.open(this.downloadUrl, "_blank");
  }

  sendParentMessage() {
    console.log("clearTimeout");
    clearTimeout(t);
    localStorage.setItem(PLUGIN_INSTALLED, "true");
    Onboarding._removeForwarder();
    window.parent.close();

    // if (event.data.type === "plugin:installed") {
    //   console.log("Onboarding complete; closing window");
    //   localStorage.setItem(REGISTRATION_IN_PROGRESS, "false");

    //   window.close();
    // } else {
    //   console.debug(`Ignoring unrecognized message from parent`);
    // }
  }
  initializeReloader() {
    console.log("Starting reloader");

    console.log("stat event", window.wallid);
    if (window.wallid == undefined) {
      window.addEventListener("wallid_event_ready", this.sendParentMessage);
      t = setTimeout(() => window.location.reload(), refreshInterval);
    } else {
      this.sendParentMessage();
    }
  }
  /**
   * Checks whether the Wallid plugin extension is installed
   */
  static _register() {
    return window.wallid("wallid_register");
  }

  static _removeForwarder() {
    document.getElementById(FORWARDER_ID).remove();
  }
}

export default Onboarding;
