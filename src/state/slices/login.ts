import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestLogin } from '../../service/request/auth';
import { LoginForm } from '../../types';

interface LoginState {
  accessToken: string;
  error: Error | null;
}

const name = 'login';

const initialState: LoginState = {
  accessToken: '',
  error: null,
};

export const loginAsyncAction = {
  login: createAsyncThunk(
    `${name}/login`,
    async (form: LoginForm, thunkAPI) => {
      try {
        const { accessToken } = await requestLogin(form);

        return accessToken as string;
      } catch (error) {
        return thunkAPI.rejectWithValue(error as Error);
      }
    }
  ),
};

const loginSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsyncAction.login.fulfilled, (state, { payload }) => {
      state.accessToken = payload;
    });

    builder.addCase(loginAsyncAction.login.rejected, (state, { payload }) => {
      state.error = payload as Error;
    });
  },
});

export const { actions: loginAction } = loginSlice;

export default loginSlice.reducer;
