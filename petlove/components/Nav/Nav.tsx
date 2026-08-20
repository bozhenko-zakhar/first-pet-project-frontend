import Link from "next/link";

import css from "./Nav.module.css"

const Nav = () => {


	return (
		<>
			<li><Link className={css.link} href="/news">News</Link></li>
			<li><Link className={css.link} href="/notices">Find pet</Link></li>
			<li><Link className={css.link} href="/friends">Our friends</Link></li>
		</>
	);
};

export default Nav;