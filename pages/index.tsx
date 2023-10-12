import { Inter } from "next/font/google";
import { UnityCanvas } from "@/components/molecules/UnityCanvas/UnityCanvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="absolute w-full h-full">
      <UnityCanvas />
    </div>
  );
}
