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
			<div className={css.navigation}>
				<Link className={css.favicon_link} href="/" aria-label="Home">
					<svg className={css.favicon_logo}>
						<use href="/logo-mobile.svg"></use>
					</svg>
				</Link>
			</div>
			
			{ !isOpened && <BurgerButton setOpen={() => setOpened(!isOpened)} />}
			<BurgerMenu isOpened={isOpened} setOpen={() => setOpened(!isOpened)} />
		</header>
	);
};

export default Header;