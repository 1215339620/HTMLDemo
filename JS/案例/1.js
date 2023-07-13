alert("第一段js代码");
aaa();
function aaa(){
    for(let i=0;i<100;i++){
        console.log(i)
    }
    console.log(i+1);//Uncaught ReferenceError: i is not defined
}