import { Router, Request, Response, request } from "express";

const router = Router();

// @route GET /dashboard
// @desc View the dashboard
// @access PRIVATE
router.get("/", (req: Request, res: Response) => {
    res.sendStatus(200);
});

export default router;