
import { useEffect, useState } from "react";

export default function App() {
  const [category, setCategory] = useState("Bats");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    // Simulate different categories using different user IDs
    const userId = category === "Bats" ? 1 : 2;

    async function fetchPosts() {
      setLoading(true);
      setError("");
      setPosts([]);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${}`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        if (!controller.signal.aborted) {
          setPosts(data);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    // Cancel the previous request when category changes
    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <div>
      <h1>Posts List</h1>

      <label htmlFor="category">Select category: </label>

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Bats">Bats</option>
        <option value="Balls">Balls</option>
      </select>

      <h2>Selected: {category}</h2>

      {loading && <p>Loading posts...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && posts.length === 0 && (
        <p>No posts found.</p>
      )}

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
