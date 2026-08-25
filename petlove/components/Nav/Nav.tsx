import Link from "next/link";

import clsx from "clsx";
import css from "./Nav.module.css"

type Props = {
	isMenu?: boolean;
	isAlternative?: boolean;
}

const Nav = ({ isMenu, isAlternative }: Props) => {


	return (
		<ul className={clsx(css.list, isMenu && css.menu, isAlternative && css.alternative)}>
			<li><Link className={css.link} href="/news">News</Link></li>
			<li><Link className={css.link} href="/notices">Find pet</Link></li>
			<li><Link className={css.link} href="/friends">Our friends</Link></li>
		</ul>
	);
};

export default Nav;