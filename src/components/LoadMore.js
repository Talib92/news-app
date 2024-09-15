import React from 'react';

const LoadMore = ({ loadMore, count, totalLength, theme }) => {
  return (
    <>
      {count < totalLength && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={loadMore}
            className={`px-4 py-2 rounded-lg mb-4 font-semibold ${theme === 'Light' ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-black text-white hover:bg-neutral-800'}`}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default LoadMore;
