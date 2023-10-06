import  express  from "express";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();
import {signupUser,loginUser,logoutUser,followUnFollowUser,updateUser,getUserProfile} from "../controllers/userController.js"


router.get("/profile/:username",getUserProfile);
router.post("/signup",signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.post("/update/:id", protectRoute, updateUser);


//login


//update profile




//follow

export default router;