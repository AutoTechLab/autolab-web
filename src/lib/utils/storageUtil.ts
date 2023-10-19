import { Token } from '@/lib/api/auth/types/Token';

class StorageUtil {
  setToken(accessToken: string) {
    if (!process.browser) {
      return;
    }
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  }

  getToken(): Token | null {
    if (!process.browser) {
      return null;
    }

    const accessToken = localStorage.getItem('ACCESS_TOKEN');

    return accessToken ? { accessToken } : null;
  }

  getAccessToken() {
    return this.getToken()?.accessToken;
  }
}

export default new StorageUtil();
