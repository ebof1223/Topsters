export interface AlbumStructure {
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

export interface ToppingsStructure {
  title: string;
  id: string;
  albums: AlbumStructure[];
  some?: (item: { title: string }) => boolean;
}
