//function Pyramid() {
    var n = 5;
    var output ='';
    var str = "*";
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            output += str;
        }
        console.log(output);
        output = '';
    }

//Pyramid();