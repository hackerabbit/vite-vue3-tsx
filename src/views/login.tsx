import { defineComponent, ref } from 'vue'
import { ElButton } from 'element-plus'

// 局部引入注册
import foucsDirective from '@/directive/foucs'

// 引入插槽示例
import Father from './father'

// 引入tsxrender函数。
import { RenderComponent } from './render'

// vuex示例
import CustomStore from './store';

export default defineComponent({
  name: 'Login',
  components: {
    Father
  },
  directives: {
    focus: foucsDirective // 已在全局注册，仅作演示
  },
  props: {},
  emits: [],
  setup(props, ctx) {
    // v-bind的模拟
    const size = ref<'large' | 'medium' | 'small' | 'mini'>('mini')
    const condition = ref<boolean>(false)
    const list = ref<string[]>(['mary', 'iron', 'spider'])
    const value = ref<string>('')
    return () => (
      <div>
        {/* 不支持多根节点语法结构 ,没有template的标签，可以使用<></>*/}
        <>
          <span>I'm</span>
          <span>Fragment</span>
        </>
        {/* 指令的替换要点，v-show、v-model可以正常使用。 */}
        <el-button size={size.value}>button</el-button>

        {/* v-if换成了三元表达式 */}
        <div>{condition.value ? <span>A</span> : <span>B</span>}</div>

        {/* v-for和react中一样，使用map循环 */}
        {list.value.map((data, index) => (
          <p key={index}>{data}</p>
        ))}

        {/* 自定义指令的演示 */}
        <input type="text" v-focus v-model={value.value} />

        <br />

        <Father />

        <br />

        <RenderComponent title="renderComponent">default</RenderComponent>

        <br />

        <CustomStore />
      </div>
    )
  }
})
