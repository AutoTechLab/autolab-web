import { LoginBody } from '@/lib/api/auth/types/LoginBody';
import { RegisterBody } from '@/lib/api/auth/types/RegisterBody';
import { Token } from '@/lib/api/auth/types/Token';
import { instance } from '@/lib/api/instance';

class AuthAPI {
  async register(body: RegisterBody) {
    const { data } = await instance.post<Token>('user/register', body);
    return data;
  }

  async login(body: LoginBody) {
    const { data } = await instance.post<Token>('user/login', body);
    return data;
  }
}

export default new AuthAPI();
