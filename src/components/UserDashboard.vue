<template>
    <div style="width:50%; margin: 0 auto;" class="card mt-4">
        <h2>Welcome :- </h2>
        <table id="showDetail">
            <thead>
        <td>Img</td>
        <td>Name</td>
        <td>email</td>
        <td>id</td>
        </thead>

        <tr>
        <td><img src="${u.photoURL" alt=""></td>
        <td>u.displayName</td>
        <td>${u.email}</td>
        <td>${u.uid}</td>
        </tr>

        </table>
    </div>
</template>

<script>
import {  } from '@/firebase'
import { user, google} from "@/firebase" 
export default {
    setup(){
        
        
    }
}
</script>


