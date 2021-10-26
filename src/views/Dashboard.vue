<template>
    <div class="dashboard">
        <UserDashboard />
    </div>
</template>

<script>

import UserDashboard from "@/components/UserDashboard.vue"

export default {
    name: "Dashboard",
    components: {
        UserDashboard,
    },
};
</script>


