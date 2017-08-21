//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype


function Dog () {
	this.status = "normal"
	this.color = ""
	this.hungry = true
	this.owner = undefined
}

let sadie = new Dog()
sadie.color = "black"
sadie.hungry = false



let moonshine = new Dog()



let atticus = new Dog()


// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
	this.pet = function(dog){
		dog.status = "happy"
	}
	this.feed = function(dog){
		dog.hungry = false
	}
	this.cool = undefined
}

let mason = new Human()
mason.cool = false
sadie.owner = mason


let julia = new Human()
julia.cool = true


// Instances of Human
// Needed: mason, julia
