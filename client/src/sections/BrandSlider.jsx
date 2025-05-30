import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "./BrandSlider.scss";
import BrandCard from "../components/ui/BrandCard";
import "swiper/css";

import brand01 from "../../assets/images/brand-01.png";
import brand02 from "../../assets/images/brand-02.png";
import brand03 from "../../assets/images/brand-03.png";
import brand04 from "../../assets/images/brand-04.png";
import brand05 from "../../assets/images/brand-05.png";
import brand06 from "../../assets/images/brand-06.png";
import brand07 from "../../assets/images/brand-07.png";
import brand08 from "../../assets/images/brand-08.png";
import brand09 from "../../assets/images/brand-09.png";
import brand10 from "../../assets/images/brand-10.png";
import brand11 from "../../assets/images/brand-11.png";

export default function BrandSlider() {
  const brands = [{ url: brand01 }, { url: brand02 }, { url: brand03 }, { url: brand04 }, { url: brand05 }, { url: brand06 }, { url: brand07 }, { url: brand08 }, { url: brand09 }, { url: brand10 }, { url: brand11 }];
  return (
    <section className="brand-slider bg-black py-32">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 7,
            },
            1200: {
              slidesPerView: 10,
            },
          }}
        >
          {brands.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <BrandCard url={item.url} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
