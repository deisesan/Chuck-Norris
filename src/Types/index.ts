/* eslint-disable camelcase */
export interface Joke {
  type: string;
  value: {
    id: number;
    joke: string;
    categories: Category[];
  };
}

export interface Count {
  type: string;
  value: number;
}

export interface Category {
  value: string;
}

export interface Categories {
  type: string;
  value: Category;
}
