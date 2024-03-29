import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsItem } from '../../reducers/newsReducer';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getLocaleDateString, jsonToText } from '../../utils/common';

const NewsSingle = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { item, isLoading } = useSelector(({ news }) => news);

    useEffect(() => {
        dispatch(getNewsItem(id));
    }, [dispatch, id]);

    return (
        <section className="news-single page">
            <div className="container">
                {isLoading || !item ? (
                    <Loader />
                ) : (
                    <div className="news-single__item">
                        <h2 className="news-single__item-title">{item.title}</h2>
                        <p className="news-single__item-date">{getLocaleDateString(item.date)}</p>
                        <div className="news-single__item-image">
                            <img src={item.cover.url} alt={item.title} />
                        </div>
                        <div className="news-single__item-content">{jsonToText(item.description.json)}</div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsSingle;
