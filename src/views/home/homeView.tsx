import React, { useCallback, useEffect, useState } from "react";
import "./home.css";
import { SearchSection, ShowSection, PaginationSection } from "./sections";

export const HomeView: React.FC = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);

  // set if seaching
  const [loading, setLoading] = useState(false);

  // for pagination
  const [page, setPage] = useState(1);
  const perPage = 10;
  const totalPages = Math.ceil(restaurants.length / perPage);
  const handlePages = (updatePage: number) => setPage(updatePage);

  return (
    <>
      <div className="container">
        <SearchSection
          setRestaurants={setRestaurants}
          setLoading={setLoading}
        ></SearchSection>
        <ShowSection
          restaurants={restaurants}
          page={page}
          perPage={perPage}
          totalPages={totalPages}
          loading={loading}
        ></ShowSection>
        <PaginationSection
          page={page}
          totalPages={totalPages}
          handlePagination={handlePages}
        />
      </div>
    </>
  );
};
