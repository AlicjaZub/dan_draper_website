import React, { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, all }: any) => {
  useEffect(() => {
    if (activeGenre === "all") {
      setFiltered(all);
      return;
    }
    const filtered = all.filter((project: any) =>
      project.type.includes(activeGenre)
    );

    setFiltered(filtered);
  }, [activeGenre, all, setFiltered]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === "all" ? "active" : ""}
        onClick={() => setActiveGenre("all")}
      >
        All
      </button>
      <button
        className={activeGenre === "tv" ? "active" : ""}
        onClick={() => setActiveGenre("tv")}
      >
        Film/TV
      </button>
      <button
        className={activeGenre === "music" ? "active" : ""}
        onClick={() => setActiveGenre("music")}
      >
        Music
      </button>
    </div>
  );
};

export default Filter;
