//parent class
export class Operations
{
public a:number=56
public b:number=12
private readonly c:number=50
protected d:number=100

static division(){
    console.log("division is not given");
    
}
public add(){
    console.log(`the addition numbers is ${this.a}+ ${this.b}`);   
}

private sub(){
    console.log(`the subtraction numbers is ${this.a}- ${this.b}`);   
}

public readData(){
    return this.sub()
}

protected mul(){
    console.log(`the multiplication numbers is ${this.b}* ${this.d}`);   
}

}
let math=new Operations()
math.add()
math.readData()
Operations.division()