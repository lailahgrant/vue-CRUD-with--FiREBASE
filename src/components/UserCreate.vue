<template>
    <div style="width:50%; margin:0  auto;" class="card  card-body mt-4">
        <form @submit.prevent="onSubmit">
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
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="form.pass" class="form-control" required />
            </div> <br>
            <button type="submit" class="btn btn-success">Register</button>
        </form>
    </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default{
    setup(){
        const form = reactive({fname: '', lname: '', email: '', pass:'' })

        const onSubmit = async () => {
            await createUser({ ...form })
            form.fname = ''
            form.lname = ''
            form.email = ''
            form.pass =  ''
        }

        return { form, onSubmit}
    }
}

</script>


