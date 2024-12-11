function task1(callback){
    setTimeout(() => {console.log("Task 1 is completed");
        callback();
        
    }, 1000);
}
function task2(callback){
    setTimeout(() => {
        console.log("task 2 is completed");
        callback();
    },300);
}
function task3(callback){
    setTimeout(() => {
        console.log("task 3 is completed");
        callback();
    },1300);
}
task1(()=>{
    task2(() => {
        task3(() => {console.log("All task completed");
});
});
});