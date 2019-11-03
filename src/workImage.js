let images = [
	'img/img_1.jpg',
	'img/img_2.jpg',
	'img/img_3.jpg',
];

function loadImage(url)
{
	return new Promise(function(resolve, reject)
	{
		const img = new Image();
		img.onload = function()
		{
			return resolve(url);
		}
		img.onerror = function()
		{
			return reject(url);
		}
		img.src = url;
	});
};

const displayImage = (url) => {
	const img = new Image();
	img.src = url;
	document.body.insertAdjacentElement('beforeend', img);
};

const loadImages = images.map(url => loadImage(url));	

loadImages.forEach(element => {
	element.then(res => {
		displayImage(res);
	})
	.catch(err => {
		console.error(err);
	})
});