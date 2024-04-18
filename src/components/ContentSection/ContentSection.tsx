import { Typewriter } from "react-simple-typewriter";

export default function ContentSection() {
	return (
		<div className="md:mt-0 mt-8 text-center md:text-start basis-full md:basis-2/4 prose">
			<div>
				<h1 className="text-neutral-content">Gaston Pedraza</h1>
			</div>
			<div>
				<h4 className="text-neutral-content">Desarrollador web full stack</h4>
			</div>
			<div className="pr-4">
				<p className="text-neutral-content">
					<Typewriter
						words={[
							"Hola soy Gastón!",
							"Me encanta programar!",
							"Busco potenciar mis skills!",
							"Code y Math <3",
						]}
						loop={0}
						cursor
						cursorStyle="_"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</p>
			</div>
		</div>
	);
}
