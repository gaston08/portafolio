import { useState } from "react";

export default function AvatarSection() {
	const [imgLoaded, setImgLoaded] = useState(false);

	const img = new Image();
	img.onload = function () {
		setTimeout(() => {
			setImgLoaded(true);
		}, 3000);
	};
	img.src = "me-dog.jpeg";

	return (
		<div className="basis-full md:basis-2/4 bg-primary">
			<div className="avatar flex justify-center items-center">
				{imgLoaded ? (
					<div className="w-60 rounded-full {/*ring ring-primary ring-offset-base-100 ring-offset-2*/}">
						<img src="me-dog.jpeg" />
					</div>
				) : (
					<div className="w-60 rounded-full skeleton"></div>
				)}
			</div>
		</div>
	);
}
