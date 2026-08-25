"use client";

import { useEffect, useState } from "react";

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
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				height: "4px",
				width: `${progress}%`,
				background: "black",
				zIndex: 99999,
				pointerEvents: "none",
				transition: "width 100ms linear",
			}}
		/>
	);
}