<template>
  <v-card
    @click="$emit('open', name)"
    :class="blank ? 'new_credential' : ''"
    class="credential_button"
  >
    <v-card-text>
      <CrendentialIcon v-if="!blank" />
      <IconAddNewTemplate v-else />
      <span>{{ name }}</span>
    </v-card-text>
  </v-card>
</template>

<script>
import CrendentialIcon from '../../assets/icon-credential';
import IconAddNewTemplate from '../../assets/icon-add-new-template.vue';

export default {
  name: 'CredentialButton',
  components: {
    IconAddNewTemplate,
    CrendentialIcon,
  },
  props: {
    name: {
      required: true,
    },
    blank: {},
  },
};
</script>

<style lang="scss">
.credential_button.v-card.v-sheet {
  padding: 18px 16px;
  box-shadow: 0 2px 4px 0 var(--very-light-grey);
  border: solid 1px transparent;
  .v-card__text {
    height: 32px;
    position: relative;
    svg,
    span {
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
    span {
      margin-left: 44px;
    }
  }
  .v-ripple__container {
    color: var(--teal-blue) !important ;
  }
  .v-card--link:focus:before {
    opacity: 0;
  }
  cursor: pointer;
  &:hover {
    border: solid 1px var(--teal-blue);
  }
  .v-card {
    &__text {
      padding: 0;
      display: flex;
      span {
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: var(--charcoal-grey);
      }
    }
  }
  &.new_credential {
    background-color: transparent;
    border: dashed 1px var(--teal-blue);
    span {
      color: var(--teal-blue);
    }
  }
}
</style>
