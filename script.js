let mid1=document.querySelector(".input1");
let mid2=document.querySelector(".input2");
let submit=document.querySelector(".submit");
let result=document.querySelector(".result");
submit.addEventListener('click',function(){
   let input1=mid1.value;
   let input2=mid2.value;
   let ans;
   if(input1>30||input2>30){
    console.log("Enter valid marks:");
}
else{
    if(input1>input2){
        input1=0.8*input1;
        input2=0.2*input2;
        console.log(Math.round(input1));
        console.log(Math.round(input2));
        //ans=Math.round(input1)+Math.round(input2);
        ans=input1+input2;
        console.log(ans+0.4);
        result.innerText=Math.round(ans+0.4);
    }
    else if(input1==input2){
        result.innerText=input1;
    }
    else{
        input1=0.2*input1;
        input2=0.8*input2;
        console.log(Math.round(input1));
        console.log(Math.round(input2));
        //ans=Math.round(input1)+Math.round(input2);
        ans=input1+input2;
        console.log(ans+0.4);
        result.innerText=Math.round(ans+0.4);
    }
}
});