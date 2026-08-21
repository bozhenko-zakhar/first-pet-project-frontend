"use client"

import Link from "next/link";

import BurgerButton from "../BurgerButton/BurgerButton";
import Nav from "../Nav/Nav";

import clsx from "clsx";
import css from "./BurgerMenu.module.css"

type Props = {
	isOpened: boolean;
	setOpen: () => void;
}

const BurgerMenu = ({ isOpened, setOpen }: Props) => {

	return (
		<div className={clsx(css.menu_overlay, isOpened && css.is_open)}>
			<div className={css.menu_container}>
				<div className={css.burder_btn_container}>
					<BurgerButton isMenu setOpen={setOpen} />
				</div>

				<nav className={css.menu_nav}>
					<ul className={css.menu_list}>
						<Nav isMenu />
					</ul>

					<div className={css.menu_authentication}>
						<Link className={css.menu_login} href="/login">Log in</Link>
						<Link className={css.menu_registr} href="/register">Registration</Link>
					</div>
				</nav>

			</div>
		</div>
	);
};

export default BurgerMenu;