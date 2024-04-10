import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stats, OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef, useEffect, useState } from "react";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { getImages } from "./utils";

function Cube({ facesMaterial }) {
	const ref = useRef();
	let messiImg = facesMaterial[0].images.map((row) => {
		return row.map((dataImg) => {
			return useLoader(THREE.TextureLoader, dataImg);
		});
	});

	let jujuyImg = facesMaterial[1].images.map((row) => {
		return row.map((dataImg) => {
			return useLoader(THREE.TextureLoader, dataImg);
		});
	});

	let maradonaImg = facesMaterial[2].images.map((row) => {
		return row.map((dataImg) => {
			return useLoader(THREE.TextureLoader, dataImg);
		});
	});

	let bocaJuniorsImg = facesMaterial[3].images.map((row) => {
		return row.map((dataImg) => {
			return useLoader(THREE.TextureLoader, dataImg);
		});
	});

	let newtonImg = facesMaterial[4].images.map((row) => {
		return row.map((dataImg) => {
			return useLoader(THREE.TextureLoader, dataImg);
		});
	});

	let mePerro = facesMaterial[5].images.map((row) => {
		return row.map((dataImg) => {
			return useLoader(THREE.TextureLoader, dataImg);
		});
	});

	const roundedBoxGeometry = useMemo(() => {
		return new RoundedBoxGeometry(1, 1, 1, 3, 0.1);
	}, []);

	return (
		<>
			<group ref={ref}>
				{/* x=0-2, y=0, z=0*/}
				<mesh position={[0, 0, 0]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[2][0]} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[2][0]} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[2][2]} />
				</mesh>
				<mesh position={[1, 0, 0]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[2][1]} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[2][1]} />
				</mesh>
				<mesh position={[2, 0, 0]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[2][2]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[2][2]} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[2][0]} />
				</mesh>
				{/* x=0-2, y=1, z=0*/}
				<mesh position={[0, 1, 0]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[1][0]} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[1][2]} />
				</mesh>
				<mesh position={[1, 1, 0]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[1][1]} />
				</mesh>
				<mesh position={[2, 1, 0]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[1][2]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[1][0]} />
				</mesh>
				{/* x=0-2, y=2, z=0*/}
				<mesh position={[0, 2, 0]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[0][0]} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[0][0]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[0][2]} />
				</mesh>
				<mesh position={[1, 2, 0]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[0][1]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[0][1]} />
				</mesh>
				<mesh position={[2, 2, 0]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[0][2]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[0][2]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshBasicMaterial attach={`material-5`} map={bocaJuniorsImg[0][0]} />
				</mesh>
				{/*******************/}
				{/* x=0-2, y=0, z=1*/}
				<mesh position={[0, 0, 1]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[2][1]} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[1][0]} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[1, 0, 1]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[1][1]} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[2, 0, 1]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[2][1]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[1][2]} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				{/* x=0-2, y=1, z=1*/}
				<mesh position={[0, 1, 1]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[1][1]} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[1, 1, 1]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[2, 1, 1]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[1][1]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				{/* x=0-2, y=2, z=1*/}
				<mesh position={[0, 2, 1]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[0][1]} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[1][0]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[1, 2, 1]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[1][1]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[2, 2, 1]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[0][1]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[1][2]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshStandardMaterial attach={`material-4`} color={"black"} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				{/*******************/}
				{/* x=0-2, y=0, z=2*/}
				<mesh position={[0, 0, 2]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[2][2]} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[0][0]} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[2][0]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[1, 0, 2]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[0][1]} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[2][1]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[2, 0, 2]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[2][0]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshBasicMaterial attach={`material-3`} map={newtonImg[0][2]} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[2][2]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				{/* x=0-2, y=1, z=2*/}
				<mesh position={[0, 1, 2]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[1][2]} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[1][0]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[1, 1, 2]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[1][1]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[2, 1, 2]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[1][0]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshStandardMaterial attach={`material-2`} color={"black"} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[1][2]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				{/* x=0-2, y=2, z=2*/}
				<mesh position={[0, 2, 2]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshBasicMaterial attach={`material-1`} map={messiImg[0][2]} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[2][0]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[0][0]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[1, 2, 2]} geometry={roundedBoxGeometry}>
					<meshStandardMaterial attach={`material-0`} color={"black"} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[2][1]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[0][1]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
				<mesh position={[2, 2, 2]} geometry={roundedBoxGeometry}>
					<meshBasicMaterial attach={`material-0`} map={maradonaImg[0][0]} />
					<meshStandardMaterial attach={`material-1`} color={"black"} />
					<meshBasicMaterial attach={`material-2`} map={mePerro[2][2]} />
					<meshStandardMaterial attach={`material-3`} color={"black"} />
					<meshBasicMaterial attach={`material-4`} map={jujuyImg[0][2]} />
					<meshStandardMaterial attach={`material-5`} color={"black"} />
				</mesh>
			</group>
		</>
	);
}

const loadImages = async () => {
	return new Promise(async (res, rej) => {
		const messiWorldCup = await getImages("/messi_world_cup.jpg");
		const jujuy = await getImages("/jujuy.jpg");
		const maradona = await getImages("/maradona.jpeg");
		const bocaJuniors = await getImages("/boca_juniors.jpeg");
		const newton = await getImages("/newton.jpg");
		const mePerro = await getImages("/meperro.jpeg");

		res([
			{ name: "messi_world_cup", images: messiWorldCup },
			{ name: "jujuy", images: jujuy },
			{ name: "maradona", images: maradona },
			{ name: "boca_juniors", images: bocaJuniors },
			{ name: "newton", images: newton },
			{ name: "meperro", images: mePerro },
		]);
	});
};

export default function App() {
	const [loading, setLoading] = useState(true);
	const [facesMaterial, setFacesMaterial] = useState([]);
	useEffect(() => {
		loadImages()
			.then((res) => {
				setFacesMaterial(res);
				setLoading(false);
			})
			.catch(console.error);
	}, []);
	return (
		<>
			{loading ? (
				<h1>Cargando...</h1>
			) : (
				<Canvas camera={{ position: [5, 5, 5] }}>
					<Suspense>
						<Environment preset="forest" />
					</Suspense>
					<Cube facesMaterial={facesMaterial} />
					<axesHelper args={[5]} />
					<OrbitControls target={[0, 0, 0]} />
					<Stats />
				</Canvas>
			)}
		</>
	);
}
