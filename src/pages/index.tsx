import Image from "next/image";
import { Inter } from "next/font/google";
import Button from '@/components/atoms/buttons/index';
import MenuTag from '@/components/atoms/menuTag/index';
import { TitlePrincipal, TitleSecondary, TitleTertiary } from "@/components/atoms/titles/index";
import Icon from '@/components/atoms/icon/index';
import { NavBar, NavBarMobile } from '@components/organisms/navBar/index';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="flex justify-center h-screen">
    <NavBarMobile />
  </div>
  );
}
