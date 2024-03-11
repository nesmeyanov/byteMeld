import style from "./sliderWorks.module.scss"
import "./swiper.scss"
import { Work } from "../Work";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import {ArrowRight} from "../../Icons";
import { imagesList } from "../imagesList.jsx";

export function SliderWorks({ isMobil, data }) {
	return (
		<div>
			<Swiper
				modules={[Autoplay, FreeMode, Navigation, Pagination]}
				loop={true}
				// slidesPerGroup={1}
				slidesPerView={isMobil ? 1 : 2}
				spaceBetween={40}
				speed={500}
				pagination={{
					clickable: true,
					type: "bullets",
					el: `.${style.pagination}`,
				}}
				navigation={{
					prevEl: `.${style.prevBtn}`,
					nextEl: `.${style.nextBtn}`,
				}}
				// navigation={{
				// 	nextEl: ".swiper-button-next",
				// 	prevEl: ".swiper-button-prev",
				// }}
			>
				<div
					slot="container-end"
					className={style.btn_container}
				>
					<div
						// className="swiper-button-prev"
						className={style.prevBtn}
					>
						<ArrowRight stroke="white"/>
					</div>
					<div className={style.pagination}></div>
					<div
						// className="swiper-button-next"
						className={style.nextBtn}
					>
						<ArrowRight stroke="white"/>
					</div>
				</div>
				{data.map((item, index) => (
					<SwiperSlide
						key={index}
						className={style.swiperSlide}
					>
						<Work
							key={index}
							site={item[Object.keys(item)[0]]}
							img={imagesList[index]}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}