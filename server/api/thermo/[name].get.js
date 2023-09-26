// 数据库操作
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler((event) => {
    const { name } = event.context.params;// name为路由的[name].js中的name

    return prisma.thermo.findMany({
        where: {
            name: name // name是数据库中的字段，查找数据库中name为name的记录
        }
    })
})