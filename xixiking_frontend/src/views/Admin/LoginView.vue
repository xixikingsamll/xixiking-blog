<template>
    <PageTitle title="站长请登录" />
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 10 }"
        :wrapper-col="{ span: 4 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        style="margin-top: 20px;"
    >
        <a-form-item
        label="管理员账号"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
        >
        <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
        label="管理员密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
        >
        <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 10, span: 16 }">
        <a-button type="primary" html-type="submit" style="width: 28.5%;">Login</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import PageTitle from '@/components/PageTitle.vue'
import { reactive } from 'vue';
import { adminLogin } from '@/apis/admin';
import { message } from 'ant-design-vue';

interface FormState {
    username: string;
    password: string;
}

const formState = reactive<FormState>({
    username: '',
    password: '',
});
const onFinish = async (values: any) => {
    const params = new URLSearchParams();
    params.append('username', values.username);
    params.append('password', values.password);
    const loginResult:any = await adminLogin(params.toString());
    console.log(loginResult)
    if (loginResult.data.status === 0) {
        // 显示成功信息，并在消息显示完成后跳转
        message.success(loginResult.data.message, 1.5).then(() => {
            // 跳转到管理员页面
            window.location.href = '/admin';
        });
    }
    else {
        message.error(loginResult.data.message);
        formState.password = ''
    }
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>

