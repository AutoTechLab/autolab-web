import { LoginBody } from '@/lib/api/auth/types/LoginBody';
import { RegisterBody } from '@/lib/api/auth/types/RegisterBody';
import { Token } from '@/lib/api/auth/types/Token';
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
}

export default new AuthAPI();
