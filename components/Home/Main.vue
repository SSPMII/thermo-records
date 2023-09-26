<script setup>
/* import { reactive, ref } from 'vue';

const dialogNewThermoVisible = ref(false)
const formLabelWidth = '120px'

const newThermoForm = reactive({
    thermoName: ''
})

const onSubmit = () => {
    dialogNewThermoVisible.value = false
} */

const thermoAvailable = await useFetch(`/api/thermo/countAvailable`).data
const thermoTotal = await useFetch(`/api/thermo/countTotal`).data

</script>
<template>
    <div class="relative h-screen w-100 homeBG">
        <!-- 黑色遮罩层 -->
        <div class="z-1 absolute w-full h-full bg-black opacity-10 "></div>
        <!-- 文字和搜索框 -->
        <div class="z-10 absolute w-full h-full flex justify-center items-center ">
            <div class="text-center w-50% ">
                <h1 class="text-5xl mb-10 text-white tracking-widest">热电偶使用记录</h1>
                <HomeSearchBar />
                <h1 class=" text-lg mb-10 text-white tracking-widest">或直接输入新的热电偶编号</h1>
                <!-- <p>// 测试用的记录为：test test2</p> -->
                <div>
                    <el-row>
                        <el-col :span="6"></el-col>
                        <el-col :span="4">
                            <el-text class="mx-1" type="success">有效热电偶数</el-text>
                        </el-col>
                        <el-col :span="4">
                            <el-text class="mx-1" type="danger">失效热电偶数</el-text>
                        </el-col>
                        <el-col :span="4">
                            <el-text class="mx-1" type="primary">热电偶总数</el-text>
                        </el-col>
                        <el-col :span="6"></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"></el-col>
                        <el-col :span="4">
                            <el-text class="mx-1" type="success">{{ thermoAvailable }}</el-text>
                        </el-col>
                        <el-col :span="4">
                            <el-text class="mx-1" type="danger">{{ thermoTotal - thermoAvailable }}</el-text>
                        </el-col>
                        <el-col :span="4">
                            <el-text class="mx-1" type="primary">{{ thermoTotal }}</el-text>
                        </el-col>
                        <el-col :span="6"></el-col>
                    </el-row>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.homeBG {
    background: linear-gradient(to right, #114357, #f29492);
}
</style>