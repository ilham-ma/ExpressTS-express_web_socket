import { Response, Request } from "express";
import { Router } from "express";
import {
  responseUtil_notFound,
  responseUtil_success,
} from "@utils/response.utils";

const router = Router();

router.use("/test", (req: Request, res: Response) => {
  return responseUtil_success(res, null, "OKE");
});

router.all("*", (req: Request, res: Response) => {
  return responseUtil_notFound(res);
});

export default router;
