const userInput=document.querySelector("#user-input");
const checkBtn=document.querySelector("#check-btn");
const clearBtn=document.querySelector("#clear-btn");
const resultsDiv=document.querySelector("#results-div");

const arr10=["5555555555","555-5555555","555-555-5555","555555-5555","(555)5555555","(555)-5555555","(555)-555-5555","(555)555-5555"];
const arr11=["15555555555","1 555 555 5555","1 (555) 555-5555","1 555-555-5555","1555-5555555","1555-555-5555","1555555-5555","1(555)5555555","1(555)-5555555","1(555)-555-5555","1(555)555-5555"];

checkBtn.addEventListener("click", (e)=>{
    if(!userInput.value)
    {
        alert("Please provide a phone number");
    }
    else
    {
        let number=userInput.value;
        let count=0;
        for(let i=0;i<number.length;i++)
            if(number[i] >= '0' && number[i] <= '9')
                count++;
        
        if(count==10)
        {
            number=number.split('');
            for(let i=1;i<number.length;i++){
                if(number[i] >= '0' && number[i] <= '9'){
                    number[i]='5';
                }
            }
            number=number.join('');

            let flag=false;
            for(let i=0;i<arr10.length;i++)
                if(number===arr10[i])
                    flag=true;

            if(flag===true)
                resultsDiv.innerHTML=`Valid US number: ${userInput.value}`;
            else
                resultsDiv.innerHTML=`Invalid US number: ${userInput.value}`;
        }
        else if(count===11 && number[0]==='1')
        {
            number=number.split('');
            for(let i=1;i<number.length;i++){
                if(number[i] >= '0' && number[i] <= '9'){
                    number[i]='5';
                    console.log(number[i]);
                }
            }
            number=number.join('');

            let flag=false;
            for(let i=0;i<arr11.length;i++)
                if(number===arr11[i])
                    flag=true;

            if(flag===true)
                resultsDiv.innerHTML=`Valid US number: ${userInput.value}`;
            else
                resultsDiv.innerHTML=`Invalid US number: ${userInput.value}`;
        }
        else
        {
            resultsDiv.innerHTML=`Invalid US number: ${userInput.value}`;
        }
    }
    userInput.value=null;

});

clearBtn.addEventListener("click", ()=>{
    resultsDiv.innerHTML="";
});