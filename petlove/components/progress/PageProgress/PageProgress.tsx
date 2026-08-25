"use client";

import { useProgress } from "../ProgressProvider/ProgressProvider";

export default function PageProgress() {
	const { progress, status } =
		useProgress();

	if (status === "idle") {
		return null;
	}

	return (
		<div
			style={{
				position: "fixed",
				inset: "0 0 auto 0",
				height: "4px",
				width: `${progress}%`,
				background: "black",
				zIndex: 99999,
				transition:
					"width 120ms ease-out",
				pointerEvents: "none",
			}}
		/>
	);
}