<template>
  <v-app>
    <app-header />
    <main>
      <LoadingScreen :loading="isLoading" />

      <v-container v-if="!isLoading" class="router-views">
        <v-row>
          <v-col cols="12" md="12" class="pb-8 pt-0 ">
            <transition origin="center" mode="out-in" :duration="250">
              <router-view />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </main>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import LoadingScreen from "../components/LoadingScreen";

import { DASHBOARD } from "../store/actions";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppFooter,
    LoadingScreen,
  },
  created() {
    console.log("Home created");
    this.$store
      .dispatch(DASHBOARD)
      .then(() => (this.isLoading = false))
      .catch((err) => {
        console.error(err.message);
        // localStorage.removeItem
      });
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
<style lang="scss">
.counters {
  .v-card {
    box-shadow: 0 2px 4px 0 var(--very-light-grey) !important;
  }
  .v-card__text {
    display: flex;
    padding: 34px 30px;
    padding-right: 0;
    p {
      font-size: 20px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--charcoal-grey);
      margin-left: 20px;
      margin-bottom: 8px;
    }
    span {
      margin-top: 16px;
      margin-left: 20px;
    }
  }
}

.fade-enter-active {
  transition: opacity 0.3s 0s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.5s 0s ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
