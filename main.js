var canvas=new fabric.Canvas('myCanvas');
var hammer_X=10;
var hammer_Y=10;
var block_width=30;
var block_height=30;
var hammer_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("hammer.png",function(Img){
    hammer_object=Img;
    hammer_object.scaleToWidth(150);
    hammer_object.scaleToHeight(140);
    hammer_object.set({
        top:hammer_Y,
        left:hammer_X
    });
    canvas.add(hammer_object);
});

}

function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    block_object=Img;
    block_object.scaleToHeight(block_height);
    block_width.scaleToWidth(block_width);
    block_object.set({
        top:hammer_Y,
        left:hammer_X
    });
    canvas.add(block_object);
});
}