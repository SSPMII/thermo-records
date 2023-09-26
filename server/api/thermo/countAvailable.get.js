import { env } from 'node:process';
env.DATABASE_URL = "mysql://shenwei:comac.123@localhost:3306/thermo"

// 数据库操作
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler((event) => {

    return prisma.thermo.count({
        where: {
            state: true // name是数据库中的字段，查找数据库中name为name的记录
        }
    })
})