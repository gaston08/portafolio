export default function JobsSection() {
	return (
		<div className="pl-4 pr-4 md:pl-20 md:pr-20">
			<ul className="bg-neutral text-neutral-content timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				<li>
					<div className="timeline-middle">
						<SvgCheck />
					</div>
					<div className="timeline-start md:text-end mb-10">
						<time className="font-mono italic">2021-2022</time>
						<div className="text-lg font-black">Raxar Inc.</div>
						En mi primera etapa trabajé como frontend jr con vue.js, nuxt.js y
						vuetify. Aplicando la metodología ágil scrum con un equipo de 10
						personas, desarrollamos aplicaciones 3D interactivas que permiten
						realizar recorridos virtuales, utilizando PANO y THREE.js. En mi
						segunda etapa, trabaje como full stack ssr con react, three.js, node
						y mysql. Además profundicé mis conocimientos sobre three.js y pude
						especializarme en el frontend.
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<SvgCheck />
					</div>
					<div className="timeline-end mb-10">
						<time className="font-mono italic">2022-2023</time>
						<div className="text-lg font-black">Kushki</div>
						Trabajé como desarrollador frontend ssr, con un squad de más de 60
						personas, utilizando la metodología ágil scrum. Utilicé las
						tecnologias react, typescript y test unitarios con jest. También
						estuve a cargo de manejar la consola de aws.
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<SvgCheck />
					</div>
					<div className="timeline-start mb-10">
						<time className="font-mono italic">2023</time>
						<div className="text-lg font-black">
							Ecommerce autoadministrable
						</div>
						Trabajé en el desarrollo de un proyecto ecommerce autoadministrable
						de principio a fin utilizando react, typescript, mongodb y mysql. La
						plataforma cuenta con carga y manejo de productos, stock,
						integración con mercado pago.
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<SvgCheck />
					</div>
					<div className="timeline-end mb-10">
						<time className="font-mono italic">2023-2024</time>
						<div className="text-lg font-black">ubaparciales.com</div>
						ubaparciales permite a los estudiantes de la uba realizar parciales
						de años anteriores, con la única finalidad de poder prepararse para
						los exámenes. Actualmente la plataforma se encuentra áctiva y cada
						día suma nuevos usuarios. El proyecto aún se encuentra en
						desarrollo.
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<SvgCheck />
					</div>
					<div className="timeline-start mb-10">
						<time className="font-mono italic">2023-2024</time>
						<div className="text-lg font-black">
							Profesor particular de matemáticas
						</div>
						Trabaje como profesor particular de matemáticas para el ingreso a la
						facultad de ingenieria de Jujuy.
					</div>
					<hr />
				</li>
			</ul>
		</div>
	);
}

function SvgCheck() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			className="h-5 w-5"
		>
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
