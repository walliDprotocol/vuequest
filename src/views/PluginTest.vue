<template>
  <v-container class="view-credential pt-16">
    <v-row>
      <v-col cols="12" class="pt-4">
        <h2 class="subtitle_header">
          {{ walletAddress }}
        </h2>
      </v-col>
      <v-col cols="12" class="tables-view"> </v-col>
    </v-row>
    <v-row v-for="(request, index) in requestAPI" :key="request.name">
      <v-col cols="12" md="4" class="pb-8 counters">
        <h2>{{ request.name }}</h2>
      </v-col>
      <v-col cols="12" md="4" class="pb-8 counters">
        {{ result[request.name] }}
      </v-col>

      <v-col cols="12" md="4" class="pb-8 counters">
        <v-btn
          elevation="5"
          color="teal"
          text
          @click="callMethod(request.name, index)"
        >
          {{ request.name }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      walletAddress: 'NOT CONNECTED',
      buttonText: 'Connect',

      result: {},

      requestAPI: [
        { name: 'unlockApp', args: ['password'] },
        { name: 'wallid_connect' },
        { name: 'wallet_address' },
        { name: 'wallid_disconnect' },
        { name: 'wallid_identities' },
        {
          name: 'wallid_import',
          args: ['TEST_ID', {}, true, 'expDate', 'idtName'],
        },
        { name: 'wallid_extract', args: ['TEST_ID'] },
        {
          name: 'wallid_import_cred',
          args: [
            'TEST_CRED',
            'credName',
            'caName',
            'photoURL',
            'userData',
            'status',
            true,
            'expDate',
          ],
        },
        { name: 'wallid_export_cred', args: ['TEST_CRED'] },
        { name: 'wallid_import_sign', args: [] },
        {
          name: 'wallid_import_social_profile',
          args: [
            'TEST_SOCIAL_PROFILE',
            'profileData',
            'username',
            'socialName',
            true,
          ],
        },
        { name: 'wallid_set_provider', args: [] },
        { name: 'wallet_encrypt', args: [] },
        { name: 'wallet_decrypt', args: [] },
        { name: 'wallet_sign_erc191', args: [] },
        { name: 'wallet_sign_ec', args: [] },
        { name: 'wallet_sign', args: [] },
        { name: 'wallet_verify', args: [] },
        { name: 'wallid_open' },
        // { name: 'generateSeedPhrase', args: [] },
        // { name: 'createNewVault', args: [] },
        { name: 'wallid_onboarding' },
      ],
    };
  },
  created() {},
  methods: {
    findMethodIndex(name) {
      return this.requestAPI.findIndex((e) => e.name === name);
    },
    async callMethod(name, index) {
      console.log(`Call method ${name} with: ${this.requestAPI[index].args}`);

      if (name === 'wallet_sign' && this.requestAPI[index].args.length === 0) {
        this.result[name] = 'Call wallet_address 1st';
        this.$forceUpdate();
        return;
      }
      try {
        const res = await window
          .wallid(name, this.requestAPI[index].args)
          .catch((err) => ({ error: err }));

        this.result[name] = res || 'Result is undefined';

        if (!res?.error) {
          switch (name) {
            case 'wallet_address':
              this.walletAddress = res;
              this.requestAPI[this.findMethodIndex('wallet_sign')].args = [res];
              break;
            case 'wallet_sign':
              this.requestAPI[this.findMethodIndex('wallet_verify')].args = [
                this.walletAddress,
                res,
              ];
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.log(error);
      }
      this.$forceUpdate();
    },
  },
};
</script>
<style lang="scss" scoped>
.counters {
  word-break: break-all;
}
</style>
