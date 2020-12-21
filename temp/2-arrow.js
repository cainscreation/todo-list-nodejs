const square = function(x){
return x*x
}

const sqr=(x)=>
    x*x

console.log(sqr(12341234))

const event = {
    name:'birthday party',
    guestList:['hehe','hasdele'],
    printGuestList(){
        console.log("guest list for : " + this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest+ ' rinkiya ' +this.name )
        })
    }
}

event.printGuestList()
