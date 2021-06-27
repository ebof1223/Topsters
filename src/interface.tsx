export interface AlbumTemplate {
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

export interface TopsterTemplate {
  title: string;
  id: string;
  albums: AlbumTemplate[];
  some?: (item: { title: string }) => boolean;
}
