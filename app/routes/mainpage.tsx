import { Outlet } from "react-router";
import type { Route } from "./+types/mainpage";
import { MainPageContent } from "~/pages/MainPage";
import { MainPageCategories } from "~/pages/MainPageCategories";
import { MainPageProfile } from "~/pages/MainPageProfile";

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
      <MainPageCategories />
      <MainPageProfile />
      <Outlet/>
    </div>
  );
}