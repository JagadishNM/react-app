import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const pageRef = useRef(1); // Keeps track of the current page
  
  const loadMoreItems = useCallback(async () => {
    const response = await fetch(`https://api.example.com/items?page=${pageRef.current}`);
    const newItems = await response.json();

    setItems((prevItems) => [...prevItems, ...newItems]);
    if (newItems.length === 0) setHasMore(false);
  }, []);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]);

  const lastItemRef = useCallback((node) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        pageRef.current += 1;
        loadMoreItems();
      }
    });
    if (node) observerRef.current.observe(node);
  }, [hasMore, loadMoreItems]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
        {hasMore && <li ref={lastItemRef}>Loading more...</li>}
      </ul>
    </div>
  );
}