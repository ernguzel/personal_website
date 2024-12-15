declare module 'react-scroll' {
  import * as React from 'react';

  export interface ScrollerStatic {
    scrollTo: (target: string, options?: {
      duration?: number;
      delay?: number;
      smooth?: boolean | string;
      offset?: number;
    }) => void;
  }

  export const scroller: ScrollerStatic;

  export interface ElementProps {
    name: string;
    className?: string;
    children?: React.ReactNode;
  }

  export const Element: React.FC<ElementProps>;
}
