// @flow
import Screens from "Screens";

const getRoutes = () => {
  return [
    {
      path: "/",
      exact: true,
      component: Screens.Home,
    },
  ];
};

export default getRoutes;
