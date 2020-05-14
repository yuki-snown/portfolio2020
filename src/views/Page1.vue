<template>
    <div class="page1">
        <ContentItem msg="Page1"/>
    </div>
</template>

<script>
// @ is an alias to /src
import ContentItem from '@/components/HelloWorld.vue'

export default {
  name: 'ContentItem',
  components: {
    ContentItem
  }
}
</script>
