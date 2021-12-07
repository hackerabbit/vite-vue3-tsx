import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    return () => <div>home</div>
  }
})
