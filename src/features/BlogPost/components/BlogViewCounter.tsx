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
        setViews(Number(data.views));
      } catch (error) {
        setViews(1);
      }
    };

    addView();
    fetchViews();
  }, []);

  return (
    views && (
      <div>
        <p>Seen by {views}</p>
      </div>
    )
  );
};

export default BlogViewCounter;
