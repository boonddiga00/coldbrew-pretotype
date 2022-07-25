interface IImage {
  _id: string;
  url: string;
}
interface IChangedAt {
  raw: string;
  formatted: string;
  ago: string;
}

export interface ICatalog {
  _id: string;
  title: string;
  description: string;
  items: ICatagoryItem[];
  meta: {};
  createdAt: IChangedAt;
  updatedAt: IChangedAt;
  slug: string;
}

export interface ICatagoryItem {
  title: string;
  description: string;
  image: IImage | null;
  link: string | null;
}

export interface IBrand {
  _id: string;
  name: string;
  description: string;
  thumbnail: IImage;
  logo: IImage;
  meta: {
    text: string | null;
  };
  createdAt: IChangedAt;
  updatedAt: IChangedAt;
  slug: string;
}
