<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 17 17"
    @click="$emit('home')"
  >
    <g fill="none" fill-rule="evenodd">
      <g :fill="color" fill-rule="nonzero">
        <g>
          <g>
            <g>
              <path
                d="M5.464 7.286H.607c-.335 0-.607.272-.607.607v7.286C0 16.185.815 17 1.821 17h3.643c.336 0 .607-.272.607-.607v-8.5c0-.335-.271-.607-.607-.607zm-.607 8.5H1.821c-.335 0-.607-.272-.607-.607V8.5h3.643v7.286zM15.18 0H1.82C.815 0 0 .815 0 1.821v3.643c0 .336.272.607.607.607h15.786c.335 0 .607-.271.607-.607V1.821C17 .815 16.185 0 15.179 0zm.607 4.857H1.214V1.821c0-.335.272-.607.607-.607H15.18c.335 0 .607.272.607.607v3.036zm.607 2.429h-8.5c-.335 0-.607.272-.607.607v8.5c0 .335.272.607.607.607h7.286C16.185 17 17 16.185 17 15.179V7.893c0-.335-.272-.607-.607-.607zm-.607 7.893c0 .335-.272.607-.607.607H8.5V8.5h7.286v6.679z"
                transform="translate(-910 -114) translate(0 89) translate(910 25)"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 17,
    },
    color: {
      type: String,
      default: "#373c43",
    },
  },
};
</script>
