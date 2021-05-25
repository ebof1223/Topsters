export default interface Album {
  aritst: {};
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
