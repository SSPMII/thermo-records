import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const { id, name, usetime, lupihao, operator, inspector, memo } = body
    await prisma.thermodata.update({
        where: {
            id: id
        },
        data: {
            inspector,
            memo
        }
    })
})