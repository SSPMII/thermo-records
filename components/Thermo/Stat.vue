<script setup>
const thermo = defineProps(['thermo'])
const usedTimes = JSON.parse(JSON.stringify(thermo)).thermo.length

const totalTimes = gData_Thermo.totalTimes

</script>

<template>
    <div class="mb-10 ml-5">
        <el-row>
            <el-col :span="4">
                <el-statistic title="已使用次数" :value="usedTimes" />
            </el-col>
            <el-col :span="4">
                <el-statistic title="剩余次数" :value='totalTimes - usedTimes' />
            </el-col>
        </el-row>
    </div>
</template>