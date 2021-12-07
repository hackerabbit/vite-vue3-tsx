import { defineComponent } from 'vue'

export default defineComponent({
  name: '404',
  components: {}, // 写给自己看的
  props: {},
  emits: [],
  setup(props, ctx) {
    return () => <div>404</div>
  }
})
