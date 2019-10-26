<template>
  <div
    :class="{
      'vue-murkup': type === 'murkup'
    }"
    v-html="markup"
  />
</template>

<script>
export default {
  name: 'Markup',

  props: {
    type: {
      type: String,
      default: 'markup'
    },
    markup: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';

.vue-murkup {
  $r: &;
  display: inline-block;
  position: relative;
  font-family: $font;
  font-size: $input-font-size;
  width: 100%;
  &__inner {
    position: relative;
    width: 100%;
  }
}
</style>
