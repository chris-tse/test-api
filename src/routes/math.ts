import express, { Request, Response } from 'express'

function getMathRoutes() {
    const router = express.Router()
    router.get('/add', add)
    router.get('/subtract', subtract)
    return router
}

async function add(req: Request, res: Response) {
    const { a, c } = req.query

    console.log(a)

    if (a === undefined || c === undefined) {
        return res.json({ error: true, message: 'Invalid query: a and c must be numbers' })
    }

    const sum = Number(a) + Number(c)
    res.json({ query: `${a} + ${c}`, answer: sum })
}

async function subtract(req: Request, res: Response) {
    const { a, b } = req.query

    if (a === undefined || b === undefined) {
        return res.json({ error: true, message: 'Invalid query: a and b must be numbers' })
    }

    const difference = Number(a) - Number(b)
    res.json({ query: `${a} + ${b}`, answer: difference })
}

export { getMathRoutes }
