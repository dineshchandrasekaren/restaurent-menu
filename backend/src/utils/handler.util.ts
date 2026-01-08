export class ResponseHandler {
  constructor(public data: any[] | any, public success: boolean = true) {}
}

export class MessageHandler {
  constructor(public message: string, public success: boolean = false) {}
}
