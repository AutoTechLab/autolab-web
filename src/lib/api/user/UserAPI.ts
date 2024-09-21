import { instance } from '@/lib/api/instance';
import { UserBody, UserInfo } from '@/lib/api/user/types/UserBody';

class UserAPI {
  async getUser() {
    const { data } = await instance.get<UserBody>('/auth/user');

    return data;
  }

  async changePersonalInfo(info: UserInfo) {
    const { data } = await instance.patch<UserBody>('/users', info);
    return data;
  }

  async changeAvatar(body: FormData) {
    const { data } = await instance.patch<UserBody>('/users/avatar', body);
    return data;
  }
}

export default new UserAPI();
