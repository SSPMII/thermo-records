<script setup>
const props = defineProps(['thermo'])
</script>

<template>
    <div class="overflow-x-auto">
        <client-only>
            <el-table :data="thermo" stripe style="width: 100%" height="400">
                <el-table-column prop="usetime" label="使用次数" width="180" />
                <el-table-column prop="lupihao" label="炉批号" width="180" />
                <el-table-column prop="operator" label="操作者" width="180" />
                <el-table-column prop="inspector" label="检验人" width="180" />
                <el-table-column prop="memo" label="异常记录" />
            </el-table>
        </client-only>
    </div>
</template>