<template>
    <div class="card mt-4">
        <h2>Welcom :- </h2>
        <tr v-for="{id, fname, lname, email} in users" :key="id">
        <td>{{ fname }}</td>
        <td>{{ lname }}</td>
        <td>{{ email }}</td>
        </tr>
    </div>
</template>

<script>
import { useLoadUsers, google, getUser } from '@/firebase'
export default {
    setup(){
        const users = useLoadUsers();
        return {useLoadUsers, google, getUser}
    }
}
</script>


