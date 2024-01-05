import React, { useCallback, useEffect, useState } from 'react';
import { useTourItems } from '../../hooks/useTourItems';
import PageTitle from '../Title/PageTitle';
import Loader from '../Loader/Loader';
import TourItem from './TourItem';

const TourPage = () => {
    const { items = [], isloading } = useTourItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const tabs = [...new Set(items.map(({ country }) => country))];

    const [activeTab, setActiveTab] = useState(null);
    const [filtered, setFiltered] = useState([]);

    const toggleTab = useCallback(
        (tab) => {
            setActiveTab(tab);
            setFiltered(items.filter(({ country }) => country === tab));
        },
        [items]
    );

    useEffect(() => {
        if (tabs.length && !activeTab) setActiveTab(tabs[0]);
    }, [tabs, toggleTab, activeTab]);

    return (
        <section className="tour-page page">
            <div className="container">
                <PageTitle text="All the concerts" />

                {isloading ? (
                    <Loader />
                ) : (
                    <>
                        <ul className="tour-tabs">
                            {tabs.map((tab) => (
                                <li
                                    onClick={() => toggleTab(tab)}
                                    className={`tour-tab ${activeTab === tab ? 'active' : ''}`}
                                    key={tab}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                        <ul className="tour-items">
                            {filtered.map((item, index) => (
                                <TourItem key={item.sys.id} i={index} {...item} />
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
};

export default TourPage;
