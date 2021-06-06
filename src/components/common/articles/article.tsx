import React, { createContext, RefObject, useCallback, useContext, useEffect, useRef, useState, VFC } from 'react';
import List from './view/List';
import MSize from './view/MSize';

export interface ArticleContextProps {
  title: string;
  description?: string;
}

interface ArticleProps {
  id: string;
  loader?: (id: string) => Promise<ArticleContextProps>;
  type?: 'list' | 'card-s' | 'card-m' | 'card-l';
}

export const ArticleContext = createContext<ArticleContextProps>({
  title: '',
});

export const useArticleProps = () => {
  return useContext(ArticleContext);
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

const Article: VFC<ArticleProps> = ({
  id,
  type = 'list',
  loader,
}) => {
  const refWrap = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ArticleContextProps>({
    title: '',
  });

  const updateHeight = useCalcHeight(refWrap)
  useResizeObserver(refWrap, updateHeight);

  useEffect(() => {
    if (loader == null) return;
    loader(id)
      .then((val) => {
        console.log(val);
        setState(val);
        updateHeight();
      });
  }, [id, loader]);

  const component = ((type: string) => {
    switch (type) {
      case 'list':
        return <List />;
      case 'card-m':
        return <MSize />;
      default:
        return <MSize />;
    };
  })(type);

  return (
    <ArticleContext.Provider value={state}>
      <div ref={refWrap}>
        {component}
      </div>
    </ArticleContext.Provider>
  );
};

export default Article;
