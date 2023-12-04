var hands, strangegirl,wrongshadow,surprisesprite ; 
var input ; 
function preload(){


hands = loadImage("hands.png")    
      
darkclawns =  loadImage("darkclawns.png")

wrongshadow = loadImage("wrongshadow.png")

strangegirl = loadImage("strangegirl.png")

surprisesprite = loadImage("")
}

function setup (){
createCanvas(window.width,window.height) ; 
background("white") ; 
 surprisesprite = createSprite(width/2,height/2,250,250) ;
this.input = createInput('').attribute('placeholder','Enter your name');
    this.playButton = createButton('Play');
    this.titleImg = createImg('assets/title.png','game title');
    this.greeting = createElement('h2');

    this.titleImg.position(120,100)
    this.input.position(width / 2 -110, height/ 2 -80)
    this.playButton.position(width/2 -90,height / 2 - 20)
    this.greeting.position(width / 2 - 300,height / 2 - 100)

        this.tittleImg.class("gameTitle")
        this.input.class("customInput")
        this.playButton.class("customButton")
        this.greeting.class("greeting")

        Tempo = 10
}

function END (){
background ("black")
}




function draw(){





if(gameState === Fase1){
    surprisesprite.loadAnimation("darkclawns.png")
    
}

if(gameState === Fase2){
strangegirl.loadAnimation("darkclawns.png")
    
}

if(gameState === Fase3){
    hands.loadAnimation("wrongshadow.png")
    
}
if(gameState === Fase4){
    wrongshadow.loadAnimation("wrongshadow.png")
    
}
form = new form();
form.display();

if(gamestate = END){

}


drawSprites();
for (var i = 0; i < 10; i++) {text("Tempo") }
if(i == 10 ){
    gamestate = END
}
}