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
						En mi primera etapa trabaje como frontend jr con vue.js, nuxt.js y
						vuetify. Aplicando la metodología ágil scrum con un equipo de 10
						personas, desarrollamos aplicaciones 3D interactivas que permiten
						realizar recorridos virtuales, utilizando PANO y THREE.js. En mi
						segunda etapa, trabaje como full stack ssr con react, three.js, node
						y mysql. Además profundice mis conocimientos sobre three.js y pude
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
						Trabaje como desarrollador frontend ssr, con un squad de mas de 60
						personas, utilizando la metodologia agil scrum. Trabaje con las
						tecnologias react, typescript y test unitarios con jest. Tambien
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
						<div className="text-lg font-black">Ecommerce</div>
						Desarrollo de un proyecto ecommerce autoadministrable de principio a
						fin. Carga y manejo de productos, stock, pasarela de pago con
						mercado pago. Desarrollado con React, node, mysql, mongoDB y
						material-ui.
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<SvgCheck />
					</div>
					<div className="timeline-end md:text-end mb-10">
						<time className="font-mono italic">2023-2024</time>
						<div className="text-lg font-black">ubaparciales.com</div>
						En mayo del mismo año tuve la necesidad de poder practicar modelos
						de parciales de años anteriores y me encontre con la dificultad de
						poder encontrar examenes sin spoiler de respuestas correctas, y
						ademas de tener que calcular mis notas a mano. De ahi es donde nace
						ubaparciales, para facilitar la realizacion de examenes y obtener
						feedback, llevar un seguimiento de cada examen.
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
							Profesor particular matematica
						</div>
						Trabaje como profesor particular de matematica para el ingreso a la
						faculta de ingenira de jujuy.
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
