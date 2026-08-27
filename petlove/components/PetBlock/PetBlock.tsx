import Image from "next/image";

import clsx from "clsx";
import css from "./PetBlock.module.css";

type Props = {
	src_mobile: string;
	src_tablet: string;
	src_desktop: string;
	alt: string;
}

const PetBlock = ({ src_mobile, src_tablet, src_desktop, alt }: Props) => {
	return (
		<div className={css.image_container}>
				<Image
					className={clsx(css.image, css.mobile_image)}
					src={src_mobile}
					alt={alt}
					width={335}
					height={280}
					loading="eager"
				/>

				<Image
					className={clsx(css.image, css.tablet_image)}
					src={src_tablet}
					alt={alt}
					width={704}
					height={302}
					loading="eager"
				/>

				<Image
					className={clsx(css.image, css.desktop_image)}
					src={src_desktop}
					alt={alt}
					width={592}
					height={654}
					loading="eager"
				/>
			</div>
	);
};

export default PetBlock;