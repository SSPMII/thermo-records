import { reactive } from 'vue'
// 全局的数据
export const gData_Thermo = {
    name: '',       // 热电偶名称
    totalTimes: 30  // 总使用次数
}

export const gData_Records = reactive({
    id: '',
    name: '',
    usetime: '',
    lupihao: '',
    operator: '',
    inspector: '',
    memo: ''
})