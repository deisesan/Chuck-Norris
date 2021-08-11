/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from '../Services/Api';
import { Categories } from '../Types';

export const getCategories = async () => api.get<Categories>('/categories');

export const getCategoriesLimiting = async (categories: string[]) =>
  api.get<Categories>(`/jokes/random?limitTo=${categories}`);

export const getCategoriesExclude = async (categories: string[]) =>
  api.get<Categories>(`/jokes/random?exclude=${categories}`);
