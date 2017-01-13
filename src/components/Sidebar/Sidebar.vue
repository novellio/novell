<template lang="pug">
  .Sidebar
    .Sidebar__section(v-for="section in fields")
      .Sidebar__title {{ section.title }}
      .Sidebar__item(v-for="story in section.items") {{ story }}
</template>

<script>
export default {
  props: {
    "fields": {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="stylus">
  @import "~styles/colors.styl"
  @import "~styles/fonts.styl"

  .Sidebar
    background-color light-black
    height 100%
    min-width 200px

    &__section
      margin 15px

    &__title
      { large-font }
      margin-bottom 10px
      color extra-light-silver

    &__item
      color gray
      display block



</style>
