import { Outlet, redirect } from "react-router";
import type { Route } from "./+types/mainpage.$user_id";
import { MainpageColumns } from "~/pages/MainPageColumns"
import { MainPageContent } from "~/pages/MainPage";
import { MainPageCategories } from "~/pages/MainPageCategories";
import { MainPageProfile } from "~/pages/MainPageProfile";
import { findUserInfo } from "~/utils/find_userinfo";


export async function loader({ params }: Route.LoaderArgs) {
    const userId = params.user_id;
    if (!userId) {
        return redirect("/mainpage");
    }
    const userInfo = await findUserInfo(Number(userId));
    if (!userInfo) {
        return redirect("/mainpage");
    }
    return { userInfo };
}

export function meta({}: Route.MetaArgs){
  return [
      { title: "index" },
      { name: "description", content: "INDEX PAGE" },
    ];
}

export default function MainPageIndex({ loaderData }: Route.ComponentProps) {
  const { userInfo } = loaderData;
  return (
    <div>
    <MainPageContent />
    <MainPageCategories />
    <MainPageProfile user={userInfo} />
    <MainpageColumns />
    {
    /* outlet로 userInfo 전달                                 */
    /* import { useOutletContext } from "react-router";       */
    /* 같은 구조체 설정                                        */
    /* const { userInfo } = useOutletContext<ContextType>();  */
    }
    <Outlet context={userInfo} />
    </div>
  );
}