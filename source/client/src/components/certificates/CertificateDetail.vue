<template>
  <span v-if="isInEditMode">
    <input v-model="editableGroup.name" placeholder="Enter a name for the certificate">
    <button v-on:click="save()">Save</button>
    <button v-on:click="discard()">Discard</button>
    <button v-on:click="remove()">Remove</button>
  </span>
  <span v-else>
    {{ certificate.name }}
    <button v-on:click="edit()">Edit</button>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CertificateViewModel } from './models';

@Component({
  components: {}
})
export default class CertificateDetail extends Vue {
  @Prop() private certificate!: CertificateViewModel;
  private isInEditMode: boolean = false;
  private editableGroup: CertificateViewModel | null = null;

  private edit(): void {
    this.isInEditMode = true;
    this.editableGroup = { ...this.certificate };
  }
  private save(): void {
      this.$emit('update', this.editableGroup);
      this.discard();
  }

  private discard(): void {
    this.isInEditMode = false;
    this.editableGroup = null;
  }
  private remove(): void {
      this.$emit('remove', this.editableGroup!.id);
  }

}
</script>