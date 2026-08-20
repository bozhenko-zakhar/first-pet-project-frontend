"use client";

import { useState } from "react";
import Link from "next/link";


import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import BurgerButton from "@/components/BurgerButton/BurgerButton";
import Nav from "@/components/Nav/Nav";
import AuthNav from "@/components/AuthNav/AuthNav";
import UserNav from "@/components/UserNav/UserNav";

import clsx from "clsx";
import css from "./Header.module.css"

const Header = () => {
	const [isBurgerOpened, setOpened] = useState(false);

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
					<ul className={css.list}>
						<Nav />
					</ul>

					{/* <AuthNav /> */}
					<UserNav />
				</div>
			</nav>

			<div className={clsx(css.burder_btn_container, isBurgerOpened && css.hidden)}>
				<BurgerButton setOpen={() => setOpened(!isBurgerOpened)} />
			</div>

			<BurgerMenu isOpened={isBurgerOpened} setOpen={() => setOpened(!isBurgerOpened)} />
		</header>
	);
};

export default Header;