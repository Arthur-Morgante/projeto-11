var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
    createCanvas(400,400);

    // Movendo o fundo 
    rua = createSprite(200,200,100,100);
    rua.addImage("ruaimg", pathImg);


    //Criando menino que corre 
    boy = createSprite(200,200,100,100)
    boy.addAnimation("velocista", boyImg)
    boy.scale = 0.1

    // Criando Boundary (Limite) esquerdo  
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;


    //Crie Boundary direito 
    rightBoundary=createSprite(400,0,100,800);
    rightBoundary.visible = false;

}


function draw() {
    background(0);
    rua.velocityY = 4;

    // Menino se movendo no eixo X com o mouse
    edges= createEdgeSprites();
    boy.collide(edges[3]);

    boy.x = mouseX

    //Reiniciar o fundo
    if (rua.y > 400){
        
        rua.y = rua.width/2
    } 



    drawSprites();

 }




