function solution(digits){
    var temp = String(digits);
    var largest = parseInt(temp.slice(0,5));
    for (var i = 1; i < temp.length; i++) {
        if (temp.slice(i,i+5) > largest) {
            largest = parseInt(temp.slice(i,i+5));
        }
    }
    return largest;
  }