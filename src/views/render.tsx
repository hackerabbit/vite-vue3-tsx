import { defineComponent, ref, onUnmounted, renderSlot } from 'vue'

// 带render函数的组件 优点：可将逻辑区与模版区分开
export const RenderComponent = defineComponent({
  props: {
    title: String
  },
  // 逻辑层
  setup() {
    const count = ref<number>(1)

    const timer = setInterval(() => {
      count.value++
    }, 2000)

    onUnmounted(() => {
      clearInterval(timer)
    })

    return {
      count
    }
  },
  // 渲染层
  render() {
    const { count, $slots, title } = this
    return (
      <div>
        {renderSlot($slots, 'prefix')} {count}
        <br />
        这是props:{title}
        <br />
        {renderSlot($slots, 'default')}
      </div>
    )
  }
})
