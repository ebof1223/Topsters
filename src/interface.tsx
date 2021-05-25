export default interface AlbumStructure {
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
