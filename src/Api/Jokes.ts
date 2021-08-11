/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from '../Services/Api';
import { Joke, Count } from '../Types';

export const getJoke = async (id: number) => api.get<Joke>(`/jokes/${id}`);

export const getJokeRandom = async () => api.get<Joke>('/jokes/random');

export const countJokes = async () => api.get<Count>('/jokes/count');

export const getJokesRandom = async (qtd: number) => api.get<Joke>(`/jokes/random/${qtd}`);
