import { Item } from "./item";

export interface cartItem{
    [id: string]: ItemWithAmount
}

export interface ItemWithAmount{
    item: Item
    amount: number
    subTotal: number
}

