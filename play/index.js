import { configure } from 'vue-play';

const load = requireContext => requireContext.keys().map(requireContext);

const scenarios = load(require.context('../src/components', true, /.play.js$/));

configure(scenarios, module);
