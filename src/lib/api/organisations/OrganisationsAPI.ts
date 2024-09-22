import { instance } from '@/lib/api/instance';
import { IOrganisationResponse } from '@/lib/api/organisations/types';

class OrganisationsAPI {
  async create(body: FormData) {
    await instance.post('/organizations', body);
  }

  async getById(id: string) {
    const { data } = await instance.get<IOrganisationResponse>(
      `/organizations/${id}`,
    );
    return data;
  }

  async delete(id: string) {
    await instance.delete(`/organizations/${id}`);
  }
}

export default new OrganisationsAPI();
