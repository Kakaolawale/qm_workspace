import React from 'react'
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from './sidebar.module.css'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Quick Space",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "TeleMedics",
        path: "/dashboard/telemedics",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "QuickCalls",
        path: "/dashboard/quickcalls",
        icon: <MdShoppingBag />,
      },
      {
        title: "App Traffic",
        path: "/dashboard/apptraffic",
        icon: <MdAttachMoney />,
      },
    ],
  },


  {
    title: "Data Analytics",
    list: [
      {
        title: "Patients",
        path: "/dashboard/patients",
        icon: <MdWork />,
      },
      {
        title: "Ambulance",
        path: "/dashboard/ambulance",
        icon: <MdAnalytics />,
      },
      {
        title: "Consultants",
        path: "/dashboard/consultants",
        icon: <MdPeople />,
      },
      {
        title: "Hospitals",
        path: "/dashboard/hospitals",
        icon: <MdPeople />,
      },
    ],
  },


  {
    title: "Team Management",
    list: [
      {
        title: "Marketing",
        path: "/dashboard/marketing",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Media",
        path: "/dashboard/media",
        icon: <MdHelpCenter />,
      },
      {
        title: "Medicals",
        path: "/dashboard/medicals",
        icon: <MdHelpCenter />,
      },
    ],
  },


  {
    title: "Finance",
    list: [
      {
        title: "Sales",
        path: "/dashboard/sales",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdHelpCenter />,
      },
      {
        title: "Budgets",
        path: "/dashboard/budgets",
        icon: <MdHelpCenter />,
      },
    ]
    },

      {
        title: "App Configuration",
        list: [
          {
            title: "Settings",
            path: "/dashboard/settings",
            icon: <MdOutlineSettings />,
          },
          {
            title: "Logout",
            path: "/dashboard/logout",
            icon: <MdLogout />,
          },
          {
            title: "Create Staff Account",
            path: "/dashboard/createadmin",
            icon: <MdHelpCenter />,
          },
        ],
      },
    ]
  

const Sidebar = () => {
  return (
    <div className={styles.container}>
       <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/earnestavater.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Dr. Earnest</span>
          <span className={styles.userTitle}>Super Administrator</span>
        </div>
      </div>
    <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar