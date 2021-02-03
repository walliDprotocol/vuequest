<template>
  <footer class="footer_wallid">
    <v-container class="">
      <v-row justify="space-around" class="mx-n6">
        <v-btn color="white" :ripple="false" text rounded class="my-2">
          <p>
            {{ $t("links.terms") }}
          </p>
        </v-btn>
        <v-btn color="white" :ripple="false" text rounded class="my-2">
          <p>
            {{ $t("links.privacy") }}
          </p>
        </v-btn>
        <v-btn
          color="white"
          :ripple="false"
          text
          rounded
          class="locale-changer my-2 pr-0"
        >
          <p>{{ $t("footer.language") }}</p>
          <v-select
            class="locale-changer"
            v-model="$i18n.locale"
            :items="langs"
            label="Combobox"
            item-text="name"
            item-value="id"
            single-line
            :hide-details="true"
            :ripple="false"
            :menu-props="{ contentClass: 'locale-changer select' }"
          >
            <template v-slot:append> <span> </span> </template>
          </v-select>
        </v-btn>

        <v-btn
          v-if="false"
          color="white"
          :ripple="false"
          text
          rounded
          class="my-2 pl-3"
        >
          <p>{{ $t("footer.contacts") }}</p>
        </v-btn>
        <v-spacer />
        <v-btn color="white" :ripple="false" text rounded class="my-2 mr-n4">
          <p>{{ $t("links.copyright") }}</p>
        </v-btn>
      </v-row>
    </v-container>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
      langs: [
        { id: "pt", name: "Português" },
        { id: "en", name: "English" },
        { id: "es", name: "Español" },
      ],
    };
  },
};
</script>
<style lang="scss">
.locale-changer {
  &.select {
    min-width: 114px !important;
    margin-top: -50px;

    .v-list {
      box-shadow: 0 2px 4px 0 var(--very-light-grey);
    }
    .v-list-item {
      min-height: unset;
      padding: 0 12px;

      color: var(--light-grey-blue) !important;
    }
    .v-list-item__content {
      padding: 4px 0;
    }
    .v-list-item__title {
      font-size: 11px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: var(--light-grey-blue);
    }
    .v-list-item--active {
      color: var(--teal-blue) !important;

      .v-list-item__title {
        color: var(--teal-blue);
      }

      &::before {
        opacity: 0;
      }
    }
    .v-list-item.v-list-item--highlighted::before {
      opacity: 0;
    }
  }
}
.footer_wallid {
  background: #f5f5f7;
  border-top: solid 1px var(--very-light-grey);
  .container {
    max-width: 1170px;
    .v-btn {
      text-transform: none;
      padding: 10px 16px;
    }
    .locale-changer {
      .v-btn__content {
        cursor: default;
        color: var(--light-grey-blue);
        &:hover {
          color: var(--light-grey-blue);
        }
      }
      .locale-changer.v-input {
        padding-top: 0;
        margin-top: 0;
        max-width: 80px;
      }
      .v-input__slot {
        &::before,
        &::after {
          content: none;
        }
        .v-select__selection--comma {
          margin: 0;
          margin-left: 4px;
        }
        input {
          padding: 0;
        }
      }
      .v-select__selection {
        font-size: 11px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--teal-blue);
      }
    }
    p {
      margin: 0;
    }
    .v-btn__content {
      font-size: 11px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: var(--light-grey-blue);
      margin: 0;
      &:hover {
        color: var(--teal-blue);
      }
    }
  }
}
</style>
