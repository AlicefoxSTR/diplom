import { UserSlice } from "entities/User";
import { userApi } from "entities/User/api/UserApi";

export const authMiddleware = ({ getState, dispatch }) => async (args, next) => {
  console.log('qwe')
  // Проверяем просроченность access token
  const refreshToken = getState().user.refresh_token;
  const accessToken = getState().user.access_token;

  const isAccessTokenExpired = await dispatch(userApi.endpoints.fetchUserDetail.initiate({ access: accessToken }));

  if (isAccessTokenExpired.error) {
    // Выполняем запрос на обновление access token
    const refreshResponse = await dispatch(userApi.endpoints.refreshToken.initiate({ refresh: refreshToken }));

    if (refreshResponse.data) {
      // Если успешно обновлен access token, обновляем его в хранилище
      dispatch(UserSlice.actions.refreshToken(refreshResponse.data.access_token));
    }
  }

  return next(args)
};