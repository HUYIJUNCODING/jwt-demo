<template>
    <div v-if="state.modalStatus" class="auth-modal-box">
        <div class="auth-form">
            <div class="panfish">
                <img
                    v-show="
                        !state.usernameInputIsFocus &&
                        !state.passwordInputIsFocus
                    "
                    src="../assets/images/normal.png"
                    class="normal"
                    alt=""
                />
                <img
                    v-show="state.usernameInputIsFocus"
                    src="../assets/images/greeting.png"
                    class="greeting"
                    alt=""
                />
                <img
                    v-show="state.passwordInputIsFocus"
                    src="../assets/images/blindfold.png"
                    class="blindfold"
                    alt=""
                />
            </div>
            <div class="panel">
                <span class="title">登录</span>
                <i class="close-btn" @click="close"></i>
            </div>
            <div class="input-box">
                <input
                    class="username"
                    :class="state.usernameInputIsFocus && 'focus'"
                    type="text"
                    placeholder="请输入用户名/手机号"
                    @focus="onFocus(1)"
                    @blur="onBlur(1)"
                />
                <input
                    class="password"
                    :class="state.passwordInputIsFocus && 'focus'"
                    type="text"
                    placeholder="请输入密码"
                    @focus="onFocus(2)"
                    @blur="onBlur(2)"
                />
            </div>

            <button class="submit-btn">登 录</button>
            <div class="prompt-box">您还未注册？前去注册</div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "Login",
    setup(props) {
        const state = reactive({
            usernameInputIsFocus: false,
            passwordInputIsFocus: false,
            modalStatus: true,
        });

        const onFocus = (type) => {
            type == 1
                ? (state.usernameInputIsFocus = true)
                : (state.passwordInputIsFocus = true);
        };

        const onBlur = (type) => {
            type == 1
                ? (state.usernameInputIsFocus = false)
                : (state.passwordInputIsFocus = false);
        };

        const close = () => {
            state.modalStatus = false;
        };

        return {
            state,
            onFocus,
            onBlur,
            close,
        };
    },
};
</script>

<style scoped lang="scss">
.auth-modal-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 500;
    .auth-form {
        position: relative;
        padding: 2rem;
        width: 28rem;
        max-width: 100%;
        font-size: 1.167rem;
        background-color: #fff;
        border-radius: 2px;
        .panfish {
            img {
                height: auto;
                &.normal {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 10rem;
                    z-index: 1;
                    transform: translate(-50%, -83%);
                }
                &.greeting {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 10rem;
                    z-index: 1;
                    transform: translate(-50%, -75.8%);
                }
                &.blindfold {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 8.6rem;
                    transform: translate(-50%, -75%);
                    z-index: 1;
                }
            }
        }
        .panel {
            display: flex;
            justify-content: space-between;
            align-content: center;
            margin: 0 0 2rem;
            .title {
                font-weight: 700;
                font-size: 1.5rem;
            }
            .close-btn {
                position: relative;
                cursor: pointer;
                transform: rotate(45deg);
                &::before,
                &::after {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    content: "";
                    border-radius: 1px;
                    background-color: #767676;
                }
                &:before {
                    width: 15px;
                    height: 2px;
                }
                &:after {
                    width: 2px;
                    height: 15px;
                }
            }
        }
        .input-box {
            position: relative;
            margin-bottom: 0.8rem;
            .username,
            .password {
                width: 100%;
                margin-bottom: 0.8rem;
                padding: 10px;
                border: 1px solid #e9e9e9;
                border-radius: 2px;
                outline: none;
                &.focus {
                    border-color: #007fff;
                }
            }
        }
        .submit-btn {
            width: 100%;
            height: 3.334rem;
            color: #fff;
            background-color: #007fff;
            border-radius: 2px;
            outline: none;
            box-sizing: border-box;
            cursor: pointer;
            margin-top: 5px;
            border: 0;
            outline: none;
        }
        .prompt-box {
            margin: 1rem 0 0;
            color: #007fff;
            cursor: pointer;
        }
    }
}
</style>
