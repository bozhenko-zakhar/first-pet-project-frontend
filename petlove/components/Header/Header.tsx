"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import BurgerButton from "@/components/BurgerButton/BurgerButton";
import Nav from "@/components/Nav/Nav";
import AuthNav from "@/components/AuthNav/AuthNav";
import UserNav from "@/components/UserNav/UserNav";

import LogoMobile from "@/assets/logo-mobile.svg";
import LogoTablet from "@/assets/logo-desktop-tablet.svg";

import clsx from "clsx";
import css from "./Header.module.css"

const Header = () => {
	const [isBurgerOpened, setBurgerOpened] = useState(false);

	return (
		<header className={clsx(css.header, css.home)}>
			<nav className={css.header_navigation}>
				<Link className={css.favicon_link} href="/" aria-label="Home">
					<LogoMobile className={css.favicon_logo_mobile} />
					<LogoTablet className={css.favicon_logo_desktop_tablet} />
				</Link>

				<div>
					<Nav />

					<AuthNav />
					{/* <UserNav /> */}
				</div>
			</nav>

			<div className={clsx(css.burder_btn_container, isBurgerOpened && css.hidden)}>
				<BurgerButton setOpen={() => setBurgerOpened(!isBurgerOpened)} />
			</div>

			<BurgerMenu isOpened={isBurgerOpened} setOpen={() => setBurgerOpened(!isBurgerOpened)} />
		</header>
	);
};

export default Header;