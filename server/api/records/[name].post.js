import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, usetime, lupihao, operator, inspector, memo } = body
    await prisma.thermodata.create({
        data: {
            name,
            usetime,
            lupihao,
            operator,
            inspector,
            memo
        }
    })
    await prisma.thermo.upsert({
        where: {
            name: name
        },
        update: {
            name: name
        },
        create: {
            name: name,
            state: true
        }
    })
})