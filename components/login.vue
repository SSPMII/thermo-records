<script setup>
const input = ref('')
const level = ref('游客')

const handlePasswordClick = () => {
    if (input.value == 'comac.123') {
        // 检验 密码 comac.123
        level.value = '检验者'
        gData_User.level = 'inspector'
    } else if (input.value == 'fucai666') {
        // 操作 密码 fucai666
        level.value = '操作者'
        gData_User.level = 'operator'
    } else {
        gData_User.level = 'viewer'
        ElMessage.error('密码不存在！')
    }
    input.value = ''
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
            <el-button class="ml-5" @click="handlePasswordClick">确认</el-button>
        </el-col>
    </el-row>
</template>