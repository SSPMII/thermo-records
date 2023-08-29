<script setup>
const props = defineProps(['thermo'])

const handleCurrentChange = (val) => {

    gData_Records.id = val.id
    gData_Records.name = val.name
    gData_Records.usetime = val.usetime
    gData_Records.lupihao = val.lupihao
    gData_Records.operator = val.operator
    gData_Records.inspector = val.inspector
    gData_Records.memo = val.memo
}

</script>
<template>
    <div class="overflow-x-auto">
        <client-only>
            <el-table :data="thermo" style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
                <el-table-column prop="usetime" label="使用次数" width="180" />
                <el-table-column prop="lupihao" label="炉批号" width="180" />
                <el-table-column prop="operator" label="操作者" width="180" />
                <el-table-column prop="inspector" label="检验人" width="180" />
                <el-table-column prop="memo" label="异常记录" />
            </el-table>
        </client-only>
    </div>
</template>