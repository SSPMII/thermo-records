<script setup>
import { reactive, ref } from 'vue';

const dialogNewThermoVisible = ref(false)
const formLabelWidth = '120px'

const newThermoForm = reactive({
    thermoName: ''
})

const onSubmit = () => {
    dialogNewThermoVisible.value = false
}

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
                <p>// 测试用的记录为：test test2</p>

            </div>
        </div>
    </div>
</template>

<style scoped>
.homeBG {
    background: linear-gradient(to right, #114357, #f29492);
}
</style>