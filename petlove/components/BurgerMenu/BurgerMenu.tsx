"use client"

import Link from "next/link";

import BurgerButton from "../BurgerButton/BurgerButton";
import Nav from "../Nav/Nav";

import clsx from "clsx";
import css from "./BurgerMenu.module.css"

type Props = {
	isOpened: boolean;
	setOpen: () => void;
	isAlternative?: boolean;
}

const BurgerMenu = ({ isOpened, setOpen, isAlternative }: Props) => {

	return (
		<div className={clsx(css.overlay, isOpened && css.is_open, isAlternative && css.alternative)}>
			<div className={css.container}>
				<div className={css.burder_btn_container}>
					<BurgerButton isAlternative={isAlternative} isMenu setOpen={setOpen} />
				</div>

				<nav className={css.nav}>
					<ul className={css.list}>
						<Nav isAlternative={isAlternative} isMenu />
					</ul>

					<div className={clsx(css.authentication, isAlternative && css.alternative)}>
						<Link className={css.login} href="/login">Log in</Link>
						<Link className={css.registr} href="/register">Registration</Link>
					</div>
				</nav>

			</div>
		</div>
	);
};

export default BurgerMenu;