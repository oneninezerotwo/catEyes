<template>
  <div id="login">
    <dl class="list">
      <dd class="nav">
        <ul class="taba taban samfix noslide" data-com="tab">
          <li
            @click="usermode"
            :class="change ? 'active' : ''"
            tab-target="normal-login-form"
          >
            <a class="react">美团账号登录</a>
          </li>
          <li
            @click="mobile"
            :class="!change ? 'active' : ''"
            tab-target="quick-login-form"
          >
            <a class="react">手机验证登录</a>
          </li>
          <div class="slide" :style="{ left: styles }"></div>
        </ul>
      </dd>
    </dl>
    <form
      v-show="change"
      id="normal-login-form"
      autocomplete="off"
      style="display:block"
    >
      <dl class="list list-in">
        <dd class="visibale">
          <dl>
            <dd class="dd-padding kv-line-r">
              <img
                class="login-icon"
                src="https://ms0.meituan.net/touch/img/account/login/icon_login_user@2x.png"
              />
              <input
                id="username"
                class="input-weak J-login-name J-input J-account"
                type="text"
                placeholder="账户名/手机号/Email"
                name="email"
                value
                required
                v-model="account"
              />
              <div class="to-del J-to-del" style="display: none"></div>
            </dd>
            <ul
              class="tel-select J-select-user J-select"
              style="display: none"
            ></ul>
            <dd class="dd-padding kv-line-r">
              <img
                class="login-icon"
                src="https://ms0.meituan.net/touch/img/account/login/icon_login_password@2x.png"
              />
              <input
                id="password"
                class="input-weak J-input"
                type="password"
                placeholder="请输入您的密码"
                name="password"
                required
              />
              <div class="to-del J-to-del" style="display: none"></div>
            </dd>
          </dl>
        </dd>
      </dl>

      <div class="btn-wrapper">
        <button
          type="submit"
          @click="check"
          class="btn btn-larger btn-block disabled mj_login login-btn"
        >
          登录
        </button>
      </div>
      <input type="hidden" name="touchEvents" />
      <input type="hidden" name="extraFingerPrint" />
      <div class="forget">
        <a class="link" href="###">忘记密码</a>
      </div>
      <input type="hidden" name="requestCode" />
      <input type="hidden" name="responseCode" />
    </form>
    <form
      v-show="!change"
      id="quick-login-form"
      action
      autocomplete="off"
      method="post"
      style="display:none"
    >
      <dl class="list list-in">
        <dd class="visibale">
          <dl>
            <dd class="kv-line-r dd-padding sendC" data-com="smsBtn_quick">
              <img
                class="login-icon icon-align"
                src="https://ms0.meituan.net/touch/img/account/login/icon_signin_phone@2x.png"
              />
              <input
                type="tel"
                name="mobile"
                id="login-mobile"
                class="input-weak kv-k J-input J-tel J-login-name"
                placeholder="请输入手机号"
                maxlength="11"
              />
              <div
                class="to-del J-to-del-mobile J-to-del"
                style="display: none"
              ></div>
              <button
                id="smsCode"
                type="button"
                class="btn btn-weak kv-v btn-captacha getCode"
                disabled="disabled"
              >
                获取验证码
              </button>
            </dd>
            <ul class="tel-select J-select" style="display: none"></ul>
            <dd class="kv-line-r dd-padding">
              <img
                class="login-icon"
                src="https://ms0.meituan.net/touch/img/account/login/icon_phone_check_code@2x.png"
              />
              <input
                class="input-weak kv-k J_input_sms J-input"
                name="code"
                type="tel"
                pattern="[0-9]+"
                placeholder="请输入短信验证码"
                disabled="true"
              />
              <div
                class="to-del J-to-del-code J-to-del"
                style="display: none"
              ></div>
            </dd>
            <dd class="dd-padding regist-tip">
              <div class="txt">未注册过的手机将自动注册为美团账户</div>
            </dd>
          </dl>
        </dd>
      </dl>
      <div class="btn-wrapper">
        <button
          type="submit"
          gaevent="imt/login/quick"
          class="btn btn-larger btn-block mj_login login-btn"
          disabled="disabled"
        >
          登录
        </button>
      </div>
      <input type="hidden" name="touchEvents" />
      <input type="hidden" name="extraFingerPrint" />
      <div class="unreceived-tip J-not-received">
        <p>
          仍未收到验证码？拨打
          <a href="tel:10109777" class="dial">查询热线</a
          >快速获取吧（9：00-23：00提供服务）
        </p>
      </div>
      <!-- <input type="hidden" name="action"> -->
      <!-- <input type="hidden" name="request_code"> -->
      <!-- <input type="hidden" name="response_code"> -->
    </form>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      change: true,
      styles: "0.6rem",
      account: ""
    };
  },
  methods: {
    check() {
      Cookies.set("userName", this.account, { expires: 7 });
    },
    usermode() {
      this.change = true;
      this.styles = "0.6rem";
    },
    mobile() {
      this.change = false;
      this.styles = "11.6rem";
    }
  }
};
</script>

<style scoped>
#login {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.28em;
  line-height: 1;
  color: #333;
}
dl.list:first-child {
  margin: 0;
  border-top: 0;
}
dl.list {
  background-color: #fff;
}
dd:last-of-type {
  border-bottom: 0;
}
#login-mobile {
  width: 14.5rem;
}
dl.list dd {
  margin: 0;
  border-bottom: 1px solid #d6d6d6;
  overflow: hidden;
  font-size: inherit;
  font-weight: 400;
  position: relative;
}
.nav {
  text-align: center;
}
.taba {
  display: -webkit-box;
  display: -ms-flexbox;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  position: relative;
  border-bottom: 0.24rem solid #d6d6d6;
}

.taba li.active {
  color: #df2d2d;
}
.login-icon {
  display: none;
}
dl.list dd dl {
  margin: 0;
  margin-bottom: -1px;
  padding-left: 0.6rem;
  border: 0;
}
.regist-tip {
  display: none;
}

.taba li {
  display: block;
  text-align: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  position: relative;
}
.taba li a.react {
  padding-top: 0.86rem;
  padding-bottom: 0.6rem;
}

dl.list dd > .input-weak {
  width: 100%;
  display: block;
}
dl.list .dd-padding,
dl.list dt,
dl.list dd > .react {
  padding: 0.78rem 0.6rem;
}

a.react,
label.react {
  display: block;
  color: inherit;
  height: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.9rem;
}

.sendC {
  position: relative;
}
.sendC .getCode {
  position: absolute;
  right: 0.6rem;
  top: 50%;
  font-size: 0.9rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  transform: translateY(-50%);
}

.slide {
  width: 11.1rem;
}
.taba .slide {
  position: absolute;
  bottom: -0.28rem;
  border-bottom: 0.24rem solid #df2d2d;
  -webkit-transition: left 0.2s ease-in;
}

input.input-weak,
textarea.input-weak {
  border: 0;
  height: 1.8rem;
  margin: -0.35rem 0;
  text-indent: 0.3rem;
  line-height: 1;
  font-size: 0.9rem;
  border-radius: 0.18rem;
  padding: 0;
}

.btn-wrapper {
  margin: 0.78rem 0.6rem;
}
.btn-block {
  display: block;
  width: 100%;
}

.btn-larger {
  height: 2.94rem;
  line-height: 2.94rem;
  font-size: 0.4rem;
}
.btn {
  /* display: inline-block; */
  margin: 0;
  text-align: center;
  /* height: 0.6rem; */
  padding: 0 0.72rem;
  border-radius: 0.16rem;
  color: #fff;
  border: 0;
  background-color: #df2d2d;
  font-size: 1.28rem;
  vertical-align: middle;
  /* line-height: 0.6rem; */
  box-sizing: border-box;
  cursor: pointer;
  -webkit-user-select: none;
}

.forget {
  display: none;
}
.btn:disabled,
.btn.btn-disabled {
  background-color: #dcdcdc;
  color: #999;
  border: 0;
}
.unreceived-tip {
  display: none;
}
</style>
