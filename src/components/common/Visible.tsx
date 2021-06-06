import React, { RefObject, useCallback, useEffect, useRef, useState, VFC } from 'react';

interface ArticleProps {
  id: string;
  isShow?: boolean;
}

const useResizeObserver = (ref: RefObject<HTMLElement>, cb: (entries: ResizeObserverEntry[]) => void) => {
  useEffect(() => {
    if (ref.current == null) return;
    ref.current.style.minHeight = '';
    const observer = new ResizeObserver(cb)
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
}

export const useCalcHeight = (ref: RefObject<HTMLElement>) => {
  return useCallback(() => {
    if (ref.current == null) return;
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, [ref]);
}

const Visible: VFC<ArticleProps> = ({
  id,
}) => {
  return (
    <div>
      hoge
    </div>
  );
};

export default Visible;
