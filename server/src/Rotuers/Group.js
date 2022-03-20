import { Router } from "express";
import {
  addnewingroup,
  Create_Group,
  getAllgroups,
} from "../Controllers/Group";
import { CheckUserAuth } from "../Middlewares/Auth";
const router = Router();

//Start routing

router.post("/Creategroup", CheckUserAuth, Create_Group);
router.get("/getallgroups", CheckUserAuth, getAllgroups);
router.get("/JoinGroup:groupId", CheckUserAuth, addnewingroup);
module.exports = router;
