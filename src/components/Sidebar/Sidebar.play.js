import { play } from 'vue-play';
import SideBar from './Sidebar.vue';

play('Sidebar', module)
  .add('default', h(Sidebar, []));
