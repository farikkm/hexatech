import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import reviews from "@/shared/data/reviews.json";
import styles from "./video-reviews.module.css";

export default function VideoReviews() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: `.${styles["custom-next"]}`,
          prevEl: `.${styles["custom-prev"]}`,
        }}
        loop
        centeredSlides
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className={styles.reviews__slider}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={styles.reviews__slide}>
              <img
                className={styles.reviews__image}
                src={review.imgHref}
                alt="video-review-img"
              />
              <div className={styles.reviews__desc}>
                <h4>{review.fullName}</h4>
                <span>{review.course}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={styles["custom-prev"]}>‹</div>
        <div className={styles["custom-next"]}>›</div>
      </Swiper>
    </>
  );
}
