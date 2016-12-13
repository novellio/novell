<template lang="pug">
  el-menu(theme="light" mode="horizontal" router=true, :default-active="route")
    Logo
    el-menu-item(index="read") Read
    el-menu-item(index="write") Write
    el-menu-item(index="review") Review
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
@import '~styles/fonts.styl'

.el-menu
  border-radius 0
.el-menu-item
  { large-font }
</style>
