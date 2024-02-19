import appRoutes from './routes';

export default {
  [appRoutes.portfolio]: {
    name: 'Portfolio',
    icon: 'book',
  },
  [appRoutes.analysis]: {
    name: 'Analysis',
    icon: 'areachart',
  },
  [appRoutes.trade]: {
    name: 'Trade',
    icon: 'shoppingcart',
  },
};
