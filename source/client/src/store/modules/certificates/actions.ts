import { ActionTree } from 'vuex';
import { CertificatesState, Certificate } from './state';
import { RootState } from '@/store/state';
import { CertificatesEndpoint } from '@/data/certificates/certificates-endpoint';

export const types = {
    LOAD_GROUPS: 'certificates/loadGroups',
    ADD_GROUP: 'certificates/add',
    UPDATE_GROUP: 'certificates/update',
    REMOVE_GROUP: 'certificates/remove'
};

export const makeActions = (groupsEndpoint: CertificatesEndpoint): ActionTree<CertificatesState, RootState> => {
    return {
        async loadGroups({ commit }): Promise<void> {
            const certificates = await groupsEndpoint.getAll();
            commit('setGroups', certificates);
        },
        async add({ commit }, certificate: Certificate): Promise<void> {
            const addedGroup = await groupsEndpoint.add(certificate);
            commit('add', addedGroup);
        },
        async update({ commit }, certificate: Certificate): Promise<void> {
            const updatedGroup = await groupsEndpoint.update(certificate);
            commit('update', updatedGroup);
        },
        async remove({ commit }, certificateId: number): Promise<void> {
            await groupsEndpoint.remove(certificateId);
            commit('remove', certificateId);
        }
    };
};
