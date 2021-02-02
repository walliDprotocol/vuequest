<template>
  <v-container class="view-credential pt-16">
    <v-row>
      <v-col cols="12" md="9" class="pr-16">
        <v-row>
          <v-col cols="12" class="pt-4">
            <h2 class="subtitle_header">
              name credential
            </h2>
          </v-col>
          <v-col cols="12" class="tables-view">
            <v-data-table
              :headers="credentialsHeaders"
              :items="allEntriesTable"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="3" class="pb-8 counters">
        <v-row class="pt-16">
          <v-col cols="12" class=" pb-2 px-0">
            <v-card>
              <v-card-text class="strong_text">
                <IconIssuedCredentials />
                <div>
                  <p>number</p>
                  <span>actives </span>
                </div>
              </v-card-text>
            </v-card>

            <p>waiting_wallet</p>
            <p>revoked_wallet</p>
          </v-col>
          <!-- <v-col cols="12" class="pt-2 pb-2 px-0">
            <v-card style="opacity:0;" :height="50" @click="sync"> </v-card>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {},
  props: {
    tid: {
      required: true,
    },
  },

  watch: {},

  computed: {},
  created() {},
  mounted() {
    if (this.tid) this.getTemplate();
  },
  methods: {
    getTemplate() {
      console.log("tid", this.tid);

     
    },
  },
  data() {
    return {
      template: {},
      allEntriesTable: [],
      credentialsHeaders: [
        {
          text: "Public Attr",
          align: "start",
          value: "public_field.value",
        },
        { text: "Credential ID", value: "id" },
        {
          text: "Status",
          value: "status",
          sortable: false,
          filterable: false,
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          filterable: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.view-credential {
  padding: 0;
}

.tables-view.col {
}
</style>
