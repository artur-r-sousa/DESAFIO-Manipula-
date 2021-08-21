import React,{ useEffect, useRef } from 'react';

const UIInfiniteScroll = ({ fetchMore }) => {
 
    const containerRef = useRef();
    
    useEffect(()=>{
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                fetchMore();
                observer.disconnect();
            }
        }, options);

        observer.observe(containerRef.current)
        return () => {
            
            observer.disconnect();
        }
    }, []);

    return <div ref={containerRef}></div>
}

export default UIInfiniteScroll;