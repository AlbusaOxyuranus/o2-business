<template>
  <ul>
    <li v-for="certificate in certificates" v-bind:key="certificate.id">
      <CertificateDetail v-bind:certificate="certificate" v-on:update="onUpdate" v-on:remove="onRemove"/>
    </li>
    <li><CreateCertificate v-on:add="onAdd"/></li>
  </ul>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CertificateDetail from './CertificateDetail.vue';
import CreateCertificate from './CreateCertificate.vue';
import { CertificateViewModel } from '@/components/certificates/models';

@Component({
  components: {
    CertificateDetail,
    CreateCertificate
  }
})
export default class CertificateList extends Vue {
  @Prop() private certificates!: CertificateViewModel[];

  private onUpdate(certificate: CertificateViewModel): void {
    this.$emit('update', certificate);
  }

  private onRemove(certificateId: number): void {
    this.$emit('remove', certificateId);
  }

  private onAdd(certificate: CertificateViewModel): void {
    this.$emit('add', certificate);
  }
}
</script>
