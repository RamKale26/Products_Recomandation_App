let express= require("express");
let controlUser = require("../controller/UserCtrl.js");
let router=express.Router();



router.post("/AddUser",controlUser.AddUser);
router.get("/Viewuser",controlUser.getuser)
router.post("/DeleteUser",controlUser.deleteUser)


module.exports = router;
