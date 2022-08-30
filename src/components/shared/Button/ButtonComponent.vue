<template>
  <button
    class="button"
    :type="type"
    :class="{
      default: typeStyle === 'default',
      danger: typeStyle === 'danger',
    }"
    @click="action"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      required: true,
      type: String,
    },
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    typeStyle: {
      type: String,
      default: "default",
    },
    confirm: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    action() {
      if (this.confirm) {
        if (confirm("Confimar operação?")) {
          this.$emit("activeButton");
        }
        return;
      }
      this.$emit("activeButton");
    },
  },
};
</script>

<style scoped lang="sass">
@import './button.scss'
</style>