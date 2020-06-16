import { CertificateModel } from './models/certificate-model';

export interface CertificatesEndpoint {
    getAll(): Promise<CertificateModel[]>;
    getById(id: number): Promise<CertificateModel>;
    add(certificate: CertificateModel): Promise<CertificateModel>;
    update(certificate: CertificateModel): Promise<CertificateModel>;
    remove(id: number): Promise<void>;
}
