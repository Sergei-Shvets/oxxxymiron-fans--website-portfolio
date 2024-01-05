import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ScrollAnimation from 'react-animate-on-scroll';

import Icon from '../Icon/Icon';

import 'swiper/css';
import { SLIDER_BUTTON_TYPES } from '../../utils/constants';
import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';

import Loader from '../Loader/Loader';
import { useNewsItems } from '../../hooks/useNewsItems';

const News = () => {
    const { PREV, NEXT } = SLIDER_BUTTON_TYPES;

    const sliderRef = useRef();
    const { items = [], isLoading } = useNewsItems();

    const handleButtonClick = useCallback(
        (type) => {
            if (!sliderRef.current) return;

            const { swiper } = sliderRef.current;

            type === NEXT ? swiper.slideNext() : swiper.slidePrev();
        },
        [NEXT]
    );

    return (
        <Section>
            <div className="container">
                <SectionTitle text="News" />
                {isLoading ? (
                    <Loader />
                ) : (
                    <Swiper
                        className="news"
                        ref={sliderRef}
                        spaceBetween={24}
                        slidesPerView={4}
                        navigation
                        modules={[Navigation]}
                        breakpoints={{
                            1366: {
                                slidesPerView: 4,
                            },
                            767: {
                                slidesPerView: 3,
                            },
                            520: {
                                slidesPerView: 2,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {items.map(({ title, sys: { id }, cover: { url } }, index) => (
                            <SwiperSlide key={id}>
                                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
                                    <Link className="news-item" to={`/news/${id}`}>
                                        <div className="news-item__img">
                                            <img src={url} alt={title} />
                                        </div>
                                        <h3 className="news-item__title">{title}</h3>
                                    </Link>
                                </ScrollAnimation>
                            </SwiperSlide>
                        ))}
                        <div className="navigation">
                            <div className="navigation-button navigation-prev" onClick={() => handleButtonClick(PREV)}>
                                <Icon name="slider-arrow" />
                            </div>
                            <div className="navigation-button navigation-next" onClick={() => handleButtonClick(NEXT)}>
                                <Icon name="slider-arrow" />
                            </div>
                        </div>
                    </Swiper>
                )}
            </div>
        </Section>
    );
};

export default News;
