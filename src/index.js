/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
	preferences.unshift(0);
  var arr = preferences;
  
	for (i = 1; i <= arr.length; i++) {
		if ( (i != arr[i]) && (i == arr[arr[arr[i]]])) count += 1;
  }
  return count / 3;
}
