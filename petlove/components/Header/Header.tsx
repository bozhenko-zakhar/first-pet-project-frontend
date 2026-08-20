"use client";

import { useState } from "react";
import Link from "next/link";

import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import BurgerButton from "@/components/BurgerButton/BurgerButton";
import Nav from "@/components/Nav/Nav";
import AuthNav from "@/components/AuthNav/AuthNav";

import clsx from "clsx";
import css from "./Header.module.css"

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
					<Nav />
					<AuthNav />
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