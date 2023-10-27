import { getAuthorizationHeader } from '@/lib/api/getAuthorizationHeader';
import { instance } from '@/lib/api/instance';
import { UserBody } from '@/lib/api/user/types/UserBody';

class UserAPI {
  async getUser(url: string, accessToken: string | undefined) {
    const { data } = await instance.get<UserBody>('/auth/user', {
      ...getAuthorizationHeader(accessToken),
    });

    return data;
  }
}

export default new UserAPI();
