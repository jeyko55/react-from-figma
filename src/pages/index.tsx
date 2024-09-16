import Image from "next/image";
import { Inter } from "next/font/google";
import Button from '@/components/atoms/buttons/index';
import MenuTag from '@/components/atoms/menuTag/index';
import { TitlePrincipal } from "@/components/atoms/titles/index";
import Icon from '@/components/atoms/icon/index';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="flex justify-center items-center h-screen">
    <Icon />
  </div>
  );
}
