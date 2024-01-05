export const MAIN_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`;

export const ASSET_URL = (id) =>
    `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/assets/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;

export const MENU = [
    {
        name: 'Concerts',
        link: 'tour',
    },
    {
        name: 'Creation',
        link: 'tracks',
    },
    {
        name: 'News',
        link: 'news',
    },
    {
        name: 'OXXXYSHOP',
        link: 'shop',
    },
];

export const SOCIALS = [
    {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCCzp3DWpSc0s5wXYDghjM9A',
    },
    {
        icon: 'twitter',
        link: 'https://twitter.com/norimyxxxo',
    },
    {
        icon: 'applemusic',
        link: 'https://music.apple.com/pl/artist/oxxxymiron/301601116',
    },
    {
        icon: 'tiktok',
        link: 'https://www.tiktok.com/@oxxxymiron',
    },
    {
        icon: 'instagram',
        link: 'https://www.instagram.com/norimyxxxo',
    },
    {
        icon: 'spotify',
        link: 'https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB',
    },
];

export const SLIDER_BUTTON_TYPES = {
    NEXT: 'NEXT',
    PREV: 'PREV',
};
