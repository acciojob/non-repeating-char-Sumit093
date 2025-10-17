function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	if(n==0){
		return "null";
	}
	for(int j=0;j<n;j++){
		let ch = str[j];
		if(str.indexOf(ch) === str.lastIndexOf(ch)){
				return ch;				
		}
	}
	return "null";
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
