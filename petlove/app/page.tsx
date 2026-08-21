import Image from "next/image";

import clsx from "clsx";
import css from "./page.module.css";

export default function Home() {
	return (
		<main className={css.main}>
			<div className={css.text_container}>
				<h1>Take good <span>care</span> of your small pets</h1>
				<p>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</p>
			</div>
			<div className={css.image_container}>
				<picture>
					<Image
						className={clsx(css.image, css.mobile_image)}
						src="/mobile_home.jpg"
						alt="A woman kisses a dog on the forehead"
						width={335}
						height={402}
						loading="eager"
					/>

					<Image
						className={clsx(css.image, css.tablet_image)}
						src="/tablet_home.jpg"
						alt="A woman kisses a dog on the forehead"
						width={704}
						height={496}
						loading="eager"
					/>

					<Image
						className={clsx(css.image, css.desktop_image)}
						src="/desktop_home.jpg"
						alt="A woman kisses a dog on the forehead"
						width={1216}
						height={384}
						loading="eager"
					/>
				</picture>
			</div>
		</main>
	);
}
