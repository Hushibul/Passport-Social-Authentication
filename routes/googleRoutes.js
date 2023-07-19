import { Router } from "express";
import {
  googleAuthenticate,
  googleCallback,
  googleSuccessRedirect,
} from "../controllers/googleController.js";

const router = Router();

router.get("/auth/google", googleAuthenticate);

router.get("/auth/google/callback", googleCallback, googleSuccessRedirect);

export default router;
