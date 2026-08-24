import Link from "next/link";

import clsx from "clsx";
import css from "./Nav.module.css"
import LoadingLink from "../PageLoaderProvider/LoadingLink";

type Props = {
	isMenu?: boolean;
	isAlternative?: boolean;
}

const Nav = ({ isMenu, isAlternative }: Props) => {


	return (
		<ul className={clsx(css.list, isMenu && css.menu, isAlternative && css.alternative)}>
			<li><LoadingLink className={css.link} href="/news">News</LoadingLink></li>
			<li><LoadingLink className={css.link} href="/notices">Find pet</LoadingLink></li>
			<li><LoadingLink className={css.link} href="/friends">Our friends</LoadingLink></li>
		</ul>
	);
};

export default Nav;