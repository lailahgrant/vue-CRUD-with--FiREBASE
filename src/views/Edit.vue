<template>
    <div style="width:50%; margin:0  auto;" class="card card-body-mt-4">
        <h3>Edit User</h3>
        <form @submit.prevent="update">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" v-model="form.fname" class="form-control" required />
            </div> <br>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" v-model="form.lname" class="form-control" required />
            </div> <br>
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="form.email" class="form-control" required />
            </div> <br>
            <button class="btn btn-primary mt-3">
                Update
            </button>
        </form>
    </div>
</template>

<script>
import {reactive, computed, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'

export default {
    setup(){
        const router = useRouter()
        const route = useRoute()
        const userId = computed(() => route.params.id)

        const form = reactive({ fname:'', lname:'', email:''})
        onMounted(async () => {
            const user = await getUser(userId.value)
            console.log(user, userId.value)
            form.fname = user.fname
            form.lname = user.lname
            form.email = user.email
        })

        const update = async () => {
            await updateUser(userId.value, { ...form })
            router.push('/')
            form.fname = ''
            form.lname = ''
            form.email = ''
        }

        return { form, update}

    }
}
</script>



















