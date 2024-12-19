const frameTriangleDimensions = function (noOfRows) {
  return Array.from({ length: noOfRows }, (v, i) => i + 1);
};

const frameRectangleDimensions = function ([width, height]) {
  return Array.from({ length: height }).fill(width);
};

const frameDiamondDimensions = function (noOfRows) {
  // console.log(noOfRows);
  
  const upperPart = Array.from({ length: Math.ceil(noOfRows / 2) }, (v, i) => i + i + 1);

  // console.log(upperPart);

  const lowerPart = Array.from(upperPart).reverse();

  const diamondDimensions = [];
  diamondDimensions.push(upperPart);
  diamondDimensions.push(lowerPart);

  return diamondDimensions;
};

const testDimensions = function () {
  // console.log(frameRectangleDimensions([1, 1]));
  // console.log(frameRectangleDimensions([1, 2]));
  // console.log(frameRectangleDimensions([1, 3]));
  // console.log(frameRectangleDimensions([1, 4]));
  // console.log(frameRectangleDimensions([2, 1]));
  // console.log(frameRectangleDimensions([2, 2]));
  // console.log(frameRectangleDimensions([2, 3]));
  // console.log(frameRectangleDimensions([2, 4]));
  // console.log(frameRectangleDimensions([3, 1]));
  // console.log(frameRectangleDimensions([3, 2]));
  // console.log(frameRectangleDimensions([3, 3]));
  // console.log(frameRectangleDimensions([3, 4]));
  // console.log(frameRectangleDimensions([4, 1]));
  // console.log(frameRectangleDimensions([4, 2]));
  // console.log(frameRectangleDimensions([4, 3]));
  // console.log(frameRectangleDimensions([4, 4]));
  // console.log(frameTriangleDimensions(1));
  // console.log(frameTriangleDimensions(2));
  // console.log(frameTriangleDimensions(3));
  // console.log(frameTriangleDimensions(4));
  // console.log(frameTriangleDimensions(5));
  // console.log(frameTriangleDimensions(6));
  // console.log(frameTriangleDimensions(7));
  // console.log(frameTriangleDimensions(8));

  console.log(frameDiamondDimensions(1));
  console.log(frameDiamondDimensions(2));
  console.log(frameDiamondDimensions(4));
  console.log(frameDiamondDimensions(3));
  console.log(frameDiamondDimensions(6));
  console.log(frameDiamondDimensions(7));
  console.log(frameDiamondDimensions(8));
  console.log(frameDiamondDimensions(9));

  console.log(frameDiamondDimensions(5));
};

testDimensions();

const cycle = function (array) {
	let index = - 1;
	return function () {
		if (index >= array.length - 1) {
			index = -1;
		}

		index++;

		return array[index];
	};
};

const getChar = cycle(["*"]);

const repeat = function (number) {
	return getChar().repeat(number);
};

array.map(repeat);
