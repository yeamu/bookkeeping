import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({ 
  setup(props, ctx) {
    
    return () => (
        <div>
          <header>导航</header>
          <RouterLink to='/home'>Home</RouterLink>
          <RouterLink to='/welcome'>welcome</RouterLink>
          <RouterView/>
        </div>
    )
  },
})
