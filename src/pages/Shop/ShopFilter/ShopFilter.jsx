import React from "react";
import "./ShopFilter.css";

function ShopFilter({
  sort,
  setSort,
  showFilter,
  setShowFilter,
}) {
  return (
    <>
      <section className="filter-bar">

        <div className="filter-left">

          <button
            className="filter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            <span>☷</span>
            Filter
          </button>

          <span className="grid-icon">
            ▪▪
          </span>

          <span className="list-icon">
            ▤
          </span>

          <div className="filter-divider"></div>

          <span className="result-text">
            Showing 1–16 of 32 results
          </span>

        </div>


        <div className="filter-right">

          <span>Show</span>

          <div className="show-number">
            16
          </div>

          <span>Short by</span>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="sort-select"
          >
            <option value="default">
              Default
            </option>

            <option value="low">
              Price Low to High
            </option>

            <option value="high">
              Price High to Low
            </option>

            <option value="name">
              Name
            </option>

          </select>

        </div>

      </section>


      {showFilter && (
        <div className="filter-panel">

          <h3>Filter Products</h3>

          <div className="filter-options">

            <label>
              <input type="checkbox" />
              Chairs
            </label>

            <label>
              <input type="checkbox" />
              Sofas
            </label>

            <label>
              <input type="checkbox" />
              Tables
            </label>

            <label>
              <input type="checkbox" />
              Outdoor
            </label>

          </div>

        </div>
      )}
    </>
  );
}

export default ShopFilter;