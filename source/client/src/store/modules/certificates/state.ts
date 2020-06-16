export interface Certificate {
  id: number;
  name: string;
  rowVersion: string;
}

export interface CertificatesState {
  certificates: Certificate[];
}
