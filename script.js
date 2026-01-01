function stringChop(str, size) {
  //if str is null then return empty array
if (!str)
	return [];

const res=[];
size=Number(size);
for (let i=0;i<str.length;i+=size) {
	res.push(str.slice(i,i+size));
}
return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
