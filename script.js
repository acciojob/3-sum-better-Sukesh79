function threeSum(arr, target) {
// write your code here
	arr.sort();

	let i, j , sum = Infinity;

	for(let k = arr.length-1; i >= 1; k--){
		i = 0;
		j = k-1;

		while(i < j){
			let currSum = arr[i] + arr[j] + arr[k];
			if(currSum < target) i++;
			else if(sum > target) j--;
			else return target;

			if(Math.abs(currSum - target) < Math.abs(sum - target))
				sum = currSum;

			// console.log(currSum);
		}
	}

	return sum;
	
}


// let S = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(threeSum(S, 19));
module.exports = threeSum;
