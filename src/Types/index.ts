/* eslint-disable camelcase */
export interface Joke {
  type: string;
  value: {
    id: number;
    joke: string;
  };
}

export interface Count {
  type: string;
  value: number;
}

export interface Category {
  values: string;
}

export interface Categories {
  type: string;
  value: Category[];
}
