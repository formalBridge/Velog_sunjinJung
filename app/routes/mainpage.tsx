import { Outlet } from "react-router";
import type { Route } from "./+types/mainpage";
import { MainPageContent } from "~/pages/MainPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main" },
    { name: "description", content: "MAIN PAGE" },
  ];
}

export default function MainPage() {
  return (
    <div>
      <MainPageContent />
      <Outlet/>
    </div>
  );
}