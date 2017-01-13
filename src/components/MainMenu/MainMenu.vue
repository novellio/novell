<template lang="pug">
  .MainMenu
    Logo
    router-link(to="/read") Read
    router-link(to="/write") Write
    router-link(to="/review") Review
</template>

<script>
import Logo from 'components/Logo';
export default {
  computed: {
    route() {
      return this.$route.path.substring(1);
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/colors.styl'
  @import '~styles/fonts.styl'

  .MainMenu
    background-color extra-light-gray
    height 60px
    width 100%
    display flex
    align-items center

  a
    { large-font }
    padding 18px 18px 14px
    color extra-light-black
    text-decoration none
    border-bottom 5px solid transparent
    transition border-color .3s, background-color .3s, color .3s
    &:hover
      border-bottom 5px solid blue

  .router-link-active
    color blue

  .el-menu
    border-radius 0
  .el-menu-item
    { large-font }
</style>
