var con=require('../config/conexiom');
var board=require("../model/board");

module.exports={
index:function(req,res){

    board.obtener(con,);
    res.render('board/index', { title: "pizarra" });
}

}