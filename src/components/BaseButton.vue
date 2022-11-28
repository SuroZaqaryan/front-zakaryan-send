<template>
  <button v-on="$listeners" :class="color"
          class="text-white font-medium py-2 px-4 rounded-md sm:w-full">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    variant: {
      type: String
    }
  },

  model: {
    prop: "value",
    event: "update"
  },

  computed: {
    color() {
      return {
        'bg-blue-default hover:bg-blue-dark': this.variant === 'blue',
        'bg-teal-default hover:bg-teal-dark': this.variant === 'teal',
        'bg-green-default hover:bg-green-dark': this.variant === 'green'
      }
    },
  },
}
</script>
