import React, { useState, useEffect, useRef } from 'react';

import Card from './Card';

const Scroll = () => {
  const scrollBottomRef = useRef();
  const [cardsData, setCardsData] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    limit: 10,
    totalRecord: 0,
    start: 0,
    elementY: 0
  });

  const fetchCardsData = (currentPage) => {
    fetch(`https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=${currentPage}&limit=${pageInfo.limit}`)
      .then(resp => resp.json())
      .then(resp => {
        setPageInfo((pageInfo) => {
          return {
            ...pageInfo,
            totalRecord: resp.totalRecord,
            start: resp.start
          };
        });
        setCardsData((cardsData) => {
          return [...cardsData, ...resp.docs];
        })
      });
  };

  const observerCallback = (elements, observer) => {
    const elementY = elements[0].boundingClientRect.y;
    if (elementY > pageInfo.elementY) {
      setPageInfo((pageInfo) => {
        fetchCardsData(pageInfo.page + 1);
        return {
          ...pageInfo,
          page: pageInfo.page + 1
        };
      });
    }
    setPageInfo((pageInfo) => {
      return {
        ...pageInfo,
        elementY
      };
    });
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    fetchCardsData(pageInfo.page);
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    
    let observer = new IntersectionObserver(observerCallback, options);
    observer.observe(scrollBottomRef.current);
  }, []);

  return (
    <div id="scroll">
      <div className="cards-container">
        {cardsData.map((cardData, index) => <Card data={cardData} key={`cd_${index}`} />)}
      </div>
      <div ref={scrollBottomRef}>Fetching more data..</div>
      {cardsData.length > 20 && (
        <div className="scroll-top">
          <button className="btn" onClick={scrollToTop}>
            Scroll to top
          </button>
        </div>
      )}
    </div>
  );
};

export default Scroll;