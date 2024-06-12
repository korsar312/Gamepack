import { Dispatch, SetStateAction, useState } from "react";

type UsePaginationResult<T> = {
	currentPage: number;
	handlePrevPage: () => void;
	handleNextPage: () => void;
	handleFirstPage: () => void;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	isFirstPage: () => boolean;
	isLastPage: () => boolean;
	totalPages: number;
	qtyPrev: string;
	qtyNext: string;
	listWithPaginate: T[];
};

export const usePagination = <T>(countVisible: number, paginateList: T[]): UsePaginationResult<T> => {
	const [currentPage, setCurrentPage] = useState(0);

	const totalElements = paginateList.length;
	const totalPages = Math.ceil(totalElements / countVisible);
	const handleFirstPage = () => setCurrentPage(0);
	const isFirstPage = () => currentPage === 0;
	const isLastPage = () => currentPage * countVisible + countVisible >= totalElements;

	const handlePrevPage = () => isFirstPage() || setCurrentPage((prevState) => prevState - 1);
	const handleNextPage = () => isLastPage() || setCurrentPage((prevState) => prevState + 1);

	const currentPageStart = currentPage * countVisible;
	const currentPageEnd = currentPageStart + countVisible;
	const nextPage = currentPageEnd + countVisible;
	const prevPage = currentPageStart - countVisible;

	const qtyPrev = isFirstPage() ? `1 - ${currentPageEnd}` : `${prevPage + 1} - ${currentPageStart}`;
	const qtyNext = isLastPage()
		? `${currentPageStart + 1} - ${totalElements}`
		: `${currentPageEnd + 1} - ${Math.min(nextPage, totalElements)}`;

	const listWithPaginate = paginateList.slice(currentPageStart, currentPageEnd);

	return {
		currentPage,
		handlePrevPage,
		handleNextPage,
		handleFirstPage,
		setCurrentPage,
		isFirstPage,
		isLastPage,
		totalPages,
		qtyPrev,
		qtyNext,
		listWithPaginate,
	};
};
