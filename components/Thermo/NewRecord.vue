<script setup>
const route = useRoute()
const thermoName = route.params.ThermoName

const props = defineProps(['thermo'])
const newRecord = reactive({
    name: thermoName,
    usetime: props.thermo.length + 1,
    lupihao: '',
    operator: '',
    inspector: '',
    memo: ''
})

const handleSubmit = async () => {
    try {
        await $fetch(`/api/records/${route.params.ThermoName}`, {
            method: 'POST',
            body: newRecord
        })
        location.reload(); // 刷新页面
    } catch (error) {
        showError("😱 Oh no, an error has been thrown.")
    }
}

</script>
<template>
    <el-row class="mt-10">
        <el-col :span="2">
            <span>炉批号：</span>
        </el-col>
        <el-col :span="8">
            <el-input v-model="newRecord.lupihao" placeholder="请输入炉批号" />
        </el-col>
    </el-row>
    <el-row class="mt-5">
        <el-col :span="2">
            <span>操作者：</span>
        </el-col>
        <el-col :span="8">
            <el-input v-model="newRecord.operator" placeholder="请输入姓名或工号" />
        </el-col>
    </el-row>
    <el-row class="mt-5">
        <el-col :span="2">
            <span>检验人：</span>
        </el-col>
        <el-col :span="8">
            <el-input v-model="newRecord.inspector" placeholder="请输入姓名或工号" />
        </el-col>
    </el-row>
    <el-row class="mt-5">
        <el-col :span="2">
            <span>异常记录：</span>
        </el-col>
        <el-col :span="8">
            <el-input type="textarea" v-model="newRecord.memo" />
        </el-col>
        <el-col :span="2">
            <el-button type="success" class="ml-10" @click="handleSubmit">提交</el-button>
        </el-col>
    </el-row>
</template>