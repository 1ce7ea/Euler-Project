function () {
    var answer = 0;
    var fib = [1,2,0];
    
    for (var i = 2; fib[i] <= 4000000; i++) {
        
        fib[i] = fib[i - 1] + fib[i - 2];
        
        if (fib[i] < 4000000) {
            fib.push(fib[i]);
        } else if (fib[i] % 2 === 0) {
            answer += fib[i];
        }
    }
    return answer + 2;
}
