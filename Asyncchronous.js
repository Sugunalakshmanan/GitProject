//ASYNCHRONOUS(settimeout)
function task1(){
    setTimeout(() => {console.log("Task 1 is completed");
        
    }, 1000);
}
function task2(){
    setTimeout(() => {
        console.log("task 2 is completed");
        
    },300);
}
function task3(){
    setTimeout(() => {
        console.log("task 3 is completed");
        
    },1300);
}
task1();
task2();
task3();
