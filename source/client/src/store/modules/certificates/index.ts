import { Module } from 'vuex';
import { CertificatesState } from './state';
import { RootState } from '@/store/state';
import { makeActions } from './actions';
import { mutations } from './mutations';
import { GroupsService } from '@/data/certificates/certificates-service';

export const certificates: Module<CertificatesState, RootState> = {
    namespaced: true,
    actions: makeActions(new GroupsService()), // TODO: maybe not the best place to create it
    mutations,
    state: {
        certificates: []
    }
};
