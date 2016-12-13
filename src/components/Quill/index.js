import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default {
  name: 'Quill',
  data: () => ({
    editor: null
  }),
  render: h => <div className="Quill"></div>,
  mounted() {
    this.editor = new Quill(this.$el, {
      theme: 'snow'
    });
  }
};
