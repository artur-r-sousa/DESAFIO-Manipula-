import React,{ useEffect, useRef, useState } from 'react';

const UIInfiniteScroll = ({ fetchMore }) => {
 
    const containerRef = useRef();

    function loadMore() {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                fetchMore();
                observer.disconnect();
                console.log('infinite trigger')
            }
        }, options);

        observer.observe(containerRef.current)
        return () => {
            
            observer.disconnect();
        }
    }
         
    useEffect(()=>{
        loadMore();
    }, []);

    return <div ref={containerRef}></div>
}

export default UIInfiniteScroll;