import { defineComponent } from 'vue'

// 插槽示例文件
// 以及emit示例文件

const Child = defineComponent({
  setup(props, { slots, emit }) {
    return () => (
      <>
        {/* 插槽示例文件 */}
        <>
          默认插槽:{slots.default && slots.default()}
          <br />
          具名插槽:{slots.prefix && slots.prefix()}
          <br />
          作用域插槽:{slots.suffix && slots.suffix({ name: '这是作用域插槽的示范' })}
        </>
      </>
    )
  }
})

const Child2 = defineComponent({
  emits: ['click'],
  setup(props, { emit }) {
    return () => (
      <>
        {/* emit事件注册 */}
        <button
          onClick={() => {
            emit('click')
          }}
        >
          点击我触发emit
        </button>
      </>
    )
  }
})

const Father = defineComponent({
  name: 'Father',
  setup() {
    return () => (
      <>
        <Child
          v-slots={{
            prefix: () => <span>这是具名插槽</span>, // 具名插槽
            suffix: (props: Record<'name', string>) => <span>{props.name}</span> // props可作插槽作用域的作用
          }}
        >
          这是默认插槽的示范
        </Child>
        <br />
        <Child2
          onClick={() => {
            console.log('emit 触发了')
          }}
        />
      </>
    )
  }
})

export default Father
