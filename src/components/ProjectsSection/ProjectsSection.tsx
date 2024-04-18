import { useState, useEffect } from "react";
import ubaparciales1 from "/projects/ubaparciales1.jpg";
import ubaparciales2 from "/projects/ubaparciales2.jpg";
import ubaparciales3 from "/projects/ubaparciales3.jpg";

import userSvg from "/user-solid.svg";
import bookSvg from "/book-solid.svg";

const imgs = [ubaparciales1, ubaparciales2, ubaparciales3];

export default function ProjectsSection() {
	const [imgLoaded, setImgLoaded] = useState(false);
	const [currentImg, setCurrentImg] = useState(ubaparciales1);
	const [imgIndex, setImgIndex] = useState(0);
	const [blur, setBlur] = useState(false);

	useEffect(() => {
		const id = setInterval(() => {
			setImgIndex((prev) => {
				if (prev === imgs.length - 1) {
					return 0;
				} else {
					return prev + 1;
				}
			});
		}, 5000);

		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		setBlur(true);
		setTimeout(() => {
			setCurrentImg(imgs[imgIndex]);
			setTimeout(() => {
				setBlur(false);
			}, 100);
		}, 100);
	}, [imgIndex]);

	/*const img = new Image();
	img.onload = function () {
		setTimeout(() => {
			setImgLoaded(true);
		}, 3000);
	};
	img.src = ubaparciales1;*/

	return (
		<div className="h-auto w-screen mt-20">
			<div className="text-2xl text-neutral-content divider divider-accent mt-0 mb-8">
				Proyectos
			</div>
			<div className="pl-8">
				<h1 className="text-neutral-content text-4xl">ubaparciales.com</h1>
			</div>
			<div className="w-screen flex justify-center items-center flex-wrap mt-12">
				<div className="basis-full md:basis-1/2 p-8">
					<div className="text-neutral-content text-lg mb-8">
						<div className="font-bold inline">ubaparciales</div> es una
						plataforma que permite realizar modelos de parciales de años
						anteriores, con el único fín de permitirles a los estudiantes a
						prepararse para rendir el parcial.
					</div>
					<img
						className={`object-cover transition ease-linear duration-100 ${blur ? "blur-sm" : ""}`}
						src={currentImg}
					/>
				</div>
				<div className="basis-full md:basis-1/2 p-8">
					<div className="text-neutral-content text-xl font-bold mt-4 mb-2">
						Tecnologías:
					</div>
					<ul className="list-disc text-neutral-content text-lg">
						<li>React, Typescript, Materialize</li>
						<li>Node, Typescript, Jest, Express, MongoDB</li>
					</ul>
					<div className="text-neutral-content text-lg mt-4">
						La plataforma además cuenta con un panel de administración en el que
						se puede llevar a cabo un seguimiento de la interaccion de los
						usuarios, como los examenes que realizan asi tambien como las
						respuestas que seleccionan.
					</div>
					<div className="mt-4">
						<a
							className="link link-accent"
							href="https://ubaparciales.com"
							target="_blank"
						>
							Ingresar a la plataforma
						</a>
					</div>
					<div className="mt-4">
						<a
							className="link link-accent"
							href="https://github.com/gaston08/evaluate-me-app"
							target="_blank"
						>
							Repo
						</a>
					</div>
					<div className="stats shadow mt-8">
						<div className="stat">
							<div className="stat-title">Usuarios</div>
							<div className="stat-value text-center text-primary mt-2 mb-2">
								582
							</div>
							<div className="flex justify-center items-center">
								<img src={userSvg} className="w-5 h-auto text-primary" />
							</div>
						</div>

						<div className="stat">
							<div className="stat-title">Exámenes resueltos:</div>
							<div className="stat-value text-center text-secondary mt-2 mb-2">
								2843
							</div>
							<div className="flex justify-center items-center">
								<img src={bookSvg} className="w-5 h-auto text-primary" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pl-8 mt-12 mb-20 md:mb-28">
				<h1 className="text-neutral-content text-4xl">Otros proyectos</h1>
			</div>
			<div className="flex justify-center items-center content-center gap-12 flex-wrap">
				<div className="basis-full md:basis-1/4 flex justify-center">
					<Project
						imgs={[
							"/projects/chat1.jpg",
							"/projects/chat2.jpg",
							"/projects/chat3.jpg",
						]}
						name="Hablalo!"
						description="Crea una sala y chatea con tus amigos!"
						features={["firebase", "react", "eslint", "vite", "sass"]}
						projectType="Chat App"
						repo="https://github.com/gaston08/chat-react-firebase"
						demo="https://chat-react-firebase.netlify.app"
					/>
				</div>
				<div className="basis-full md:basis-1/4 flex justify-center">
					<Project
						imgs={[
							"/projects/balls1.jpg",
							"/projects/balls2.jpg",
							"/projects/balls3.jpg",
						]}
						name="BounceBalls"
						description="Diviertete jugando con las leyes de la física!"
						features={[
							"react",
							"tailwind",
							"typescript",
							"three.js",
							"cannon-es.js",
						]}
						projectType="3D Game"
						repo="https://github.com/gaston08/balls-random-physics"
						demo="https://balls-random-physics.netlify.app/ "
					/>
				</div>
			</div>
		</div>
	);
}

function Project({
	imgs,
	name,
	description,
	features,
	projectType,
	repo,
	demo,
}) {
	const [currentImg, setCurrentImg] = useState(ubaparciales1);
	const [imgIndex, setImgIndex] = useState(0);
	const [blur, setBlur] = useState(false);

	useEffect(() => {
		const id = setInterval(() => {
			setImgIndex((prev) => {
				if (prev === imgs.length - 1) {
					return 0;
				} else {
					return prev + 1;
				}
			});
		}, 3000);

		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		setBlur(true);
		setTimeout(() => {
			setCurrentImg(imgs[imgIndex]);
			setTimeout(() => {
				setBlur(false);
			}, 300);
		}, 100);
	}, [imgIndex]);

	return (
		<div className="card w-96 bg-base-100 shadow-xl pb-8">
			<figure className="bg-primary h-80">
				<img
					src={currentImg}
					className={`w-full h-full transition ease-in-out duration-200 ${blur ? "blur-sm" : ""}`}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{name}
					<div className="badge badge-secondary">{projectType}</div>
				</h2>
				<div className="mb-4 mt-4">
					<p>{description}</p>
				</div>
				<div className="card-actions justify-start">
					{features.map((feature) => {
						return (
							<div key={feature} className="badge badge-outline">
								{feature}
							</div>
						);
					})}
				</div>
			</div>
			<div className="card-actions justify-center">
				<a className="btn btn-primary" href={demo} target="_blank">
					Demo
				</a>
				<a className="btn btn-primary" href={repo} target="_blank">
					Repo
				</a>
			</div>
		</div>
	);
}
