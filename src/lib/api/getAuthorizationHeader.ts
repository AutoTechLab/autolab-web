import StorageUtil from '@/lib/utils/storageUtil';

export const getAuthorizationHeader = () => {
  return {
    headers: { Authorization: `Bearer ${StorageUtil.getAccessToken()}` },
  };
};
