import { getAuthorizationHeader } from '@/lib/api/getAuthorizationHeader';
import { instance } from '@/lib/api/instance';
import { UserBody, UserInfo } from '@/lib/api/user/types/UserBody';

class UserAPI {
  async getUser() {
    const { data } = await instance.get<UserBody>('/auth/user', {
      ...getAuthorizationHeader(),
    });

    return data;
  }

  async changePersonalInfo(info: UserInfo) {
    const { data } = await instance.patch<UserBody>('/users', info, {
      ...getAuthorizationHeader(),
    });
    return data;
  }
}

export default new UserAPI();
