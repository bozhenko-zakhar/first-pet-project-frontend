"use client"

import css from "./BurgerMenu.module.css"
import BurgerButton from "../BurgerButton/BurgerButton";
import clsx from "clsx";

type Props = {
	isOpened: boolean;
	setOpen: () => void;
}

const BurgerMenu = ({isOpened, setOpen}: Props) => {

	return (
		<div className={clsx(css.menu_overlay, isOpened && css.is_open)}>
			<div className={css.menu_container}>
				<div className={css.burder_btn_container}>
					<BurgerButton isMenu setOpen={setOpen} />
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;