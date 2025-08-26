export interface Controller {
  handle(req: any, res: any): Promise<any>;
}
