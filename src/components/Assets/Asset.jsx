import React, { useEffect, useState } from 'react';
import { getAsset } from '../../utils/common';

const Asset = ({ id }) => {
    const [asset, setAsset] = useState(null);

    useEffect(() => {
        const fetchAsset = async () => {
            const item = await getAsset(id);
            setAsset(item);
        };

        fetchAsset();
    }, [id]);

    console.log(asset);

    return asset ? <img src={asset} alt="some-img" /> : <></>;
};

export default Asset;
