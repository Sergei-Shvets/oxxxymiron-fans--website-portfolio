import React from 'react';
import { Link } from 'react-router-dom';

import { useNewsItems } from '../../hooks/useNewsItems';
import { getLocaleDateString } from '../../utils/common';

import PageTitle from '../Title/PageTitle';
import Loader from '../Loader/Loader';
import Icon from '../Icon/Icon';

const NewsPage = () => {
    const { items, isLoading } = useNewsItems();

    return (
        <section className="news-page page">
            <div className="container">
                <PageTitle text="All the news" />

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="news-list">
                        {items.map(({ title, date, cover: { url }, sys: { id } }) => {
                            return (
                                <div className="news-list__item" key={id}>
                                    <div className="news-list__item-img" style={{ backgroundImage: `url(${url})` }} />

                                    <div className="news-list__item-info">
                                        <p className="news-list__item-date">{getLocaleDateString(date)}</p>
                                        <h2 className="news-list__item-title">{title}</h2>
                                        <Link to={`/news/${id}`} className="news-list__item-button">
                                            <span>Read</span>
                                            <Icon name="arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsPage;
