<template>
  <CertificateList v-bind:certificates="certificates" v-on:update="onUpdate" v-on:remove="onRemove" v-on:add="onAdd"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CertificateList from '@/components/certificates/CertificateList.vue';
import { CertificateViewModel } from '@/components/certificates/models';
import { types } from '@/store/modules/certificates/actions';
import { State, namespace } from 'vuex-class';

const certificatesModule = namespace('certificates');

@Component({
  components: {
    CertificateList
  }
})
export default class Certificates extends Vue {
  @certificatesModule.State('certificates') private certificates!: CertificateViewModel[];
  @certificatesModule.Action('loadCertificates') private loadCertificates!: () => void;

  public mounted(): void {
    // this.$store.dispatch(types.LOAD_GROUPS); // another way of doing the same
    this.loadCertificates();
  }

  private onUpdate(certificate: CertificateViewModel): void {
    this.$store.dispatch(types.UPDATE_GROUP, certificate);
  }

  private onRemove(certificateId: number): void {
    this.$store.dispatch(types.REMOVE_GROUP, certificateId);
  }

  private onAdd(certificate: CertificateViewModel): void {
    this.$store.dispatch(types.ADD_GROUP, certificate);
  }
}
</script>
