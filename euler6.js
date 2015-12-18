function sum(x) {
	
	var y = 0,
		z = 0,
		i = 1;

	for (i; i <= x; i++){
		y += (i*i);
		z += i;
	}
	
	z = (z*z);
	
	return (y - z);
}
