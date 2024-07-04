import { ChangePasswordBody } from '@/lib/api/auth/types/ChangePasswordBody';
import { LoginBody } from '@/lib/api/auth/types/LoginBody';
import { RegisterBody } from '@/lib/api/auth/types/RegisterBody';
import { Token } from '@/lib/api/auth/types/Token';
import { getAuthorizationHeader } from '@/lib/api/getAuthorizationHeader';
import { instance } from '@/lib/api/instance';

class AuthAPI {
  async register(body: RegisterBody) {
    const { data } = await instance.post('/auth/register', body);
    return data;
  }

  async login(body: LoginBody) {
    const { data } = await instance.post<Token>('/auth/login', body);
    return data;
  }

  async approveEmail(token: string) {
    const { data } = await instance.post<Token>(`/auth/approve/${token}`);
    return data;
  }

  async resendEmail(email: string) {
    await instance.post(`/auth/repeat/email?email=${email}`);
  }

  async requestResetPassword(email: string) {
    await instance.post(`/auth/password/reset/email?email=${email}`);
  }

  async resetPassword(token: string, password: string) {
    const { data } = await instance.post<Token>(
      `/auth/password/reset/${token}`,
      { password },
    );
    return data;
  }

  async changePassword(values: ChangePasswordBody) {
    await instance.patch(
      '/auth/change/password',
      values,
      getAuthorizationHeader(),
    );
  }
}

export default new AuthAPI();
