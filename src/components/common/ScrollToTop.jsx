import React from 'react'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const { showScroll, scrollToTop } = useScrollToTop();
  return (
    <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
