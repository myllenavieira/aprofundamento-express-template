export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

export enum GROUP_TYPE {
    GIRL = "Girlgroup",
    BOY = "Boygroup",
    BOTH = "Both Genders group"
}

export type TGroup = {
    id: string,
    name: string,
    qtdMembers: number,
    debutDate: number,
    type: GROUP_TYPE
}