<script setup>
const input = ref('')
const level = ref('游客')
level.value = gData_User.level

const handlePasswordClick = () => {
    if (input.value == 'comac.123') {
        // 检验 密码 comac.123
        level.value = '检验者'
        gData_User.level = '检验者'
    } else if (input.value == 'fucai666') {
        // 操作 密码 fucai666
        level.value = '操作者'
        gData_User.level = '操作者'
    } else {
        gData_User.level = '游客'
        ElMessage.error('密码不存在！')
    }
    input.value = ''
}

const handelLogoutClick = () => {
    location.reload()
}

</script>
<template>
    <el-row class="mt-5">
        <el-col :span="8" class="mb-5">
            <span class="text-xl">当前登录等级：{{ level }}</span>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <el-input v-model="input" type="password" placeholder="请输入一个密码" show-password />
        </el-col>
        <el-col :span="2">
            <el-button type="primary" class="ml-5" @click="handlePasswordClick">确认</el-button>
        </el-col>
        <el-col :span="2">
            <el-button type="danger" class="ml-2" @click="handelLogoutClick">退出登录</el-button>
        </el-col>
    </el-row>
</template>