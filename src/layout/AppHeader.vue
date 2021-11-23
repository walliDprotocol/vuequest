<template>
  <v-app-bar app color="white" class="header" flat>
    <div class="d-flex align-center">
      <router-link
        to="/Dashboard"
        active-class=""
        class="header-button px-0 wallid-logo"
        text
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo-credential-issuers.png"
          transition="scale-transition"
          width="113"
        />
      </router-link>
      <div class="beta_logo ml-3">
        <p>BETA</p>
      </div>
    </div>

    <v-spacer></v-spacer>

    <router-link to="/Dashboard" prop="button" class="header-button " text>
      <DashBoardIcon />
      <span class="mx-2">{{ $t('header.dashboard') }}</span>
    </router-link>
    <router-link to="/PluginTest" prop="button" class="header-button " text>
      <DashBoardIcon />
      <span class="mx-2">PluginTest</span>
    </router-link>
  </v-app-bar>
</template>

<script>
import DashBoardIcon from '../assets/DashBoardIcon.vue';

export default {
  name: 'app-header',
  components: {
    DashBoardIcon,
  },
};
</script>
<style lang="scss">
.dca-verify-web .v-app-bar.header {
  margin: 0;
  .beta_logo {
    border-radius: 3px;
    background-color: #f84563;
    padding: 2px 7px;
    p {
      font-size: 10px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--white);
      margin-bottom: 0;
    }
  }
  .v-toolbar__content {
    padding-left: 0px;
    padding-right: 0px;
    margin: 0 auto;
    max-width: 1170px;
  }
  .header-button {
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: var(--charcoal-grey);

    text-decoration: none;
    display: flex;
    padding: 16px;
    &:last-child {
      margin-right: -24px;
    }
    span {
      margin-top: -2px;
    }
    &:hover:not(.wallid-logo) {
      color: var(--teal-blue);
      position: relative;
      svg {
        g {
          fill: var(--teal-blue);
        }
      }
    }
    &.router-link-active {
      color: var(--teal-blue);
      position: relative;

      &:after {
        content: '';
        position: absolute;
        height: 2px;
        background: #0ea4b5;
        bottom: -4px;
        left: 12px;
        width: calc(100% - 24px);
      }
      svg {
        g {
          fill: var(--teal-blue);
        }
      }
    }
  }
}
</style>
