"use client";

import { useEffect } from "react";

type AssetTrackerProps = {
	onImagesProgress: (progress: number) => void;
	onFontsProgress: (progress: number) => void;
};

export default function AssetTracker({
	onImagesProgress,
	onFontsProgress,
}: AssetTrackerProps) {
	useEffect(() => {
		const images = new Set<HTMLImageElement>();

		const updateImages = () => {
			const allImages =
				Array.from(images);

			if (!allImages.length) {
				onImagesProgress(1);
				return;
			}

			const loaded =
				allImages.filter(
					(image) =>
						image.complete &&
						image.naturalWidth > 0,
				);

			onImagesProgress(
				loaded.length /
				allImages.length,
			);
		};

		const observeImage = (
			image: HTMLImageElement,
		) => {
			if (images.has(image)) {
				return;
			}

			images.add(image);

			image.addEventListener(
				"load",
				updateImages,
			);

			image.addEventListener(
				"error",
				updateImages,
			);
		};

		const scanImages = () => {
			document
				.querySelectorAll("img")
				.forEach((image) => {
					observeImage(image);
				});

			updateImages();
		};

		scanImages();

		const mutationObserver =
			new MutationObserver(
				scanImages,
			);

		mutationObserver.observe(
			document.body,
			{
				childList: true,
				subtree: true,
			},
		);

		/*
		 * Fonts
		 */

		let cancelled = false;

		if (!document.fonts) {
			onFontsProgress(1);
		} else {
			onFontsProgress(0);

			document.fonts.ready.then(() => {
				if (!cancelled) {
					onFontsProgress(1);
				}
			});
		}

		return () => {
			cancelled = true;

			mutationObserver.disconnect();

			images.forEach((image) => {
				image.removeEventListener(
					"load",
					updateImages,
				);

				image.removeEventListener(
					"error",
					updateImages,
				);
			});
		};
	}, [
		onImagesProgress,
		onFontsProgress,
	]);

	return null;
}