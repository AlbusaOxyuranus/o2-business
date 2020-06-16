import { CertificatesState, Certificate } from './state';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<CertificatesState> = {
  setGroups(state: CertificatesState, certificates: Certificate[]): void {
    state.certificates = [...certificates];
  },
  add(state: CertificatesState, certificate: Certificate): void {
    state.certificates = [...state.certificates, certificate];
  },
  update(state: CertificatesState, certificate: Certificate): void {
    const index = state.certificates.findIndex((g) => g.id === certificate.id);
    state.certificates = [
      ...state.certificates.slice(0, index),
      certificate,
      ...state.certificates.slice(index + 1, state.certificates.length),
    ];
  },
  remove(state: CertificatesState, certificateId: number): void {
    state.certificates = state.certificates.filter(
      (g) => g.id !== certificateId
    );
  },
};
