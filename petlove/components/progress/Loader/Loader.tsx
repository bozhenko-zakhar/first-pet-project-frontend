"use client";

import { useEffect, useState } from "react";

import css from "./Loader.module.css";

export default function Loader() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setProgress((current) => {
				if (current >= 90) {
					return 90;
				}

				const remaining = 90 - current;

				return Math.min(
					current + Math.max(remaining * 0.08, 0.2),
					90,
				);
			});
		}, 100);

		return () => {
			window.clearInterval(interval);
		};
	}, []);

	return (
		<div className={css.container}>
			{progress === 0 ?
				<>
					<svg className={css.logo_mobile}>
						<use href="/logo-loading-mobile.svg"></use>
					</svg>
					<svg className={css.logo}>
						<use href="/logo-loading.svg"></use>
					</svg>
				</> :
				<div className={css.percentage_container}>
					<div className={css.circle}/>
					<p className={css.percentage}>{Math.round(progress)}%</p>
				</div>
			}
		</div>
	);
}