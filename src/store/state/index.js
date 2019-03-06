import icons from './icons';

const newState = {
  icons,
  componentMap: {
    App: {
      componentName: 'App',
      htmlElements: [],
      children: ['child1']
    },
    child1: {
      componentName: 'child1',
      htmlElements: [],
      children: []
    }
  },
  displaySidebar: true
};

export default newState;
