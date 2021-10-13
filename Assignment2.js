const countStart = (count)=>new prompt((resolve,reject)=>{
    if(count > 1){
        setInterval(()=>{
            document.querySelector("countBegin").innerText = count;
            resolve(count);
        },1000);
    }
});
