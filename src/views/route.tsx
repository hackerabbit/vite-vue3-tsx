import { defineComponent } from 'vue'
import { useRouter, useRoute, RouterView } from 'vue-router'

export default defineComponent({
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    const router = useRouter()
    const route = useRoute()

    function go(pathName: string) {
      router.push({
        name: pathName,
        query: {
          value: '路由传参'
        }
      })
    }

    const { query } = route
    console.log(query)
    return () => (
      <>
        <button
          onClick={() => {
            go('home')
          }}
        >
          跳转home
        </button>
        <button
          onClick={() => {
            go('login')
          }}
        >
          跳转login
        </button>
        <RouterView />
      </>
    )
  }
})
