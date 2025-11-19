"use client";

import { Rating } from "@mui/material";
import { useState, useEffect, useReducer } from "react";


// useData Hook

export function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      let ignore = false;

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) setData(json);
        });

      return () => {
        ignore = true;
      };
    }
  }, [url]);

  return data;
}


// BitcoinRates Component

export function BitcoinRates() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const [currency, setCurrency] = useState(currencies[0]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const data = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  return (
    <div className="Bitcoin componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      {data
        ? `1 BTC = ${data.bitcoin[currency.toLowerCase()]} ${currency}`
        : "Loading..."}
    </div>
  );
}


// Reducer for Posts

function reducer(postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}


// PostListReducer Component

export function PostListReducer() {
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((err) =>
        dispatch({ type: "FETCH_ERROR", payload: err.message })
      );
  }, []);

  return (
    <div className="PostList componentBox">
      {postsResult.loading ? (
        <div>Loading posts...</div>
      ) : (
        postsResult.posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
      <div className="error">{postsResult.error}</div>
    </div>
  );
}


// PAGE COMPONENT (exports)

export default function BitCoinPage() {
  return (
    <div className="BitCoin">
      <BitcoinRates />
      {/* <PostListReducer /> */}
    </div>
  );
}