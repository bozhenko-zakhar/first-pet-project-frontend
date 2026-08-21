import { use } from "react";

import { ModalContext } from "@/components/ModalViewProvider/ModalViewProvider";

import clsx from "clsx";
import css from "./LogOutButton.module.css"

type Props = {
	isAlternative?: boolean;
}

const LogOutButton = ({ isAlternative }: Props) => {
	const context = use(ModalContext);

	return (
		<button className={clsx(css.button, isAlternative && css.alternative)}
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