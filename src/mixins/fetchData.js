// 公共获取远程数据
// 具体组件需要提供方法 fetchData
export default function(defaultDataValue = null){
    return {
        data(){
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },
        async created(){
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}