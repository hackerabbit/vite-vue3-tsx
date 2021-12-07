import { defineComponent } from 'vue'
import { ElButton } from 'element-plus';



export default defineComponent({
  name: 'Login',
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    return () => <div>
      <h3>login</h3>
      <el-button>nihao</el-button>
    </div>
  }
})
