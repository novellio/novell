<template lang="pug">
  .Editor
</template>

<script>
import MediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/beagle.css';

export default {
  name: 'RTE',
  data: () => ({
    editor: null
  }),
  props: {
    buttons: {
      type: Array,
      default: () => ['bold', 'italic', 'underline']
    },
    disableToolbar: {
      type: Boolean,
      default: false
    },
    disableReturn: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Tell your story"
    }
  },
  mounted() {
    this.editor = new MediumEditor(this.$el, {
      disableReturn: this.disableReturn,
      keyboardCommands: !this.disableToolbar,
      placeholder: {
        text: this.placeholder
      },
      toolbar: !this.disableToolbar ? {
        buttons: this.buttons
      } : false
    });
  }
}
</script>

<style lang="stylus">
  .Editor
    outline none
</style>
