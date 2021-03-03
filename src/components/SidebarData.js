import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Etusivu',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Varaa paikka',
        path: '/reserve',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Omat varaukset',
        path: '/reservations',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Tuotteiden hinnoittelu',
        path: '/price',
        icon: <FaIcons.FaMoneyBillWave />,
        cName: 'nav-text'
    },
    {
        title: 'Myynnin seuranta',
        path: '/saldo',
        icon: <FaIcons.FaMoneyCheck />,
        cName: 'nav-text'
    },
    {
        title: 'Omat tiedot',
        path: '/personal',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Kirjaa ulos',
        path: '/logout',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Tietoa palvelusta',
        path: '/info',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]