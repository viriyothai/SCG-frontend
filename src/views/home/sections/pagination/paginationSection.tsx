import React from "react";
import classNames from "classnames";

import "./pagination.css";

// pass current page, total pages and function to callback handled page
export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

// handle pagination
export const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <div className="pagination-container">
      {/* if no searched restaurant, hide all pagination number */}
      <div className={`pagination-wrapper ${totalPages == 0 && "hide"}`}>
        {/* show the left side button */}
        <button
          onClick={() => handlePagination(page > 1 ? page - 1 : 1)}
          type="button"
          className={`page-item sides ${page === 1 && "hide"}`}
        >
          &lt;
        </button>

        {/* if the current page is the last page, show 2 more pages in the front */}
        {totalPages >= 5 && (page === totalPages || page === totalPages - 1) ? (
          <button
            onClick={() => handlePagination(totalPages - 4)}
            type="button"
            className="page-item"
          >
            {totalPages - 4}
          </button>
        ) : (
          ""
        )}

        {/* if the current page is the last 2 pages, show 1 more page in the front */}
        {totalPages >= 5 && page === totalPages ? (
          <button
            onClick={() => handlePagination(totalPages - 3)}
            type="button"
            className="page-item"
          >
            {totalPages - 3}
          </button>
        ) : (
          ""
        )}

        {/* if the current page is not the 2 first pages, show 1 more page in the front */}
        {page - 2 > 0 ? (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className="page-item"
          >
            {page - 2}
          </button>
        ) : (
          ""
        )}

        {/* if the current page is not the first page, show 2 more page in the front */}
        {page - 1 > 0 ? (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className="page-item"
          >
            {page - 1}
          </button>
        ) : (
          ""
        )}

        {/* show current page */}
        <button
          onClick={() => handlePagination(page)}
          type="button"
          className="page-item active"
        >
          {page}
        </button>

        {/* show if the next page is not the last page */}
        {page + 1 <= totalPages ? (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className="page-item"
          >
            {page + 1}
          </button>
        ) : (
          ""
        )}

        {/* show if the next 2 pages is not the last page */}
        {page + 2 <= totalPages ? (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
            className="page-item"
          >
            {page + 2}
          </button>
        ) : (
          ""
        )}

        {/* set default number of showing pages to 5 */}
        {/* if current page is the first page, show 4 mores pages */}
        {totalPages >= 5 && page === 1 ? (
          <button
            onClick={() => handlePagination(page + 3)}
            type="button"
            className="page-item"
          >
            {page + 3}
          </button>
        ) : (
          ""
        )}

        {/* set default number of showing pages to 5 */}
        {/* if current page is the second page, show 3 mores pages */}
        {totalPages >= 5 && (page === 1 || page === 2) ? (
          <button
            onClick={() => handlePagination(page + 4)}
            type="button"
            className="page-item"
          >
            {page + 4}
          </button>
        ) : (
          ""
        )}

        {/* show the right side button */}
        <button
          onClick={() => handlePagination(page + 1)}
          type="button"
          className={`page-item sides ${totalPages === page && "hide"}`}
        >
          &gt;
        </button>
      </div>
      <div className="total-page">
        Total <b>{totalPages}</b> pages
      </div>
    </div>
  );
};

export default PaginationComponent;
