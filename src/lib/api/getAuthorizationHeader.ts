import storageUtil from '@/lib/utils/storageUtil';

export const getAuthorizationHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${storageUtil.getAccessToken()}`,
    },
  };
};
