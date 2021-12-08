import { useStore } from 'vuex'
import { SET_USER } from '@/store/login/actionType'
import { defineComponent, computed, readonly } from 'vue'

const App = defineComponent({
  setup() {
    const { state, dispatch } = useStore();
    // console.log(state);
    // console.log(readonly(state.login))
    const loginState = computed(() => readonly(state.login))
    // console.log(loginState.value.user.name);

    function modifyUserInfo() {
      dispatch(`login/${SET_USER}`, {});
    }

    return () => <>
      <button onClick={modifyUserInfo}>修改state</button>
      <div>
        {loginState.value.user.name}
        {loginState.value.user.password}
      </div>
    </>
  }
})

export default App;