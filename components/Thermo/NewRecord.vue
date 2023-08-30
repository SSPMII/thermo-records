<script setup>
const route = useRoute()
const thermoName = route.params.ThermoName

const props = defineProps(['thermo'])
const newRecord = reactive({
    id: 0,
    name: thermoName,
    usetime: props.thermo.length + 1,
    lupihao: '',
    operator: '',
    inspector: '',
    memo: ''
})

// 监控 gData_Records, 即在table 中点击某一行
watch(gData_Records, () => {
    newRecord.id = gData_Records.id
    newRecord.name = gData_Records.name
    newRecord.usetime = gData_Records.usetime
    newRecord.lupihao = gData_Records.lupihao
    newRecord.operator = gData_Records.operator
    newRecord.inspector = gData_Records.inspector
    newRecord.memo = gData_Records.memo
})

const handleNewClick = () => {
    newRecord.id = 0
    newRecord.name = thermoName,
        newRecord.usetime = props.thermo.length + 1
    newRecord.lupihao = ''
    newRecord.operator = ''
    newRecord.inspector = ''
    newRecord.memo = ''
}

const handleSubmit = async () => {
    if (!newRecord.lupihao) {
        ElMessageBox.alert('请输入炉批号', '错误', {
            confirmButtonText: 'OK'
        })
        return
    } else if (!newRecord.operator) {
        ElMessageBox.alert('请输入操作者姓名', '错误', {
            confirmButtonText: 'OK'
        })
        return
    } else if (newRecord.usetime == props.thermo.length + 1) {
        try {
            await $fetch(`/api/records/create/${route.params.ThermoName}`, {
                method: 'POST',
                body: newRecord
            })
            refreshNuxtData();   // 刷新数据
        } catch (error) {
            showError("😱 Oh no, an error has been thrown.")
        }
    } else {
        try {
            await $fetch(`/api/records/update/${route.params.ThermoName}`, {
                method: 'POST',
                body: newRecord
            })
            refreshNuxtData(); // 刷新数据
        } catch (error) {
            showError("😱 Oh no, an error has been thrown.")
        }
    }
}

const isShowNewRecordButton = ref(false)
const isDisabled_viewer = computed(() => {
    if (gData_User.level == '游客') {
        return true
    }
    return false
})
const isDisabled_operator = computed(() => {
    if (gData_User.level == '操作者' && newRecord.usetime > props.thermo.length) {
        isShowNewRecordButton.value = true
        return false
    }
    return true
})
const isDisabled_inspector = computed(() => {
    if (gData_User.level == '检验者') {
        return false
    }
    return true
})

</script>
<template>
    <div>
        <el-row class="mt-5">
            <el-col :span="2" v-if="isShowNewRecordButton">
                <el-button @click="handleNewClick">新增记录</el-button>
            </el-col>
        </el-row>
        <el-row class="mt-5">
            <el-col :span="2">
                <span>使用次数：</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="newRecord.usetime" disabled />
            </el-col>
        </el-row>
        <el-row class="mt-10">
            <el-col :span="2">
                <span>炉批号：</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="newRecord.lupihao" placeholder="请输入炉批号" :disabled=isDisabled_operator />
            </el-col>
        </el-row>
        <el-row class="mt-5">
            <el-col :span="2">
                <span>操作者：</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="newRecord.operator" placeholder="请输入姓名或工号" :disabled=isDisabled_operator />
            </el-col>
        </el-row>
        <el-row class="mt-5">
            <el-col :span="2">
                <span>检验人：</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="newRecord.inspector" placeholder="请输入姓名或工号" :disabled=isDisabled_inspector />
            </el-col>
        </el-row>
        <el-row class="mt-5 mb-10">
            <el-col :span="2">
                <span>异常记录：</span>
            </el-col>
            <el-col :span="8">
                <el-input type="textarea" v-model="newRecord.memo" :disabled=isDisabled_viewer />
            </el-col>
            <el-col :span="2">
                <el-button type="success" class="ml-10" @click="handleSubmit">提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>