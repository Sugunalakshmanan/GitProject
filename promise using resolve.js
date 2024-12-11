function task1(){
    return new Promise((resolve, reject)=>{setTimeout(() => {resolve("Task 1 is completed");
        
        
    }, 1000);});
   
}
function task2(){
    return new Promise((resolve, reject)=> {setTimeout(() => { resolve("task 2 is completed");
            },300);});
        }

function task3(){
    return new Promise((resolve,reject)=>{setTimeout(() => { resolve("task 3 is completed");
    },1300);});
}
task1().then((value)=>{console.log(value);
return task2();
}).then((value)=>{console.log(value);
    return task3();
}).then((value)=>{console.log(value);
});