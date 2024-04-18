import { techs } from "../../shared/techs";

export default function TechnologySectionMobile() {
	return (
		<div className="prose min-w-fit m-auto">
			<div className="mb-4">
				<div className="text-2xl text-neutral-content divider divider-accent mt-0">
					Skills
				</div>
			</div>
			{techs.map((tech) => {
				return (
					<div key={tech.title}>
						<h2 className="text-neutral-content mb-4 ml-4">{tech.title}</h2>
						<div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
							{tech.arrIcons.map((icon) => {
								return (
									<div key={icon.name} className="carousel-item w-2/4">
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
