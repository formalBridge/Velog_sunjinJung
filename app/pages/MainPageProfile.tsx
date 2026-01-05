interface UserInfo {
    user_id: number;
    username: string;
    profile_image_url: string | null;
}

export function MainPageProfile({user}: {user: UserInfo}) {
    return(
        <div>
            {user.username}님의 프로필 페이지
        </div>
    );
}