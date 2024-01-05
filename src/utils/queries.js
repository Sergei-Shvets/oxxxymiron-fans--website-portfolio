export const tourItemCollectionQuery = `{
    tourItemCollection {
        items {
          date,
          place,
          city,
          soldOut,
          country,
          ticketLink,
          videoLink,
          sys {
            id
          }
        }
      }
}`;

export const trackItemCollectionQuery = `{
  trackCollection {
      items {
        sys {
          id
        }
        date
        title
        description
        link{
          url
        }
        cover{
          url
        }
      }
    }
}`;

export const newsItemCollectionQuery = `{
  newsCollection {
      items {
        sys {
          id
        }
        title
        date
        cover{
          url
        }
      }
    }
}`;

export const newsItemQuery = (id) => `{
  news(id: "${id}") {
    sys {
      id
    }
    title
    date
    cover{
      url
    }
    description{
      json
    }
  }
}`;
