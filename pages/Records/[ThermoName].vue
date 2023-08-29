<script setup>
// 根据搜索的名字获取数据
const route = useRoute()
const { data } = await useFetch(`/api/records/${route.params.ThermoName}`)

const thermo = data

let isShow = true
if (thermo.value.length == 0) {
    isShow = false
}

</script>
<template>
    <div class="container mx-auto w-3/5">
        <div class="py-5 flex">
            <NuxtLink to="/" class="inline-block pr-2">
                <svg with="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">
                    </path>
                </svg>
            </NuxtLink>
            <h1 class="text-lg">热电偶使用情况记录表</h1>
        </div>

        <div class="text-5xl mb-5 ml-5">{{ route.params.ThermoName }}</div>

        <div v-if="!isShow">
            <p class="ml-5">对不起，该热电偶不存在，请新建一条记录</p>
        </div>

        <div v-if="isShow">
            <ThermoStat :thermo="thermo" />
            <ThermoTable :thermo="thermo" />

            <el-divider />

        </div>

        <Login />

        <ThermoNewRecord :thermo="thermo" />
    </div>
</template>