import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, groups } from './database'
import { ACCOUNT_TYPE, TAccount, GROUP_TYPE, TGroup } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

//GetAllAccounts
app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

//GetAccountById
app.get('/accounts/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const result : TAccount = accounts.find(account => account.id === id)
    res.status(200).send(result)
})

//DeleteAccount
app.delete('/accounts/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const index : number = accounts.findIndex(account => account.id === id)

    if(index >= 0){
        accounts.splice(index, 1)
    }

    res.status(200).send("Item deletado com sucesso!")
})

//editAccount
app.put('/accounts/:id', (req: Request, res: Response) => {
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined

    const result : TAccount = accounts.find(account => account.id === id)

    if(result){
        result.id = newId || result.id
        result.ownerName = newOwnerName || result.ownerName
        result.balance = isNaN(newBalance) ? result.balance : newBalance
        result.type = newType || result.type
    }

    res.status(200).send("Atualização realizada com sucesso!")
})


//GetAllGroups
app.get("/groups", (req: Request, res: Response) => {
    res.send(groups)
})

//GetGroupById
app.get('/groups/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const result : TGroup = groups.find(group => group.id === id)
    res.status(200).send(result)
})

//DeleteGroup
app.delete('/groups/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const index : number = groups.findIndex(group => group.id === id)

    if(index >= 0){
        groups.splice(index, 1)
    }

    res.status(200).send("Item deletado com sucesso!")
})

//editGroup
app.put('/groups/:id', (req: Request, res: Response) => {
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newQtdMembers = req.body.qtdMembers as number | undefined
    const newDebutDate = req.body.debutDate as number | undefined
    const newType = req.body.type as GROUP_TYPE | undefined

    const result : TGroup = groups.find(group => group.id === id)

    if(result){
        result.id = newId || result.id
        result.name = newName || result.name
        result.qtdMembers = isNaN(newQtdMembers) ? result.qtdMembers : newQtdMembers
        result.debutDate = isNaN(newDebutDate) ? result.debutDate : newDebutDate
        result.type = newType || result.type
    }

    res.status(200).send("Atualização realizada com sucesso!")
})
