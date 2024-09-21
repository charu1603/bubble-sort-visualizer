class Sock{
    constructor(x,y,height){
        this.width = 10;
        this.loc={x,y};
     
        this.height = height;
        this.queue = [];
    }
    moveTo(newLoc, frameCount =60){
 for(let i =1; i<=frameCount; i++){
     const t = i/frameCount;
     this.queue.push(vLerp(this.loc,newLoc, t));
 }
}
    


    draw(ctx){
        let changed= false;
        if(this.queue.length>0){
            this.loc=this.queue.shift();
            changed= true;
        }
    
        const left = this.loc.x-this.width/2;
        const right = this.loc.x+this.width/2;
        const bottom = this.loc.y+this.height;
        ctx.beginPath();
        ctx.rect(left, this.loc.y, this.width, this.height);
        ctx.stroke();
        return changed;
    }

   
}