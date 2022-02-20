<template>
    <header>
        <div class="l-content">
            <el-button @click="handleClickMenu" plain class="el-icon-d-arrow-left" size="mini"></el-button>
            <h3 style="color:#000">首页</h3>
        </div>
        <div class="r-content">
            <el-dropdown trigger="hover" size="mini">
                <span>
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    name: 'CommonHeader',
    data() {
        return {
            userImg: require('../assets/img.png')
            
        }
    },
    methods: {
        handleClickMenu() {
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    width: 100%;
    margin-left: 0;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    opacity: 0.7;
}
.l-content {
    display: flex;
    float: left;
    padding-left: 10px;
    align-items: center;
    .el-button {
        margin-right: 20px;
    }
}
.r-content {
    float: right;
    padding-right: 15px;
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

</style>
