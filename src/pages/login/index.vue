<style lang="less" scoped>
    @import "../../less/config";
    .form {
        width: 80%;
        padding: 0 10%;
        margin-top: -50px;
        .line {
            padding: 20px 0;
        }
        .text {
            box-sizing: border-box;
            width: 100%;
            padding: 5px 10px;
            line-height: 28px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 14px;
        }
        .btn {
            width: 100%;
            line-height: 38px;
            border-radius: 5px;
            border: 1px solid darken(@main, 3%);
            font-size: 14px;
            color: #fff;
            background: @main;
        }
    }
</style>
<template>
    <div>
        <v-header title="登录"></v-header>
        <v-content flex="main:center cross:center" style="bottom: 0;">
            <form class="form">
                <div class="line">
                    <input class="text" type="text" placeholder="Access Token">
                </div>
                <div class="line">
                    <button class="btn">登录</button>
                </div>
            </form>
        </v-content>
    </div>
</template>
<script>
    export default {
        
    }
</script>   