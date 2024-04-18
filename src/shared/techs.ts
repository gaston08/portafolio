import reactPath from "/technologies/react.svg";
import reduxPath from "/technologies/redux.svg";
import vuePath from "/technologies/vue.svg";
import threePath from "/technologies/three.svg";

import bootstrapPath from "/technologies/bootstrap.svg";
import materializePath from "/technologies/materialize.svg";
import sassPath from "/technologies/sass.svg";
import tailwindPath from "/technologies/tailwind.svg";

import nodePath from "/technologies/node.svg";
import javascriptPath from "/technologies/javascript.svg";
import vercelPath from "/technologies/vercel.svg";

import typescriptPath from "/technologies/typescript.svg";
import linuxPath from "/technologies/linux.svg";
import gitPath from "/technologies/git.svg";

import mysqlPath from "/technologies/mysql.svg";
import mongodbPath from "/technologies/mongodb.svg";

export const techs = [
	{
		title: "Frontend",
		arrIcons: [
			{
				name: "React",
				img: reactPath,
			},
			{
				name: "Redux",
				img: reduxPath,
			},
			{
				name: "Vue",
				img: vuePath,
			},
			{
				name: "Three.js",
				img: threePath,
			},
		],
	},
	{
		title: "Diseño",
		arrIcons: [
			{
				name: "Bootstrap",
				img: bootstrapPath,
			},
			{
				name: "Materialize",
				img: materializePath,
			},
			{
				name: "Tailwind",
				img: tailwindPath,
			},
			{
				name: "Sass",
				img: sassPath,
			},
		],
	},
	{
		title: "Backend",
		arrIcons: [
			{
				name: "Node.js",
				img: nodePath,
			},
			{
				name: "Express.js",
				img: javascriptPath,
			},
			{
				name: "Next.js",
				img: vercelPath,
			},
		],
	},

	{
		title: "Base de datos",
		arrIcons: [
			{
				name: "MySQL",
				img: mysqlPath,
			},
			{
				name: "MongoDB",
				img: mongodbPath,
			},
		],
	},
	{
		title: "Otras",
		arrIcons: [
			{
				name: "Typescript",
				img: typescriptPath,
			},

			{
				name: "Linux",
				img: linuxPath,
			},
			{
				name: "Git",
				img: gitPath,
			},
		],
	},
];
