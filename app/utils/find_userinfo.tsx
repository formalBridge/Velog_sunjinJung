import { db } from './db.server';

export interface UserInfo {
    user_id: number;
    username: string;
    profile_image_url: string | null;
}

export async function findUserInfo(user_id: number): Promise<UserInfo | null> {
    const user = await db.user.findUnique({ where: { id: user_id } });
    if (!user) {
        return null;
    }
    return {
        user_id: user.id,
        username: user.name,
        profile_image_url: user.profile_picture,
    };
}