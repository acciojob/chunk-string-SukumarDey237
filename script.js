function stringChop(str, size) {
  // your code here
	let outputArr = []
	for (let i=0; i<str.length; i+=size){
		let substr = str.slice(i,i+size)
		outputArr.push(substr)
	}
	return outputArr    
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
 