import React from "react";
import "./styles.scss";
export declare const minSection = 3;
interface IPaginationProps {
    className?: string;
    totalCount: number;
    limit?: number;
    currentPage: number;
    sectionNumber?: number;
    type?: "default" | "pager";
    labelFirst?: string | React.ReactNode;
    labelLast?: string | React.ReactNode;
    labelBack?: string | React.ReactNode;
    labelForward?: string | React.ReactNode;
    showFirstLast?: boolean;
    showForwardBack?: boolean;
    hideFirstLastIfActive?: boolean;
    setCurrentPage: (number: any) => any;
}
declare const Pagination: React.FC<IPaginationProps>;
export default Pagination;
