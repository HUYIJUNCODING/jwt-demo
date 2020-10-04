<template>
   <Todolist />
</template>

<script>
import { userinfoAPI } from "../api/user";

import Todolist from '../components/Todolist.vue'
export default {
    name: "Home",
    components: {
        Todolist
    },
    setup(props) {
        function handleClick() {
            userinfoAPI().then((res) => {
                console.log(res, "userinfo");
            });
        }

        return {
            handleClick,
        };
    },
};
</script>
