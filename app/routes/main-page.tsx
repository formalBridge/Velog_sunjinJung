import type { Route } from "./+types/main-page";
import { MainPageContent } from "~/pages/MainPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main" },
    { name: "description", content: "MAIN PAGE" },
  ];
}

export default function MainPage() {
  return <MainPageContent />;
}
