import Image from "next/image";
import SignInComponent from "./components/SignInComponent";

export default function Home() {
  return (
   <div className="">
      <h1 className="text-4xl font-bold text-center mt-20">Welcome to SkillSwap</h1>
      <SignInComponent />
   </div>
  );
}
