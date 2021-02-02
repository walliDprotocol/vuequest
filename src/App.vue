<template>
  <v-app class="dca-verify-web">
    <v-container fluid class="pa-0"> <router-view></router-view> </v-container
  ></v-app>
</template>

<script>


export default {
  name: "App",

  created() {
    this.initLang();
  },
  computed: {},
  components: {},
  methods: {},
  data() {
    return {
      langs: [
        { id: "pt", name: "Português" },
        { id: "en", name: "English" },
        { id: "es", name: "Español" },
      ],
    };
  },
};
</script>
