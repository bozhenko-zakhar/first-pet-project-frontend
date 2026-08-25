export type ProgressMetrics = {
	navigation: number;
	resources: number;
	images: number;
	fonts: number;
	runtime: number;
};

export const PROGRESS_WEIGHTS = {
	navigation: 0.3,
	resources: 0.25,
	images: 0.2,
	fonts: 0.1,
	runtime: 0.15,
} as const;

export function calculateProgress(
	metrics: ProgressMetrics,
): number {
	const progress =
		metrics.navigation *
		PROGRESS_WEIGHTS.navigation +
		metrics.resources *
		PROGRESS_WEIGHTS.resources +
		metrics.images *
		PROGRESS_WEIGHTS.images +
		metrics.fonts *
		PROGRESS_WEIGHTS.fonts +
		metrics.runtime *
		PROGRESS_WEIGHTS.runtime;

	return Math.min(
		Math.round(progress * 100),
		95,
	);
}