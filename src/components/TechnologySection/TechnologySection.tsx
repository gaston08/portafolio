import { techs } from "../../shared/techs";

export default function TechnologySection() {
	return (
		<div className="prose min-w-fit m-auto">
			{techs.map((tech) => {
				return (
					<div key={tech.title}>
						<h2 className="text-neutral-content text-center mb-12">
							{tech.title}
						</h2>
						<div className="flex gap-3 w-100">
							{tech.arrIcons.map((icon) => {
								return (
									<div
										className="bg-neutral flex flex-col justify-center items-center"
										style={{
											filter: "brightness(150%)",
											width: 200,
											height: 200,
											borderRadius: 20,
										}}
										key={icon.name}
									>
										<div
											style={{
												WebkitMast: `url(${icon.img}) no-repeat center`,
												mask: `url(${icon.img}) no-repeat center`,
												marginBottom: 10,
											}}
											className="bg-neutral-content icon-technology"
										></div>
										<div className="text-neutral-content">{icon.name}</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
