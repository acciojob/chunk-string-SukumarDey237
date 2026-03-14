function stringChop(str, size) {
  // your code here
	let outputArr = []
	let s = Number(size)
	for (let i=0; i<str.length; i+=s){
		let substr = str.slice(i,i+s)
		outputArr.push(substr)
	}
	return outputArr    
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 

