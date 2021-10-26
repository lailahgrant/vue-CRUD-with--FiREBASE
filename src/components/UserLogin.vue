<template>
    <div style="width:50%; margin: 0 auto;" class="card card-body mt-4">
        <form @submit.prevent="login"> 
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" required/>
            </div>  <br>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" required/>
            </div>  <br>
            <button type="submit" class="btn btn-success">Register</button> <br>
            <div class="form-group">
                <a href="#" class="btn" @click="google"><i class="fas fa-google"></i>Sign in with Google</a>
            </div>
        </form>
    </div>
</template>

<script>
import { watch, defineComponent } from "vue"
import { user, google, useLogin } from "@/firebase" 
import router from "@/router"

export default defineComponent({
    props: {
        loginReturnUrl : { type: String, default: "/login" }
    },
    setup(props){
        watch(
            () => user.value,
            newUser => {
                if(newUser) {
                    router.push(props.loginReturnUrl)
                }
            }
        );
        return {
            ...useLogin(),
            google,
        };
    },
});
</script>




















