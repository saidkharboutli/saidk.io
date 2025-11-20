import { useEffect, useState } from 'react';

const BlogViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const path = encodeURIComponent(window.location.pathname);

    const addView = async () => {
      fetch('/api/pageViews', {
        method: 'PUT',
        referrerPolicy: 'same-origin',
        body: JSON.stringify({
          path,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    };

    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/pageViews?path=${path}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        if (!data.count || Number.isNaN(Number(data.count))) throw new Error('Invalid data');

        setViews(Number(data.count));
      } catch (error) {
        setViews(1);
        console.error('Error fetching view count:', error);
      }
    };

    addView();
    fetchViews();
  }, []);

  return (
    views && (
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span>{views}</span>
      </div>
    )
  );
};

export default BlogViewCounter;
