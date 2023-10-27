export const getAuthorizationHeader = (accessToken: string | undefined) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
