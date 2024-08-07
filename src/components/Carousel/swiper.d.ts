import React from "react";

import type { SwiperSlideProps, SwiperProps } from "swiper/react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          navigation: string;
          centeredSlides: boolean;
          // Add more properties
        },
        SwiperProps,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}
