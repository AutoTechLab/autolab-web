import { RegisterBody } from '@/lib/api/auth/types/RegisterBody';

export interface UserBody extends RegisterBody {
  state: string;
}
