import type { Route } from "./+types/main-page"; // RR7의 타입 안전성 (선택사항)
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