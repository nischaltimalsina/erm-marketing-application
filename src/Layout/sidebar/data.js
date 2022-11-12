import {
  BsGrid,
  BsBarChart,
  BsHddStack,
  BsMegaphone,
  BsChatSquare,
  BsCartCheck,
  BsGear,
  BsClock,
} from "react-icons/bs";

import {
  RiHomeLine,
  RiMenu2Line,
  RiFolderChartLine,
  RiCalendarLine,
  RiChat4Line
} from "react-icons/ri";

let user = {
  name: "",
  role: "admin",
};

const data = [
  {
    title: "Dashboard",
    icon: BsGrid,
    link: "/",
  },
  {
    title: "Messages",
    icon: BsChatSquare,
    link: `/${user.role}/messages`,
  },
  {
    title: "My tasks",
    icon: BsHddStack,
    link: `/${user.role}/tasks`,
  },
  {
    title: "Orders",
    icon: BsCartCheck,
    link: `/${user.role}/orders`,
  },

  {
    title: "Time manager",
    icon: BsClock,
    link: `/${user.role}/time-manage`,
  },
  {
    title: "Reports",
    icon: BsBarChart,
    link: `/${user.role}/reports`,
  },
  {
    title: "Settings",
    icon: BsGear,
    link: `/${user.role}/settings`,
  },
  {
    title: "Documentation",
    icon: BsMegaphone,
    link: `/${user.role}/documentation`,
  },
];

export default data;

export const mobileMenuData = [
  {
    title: "Menu",
    icon: RiMenu2Line,
    link: "",
    children: [
      {
        title: "Projects",
        icon: BsChatSquare,
        link: `/${user.role}/projects`,
      },
      {
        title: "Orders",
        icon: BsCartCheck,
        link: `/${user.role}/orders`,
      },
      {
        title: "Reports",
        icon: BsBarChart,
        link: `/${user.role}/reports`,
      },
      {
        title: "Settings",
        icon: BsGear,
        link: `/${user.role}/settings`,
      },
      {
        title: "Documentation",
        icon: BsMegaphone,
        link: `/${user.role}/documentation`,
      },
    ],
  },
  {
    title: "Dashboard",
    icon: RiHomeLine,
    link: "/",
  },
  {
    title: "My tasks",
    icon: RiFolderChartLine,
    link: `/${user.role}/tasks`,
  },
  {
    title: "Time manager",
    icon: RiCalendarLine,
    link: `/${user.role}/time-manage`,
  },
  {
    title: "Messages",
    icon: RiChat4Line,
    link: `/${user.role}/messages`,
  },
];
