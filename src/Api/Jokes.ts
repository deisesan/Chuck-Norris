/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from '../Services/Api';
import { Joke, Count } from '../Types';

export const getJokerRandom = async () => api.get<Joke>('/jokes/random');

export const countJokes = async () => api.get<Count>('/jokes/count');
