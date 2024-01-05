import Asset from '../components/Assets/Asset';
import AssetHeading from '../components/Assets/AssetHeading';
import AssetLink from '../components/Assets/AssetLink';
import AssetText from '../components/Assets/AssetText';
import { MAIN_URL } from './constants';

export const request = async (query) => {
    try {
        const result = await fetch(MAIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        });

        const { data } = await result.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const sortByDate = (arr) => {
    return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getLocaleDateString = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
    });
};

export const renderNode = ({ nodeType, data, value, content }, index) => {
    const key = `${nodeType}${index}`;

    switch (nodeType) {
        case 'paragraph':
            return <p key={key}>{content.map(renderNode)}</p>;
        case 'text':
            return <AssetText key={key} value={value} />;
        case 'heading-3':
            return <AssetHeading key={key} content={content} />;
        case 'embedded-asset-block':
            return <Asset key={key} id={data.target.sys.id} />;
        case 'hyperlink':
            return <AssetLink key={key} content={content} uri={data.uri} />;
        default:
            break;
    }
    return Array.isArray(content) ? content.map(renderNode) : null;
};

export const jsonToText = ({ content }) => {
    return content.map(renderNode);
};

export const getAsset = async (assetId) => {
    try {
        const url = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/assets/${assetId}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;
        const result = await fetch(url);
        const data = await result.json();

        const link = data?.fields?.file?.url;

        return link ? `https:${link}` : null;
    } catch (error) {
        console.log(error);
    }
};
