<template lang="pug">
  .Write
    el-row
      el-col(:span="6")
        //- Sidebar
        el-menu(theme="dark")
          el-menu-item-group(title="Stories")
            el-menu-item(v-for="story in stories", :index="story.id") {{ story.name }}
      el-col(:span="18")
        el-card(:body-style="bodyStyle")
          h1(class="title")
            RTE(disableToolbar disableReturn="false" placeholder="Compose your title")
          RTE
</template>

<script>
import RTE from 'components/RTE';
import Sidebar from 'components/Sidebar';

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
    RTE
  }
}
</script>

<style lang="stylus" scoped>
  .Write, .el-row, .el-col, .el-menu, .el-card
    height 100%
  .el-card
    margin 10px
</style>
