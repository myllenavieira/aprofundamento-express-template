import { ACCOUNT_TYPE, TAccount, TGroup, GROUP_TYPE } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

export const groups: TGroup[] = [
    {
        id: "gg001",
        name: "Twice",
        qtdMembers: 9,
        debutDate: 2015,
        type: GROUP_TYPE.GIRL
    },
    {
        id: "bg001",
        name: "BTS",
        qtdMembers: 7,
        debutDate: 2013,
        type: GROUP_TYPE.BOY
    },
    {
        id: "b001",
        name: "Kard",
        qtdMembers: 4,
        debutDate: 2017,
        type: GROUP_TYPE.BOTH
    }
]
