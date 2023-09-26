import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const { name, state } = body
    await prisma.thermo.update({
        where: {
            name: name
        },
        data: {
            state: state
        }
    })
})