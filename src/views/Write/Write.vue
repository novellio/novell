<template lang="pug">
  .Write
    Sidebar(:fields="fields")
    .workspace
      Card
        h1(class="title")
          RTE(disableToolbar disableReturn="false" placeholder="Compose your title")
        RTE
</template>

<script>
import RTE from 'components/RTE';
import Sidebar from 'components/Sidebar';
import Card from 'components/Card';

export default {
  name: 'Write',
  data: () => ({
    fields: [
      {
        title: 'In Progress',
        items: [
          'Another test'
        ]
      },
      {
        title: 'Published',
        items: [
          `Here's an item`
        ]
      }
    ],
  }),
  components: {
    RTE,
    Card,
    Sidebar
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/colors.styl'
  .Write
    display flex
    background silver
    height 100%
  .workspace
    flex-grow 1
    display flex
  .Card
    flex-grow 1
    margin 10px
</style>
