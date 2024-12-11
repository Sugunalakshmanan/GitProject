function task1(){
    return new Promise((resolve, reject)=>{setTimeout(() => {
        let iscompleted1 = true;

        if(iscompleted1){
            resolve("Task 1 is completed");
        }
        else{
            reject("task1 is not completed");
        }
        
        
    }, 1000);});
   
}
function task2(){
    return new Promise((resolve, reject)=> {setTimeout(() => {
        let iscompleted2 = false;

        if(iscompleted2){
            resolve("Task 2 is completed");
        }
        else{
            reject("task2 is not completed");
        }
            },300);});
        }

function task3(){
    return new Promise((resolve,reject)=>{setTimeout(() => { 
        let iscompleted3 = true;

        if(iscompleted3){
            resolve("Task 3 is completed");
        }
        else{
            reject("task3 is not completed");
        }
    },1300);});
}
async function allcompletd(){
    try{
const a = await task1();
console.log(a);
const b = await task2();
console.log(b);
const c = await task3();
console.log(c);

    }
    catch(error)
    {
console.log(error);

    }
}
allcompletd();