"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

import {
	calculateProgress,
	type ProgressMetrics,
} from "../ProgressCalculator";

type ProgressStatus =
	| "idle"
	| "loading"
	| "complete";

type ProgressContextValue = {
	progress: number;
	status: ProgressStatus;

	start: () => void;
	updateNavigation: (value: number) => void;
	updateResources: (value: number) => void;
	updateImages: (value: number) => void;
	updateFonts: (value: number) => void;
	updateRuntime: (value: number) => void;
	complete: () => void;
};

const ProgressContext =
	createContext<ProgressContextValue | null>(
		null,
	);

const INITIAL_METRICS: ProgressMetrics = {
	navigation: 0,
	resources: 0,
	images: 0,
	fonts: 0,
	runtime: 0,
};

export function ProgressProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [progress, setProgress] = useState(0);
	const [status, setStatus] =
		useState<ProgressStatus>("idle");

	const [, setMetrics] =
		useState<ProgressMetrics>(
			INITIAL_METRICS,
		);

	const start = useCallback(() => {
		setStatus("loading");
		setProgress(0);
		setMetrics(INITIAL_METRICS);
	}, []);

	const updateMetric = useCallback(
		(
			key: keyof ProgressMetrics,
			value: number,
		) => {
			const normalized = Math.min(
				Math.max(value, 0),
				1,
			);

			setMetrics((current) => {
				const next = {
					...current,
					[key]: normalized,
				};

				const nextProgress =
					calculateProgress(next);

				setProgress((currentProgress) =>
					Math.max(
						currentProgress,
						nextProgress,
					),
				);

				return next;
			});
		},
		[],
	);

	const updateNavigation = useCallback(
		(value: number) =>
			updateMetric(
				"navigation",
				value,
			),
		[updateMetric],
	);

	const updateResources = useCallback(
		(value: number) =>
			updateMetric(
				"resources",
				value,
			),
		[updateMetric],
	);

	const updateImages = useCallback(
		(value: number) =>
			updateMetric(
				"images",
				value,
			),
		[updateMetric],
	);

	const updateFonts = useCallback(
		(value: number) =>
			updateMetric("fonts", value),
		[updateMetric],
	);

	const updateRuntime = useCallback(
		(value: number) =>
			updateMetric(
				"runtime",
				value,
			),
		[updateMetric],
	);

	const complete = useCallback(() => {
		setProgress(100);
		setStatus("complete");

		window.setTimeout(() => {
			setProgress(0);
			setStatus("idle");
		}, 300);
	}, []);

	const value = useMemo(
		() => ({
			progress,
			status,
			start,
			updateNavigation,
			updateResources,
			updateImages,
			updateFonts,
			updateRuntime,
			complete,
		}),
		[
			progress,
			status,
			start,
			updateNavigation,
			updateResources,
			updateImages,
			updateFonts,
			updateRuntime,
			complete,
		],
	);

	return (
		<ProgressContext.Provider value={value}>
			{children}
		</ProgressContext.Provider>
	);
}

export function useProgress() {
	const context =
		useContext(ProgressContext);

	if (!context) {
		throw new Error(
			"useProgress must be used inside ProgressProvider",
		);
	}

	return context;
}