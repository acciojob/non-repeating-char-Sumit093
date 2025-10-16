function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	for(int j=0;j<n;j++){
		for(int i=j+1;i<n;i++){
			let ch = str[i];
			if(ch!=str[j]){
				return ch;				
			}
		}
	}
	return "null";
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
