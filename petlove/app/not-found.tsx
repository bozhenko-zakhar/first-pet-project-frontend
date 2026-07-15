
import Link from "next/link";
import css from "./not-found.module.css";
import Image from "next/image";

const NotFound = () => {
	return (
		<main className={css.main}>
			<div className={css.image_container}>
				<p>4</p>
				<Image
					className={css.image}
					src="/not-found-cat.png"
					alt="Circled cat which simulate zero number"
					width={280}
					height={280}
					loading="eager"
				/>
				<p>4</p>
			</div>

			<p>{"Ooops! This page not found :("}</p>
			<Link className={css.link} href="/home">To home page</Link>
		</main>	
	);
};

export default NotFound;