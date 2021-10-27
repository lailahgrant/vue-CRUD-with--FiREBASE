<template>
    <div style="width:50%; margin: 0 auto;" class="card mt-4">
        <h2>Welcome :- </h2>
        <table>
        <tr v-for="{id, fname, lname, email} in users" :key="id">
        <td>{{ fname }}</td>
        <td>{{ lname }}</td>
        <td>{{ email }}</td>
        <td></td>
        </tr>
        </table>
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


