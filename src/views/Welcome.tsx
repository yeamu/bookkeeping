import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const Welcome = defineComponent({ 
  setup(props, ctx) {
    
    return () => (
        <div>
          <div>Welcome</div>
          <RouterView/>
        </div>
    )
  },
})

