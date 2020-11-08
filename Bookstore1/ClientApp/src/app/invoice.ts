import { Book } from "./book";
export class Invoice {
  constructor(
    orderId: number,
    userId: number,
    fromDisplayName: string,
    fromMailAddress: string,
    toMail: string,
    toMailAddress: string,
    subject: string,
    reservation: Book[]
  ) { }
}
