"use client";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar/page";
import Landing from './Landing/page';
import Working from './Working/page'; // Assuming you have a Working component 
import Footer from "./Footer/page";
import Submitad from "./Submitad/page";

export default function Home() {
  const router = useRouter();

  return (
    <div >
      <Navbar/>
      <Landing/>
      <Working/>
      <Submitad/>
      <Footer/>
    </div>
  );

}
