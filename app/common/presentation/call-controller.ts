import { Request, Response, NextFunction } from "express";
import { Container } from "inversify";

// T é o tipo do Controller
export function callController<T>(ControllerClass: new (...args: any[]) => T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // resolve a instância via container
      const controller = container.get<T>(ControllerClass);

      // assume que o controller tem um método 'handle'
      if (typeof (controller as any).handle !== "function") {
        throw new Error("Controller não possui o método handle");
      }

      await (controller as any).handle(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
