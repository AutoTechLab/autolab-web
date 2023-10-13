import { instance } from '@/lib/api/instance';
import { UserBody } from '@/lib/api/user/types/UserBody';

class UserAPI {
  async getUser(accessToken: string) {
    const { data } = await instance.get<UserBody>('/auth/user', {
      params: accessToken,
    });

    return data;
  }
}

export default UserAPI;
