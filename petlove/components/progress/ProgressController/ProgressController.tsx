"use client";

import { useEffect, useCallback } from "react";

import { useProgress } from "../ProgressProvider/ProgressProvider";
import NavigationManager from "../NavigationManager/NavigationManager";
import PerformanceTracker from "../PerformanceTracker/PerformanceTracker";
import AssetTracker from "../AssetTracker/AssetTracker";

export default function ProgressController() {
	const {
		start,
		updateNavigation,
		updateResources,
		updateImages,
		updateFonts,
		updateRuntime,
		complete,
	} = useProgress();

	const handleStart = useCallback(() => {
		start();
	}, [start]);

	const handleComplete = useCallback(() => {
		updateNavigation(1);
		complete();
	}, [
		updateNavigation,
		complete,
	]);

	/*
	 * Runtime progress.
	 *
	 * We wait for several animation frames after
	 * navigation has started.
	 */
	useEffect(() => {
		let frame = 0;
		let animationFrame: number;

		const measure = () => {
			frame += 1;

			updateRuntime(
				Math.min(frame / 5, 1),
			);

			if (frame < 5) {
				animationFrame =
					requestAnimationFrame(
						measure,
					);
			}
		};

		animationFrame =
			requestAnimationFrame(measure);

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	}, [updateRuntime]);

	return (
		<>
			<NavigationManager
				onStart={handleStart}
				onComplete={handleComplete}
			/>

			<PerformanceTracker
				onProgress={updateResources}
			/>

			<AssetTracker
				onImagesProgress={updateImages}
				onFontsProgress={updateFonts}
			/>
		</>
	);
}