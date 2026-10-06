class TextBox{
fill(text: string):void
    fill(text: string, locator: string):void
    fill(text: string, locator?: string):void{

if(text){

    console.log("Name is",text);
    
}else{

    console.log("locator is",locator);
    
}
}
}
let tb=new TextBox()
tb.fill("Madhusree")
tb.fill("Madhusree,#")
