var x = 999,
	y = 999,
	resultList = [0],
	result;
	
while (y >= 101) {

	result = (x*y);
	result = result.toString();

	while (result.length > 1) {

		if (result.slice(0,1) === result.slice(-1)) {

			result = result.slice(1,-1);


			if (result.length < 2) {
				result = x*y;
        if (resultList[resultList.length -1] < result) {
          resultList[resultList.length -1] = result;
        }
			}
		} else {
			break;
		}
	}
	do {
		if (y >= 101) {
			y--;
		} else if (x >= 101){
			x--;
			y = x;
		} else {
			break;
		}
	} while (x % 10 === 0 || y % 10 === 0);
}

console.log(resultList);
