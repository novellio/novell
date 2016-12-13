<template lang="pug">
  .App
    MainMenu
    router-view
</template>

<script>
import MainMenu from 'components/MainMenu';
export default {
  name: 'Home',
  components: {
    MainMenu
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/colors.styl'
  .App
    background silver
    height 100%
</style>
