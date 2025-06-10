import HomePage from "@/views/HomePage/HomePage";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: "400"})

export default function Home() {
  return (
    <div className={poppins.className}>
     <HomePage/>
    </div>
  );
}
