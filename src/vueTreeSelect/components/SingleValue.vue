<template>
  <div style="display: flex;">
    <template v-if="hasValue">
      <div class="vue-treeselect__value-container">
        <div class="vue-treeselect__single-value s-value-container">
          <slot v-if="$slots['value-label']" name="value-label"
                :node="node" />
          <template v-else>{{ node.label }}</template>
        </div>
      </div>
    </template>
    <Placeholder class="s-value-container" v-if="!hasValue && !isFocused"/>
    <div v-if="!hasValue" class="s-value-container" style="padding: 5px;">
      <Input ref="input" />
    </div>
  </div>
</template>

<script lang="ts">
  import Input from './Input.vue'
  import Placeholder from './Placeholder.vue'

  export default {
    name: 'vue-treeselect--single-value',
    inject: [ 'instance' ],
    components: { Placeholder, Input },
    computed: {
      node() {
        console.log(this.instance?.selectedNodes.value[0].label)

        

        return this.instance?.selectedNodes.value[0];
      },
      hasValue() {
        return  this.instance?.hasValue.value;
      },
      hasActiveQuery() {
        return this.instance?.trigger.searchQuery;
      },
      isFocused() {
        return this.instance?.trigger.isFocused;
      },
    }
  }
</script>
