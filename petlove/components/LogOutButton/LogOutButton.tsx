import { use } from "react";

import { ModalContext } from "@/components/Modal/ModalViewProvider";

import css from "./LogOutButton.module.css"

const LogOutButton = () => {
	const context = use(ModalContext);

	return (
		<button className={css.button}
			onClick={() => {
				context?.setIsOpen(true);
				context?.setModalForm("logout");
			}}
		>
			log oout
		</button>
	);
};

export default LogOutButton;