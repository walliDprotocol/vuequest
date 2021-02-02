/* eslint-disable */

const WALLID = "Wallid";
const LANG_KEY = "language";

import consts from "../consts";

const mixinPlugin = {
  name: "mixinPlugin",
  components: {},
  computed: {},
  created() {},
  methods: {
    initLang() {
      let browserLang = navigator.language.substring(0, 2);
      let lang = localStorage.getItem(LANG_KEY) || browserLang;

      var check = this.langs.filter(function(elm) {
        if (elm.id == lang) {
          return elm.id; // returns length = 1 (object exists in array)
        }
        // return self.$i18n.locale;
      });
      this.$i18n.locale = check.length > 0 ? check[0].id : "en";
    },
    scrollInto(id, offset) {
      this.$log.debug(id, offset);

      this.$nextTick(() => {
        var element = document.getElementById(id);
        var headerOffset = offset;
        var elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        var offsetPosition = elementPosition - headerOffset;
        var behavior = "smooth";
        window.scrollTo({
          top: offsetPosition,
          behavior: behavior,
        });
      });
    },
    debug(a, ...args) {
      if (this) {
        let methodName = this.getMethodName();

        this.$log.debug(methodName + " | ", a, ...args);
      } else {
        console.log(a, ...args);
      }
    },
    logError(a, ...args) {
      if (this) {
        this.$log.error(a, ...args);
      } else {
        console.error(a, ...args);
      }
    },
  },
  data() {
    return {
      WAITING_WALLET: consts.WAITING_WALLET,
      PENDING_APPROVAL: consts.PENDING_APPROVAL,
      APPROVED: consts.APPROVED,
      REVOKED: consts.REVOKED,
      ACTIVE: consts.ACTIVE,
      PENDING: consts.PENDING,

      WALLID: WALLID,
    };
  },
};

/* eslint-enable */
export default mixinPlugin;
