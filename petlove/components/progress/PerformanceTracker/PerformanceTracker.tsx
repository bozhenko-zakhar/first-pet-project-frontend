"use client";

import { useEffect } from "react";

type PerformanceTrackerProps = {
	onProgress: (progress: number) => void;
};

export default function PerformanceTracker({
	onProgress,
}: PerformanceTrackerProps) {
	useEffect(() => {
		if (
			!("PerformanceObserver" in window)
		) {
			return;
		}

		const updateProgress = () => {
			const resources =
				performance.getEntriesByType(
					"resource",
				) as PerformanceResourceTiming[];

			if (!resources.length) {
				onProgress(1);
				return;
			}

			const relevant =
				resources.filter((resource) => {
					return (
						resource.name.startsWith(
							window.location.origin,
						) ||
						resource.name.includes(
							"_next/",
						)
					);
				});

			if (!relevant.length) {
				onProgress(1);
				return;
			}

			const completed =
				relevant.filter(
					(resource) =>
						resource.responseEnd > 0,
				);

			onProgress(
				completed.length /
				relevant.length,
			);
		};

		const observer =
			new PerformanceObserver(() => {
				updateProgress();
			});

		observer.observe({
			type: "resource",
			buffered: true,
		});

		updateProgress();

		return () => {
			observer.disconnect();
		};
	}, [onProgress]);

	return null;
}