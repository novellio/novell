<template lang="pug">
  .Write
    el-row
      el-col(:span="6")
        el-menu(theme="dark")
          el-menu-item-group(title="In Progress")
            el-menu-item(v-for="story in stories", :index="story.id") {{ story.name }}
      el-col(:span="18")
        el-card(:body-style="bodyStyle")
          Quill
</template>

<script>
import Quill from 'components/Quill';
export default {
  name: 'Write',
  data: () => ({
    stories: [
      {
        id: 'little-red',
        name: 'Little Red'
      },
      {
        id: 'the-big-bad',
        name: 'The Big Bad'
      }
    ],
    bodyStyle: {
      height: '100%'
    }
  }),
  components: {
    Quill
  }
}
</script>

<style lang="stylus" scoped>
  .Write, .el-row, .el-col, .el-menu, .el-card
    height 100%
  .el-card
    margin 10px
</style>
