import React from 'react';

import { Link } from 'react-router-dom';

import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';
import TourItem from './TourItem';
import Loader from '../Loader/Loader';

import { sortByDate } from '../../utils/common';
import { useTourItems } from '../../hooks/useTourItems';

const TourItems = () => {
    const { items = [], isloading } = useTourItems();

    const filtered = sortByDate(items.filter(({ soldOut }) => !soldOut).filter((_, index) => index < 5));

    return (
        <Section className="tour">
            <div className="container">
                <SectionTitle text="Concerts" />
                {isloading ? (
                    <Loader />
                ) : (
                    <ul className="tour-list">
                        {filtered.map((item, index) => (
                            <TourItem {...item} index={index} key={item.sys.id} />
                        ))}
                    </ul>
                )}
                <Link to="/tour" className="button-more">
                    All the concerts
                </Link>
            </div>
        </Section>
    );
};

export default TourItems;
