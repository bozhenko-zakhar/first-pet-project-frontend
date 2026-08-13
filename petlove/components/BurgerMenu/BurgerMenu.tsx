"use client"

import css from "./BurgerMenu.module.css"
import BurgerButton from "../BurgerButton/BurgerButton";
import clsx from "clsx";
import Link from "next/link";

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
						<li className={css.menu_item}><Link className={css.menu_link} href="/news">News</Link></li>
						<li className={css.menu_item}><Link className={css.menu_link} href="/notices">Find pet</Link></li>
						<li className={css.menu_item}><Link className={css.menu_link} href="/friends">Our friends</Link></li>
					</ul>

					<div className={css.menu_authentication}>
						<Link className={css.menu_login} href="/login">Log in</Link>
						<Link className={css.menu_registr} href="/registr">Registration</Link>
					</div>
				</nav>

			</div>
		</div>
	);
};

export default BurgerMenu;