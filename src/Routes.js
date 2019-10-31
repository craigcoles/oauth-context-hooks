// @flow
import Screens from "Screens";

const getRoutes = () => {
  return [
    {
      path: "/",
      exact: true,
      component: Screens.Home,
    },
    {
      path: "/admin",
      exact: true,
      component: Screens.Admin,
    },
  ];
};

export default getRoutes;
