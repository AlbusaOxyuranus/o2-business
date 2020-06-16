import { CertificatesEndpoint } from './certificates-endpoint';
import axios, { AxiosRequestConfig } from 'axios';
import { CertificateModel } from './models/certificate-model';
import { BaseService } from '../base-service';

// TODO: handle eventual errors

export class GroupsService extends BaseService implements CertificatesEndpoint {
    private readonly baseUrl: string = '/api/certificates';

    public async getAll(): Promise<CertificateModel[]> {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }

    public async getById(id: number): Promise<CertificateModel> {
        const response = await axios.get(`${this.baseUrl}/${id}`);
        return response.data;
    }

    public async add(certificate: CertificateModel): Promise<CertificateModel> {
        const response = await axios.post(this.baseUrl, certificate, this.getAxiosConfig());
        return response.data;
    }

    public async update(certificate: CertificateModel): Promise<CertificateModel> {
        const response = await axios.put(`${this.baseUrl}/${certificate.id}`, certificate);
        return response.data;
    }

    public async remove(id: number): Promise<void> {
        const response = await axios.delete(`${this.baseUrl}/${id}`);
    }
}
