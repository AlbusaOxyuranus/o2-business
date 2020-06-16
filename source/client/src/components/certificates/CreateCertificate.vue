<template>
  <span v-if="creating">
    <input v-model="certificate.name" placeholder="Enter a name for the certificate">
    <button v-on:click="save()">Save</button>
    <button v-on:click="discard()">Discard</button>
  </span>
  <button v-else v-on:click="create()">Create new certificate</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CertificateViewModel } from './models';

@Component({})
export default class CreateCertificate extends Vue {
  private certificate: CertificateViewModel | null = null;
  private creating: boolean = false;

  private create(): void {
    this.certificate = { id: 0, name: '', rowVersion: '' };
    this.creating = true;
  }
  private save(): void {
    this.$emit('add', this.certificate);
    this.discard();
  }

  private discard(): void {
    this.creating = false;
    this.certificate = null;
  }
}
</script>