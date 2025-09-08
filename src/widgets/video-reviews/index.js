import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, EffectCoverflow } from "swiper/modules";

import reviews from "@/shared/data/reviews.json";
import styles from "./video-reviews.module.css";

export default function VideoReviews() {
  return (
    <>
      <Swiper
        effect="coverflow"
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: `.${styles["custom-next"]}`,
          prevEl: `.${styles["custom-prev"]}`,
        }}
        // loop={true}
        centeredSlides={true}
        initialSlide={2}
        slideToClickedSlide={true}
        speed={600}
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
