import Home from './home';
import EventDetail from './events/details';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/event/:eventId', component: EventDetail, exact: true },
];

export default routes;
