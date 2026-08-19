"use client";

import { useState } from "react";
import Link from "next/link";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

import clsx from "clsx";
import css from "./Header.module.css"
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
	const [isOpened, setOpened] = useState(false);

	return (
		<header className={css.header}>
			<nav className={css.header_navigation}>
				<Link className={css.favicon_link} href="/" aria-label="Home">
					<svg className={css.favicon_logo_mobile}>
						<use href="/logo-mobile.svg"></use>
					</svg>
					<svg className={css.favicon_logo_desktop_tablet}>
						<use href="/logo-desktop-tablet.svg"></use>
					</svg>
				</Link>

				<div>
					<ul className={css.header_list}>
						<li className={css.header_item}><Link className={css.header_link} href="/news">News</Link></li>
						<li className={css.header_item}><Link className={css.header_link} href="/notices">Find pet</Link></li>
						<li className={css.header_item}><Link className={css.header_link} href="/friends">Our friends</Link></li>
					</ul>

					<div className={css.header_authentication}>
						<Link className={css.header_login} href="/login">Log in</Link>
						<Link className={css.header_registr} href="/register">Registration</Link>
					</div>
				</div>
			</nav>

			<div className={clsx(css.burder_btn_container, isOpened && css.hidden)}>
				<BurgerButton setOpen={() => setOpened(!isOpened)} />
			</div>
			<BurgerMenu isOpened={isOpened} setOpen={() => setOpened(!isOpened)} />
		</header>
	);
};

export default Header;