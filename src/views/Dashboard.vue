<template>
  <v-container class="dashboard px-0">
    <v-row>
      <!-- <v-col cols="12" class="pt-10 breadcrumbs">
        <p v-show="isOpenCredendial" class="">
          <DashBoardIcon
            :size="14"
            :color="'#b8b9bb'"
            style="cursor: pointer;"
          />
          <IconArrowCreadCrumbs style="margin: 0px 6px 2px 6px" />
          <span style="margin: 2px 6px 2px 2px; position:absolute">
            {{ credential }}</span
          >
        </p> 
      </v-col> -->
      <v-col cols="12" class="pt-15">
        <h1 class="title_header">{{ caName }} {{ $t("dashboard.title") }}</h1>
      </v-col>
      <v-col cols="6" class="pt-4">
        <h2 class="subtitle_header">
          {{ $t("dashboard.subtitle") }}
        </h2>
      </v-col>
      <v-col cols="12" md="9" class="pb-8 pt-0 pr-16">
        <v-row class="pb-5 pt-2">
          <v-col
            v-for="cred in templates"
            :key="cred.tid"
            cols="4"
            class="pa-2 pr-3 "
          >
            <CredentialButton @open="openCredential(cred)" :name="cred.name" />
          </v-col>
        </v-row>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
// import { mapGetters } from "vuex";
import CredentialButton from "../components/CredentialButton";

import { mapGetters } from "vuex";

export default {
  name: "SignIn",
  components: {
    CredentialButton,
  },
  created() {
    console.log("Dashboard");
  },
  watch: {
    templates(value) {
      console.log(value);
      this.showCreateCAModal = value.length < 1 ? true : false;
    },
  },
  mounted() {},

  computed: {
    ...mapGetters([
      "caName",
      "templates",
    ]),
    cid() {
      // gets updated automatically
      return this.$store.state.cid;
    },
    totalTemplatesCounter() {
      return this.$store.state.templates.length;
    },
    templates() {
      // gets updated automatically
      return this.$store.state.templates;
    },
    hasCredentials() {
      return !this.$isProduction || this.templates.length < this.maxTemplatesCounter; // return true for testing
    },
  },
  methods: {
    addNewTemplate() {
      this.showNewTemplateModal = true;
    },
    openCredential(cred) {
      this.showNewTemplateModal = false;
      console.log(cred.tid);
      if (cred.tid) {
        this.$router.push({
          name: "ViewCredential",
          query: { tid: cred.tid },
        });
      }
    },
  },
  data() {
    return {
      pendingCounter: 0,
      totalTemplates: 0,
      startingStep: 0,
      showCreateCAModal: false,
      showNewTemplateModal: false,
    };
  },
};
</script>

<style lang="scss"></style>
