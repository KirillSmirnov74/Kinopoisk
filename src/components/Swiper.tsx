import { Pagination, Scrollbar, Mousewheel, Autoplay, Keyboard, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';
import { SimilarsFilmModel } from '../types';
import { MovieCardForSwiper } from './MovieCardForSwiper';

export function SwiperComponent({ data }: { data: SimilarsFilmModel[] }) {

    const validData = data.filter(film =>
        film.posterUrl &&
        film.nameRu &&
        film.kinopoiskId !== null
    )

    return (
        <div className="w-full h-[400px] relative">
            <Swiper
                modules={[Pagination, Scrollbar, Mousewheel, Autoplay, Keyboard, FreeMode]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                }}
                scrollbar={{
                    draggable: true,
                }}

                mousewheel={{
                    enabled: true,
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}

                freeMode={{
                    enabled: true,
                    momentum: true,
                    momentumRatio: 0.5,
                }}

                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}

                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}

                loop={true}
                grabCursor={true}
            >
                {validData.map((film) => (
                    <SwiperSlide key={film.kinopoiskId} className='mb-20'>
                        <MovieCardForSwiper
                            kinopoiskId={film.kinopoiskId}
                            nameRu={film.nameRu}
                            posterUrl={film.posterUrl}
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>

    );
}