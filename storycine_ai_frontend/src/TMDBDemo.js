import React, { useState } from "react";
import { searchMovies } from "./services/tmdbApi";

// PUBLIC_INTERFACE
/**
 * Demo component: Shows TMDB movie search and result display.
 * Users enter a movie name, search, and view matching movies from TMDB.
 */
function TMDBDemo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // PUBLIC_INTERFACE
  /**
   * Handles movie search via TMDB API.
   */
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);
    try {
      const data = await searchMovies(query);
      setResults(data?.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: 48 }}>
      <h2>TMDB Movie Search Demo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter a movie name, e.g. "Inception"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: 280,
            maxWidth: "70%",
            border: "1px solid #ccc",
            borderRadius: 4,
            marginRight: 8
          }}
        />
        <button
          type="submit"
          disabled={loading || !query}
          className="btn"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && (
        <div style={{ color: "red", margin: "10px 0" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      <div style={{ marginTop: 20, maxWidth: 700 }}>
        {results.length > 0 && (
          <div>
            <div style={{ marginBottom: 8, color: "#aaa" }}>
              Found {results.length} movie{results.length !== 1 && "s"}:
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {results.map((movie) => (
                <li
                  key={movie.id}
                  style={{
                    marginBottom: 18,
                    display: "flex",
                    alignItems: "flex-start"
                  }}
                >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      style={{
                        width: 64,
                        borderRadius: 6,
                        marginRight: 14,
                        boxShadow: "0 1px 6px rgba(0,0,0,0.16)"
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 64,
                        height: 96,
                        background: "#222",
                        borderRadius: 6,
                        marginRight: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#666"
                      }}
                    >
                      ?
                    </div>
                  )}
                  <div>
                    <div style={{ fontWeight: 600 }}>
                      {movie.title}
                      {movie.release_date ? (
                        <span style={{ color: "#fff8", marginLeft: 8, fontSize: 14 }}>
                          ({movie.release_date.slice(0, 4)})
                        </span>
                      ) : null}
                    </div>
                    {movie.overview && (
                      <div style={{ fontSize: 15, color: "#bbb", marginTop: 4 }}>
                        {movie.overview.length > 170
                          ? movie.overview.slice(0, 170) + "..."
                          : movie.overview}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TMDBDemo;
