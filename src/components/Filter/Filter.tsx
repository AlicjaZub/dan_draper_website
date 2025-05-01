import React, { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, all }: any) => {
  useEffect(() => {
    const updatedFiltered =
      activeGenre === "all"
        ? all
        : all.filter((project: any) => project.type.includes(activeGenre));

    setFiltered(updatedFiltered);
  }, [activeGenre, all]);

  const genres = [
    { code: "all", title: "All" },
    { code: "TV", title: "Film/TV" },
    { code: "CM", title: "Commercials" },
    { code: "MV", title: "Music Videos" },
    { code: "SH", title: "Shorts" },
  ];

  return (
    <div className="filter-container">
      {genres.map(({ code, title }) => {
        return (
          <button
            key={code}
            className={`filter-button ${activeGenre === code ? "active" : ""}`}
            onClick={() => setActiveGenre(code)}
            aria-pressed={activeGenre === code}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
