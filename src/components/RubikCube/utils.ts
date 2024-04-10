const cols = 3;
const rows = 3;

export const getImages = (url) => {
	return new Promise((res, rej) => {
		const image = new Image();
		image.src = url;
		image.onload = function () {
			const imagePieces = [];
			const width = image.width / cols;
			const height = image.height / rows;

			for (var x = 0; x < rows; ++x) {
				for (var y = 0; y < cols; ++y) {
					var canvas = document.createElement("canvas");
					canvas.width = width;
					canvas.height = height;
					var context = canvas.getContext("2d");
					context.drawImage(
						image,
						x * width,
						y * height,
						width,
						height,
						0,
						0,
						canvas.width,
						canvas.height,
					);
					imagePieces.push(canvas.toDataURL());
				}
			}

			const newArr = [];
			newArr[0] = [imagePieces[0], imagePieces[3], imagePieces[6]];
			newArr[1] = [imagePieces[1], imagePieces[4], imagePieces[7]];
			newArr[2] = [imagePieces[2], imagePieces[5], imagePieces[8]];

			res(newArr);
		};
	});
};
