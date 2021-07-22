interface AlbumTemplate {
  tracks: any;
  artist: { name: string };
  image: {
    '#text': string;
  }[];
  mbid: string;
  name: string;
  playcount: number;
  url: string;
  some: (item: { name: string }) => boolean;
  length: number;
}

interface TopsterTemplate {
  title: string;
  id: string;
  albums: AlbumTemplate[];
  bookmarked?: boolean;
  some?: (item: { title: string }) => boolean;
}

export type {AlbumTemplate, TopsterTemplate}