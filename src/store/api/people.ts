import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { PeopleResponse } from '@core/types';
import { api } from '@store/api/api.ts';
import { API_PAGE, API_SEARCH } from '@core/constants';

export const getPeople = createAsyncThunk(
  'people/getPeople',
  async (value: number | string) => {
    const { data }: AxiosResponse<PeopleResponse> = await api.get(
      `${Number.isInteger(value) ? API_PAGE : API_SEARCH}${value}`,
    );
    return data;
  },
);
