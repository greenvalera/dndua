import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import React, {ReactNode} from "react";

export interface MenuItem {
  icon?: ReactNode,
  title: string,
  items?: MenuItem[],
  to?: string
}

export const items: MenuItem[] = [
  {
    icon: <PeopleAltOutlinedIcon />,
    title: "Раси",
    items: [
      {
        title: "Людина",
        to: "/race/human",
        items: []
      },
      {
        title: "Эльф",
        to: "/race/elf",
        items: []
      },
      {
        title: "Дварф",
        to: "/race/dwarf",
        items: []
      },
      {
        title: "Напів-рослик",
        to: "/race/halfling",
        items: []
      },
      {
        title: "Гном",
        to: "/race/gnome",
        items: []
      },
      {
        title: "Напів-єльф",
        to: "/race/halfelf",
        items: []
      },
      {
        title: "Напів-орк",
        to: "/race/halforc",
        items: []
      },
      {
        title: "Драконороджений",
        to: "/race/dragonborn",
        items: []
      },
    ]
  },
  {
    icon: <HikingOutlinedIcon />,
    title: "Класи",
    items: [
      {
        title: "Варвар",
        to: '/class/barbarian',
      },
      {
        title: "Бард",
        to: '/class/bard',
      },
      {
        title: "Жрець",
        to: '/class/cleric',
      },
      {
        title: "Друід",
        to: '/class/druid',
      },
      {
        title: "Воїн",
        to: '/class/fighter',
      },
      {
        title: "Монах",
        to: '/class/monk',
      },
      {
        title: "Паладін",
        to: '/class/paladin',
      },
      {
        title: "Рейнджер",
        to: '/class/ranger',
      },
      {
        title: "Плут",
        to: '/class/rogue',
      },
      {
        title: "Чарівник",
        to: '/class/wizard',
      },
      {
        title: "Чаклун",
        to: '/class/sorcerer',
      },
      {
        title: "Відьмар",
        to: '/class/warlock',
      },
    ]
  },
  {
    icon: <MenuBookOutlinedIcon />,
    title: "Заклинання",
    to: '/spells',
  },
  {
    icon: <HandymanOutlinedIcon />,
    title: "Предмети",
    to: '/items',
  }
];
