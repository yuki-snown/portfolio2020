<template>
  <div class="history">
      <history-tree></history-tree>    
  </div>
</template>

<script>
import HistoryTree from '@/components/HistoryTree.vue';

export default {
  name: 'History',

  components: {
    HistoryTree,
  }
};
</script>