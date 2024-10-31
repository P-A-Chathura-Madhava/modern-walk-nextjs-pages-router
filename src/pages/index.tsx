import { Inter } from "next/font/google";
import HomePage from "@/ui-core/templates/pages/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePage />;
}
