var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

//get chi-tiet page
router.get("/chi-tiet.*.:idsp", function (req, res, next) {
    var idsp = req.params.idsp;
    console.log("chuan bi them/tao session");
    if (!req.session.danhSachSPDaXem) {
        req.session.danhSachSPDaXem = [];
        console.log("tao session ---");
    }
    if (req.session.danhSachSPDaXem.indexOf(idsp) == -1) {
        req.session.danhSachSPDaXem.push(idsp);
    }

    res.render("chi-tiet", {
        idsp: req.params.idsp,
        danhSachSP: req.session.danhSachSPDaXem,
    });
});

router.get("/ds", function (req, res, next) {
    res.render("ds", { danhSachSP: req.session.danhSachSPDaXem });
});

module.exports = router;
