import express from "express";
import { user as service } from "../../services";

const router = express.Router();
router.get('/', async function (req: any, res: any) {
  try {
    const data = await service.login(req.body.email, req.body.password);
    res.cookie('token', data.cookie, { httpOnly: true });
    res.cookies
    res.status(data.status).send(data.response);
  } catch (error) {
    res.status(500).send({ response: "something went wrong" });
  }
});

router.post('/', async function (req: any, res: any) {
  try {
    const data = await service.register( req.body.userName, req.body.email, req.body.password);
    res.status(data.status).send(data.response);
  } catch (error) {
    res.status(500).send({ response: "something went wrong" });
  }
});
export { router };
