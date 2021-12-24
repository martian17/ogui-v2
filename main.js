let LR = true;
let TB = false;
let TOP = 0;
let BOTTOM = 1;
let LEFT = 2;
let RIGHT = 3;
let toDirection = [
    false,false,true,true
];


let onmouseover = function(elem,oncb,offcb){
    let grace = false;
    let state = false;
    elem.on("mousemove",function(){
        if(!state)oncb();
        grace = true;
        state = true;
        setTimeout(()=>{
            grace = false;
        },10);
    });
    document.addEventListener("mousemove",function(){
        if(!grace){
            if(state)offcb();
            state = false;
        }
    });
};

class Node{
    constructor(){
        this.parent = "";
        this.children = [];
        this.elem = new ELEM("div");
    }
    insert(node,n){
        arr.splice(n, 0, node);
        this.elem.insert();
    }
    
    add(){
        
    };
};


let Node = function(){
    this.children = [];//children
    
}