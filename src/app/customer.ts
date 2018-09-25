import { OrderList } from "./order-list";

export interface Customer {
    message: string;
    status: string;
    orderWaitingCount: string;
    orderWaitingList: OrderList;
}