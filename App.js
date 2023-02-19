const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticles = 50;
let particaleArray = [];
const image = new Image();
// image.src ='bubble.png';
image.src ='red_small.png';


// ctx.translate(90,50);
// ctx.rotate(90*Math.PI/360)
// ctx.fillRect(0,0,100,150)


class Particle{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*64 +20;
        this.speed = Math.random()*5+1;
        this.angle = Math.random()*360;
        this.spin = Math.random()<.5 ? -1: 1; 
         

    }
    draw(){
        
        // ctx.save()
        // ctx.translate(this.x,this.y);
        // ctx.fillStyle = 'red';
        // ctx.rotate(this.angle*Math.PI/360)
        // ctx.fillRect(0,0,this.size,this.size)
        // ctx.drawImage(image,0- this.size/2, 0 - this.size/2, this.size, this.size);
        // ctx.restore();
        ctx.fillStyle= 'red';
        ctx.save();
        ctx.translate(this.x,this.y)
        ctx.rotate(this.angle*Math.PI/360*this.spin)
        // ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(image,0- this.size/2, 0 - this.size/2, this.size, this.size);
        
        ctx.restore();

    }
    update(){
        this.angle++;
        if(this.y>canvas.height){
            this.y = 0;
            this.x = Math.random()*canvas.width;
            this.size = Math.random()*100 +50;
            this.speed = Math.random()*9+1;
            console.log(this.speed)
        }
        
         this.y +=this.speed;
         
    }
    
     
}


const particle1 = new Particle();
function particles(){
    for(let i = 0;i<numberOfParticles;i++){
        particaleArray.push(new Particle());
    }
}
particles()
function animate(){
   ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i = 0; i<particaleArray.length;i++){
        particaleArray[i].update();
        particaleArray[i].draw();
    }
    requestAnimationFrame(animate)
   
   
     
}
animate()

