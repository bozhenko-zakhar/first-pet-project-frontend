import Image from "next/image";

import css from "./ModalApproveAction.module.css";

const ModalApproveAction = () => {
	return (
		<div className={css.container}>
			<div className={css.image_container}>
				<Image
					src="/logout-cat.png"
					alt="A cat that simulates leaving the page"
					width={44}
					height={44}
					loading="eager"
				/>
			</div>

			<p className={css.text}>Already leaving?</p>

			<div className={css.buttons_container}>
				<button>Yes</button>
				<button>Cancel</button>
			</div>
		</div>
	);
};

export default ModalApproveAction;