import { FaXTwitter } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { SiWpexplorer } from "react-icons/si";
import { FaBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { MdBookmarks } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Roboto } from "next/font/google";
import CardsFeed from "../components/CardsFeed";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { PiDotsThreeCircle } from "react-icons/pi";
import "./globals.css"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <IoIosHome />,
  },
  {
    title: "Explore",
    icon: <SiWpexplorer />,
  },
  {
    title: "Notification",
    icon: <FaBell />,
  },
  {
    title: "Messsages",
    icon: <FaEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <MdBookmarks />,
  },

  {
    title: "Monitization",
    icon: <FaRegMoneyBillAlt />,
  },
  {
    title: "More",
    icon: <PiDotsThreeCircle />,
  },
];

export default function Home() {
  return (
    <>
      <div className={`${roboto.className}`}>
        <div className="grid grid-cols-12 h-screen w-screen px-24 overflow-x-hidden">
          <div className="col-span-3 pt-6 pe-1 pr-3 px-8">
            <FaXTwitter className="text-5xl hover:bg-slate-500 rounded-full p-2 cursor-pointer transition-all" />
            <div className="mt-2">
              <ul>
                {sidebarMenuItems.map((item) => (
                  <li
                    key={item.title}
                    className="flex justify-start items-center gap-4 font-semibold hover:bg-slate-500 rounded-full py-1 px-2 w-fit cursor-pointer"
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-2">
              <button className="bg-blue-500 p-2 w-full rounded-full my-2">
                Tweet
              </button>
            </div>
          </div>

          <div className="col-span-6  border-[1px]  h-screen overflow-scroll scrollbar-hidden border-gray-700">
            <CardsFeed></CardsFeed>
            <CardsFeed></CardsFeed>
            <CardsFeed></CardsFeed>
            <CardsFeed></CardsFeed>
            <CardsFeed></CardsFeed>
            <CardsFeed></CardsFeed>
            <CardsFeed></CardsFeed>
          </div>
          <div className="col-span-3 "></div>
        </div>
      </div>
    </>
  );
}
