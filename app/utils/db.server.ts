// 가용성을 위한 DB 클라이언트 생성
import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();