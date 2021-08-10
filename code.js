
//2.Write a program that prints the numbers from 1 to 100. But for multiples of three print “Tec” instead of the number and for the multiples of five print “tona”.
//For numbers which are multiples of both three and five print “Tectona”.



const myFunction=()=>{
	for (let i=1;i<=100;i++){
 		if(i%15===0){
			console.log("tectona")
			continue
		}
		if (i%5===0){
			console.log("tona")
		}else if (i%3===0){
			console.log("tec")
		}else {
			console.log(i)
		}
	}
}

//4.Extend the "Array" class in Javascript with a new method that calculates and returns the
//sum of the Array's items (you can assume all of the items are numbers).

const calculateArr=(arr)=>{
	return arr.reduce((acc,val)=> acc+val)
}
