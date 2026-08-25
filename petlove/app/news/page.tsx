"use client";

import api from "@/lib/axios";
import { useEffect } from "react";

const News = () => {
	useEffect(() => {
		async function fett() {
			await api.get("/news");
		}

		fett();
	}, [])

	return (
		<>

		</>
	);
};

export default News;