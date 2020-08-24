<template>
<div class="home">
    <Login />
</div>
</template>

<script>
// @ is an alias to /src
import Login from '@/views/Login'

export default {
    name: 'Home',
    components: {
        Login
    }
}
</script>
