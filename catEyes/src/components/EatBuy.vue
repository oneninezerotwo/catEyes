<template>
    <div class="body-wrapper" id="bodyWrapper">

<section class="deal-info">
    <header>
        <div class="deal-info-image  deal-info-image-middle ">
            <img data-com="album" data-page="0" data-pics="https://img.meituan.net/maoyaneticketimage/df8c4bf5ed755615b2da9b6e0b85930c97378.png@750w_750h_2e" src="https://img.meituan.net/maoyaneticketimage/df8c4bf5ed755615b2da9b6e0b85930c97378.png@750w_750h_2e" style="width: 100%;">
        </div>
        <div>
            <h1>
				    <span class="hot-tag">双人</span>

                大酷暑+中雪碧/芬达+中雪碧/芬达
            </h1>

            <div class="">
                <div class="text-info">
                        <p>
                            有效期：2019.05.07-2037.12.30
                        </p>
                        <p>
                            可用时间：00:00-24:00
                        </p>

                </div>

                <p class="price-area">
                    <em>25.3元</em>
                </p>
            </div>
        </div>
    </header>
</section>

<form id="buy-form" action="/deal/buy/100214809?_v_=yes&amp;token=2qdlBVMkNDz8xDOQNJ4AqbR0rYQAAAAAkAgAABcvm9cftGy_1S8YwPuSVzaFaQr83sORK6BzYe4vYzK0kNPQxHobokcqA59cLdM39Q&amp;channelId=4&amp;cinemaId=27130" method="POST" class="wrapper-list" autocomplete="off">
    <input type="hidden" name="touchEvents">
    <input type="hidden" name="token" class="J-token" value="2qdlBVMkNDz8xDOQNJ4AqbR0rYQAAAAAkAgAABcvm9cftGy_1S8YwPuSVzaFaQr83sORK6BzYe4vYzK0kNPQxHobokcqA59cLdM39Q">
    <input type="hidden" class="J-deal-cinemaId" name="cinemaId" value="27130">
    <input type="hidden" class="J-deal-poiId" name="poiId" value="0">
    <input type="hidden" class="J-deal-unitprice" name="price" value="25.3">
    <input type="hidden" class="J-deal-id" name="dealId" value="100214809">
    <input type="hidden" class="J-channel-id" name="channelId" value="4">
    <input type="hidden" class="J-deal-category" name="category" value="11">
    <input type="hidden" class="J-deal-discountCardPromotionId" name="category" value="0">
    <input type="hidden" class="J-theme" name="theme" value="">


  <dl class="list">
    <dd>
      <dl>
        <dd class="dd-padding deal-more-info">
            <h6>套餐详情</h6>
            <section>
                <dl id="dealsets-details" class="list">
                    <dd>
                        <dl id="deal-menu">
                              <dd class="detail-group">
                                <span class="left">大酷暑+中雪碧/芬达+中雪碧/芬达</span>
                                <span class="middle">1份</span>
                                <span class="right">23元</span>
                              </dd>
                        </dl>
                    </dd>
                </dl>
          </section>
        </dd>
      </dl>
    </dd>
  </dl>
    <dl class="list">
        <dd>
            <dl>
                    <dd class="dd-padding kv-line-r quantity">
                        <h6>数量</h6>
                        <div class="kv-v">
                            <div class="stepper">
                                <button @click="del" type="button" :class="{'btn':true, 'btn-weak':b_show1, 'minus':true}">-</button>
                                <input class="mt number J-deal-quantity" type="tel" name="quantity" min="1" max="500" :value="num">
                                <button @click="add" type="button" :class="{'btn':true,'btn-weak':b_show2,'plus':true}">+</button>
                            </div>
                        </div>
                    </dd>


                            <dd class="deal-coupon-info more-info dd-padding kv-line-r" style="display: none;">
                                <h6>抵用券</h6>
                                <div class="kv-v">无可用</div>
                            </dd>
            </dl>
        </dd>
    </dl>

  <dl class="list">
    <dd class="dd-padding kv-line-r">
        <h6>提示信息</h6>
    </dd>
    <dd class="dd-padding deal-more-info">
      <pre class="deal-term">使用时间：请在影城卖品部营业时间兑换。</pre>
    </dd>
  </dl>

    <input type="hidden" class="J-deal-promotionsId" name="promotionsId" value="0">
    <input type="hidden" class="J-deal-totalprice" name="totalprice" value="25.30">
    <dl class="list J-deal-promotion" style="display:none;">
        <dd>
            <a class="react" id="useMagicard" href="####">
                <div class="comment-headline kv-line-r">
                    <h6 class="promotion-text"></h6>
                    <span class="more-after kv-v promotion-price"></span>
                </div>
            </a>
        </dd>
        <dd class="kv-line-r dd-padding">
            <h6>还需支付：</h6>
            <p>
                <span id="realPayMoney" class="J-need-total-price">元</span>
            </p>
        </dd>
    </dl>

    <div class="btn-wrapper deal-fix-btn">
               <div class="deal-tags">
                <ul class="deal-tags-list">
                        <li><i class="icon text-icon not-support-refund-icon"></i><span>不支持退款</span></li>
                </ul>
                <ul class="deal-total">
                  
                  <div class="reduce-block" style="display: none;">
                    <span>已减</span>
                    <span class="money">￥</span>
                    <span class="num">0.00</span>
                  </div>
                  
                  <div class="total-block">
                    <span class="pay">小计</span>
                    <span class="money total">￥</span>
                    <span class="num total">{{num*23}}</span>
                  </div>
                </ul>
            </div>
        <button type="button" class="btn btn-block btn-strong btn-larger mj-submit" data-bid="b_sbmgoz4i">
                <span>确认支付</span>
        </button>
        <div class="compatible-bottom-padding"></div>
    </div>
    <div class="bottom-margin"></div>
</form>
<div class="more-info-popup deal-more-info-popup" style="display: none;">
    <section class="more-info-detail">
        <header>
            <h2>更多详情</h2>
            <i class="icon icon-remove-narrow"></i>
        </header>
        <section>
            <!-- 套餐详情-->
            <dl id="dealset-title" class="list">
    <dt gaevent="imt/deal/details" class="sub-title">套餐详情</dt>
</dl>
<dl id="dealsets-details" class="list">
    <dd>
        <dl>
            <dd class="detail-group">
                <span class="left">大酷暑+中雪碧/芬达+中雪碧/芬达</span>
                <span class="middle">1份</span>
                <span class="right">¥23</span>
            </dd>
        </dl>
    </dd>
</dl>




            <!-- 购买须知-->
            <div id="feedback_async" style="margin-top: .2rem">
    <dl id="deal-terms" class="list" style="opacity: 1;">
        <dt gaevent="imt/deal/terms" class="sub-title">提示信息</dt>
        <dd class="dd-padding sub-items">
            <ul>

                    <li class="tips">
                        <div class="tip-title">有效期:</div>
                        <pre class="tip-des">2019.05.07 至 2037.12.30（周末、法定节假日通用）</pre>
                    </li>
                    <li class="tips">
                        <div class="tip-title">退款说明:</div>
                        <pre class="tip-des">购买后不支持退款</pre>
                    </li>
                    <li class="tips">
                        <div class="tip-title">使用时间:</div>
                        <pre class="tip-des">猫眼券24小时可用</pre>
                    </li>
                    <li class="tips">
                        <div class="tip-title">其他:</div>
                        <pre class="tip-des">消费者不可同时享受商家其他优惠</pre>
                    </li>

            </ul>
        </dd>
    </dl>
</div>

        </section>
    </section>
</div>
<div class="more-info-popup deal-coupon-info-popup" style="display: none;">
    <section class="more-info-detail">
        <header>
            <h2>抵用券</h2>
            <i class="icon icon-remove-narrow"></i>
        </header>
              <section class="empty-content">
      暂无可用优惠券
  </section>

    </section>
</div>

  </div>
</template>

<style scoped>
.deal-info,.more-info {
    box-sizing: border-box
}

#buy-form .kv-line-r {
    margin: 0
}

#buy-form .kv-line-r h6 {
    font-size: .28rem;
    font-weight: 700
}

#buy-form .kv-line-r.quantity h6 {
    line-height: .7rem
}

#buy-form .btn-larger {
    font-size: .36rem
}

#buy-form .compatible-bottom-padding {
    height: calc(2 * constant(safe-area-inset-bottom));
    height: calc(2 * env(safe-area-inset-bottom))
}

#buy-form .detailed-notice {
    box-sizing: border-box;
    width: 100%;
    padding: .2rem;
    color: #999;
    font-size: .26rem
}

#realPayMoney,#totalPrice {
    color: #ef4238;
    font-size: .3rem
}

#change-mobile {
    padding: 0 .2rem
}

#change-mobile .btn-wrapper {
    margin-left: 0;
    margin-right: 0
}

#change-mobile .icon-phone-edit {
    display: block;
    float: right;
    width: .36rem;
    height: .36rem;
    background-image: url(/bs/file/?f=myfe/canary:static/deploy/images/phone-edit.png);
    background-size: 100%
}

#change-mobile #J-phone-number {
    width: 65%
}

.deal-info {
    color: #999;
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: .29rem .2rem
}

.deal-info>header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative
}

.deal-info>header .deal-info-image {
    width: 1.8rem;
    min-height: 2rem;
    text-align: center;
    overflow: hidden;
    margin-right: .2rem;
    padding-left: .06rem
}

.deal-info>header .deal-info-image-middle {
    height: 1.64rem
}

.deal-info>header .deal-info-detail {
    position: absolute;
    bottom: 0
}

.deal-info>header h1 {
    margin: 0 0 .15rem;
    font-size: .3rem;
    font-weight: 400;
    color: #333
}

.deal-info>header .hot-tag {
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
    display: inline-block;
    vertical-align: top;
    margin-right: .1rem;
    padding: .05rem .1rem 0;
    font-size: .23rem;
    line-height: .24rem;
    height: .3rem;
    background: #f90;
    border-radius: .05rem;
    color: #fff
}

.deal-info>header .price-area {
    margin-top: .1rem;
    vertical-align: top
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-tags-list li span,.deal-info>footer .deal-tags-list li span,.deal-info>footer .text-icon {
    vertical-align: middle
}

.deal-info>header .price-area em {
    color: #f03d37;
    font-style: normal;
    font-size: .34rem
}

.deal-info>header .price-area span {
    font-size: .3rem;
    margin-left: .1rem
}

.deal-info>footer {
    margin-top: .5rem;
    padding: 0;
    background: #fff
}

.deal-info>footer .text-icon {
    font-size: .26rem;
    margin-right: .1rem;
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background-size: 100%;
    background-repeat: no-repeat
}

.deal-info>footer .support-refund-icon {
    background-image: url(data:image/png;base64,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)
}

.deal-info>footer .valid-time-support-refund-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA/5JREFUSA21V0tIVUEY/uZ2FSOUBIsMjOi9LIIWbUKIRAuSQBeWPdV2QUlQlCU9qIUV1KpbJpa6sBYFpSSEbdoEBgUtvFSEUi4M1J6i2fT9c+Yczz3nem/5GDhnZv7XN//M//9njsI/NN2CHPxCMTR2Unwjn3yOs42qwhjHn6Hwgv1zZOKBOoDhdGZVKgF9B4vwG2coU0OjmalkPZ7CD45bEMVFdRD9Hj0wmBJYx3CMsvWeZ8AQverg00V6n/FSYwIRLg5Yw/kWPjs4XsxH2nfKnkY1biiFPw5p8h0C1k3I4uY1UqTCismq62i6VRXS/xRNt3NXRlDOBZzls8qK7laH0RZUSwA2oON4RqXNRlChARmo45mNBhVTza2dU5QpotdVqhpvgvKJwDfRSoEKCo+xr1I1uBdUmK15xDVkz9Td3jkFFUzjsY3e99zibFIa6Olxd0Fz1UeNYUkZJy/75UznAsye+xXivGSwNStTHH5ikATJ0/1CnCkwo3seyqD9aaRvYwOT7xV3dJR5kxexFUlAhyRlZgzahOW01ItbeGMW4BrMwVsOR+hgFjFLIhxIGZTT7kiXp0YuxUvfRB7G8ZQiK2l3gXjtiqtyZorCYzNX2CVRLbVXgLtMP82XvksghSeEWkMTX1kyS/1bbcy6GBrrBTjfYvXZ/r873U2YUdwn6CaCSw0oVYfwOmToj1e7l8pWO18Z+cIEmpxRwjkF+N40jtu0U8y51ORKBmi3x/MPFD7ZaY5XQPx8GRvAYa56CHHdiLVBvjvnuV7ieJ+dH2UNaHd5qfoIt+abEVBYGhLUmE/aCn4aupOBE/QI+Ses3mV6ej1kw09wMYgpHg9Y3rIEmXJmXRQllp8fBGeJLSfvmtVpJuhJv/4UYxdjQIB7jJDGtqAwA6SX4IWky+I8cHoqNPmAyI51Mo6rOE7fJjF6RPGR0dAoMdEZUE8C/pwiDxlMmdR9yXJQ9i/5b2wTw5gnZoSn2EkDkgK5iGO3YQReAfAlZOdQJ07w7WqvueoENJJMHdu5BouYEbWHyQ7ErOh5U8yT6PnAP1D5HT8mRTzXL0lEQyRr87xlxATTSacoztGYRHcBfb8Q0rQEA16D1ViIdbyVfJxKLkR3bBYYDMFiM8C8DQ5yXC8EtlpGbKUzDL+lDLLuToQ5ySnWVq3l1lssrsHXGK2zevWxoFLV5OvXxqPxYigRWG6Ys3XZc7bX8VQu+xnY6r80JgCL8yYQpnu9lY+FE70SSAVij62N/h7ygwoxBCxEadym9Bd6EXTK4DJu5zY+kqe5QjaBxLhh7b5q5oHXlMAiN81fGKkJMfp+zg2kAKaZpgR2FdL8tEkaSkntoZePpCDZ2uCqJ+3/AuFsUuxOeJA4AAAAAElFTkSuQmCC)
}

.deal-info>footer .not-support-refund-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA8NJREFUSA21l09IVEEcx3efC3r0skFCeyo71E0iig4V6UEIBYmIugj5ZwuiCAyiS2BCQhQR/gcvSQQJbd1K7JB4qPbQUaiLwgZ6WMPLLq1rn+/bGX3v+XZdZB2YNzO/+c3vO78/85t50UgVZWtry5mYmDhbLBY7o9FoC0uaoDXRd+iv0s84jrPAeJ7+fF9f37+9xEYrMUxPTzfkcrk78NynHqrE65nLsIFX1BE28NdD93XLAqNh1+bm5nO4j5gVS2iVQuBnxsuNjY2ZbDZbrKuri2OJY2h6nraDuZOGP8Ncsre394MZ+5pdwAiIjo2NDcL10HCmY7HYQE9Pz7xvZZnB5OTkRTb8GDnn2OTvRCJxor29PR9k9wELdHx8/A3tVRgLaHiXHY8gYCu4sNJYcrDYLdqF/v7+n2G8PuDR0dEnMEnTLKBd+OhL2KJa0LaBjU/fIVSath0kqDau4xBR9JpAisi8Bw26DWyOjKI3LZ9q4iAK8XOBwL0h2TECwGGgcxpR9IYFEvM6VvH6+vqb3d3dOfEGi6yWz+enoK8RUPeC84Ce5rjpZPyivnYzEh0lh6UKRybOBq8jOCUAeH3FgKbEw0TcN2kGWPIb3RXqURQ54ygNag7fptSGFWmKJT4huC0I7gFtE494w2QYS85ojv4Vh49yrwbKSKFF5kVgBzw+8BDQjnKukGDWf1WLAs2K6iYNKMulJvwbBCcgP6rKCtqQNlYJVFKJIYuRcFjoAiv3hkPuUC04lDnqJVPnqgGVlIaGhh1gEVQ2Nja2k0mJUvsv8WFTryMfu5qSQA7vBWV9Cp+0ldau5sGAKyfHg/FHPrYmTpRbILoFtT7FbJdVgwFXSQZzFiMjH6fFTNtablEQ1PrU+rxacA/GD46v816A5hIPxcaUU1ZTC2oZQ8Cn7FywRYabM9hoyiGjLMKwSj2uSzzIbMZrMM8EQS2vB1wJYs3Sva1kA9wMbVWYbiRzDw9AeEpNk2dPAWKjz7t2330A9ar5jgAlqwfJZHJYwaXz9ZJGebRFLwfRalkAvY08ga4YrNJ9LFPxMHNvFHz9QtdXrYCNLN1uEWEIS31XY3Ww+yzNEDUG+GwtwCVDsiRTsg0GXfK2+zUf+QLmmj32ZD1Ex4iZt7xqrnljxwcsfBMIg3T3/bwtFArDrHdvPdohAvaRFxSaX2MRbKnmQS/e9fV1XTIJNtxK7aTqyKisyKde85bIpe8ujb2Tylj7+IVRTnim6LWB5JVp+xWBLRNahP60aR4TZmgy8KSVBdFwEVrRri3X/gcZxzjx89M+0wAAAABJRU5ErkJggg==)
}

.deal-info>footer .deal-tags-list li {
    display: inline-block;
    margin-right: .3rem
}

.deal-info>footer .deal-extra-notice {
    width: 100%;
    padding: .2rem;
    margin: 0 0 -.3rem -.2rem;
    border-top: .01rem solid #ddd8ce;
    border-bottom: .01rem solid #ddd8ce;
    color: #6bbd00;
    background: #fff
}

.more-info {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: .29rem .2rem;
    margin-top: .2rem;
    cursor: pointer
}

.more-info:after {
    display: inline-block;
    content: "";
    width: .18rem;
    height: .18rem;
    border-left: .02rem solid #DDD8CE;
    border-top: .02rem solid #DDD8CE;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    position: absolute;
    right: .24rem;
    top: .31rem
}

.more-info .kv-v {
    padding-right: .32rem
}

.deal-more-info h6 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    font-size: .28rem;
    font-weight: 700;
    margin-right: .2rem;
    display: block;
    margin-bottom: .2rem
}

.deal-more-info .deal-term {
    margin: 0;
    white-space: pre-wrap;
    color: #999;
    font-size: .26rem;
    line-height: .42rem;
    max-height: 100%
}

.deal-more-info #dealsets-details {
    padding-left: 0
}

.deal-more-info #dealsets-details .detail-group {
    border-bottom: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #999
}

.deal-more-info #dealsets-details .detail-group .left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: .13rem 0
}

.deal-more-info #dealsets-details .detail-group .middle,.deal-more-info #dealsets-details .detail-group .right {
    display: block;
    border-left: none;
    text-align: right;
    padding: .13rem 0
}

.btn-wrapper.deal-fix-btn {
    background: #fff;
    position: fixed;
    bottom: 0;
    margin: 0;
    padding: 1.11rem .2rem;
    left: 0;
    right: 0
}

.btn-wrapper.deal-fix-btn>.deal-tags {
    padding: 0;
    background: #fff;
    margin-bottom: .19rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.btn-wrapper.deal-fix-btn>.deal-tags .text-icon {
    font-size: .26rem;
    margin-right: .1rem;
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background-size: 100%;
    background-repeat: no-repeat;
    vertical-align: middle
}

.btn-wrapper.deal-fix-btn>.deal-tags .valid-time-support-refund {
    color: #f90
}

.btn-wrapper.deal-fix-btn>.deal-tags .support-refund-icon {
    background-image: url(data:image/png;base64,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)
}

.btn-wrapper.deal-fix-btn>.deal-tags .valid-time-support-refund-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA/5JREFUSA21V0tIVUEY/uZ2FSOUBIsMjOi9LIIWbUKIRAuSQBeWPdV2QUlQlCU9qIUV1KpbJpa6sBYFpSSEbdoEBgUtvFSEUi4M1J6i2fT9c+Yczz3nem/5GDhnZv7XN//M//9njsI/NN2CHPxCMTR2Unwjn3yOs42qwhjHn6Hwgv1zZOKBOoDhdGZVKgF9B4vwG2coU0OjmalkPZ7CD45bEMVFdRD9Hj0wmBJYx3CMsvWeZ8AQverg00V6n/FSYwIRLg5Yw/kWPjs4XsxH2nfKnkY1biiFPw5p8h0C1k3I4uY1UqTCismq62i6VRXS/xRNt3NXRlDOBZzls8qK7laH0RZUSwA2oON4RqXNRlChARmo45mNBhVTza2dU5QpotdVqhpvgvKJwDfRSoEKCo+xr1I1uBdUmK15xDVkz9Td3jkFFUzjsY3e99zibFIa6Olxd0Fz1UeNYUkZJy/75UznAsye+xXivGSwNStTHH5ikATJ0/1CnCkwo3seyqD9aaRvYwOT7xV3dJR5kxexFUlAhyRlZgzahOW01ItbeGMW4BrMwVsOR+hgFjFLIhxIGZTT7kiXp0YuxUvfRB7G8ZQiK2l3gXjtiqtyZorCYzNX2CVRLbVXgLtMP82XvksghSeEWkMTX1kyS/1bbcy6GBrrBTjfYvXZ/r873U2YUdwn6CaCSw0oVYfwOmToj1e7l8pWO18Z+cIEmpxRwjkF+N40jtu0U8y51ORKBmi3x/MPFD7ZaY5XQPx8GRvAYa56CHHdiLVBvjvnuV7ieJ+dH2UNaHd5qfoIt+abEVBYGhLUmE/aCn4aupOBE/QI+Ses3mV6ej1kw09wMYgpHg9Y3rIEmXJmXRQllp8fBGeJLSfvmtVpJuhJv/4UYxdjQIB7jJDGtqAwA6SX4IWky+I8cHoqNPmAyI51Mo6rOE7fJjF6RPGR0dAoMdEZUE8C/pwiDxlMmdR9yXJQ9i/5b2wTw5gnZoSn2EkDkgK5iGO3YQReAfAlZOdQJ07w7WqvueoENJJMHdu5BouYEbWHyQ7ErOh5U8yT6PnAP1D5HT8mRTzXL0lEQyRr87xlxATTSacoztGYRHcBfb8Q0rQEA16D1ViIdbyVfJxKLkR3bBYYDMFiM8C8DQ5yXC8EtlpGbKUzDL+lDLLuToQ5ySnWVq3l1lssrsHXGK2zevWxoFLV5OvXxqPxYigRWG6Ys3XZc7bX8VQu+xnY6r80JgCL8yYQpnu9lY+FE70SSAVij62N/h7ygwoxBCxEadym9Bd6EXTK4DJu5zY+kqe5QjaBxLhh7b5q5oHXlMAiN81fGKkJMfp+zg2kAKaZpgR2FdL8tEkaSkntoZePpCDZ2uCqJ+3/AuFsUuxOeJA4AAAAAElFTkSuQmCC)
}

.btn-wrapper.deal-fix-btn>.deal-tags .not-support-refund-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA8NJREFUSA21l09IVEEcx3efC3r0skFCeyo71E0iig4V6UEIBYmIugj5ZwuiCAyiS2BCQhQR/gcvSQQJbd1K7JB4qPbQUaiLwgZ6WMPLLq1rn+/bGX3v+XZdZB2YNzO/+c3vO78/85t50UgVZWtry5mYmDhbLBY7o9FoC0uaoDXRd+iv0s84jrPAeJ7+fF9f37+9xEYrMUxPTzfkcrk78NynHqrE65nLsIFX1BE28NdD93XLAqNh1+bm5nO4j5gVS2iVQuBnxsuNjY2ZbDZbrKuri2OJY2h6nraDuZOGP8Ncsre394MZ+5pdwAiIjo2NDcL10HCmY7HYQE9Pz7xvZZnB5OTkRTb8GDnn2OTvRCJxor29PR9k9wELdHx8/A3tVRgLaHiXHY8gYCu4sNJYcrDYLdqF/v7+n2G8PuDR0dEnMEnTLKBd+OhL2KJa0LaBjU/fIVSath0kqDau4xBR9JpAisi8Bw26DWyOjKI3LZ9q4iAK8XOBwL0h2TECwGGgcxpR9IYFEvM6VvH6+vqb3d3dOfEGi6yWz+enoK8RUPeC84Ce5rjpZPyivnYzEh0lh6UKRybOBq8jOCUAeH3FgKbEw0TcN2kGWPIb3RXqURQ54ygNag7fptSGFWmKJT4huC0I7gFtE494w2QYS85ojv4Vh49yrwbKSKFF5kVgBzw+8BDQjnKukGDWf1WLAs2K6iYNKMulJvwbBCcgP6rKCtqQNlYJVFKJIYuRcFjoAiv3hkPuUC04lDnqJVPnqgGVlIaGhh1gEVQ2Nja2k0mJUvsv8WFTryMfu5qSQA7vBWV9Cp+0ldau5sGAKyfHg/FHPrYmTpRbILoFtT7FbJdVgwFXSQZzFiMjH6fFTNtablEQ1PrU+rxacA/GD46v816A5hIPxcaUU1ZTC2oZQ8Cn7FywRYabM9hoyiGjLMKwSj2uSzzIbMZrMM8EQS2vB1wJYs3Sva1kA9wMbVWYbiRzDw9AeEpNk2dPAWKjz7t2330A9ar5jgAlqwfJZHJYwaXz9ZJGebRFLwfRalkAvY08ga4YrNJ9LFPxMHNvFHz9QtdXrYCNLN1uEWEIS31XY3Ww+yzNEDUG+GwtwCVDsiRTsg0GXfK2+zUf+QLmmj32ZD1Ex4iZt7xqrnljxwcsfBMIg3T3/bwtFArDrHdvPdohAvaRFxSaX2MRbKnmQS/e9fV1XTIJNtxK7aTqyKisyKde85bIpe8ujb2Tylj7+IVRTnim6LWB5JVp+xWBLRNahP60aR4TZmgy8KSVBdFwEVrRri3X/gcZxzjx89M+0wAAAABJRU5ErkJggg==)
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-tags-list {
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-tags-list li {
    display: inline-block;
    margin-right: .3rem
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-tags-list li:last-child {
    margin-right: 0
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-total {
    font-size: .26rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-total .money {
    color: #33C1AF
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-total .money.total {
    font-size: .28rem
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-total .pay {
    font-size: .28rem;
    font-weight: 700;
    margin-left: .1rem
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-total .num {
    color: #33C1AF;
    font-size: .28rem
}

.btn-wrapper.deal-fix-btn>.deal-tags .deal-total .num.total {
    font-size: .42rem
}

.bottom-margin {
    height: 2.3rem;
    padding-bottom: env(safe-area-inset-bottom)
}

.deal-coupon-info-popup .more-info-detail {
    max-height: 75%
}
.coupon-list-container {
    background-color: #F4F4F4;
    height: 8.04rem;
    padding: .36rem .2rem 0;
    overflow-y: auto
}

.coupon-list-container .item {
    background: #F4F4F4;
    line-height: 1.9rem;
    margin-right: -.2rem;
    margin-bottom: .44rem;
    position: relative;
    width: 100%;
    height: 1.94rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.coupon-list-container .item .title {
    font-size: .3rem;
    color: #333
}

.coupon-list-container .item .desc {
    box-sizing: border-box;
    line-height: normal;
    background: #fff;
    border-radius: 0 .08rem .08rem 0;
    width: 4.4rem;
    height: 100%;
    overflow-x: hidden;
    border: .02rem solid #efefef;
    border-left: none
}

.coupon-list-container .item .desc .content {
    padding: .16rem .1rem;
    height: 1.12rem
}

.coupon-list-container .item .desc .title {
    font-size: .32rem;
    color: #333;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
}

.coupon-list-container .item .desc .limitdesc {
    font-size: .24rem;
    color: #999;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden
}

.coupon-list-container .item .desc .tips {
    padding: .06rem .1rem;
    font-size: .24rem;
    color: #999;
    line-height: .34rem
}

.coupon-list-container .item .price {
    box-sizing: border-box;
    line-height: normal;
    background: #fff;
    border-radius: .08rem 0 0 .08rem;
    text-align: center;
    width: 1.9rem;
    height: 100%;
    margin-left: .22rem;
    border: .02rem solid #e6e6e6;
    border-right: none
}

.coupon-list-container .item .price .money {
    color: #F03D37;
    font-size: .56rem;
    font-weight: 700
}

.coupon-list-container .item .price .money .icon {
    font-size: .32rem
}

.coupon-list-container .item .price .money .small {
    font-size: .4rem
}

.coupon-list-container .item .price .minmoney {
    font-weight: 400;
    font-size: .24rem
}

.coupon-list-container .item .radio {
    width: .46rem;
    height: .46rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAABGdBTUEAALGPC/xhBQAAAS9QTFRFysrKy8vLzc3NysrKysrKysrKycnJysrKycnJy8vLysrKycnJysrKysrKysrKy8vLysrKycnJy8vL0dHRysrKysrKzs7O0NDQycnJycnJ1dXVy8vLz8/PzMzMycnJycnJ////ycnJy8vLycnJ39/fysrKysrKysrKysrKy8vLysrKy8vLysrKzMzMzc3NysrKysrKycnJysrKzMzMysrKysrKysrKycnJysrKysrK2NjY////zMzMzMzMycnJ////z8/Pzs7OycnJycnJ////ycnJysrKAAAA7e3t9PT08vLy7+/v9/f30tLS8PDw4+Pj6enp4eHh6+vr8fHx8/Pz7u7u09PT5eXl6Ojo6urq5ubm0NDQ0dHR/f39+fn51tbW9vb2+/v7/v7+ycnJ////gAiiYQAAAEh0Uk5T9X8pGHh5vbxRNjWv5eZgXpqYSQvnahX+w50GZiAPudYEk/7RCMql1NlOgkr9Nz3FwICUCu+s0vyxUg0CS/7VA/7+6eAB9v4ATEjHJAAAAgVJREFUSMeNluV2q0AURqdX6u7u7nE3AqTexg0JfPP+z1DS3t4YhLP/sdjDYux8h+X68I17x7L+EBOCgZFJsf8t63lampuS0MX0wmLMUU9tLQOy3ngoaabRKhbyTWvE0ZWDHk8Cet3gXbSq1oj7Gxs9dQAoZd6PWcvg+s+AvrOLw5rJbVDfZZwe9+rbe0g/cgfeEjj53a1Hk6ho3JEXBSfHHV0Mo6LyIRgKTjv6JTIaH8pLAn9/9FtZfuIuvMnXN//0O1S5K++4/9YvkFbddTWDq7YeO8MHJ1DDUczS41BMim42sWjp82hwElUs5Jg4gxZNb2FaZBNociJNTDIP8lQ9Dw8LoEDVCwiwIIpUvYggE6gzbc9VYBIMqm5AYiGYVN1EiPmhUXUNfpZFiaqXkGWjKFP1B4wxL/XIcN6Al0WgU3Ud48wnycSVNGTJx3Jh1Gl6HVPWeZ+l/o2OOUuPCnim2GUsL7Wv9gpeKVuqYOurEuyfU+52DcnUd52JIOF6Kh8PEf8pehtYc1lMLY2D/zVycx360HOpVrCb6hTs1Sz0Id/XKtjb6Y6DX1msOf7/UwbJ7d6wWV1Hwn531aqMcLQ/yjY3gNfB/TI/0pAvRZugjJwPBmVDAe5u7WN4f0X4iuFydwyfXTiHfHQ23BPyM/Px2JCeoN1CRLyjVgshWS2EZ2KghfgEiTjfHorPUqwAAAAASUVORK5CYII=) no-repeat;
    background-size: contain
}

.coupon-list-container .item .gap {
    box-sizing: border-box;
    width: .2rem;
    height: 100%;
    background-size: .2rem 1.94rem;
    background-repeat: round;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAADkCAYAAACVBXRTAAAAAXNSR0IArs4c6QAAA21JREFUeAHtmztvE0EUhf0gfhATOZIVO0qgSoOEaJFS0NMh0cEv4E9Q8C8oKCkoqGkDXSQEFQ1KFYE3diyF2AbHryznTDbL2GTnTlbIguiuZO/s3nuO787Ot+vmZpvNZpjNZqfr6+vXMim2IAgmYRjmczCg/Ljb7dYu6xNpjumRoxgVNU9OTm5f1ogaaqkzRsVisTOdTh9e1ogaao0O1xdOJpN9XOv3dru95WvGXGiOqaWHqSifz98slUqf8AsvcS4rmTGHudB8pJb5xoiDarW6ncvlqviVF0hMvIOMMYe51FDLLYtAeDY0332U/Pn09LSMSXxWr9ffYj9iBGmFVqv1APvnMBmsra3dwello8LXvJE5PxgMdvv9fhHlc872o+RbuIy9SqUyLJfL96Jz8e5CoziayfRg1uIxTOrY3bBiM0PJaCbZdRBPtivJJ6ZG8izpHP1Lc4RHRoYfabvCd018jAyHQzM9eFs4p0k0cqqt4BWe7MVd2tHRUYYfaUt8o54L8Y/jfOjcL+7SnGVYwStckciaQvv7P6S1JFINF7eOFNr/8a75LiqFVp6pxbEm13KWIVak0Cq0WCr699iXqOQ8kbVk6WxENFJoFVosGYV2lps0RyJrvqaikUKr0Cq0vjg580TWnGorKBoptAot1ou+aS1oUg5F1nx9RSOFVqFVaH1xcuaJrDnVVlA0UmgVWqwXfdNa0KQciqz5+opGCq1Cq9D64uTME1lzqq2gaKTQKrRYL/qmtaBJORRZ8/UVjRRahVah9cXJmSey5lRbQdFIoVVosV70TWtBk3IosubrKxoptAqtQuuLkzNPZM2ptoKikUKr0GK96JvWgiblUGTN11eN5Jn6a3N0YScUmnG/onl7bzQabaA1uBHVEwCT5srKyhaadDfna/yjol6vt3N4eFhCU84ueo8fFwqFTX5g+ITnGGPOvNFMwwCez++RXFxaWnpUq9W+zSfzuNPpbIzH4zeobri6uno/zsEvmQ2X8g4N8V9wcD0OJgwODg6WmUtNJD9r8EZ+F13Pd9Em/RTt0z8T9PHpRqPxg7nUUGsCdITzThAEr+NMzwE1nC96mMlGj1oFlbzy1Mdp1KCHu8ITxgi3ewO39EOc4TmghlqTzrJQ4hi7C9eUy5OaSBvmMGBfOk3yLlFCLB+ZZX4B43Vr1Dq4AvIAAAAASUVORK5CYII=)
}

.coupon-list-container .item .merchant-tag {
    position: absolute;
    right: 0;
    top: 0;
    width: .78rem;
    height: .8rem;
    background-size: cover;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAABGdBTUEAALGPC/xhBQAAAV9QTFRFm9H7m9L7oNX/nNL6m9L7m9L8qtX/m9L7m9H7AAAA8Pj+yOb84vH9zej8rtn6u+D77/f+1ez8ut/7o9T6veH7pdX67fb+4/L9xOP8ndL6wuP7+v3+td375PL9xuX82O396vX9xOT86/b+rdn66fX9ud77rtr67ff+p9b63O79stv7t937w+P8odT69Pn+4PD99Pr+u9/72u79rNn63vD90er80en8ud/76fT9n9P6qtj6stz70ur8+Pz+0On8pdb69vv+rNj64fH9s9z7odP66/X+wOL71+z9otT6t977n9L6veD77vf+q9j64PH9v+H72e392+799/v+r9r7sdv73O/9qdf65/T9+Pv+qNf68vn+/f7+pNX6tt37yOX8+fz+vOD79fr+1uz8ptb6uN77weL7ntL6zOf86PT98fj+5fP91Ov8tNz7oNP6/P3++/3+/v7+3e/9////nNH6m9H6sX+XxwAAAAp0Uk5Tvf0r1Y+UBvOAAFD8Qw0AAAL5SURBVFjDrdaHcuIwEADQXDrXe6/pl3LpvZPeCxcgBAJOcgnN2Ej7/3OywQlIsi3bWmbwyMO80e7KaxragQQ2P3aBHy64Zl0bbU3NjSESDaF2kBOPWloNTpoHDa0GJ89rMTl5+TaanDSvucLJ8pqqnJC3euT2izaLE/GW9H+uzQ158K5cvQfOzcNJAa+Gc/ZwOXcN6xfEu5kV45w8XC715q4/6hP6oHIsyNl7RLtRs7n9D3CF0FdRzs4zNAA1i96S+qHPwhzfI9rl1N5BX7SL1M+xHzTH84y9pTRE4iBr9OO9vcdwrFfN9EVqILVL6lfWUM7WYznas+qW/ksW19NZ9KrPPl8OR3mFihYPG95rfShbqd+eMFfvRXdMrQf/Jl4EJVXTu1sW55j63eZHzsHw3qFOUBM51bi5K8xxvD/Ey6fX0ABcojvjVvG0KMxxve7SWRJtWpoW14rCHMdTSmcYkncVDU7yapn1bDmORzQrU3J+1skRIp4qyLFerQYwXDC9yUNBjvLmDvG9tpYByFyY3uKkKFfvHazkj629DeodO1UPZYS5em/15+kv4/qJPCWdhyhW3KvsryjMUfnemt/9aKMb4PmxlniJaM+FY+cLeRbWwqhjMwnbWixBe24c4+2f9QCMj6VRbwFFrX4UhTna+55AeTIUcOTJRglX+zujjQtzzPwbjaHHW5vn8DTeT5aZdPRIP8HiHFu/yLO8hhQ9psdGZ2EIJu41IY72to09pkphKI98KX2bA4zBE0d5P7bIKOhS3uD40e302Lz4MeZ78ysbC4oSgZS+LT5RHLzl4dMyGfBbM+CX471/96f8cxwvsRSAYz1lIQjHeIuFQBztpc6Dce7/n71xrp5Hzs3zyrl4njlnzzvn6PngnDw/nIPni7P3/HG2nk/OzvPL2Xi+Ob7nn+N6ATieF4TjeIE41gvGMV5AjvaCcpQXmKv3gnN1ngSu1pPB1XhSuAdPDnfvSeIsTxZX9aRxFU8eZ3oSOcOTyRFPKhdq/w/Y84KCTB99JAAAAABJRU5ErkJggg==)
}

.coupon-list-container .item .mb-line-t {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==) 0 top repeat-x
}

.coupon-list-container .item .box-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.coupon-list-container .item .column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.coupon-list-container .item .middle {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.coupon-list-container .item.active .radio {
    background-image: url(data:image/png;base64,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)
}

.coupon-list-container.use-code .use-coupon-code .input-coupon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.coupon-list-container.use-code .use-coupon .radio {
    margin-right: .3rem;
    background-image: url(data:image/png;base64,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)
}

.coupon-list-container.use-code .coupon-list .item .radio {
    display: none
}

.coupon-list-container .use-coupon-code .input-coupon {
    display: none;
    padding: 0;
    margin-right: 0
}

.coupon-list-container .use-coupon-code input[name=couponCode] {
    padding: .3rem .24rem .3rem 0;
    font-size: .3rem;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border: none;
    background: 0 0;
    color: #333
}

.coupon-list-container .use-coupon-code input[type=submit] {
    padding: 0 .3rem;
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    background-color: #fff;
    border: .02rem solid #ccc;
    border-radius: .08rem;
    margin: .3rem 0;
    font-size: .24rem
}

.coupon-list-container .notice {
    color: #F03D37
}

.coupon-list-container .disabled .merchant-tag {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAABGdBTUEAALGPC/xhBQAAAI1QTFRF29vb29vb////29vb29vb29vb29vb2tra29vbAAAA6enp7e3t9PT0+Pj48PDw+fn55+fn7u7u4eHh8/Pz3d3d9/f38fHx6urq4uLi4ODg7Ozs9fX1/Pz8+/v76Ojo39/f5eXl3Nzc3t7e5ubm5OTk4+Pj+vr69vb27+/v29vb/f398vLy/////v7+2tra0GjS4QAAAAp0Uk5TvZQG/SuP1fOAAJ9Bl5IAAAKnSURBVFjDrdbnsqowEABgT9dzLEhTBEQ6pL3/491QvGoSSIDsL4ZhvtndJBtWa9JGTNRi4Luf76/PDY3VZk30xMfbe8Np88jqveH0eW8tp6/ez5bT5n11nC7vu+eUPM+QffFz51S8P3yVLu5mgldJvQcn9WwF74mTeLBISIypl9Vq3KgH8a5IfrGFr6GryI14EN/qsjhsSYVQrsoNelQjpC5RSvuHrsrcgAfx6Zh6SeTQ/o2uB8sJPZpbBhANr2zWYzfscZzAayuN0yzLato/CNBh0OM5zuv7Bs70ObmVqEqG6xVwjFd1WrBtvBuOy65/qTL36kVZq5kEUs9Edt16l0Sd4+qt/TAijWcjj9RF0V5AtTIn8Arq+SBHGTmhS/MqD3JlTujdMLSRcddAAHJlTlQvhnSsXDqNuH4MeW+QE3hUu1faXeCNFytyvPeiEatqvaOlyDFeZD20M911KW694KjKvXpe6Lv33K7YyXoPpcoc4znBb1s03deehcq8zy9X5ph6u417Rg49dqYLigNiPQnHzxdK5lvkGDaJQVmwnozjvAM0aa0uQLsKRYStV8qx3qlAPm0eMU8OIP36lsBT5rj86Mg77I2IbINmAqZBZGBXPTtB/8yLD1CIS1ymNT0W0CVTONZrz1UGLAJDgP1Ifd+Jvf2ejgIntElg1Df3PJ179c6hcwxDk2Q4Vp8oI15iBZAO931J5nKi+3d3nM8JvOJvAcd74ZLseC+oFnGsl0XLOPn/8zRO6k3kZN5UTuJN5sa96dyoN4Mb8+ZwI94sbtibxw16M7khby434M3mxN58Tugt4ETeEk7gLeJ4bxnHeQs51lvKMd5i7tVbzr14GrhnTwf35GnhHp4e7r+nibt7urje08Z1nj6u9TRyjaeTo55WbrP+B7AebwwjcFg2AAAAAElFTkSuQmCC)
}

.coupon-list-container .disabled :not(.notice) {
    color: #999!important
}
.more-info-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3)
}

.more-info-detail {
    background: #f0efed;
    opacity: 1;
    width: 100%;
    max-height: 80%;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    -webkit-animation-name: normalslideup;
    -webkit-animation-duration: .3s;
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
    -webkit-touch-callout: inherit;
    -webkit-user-select: none;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
}

.more-info-detail>header {
    position: relative
}

.more-info-detail h2 {
    font-size: .34rem;
    line-height: .9rem;
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 400
}

.more-info-detail .icon-remove-narrow {
    position: absolute;
    top: .3rem;
    right: .2rem;
    color: #999
}

.more-info-detail .empty-content {
    min-height: 9rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.more-info-popup-close {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: .72rem
}

.more-info-popup-close>.more-info-popup-close-area {
    position: absolute;
    left: -.23rem;
    display: block;
    width: 1rem;
    height: 100%;
    font-style: normal;
    font-size: .26rem
}

@-webkit-keyframes normalslideup {
    0% {
        -webkit-transform: translateY(100%)
    }

    100% {
        -webkit-transform: translateY(0)
    }
}
#dealsets-details .detail-title p,.set-title {
    text-align: center
}

#deal-terms .dd-padding {
    padding: 0
}

#deal-terms>dd>ul>li:first-child {
    margin-top: .4rem
}

#deal-terms>dd>ul>li {
    margin-bottom: .4rem
}

#deal-terms .tip-des,#deal-terms .tip-title {
    height: .45rem;
    line-height: .45rem;
    font-size: .28rem
}

#deal-terms .tip-title {
    color: #666
}

#deal-terms .tip-des {
    height: 100%;
    color: #999
}

#deal-terms .ul {
    padding-left: .46rem
}

#deal-terms .ul li {
    margin: 0;
    padding-top: .2rem
}

#cinema-info dl.no-padding {
    padding: 0
}

#cinema-info .single-line {
    font-size: .3rem;
    color: #333
}

#cinema-info .address {
    font-size: .26rem;
    line-height: 1.3;
    color: #666
}

#cinema-info,#deal-terms,#dealset-title,#dealsets-details,#order-info {
    padding-left: .29rem
}

#dealsets-details {
    margin-top: 0
}

.set-title {
    height: .56rem;
    line-height: .56rem;
    font-size: .24rem;
    color: #999;
    background-color: #f9f9f9
}

#dealsets-details .detail-group {
    display: -webkit-box;
    display: -ms-flexbox;
    font-size: .26rem;
    color: #666;
    border-bottom: 1px dashed #ddd8ce
}

#dealsets-details .detail-group:last-of-type {
    border-bottom: none
}

#dealsets-details dl,#dealsets-details dt {
    padding-left: 0
}

.detail-group .left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    display: block;
    padding: .28rem .2rem .28rem 0
}

.detail-group .middle,.detail-group .right {
    display: -webkit-box;
    display: -ms-flexbox;
    padding: .28rem .2rem;
    border-left: 1px dashed #ccc
}

.detail-group .right {
    -webkit-box-align: center;
    -ms-box-align: center;
    width: 1.2rem
}

.detail-group .middle {
    -webkit-box-align: center;
    -ms-box-align: center;
    width: 1.7rem
}

#deal-terms {
    font-size: .3rem
}

.js-fav-btn .fav-text {
    vertical-align: top
}

.js-fav-btn .fav-text:after {
    content: "收藏"
}

.js-fav-btn .icon-star {
    display: none
}

.js-fav-btn .icon-star-empty,.js-fav-btn.faved .icon-star {
    display: inline-block
}

.js-fav-btn.faved .fav-text:after {
    content: "取消收藏"
}

.js-fav-btn.faved .icon-star-empty {
    display: none
}

.comment-headline {
    color: #999;
    line-height: .35rem
}

#small-deal dl.list del {
    text-decoration: line-through
}

#small-deal dl.list del:before {
    content: ''
}

#small-deal dl.list dd.dd-padding {
    padding-left: 0
}

#small-deal dl.list {
    padding-left: .29rem
}

dl.list dt.sub-title {
    padding: .33rem 0;
    height: .24rem;
    line-height: .24rem;
    font-size: .3rem;
    color: #999
}

dl.list dd.sub-items li {
    padding: .25rem 0;
    font-size: .28rem;
    color: #666;
    height: .2rem;
    line-height: .2rem
}

#order-info {
    padding-bottom: .15rem
}

#deal-item {
    border-bottom: 1px solid #e5e5e5
}

#deal-item .dealcard-img {
    width: 1.44rem;
    height: 1.44rem
}

#deal-item .dealcard .title {
    font-size: .24rem;
    color: #999
}

#deal-item .dealcard-brand {
    font-size: .32rem
}

.detail-group .deal-demand-cinema-middle {
    border-left: none
}

.detail-group .deal-demand-cinema-right {
    padding: .18rem .2rem;
    margin-top: .1rem;
    margin-bottom: .1rem
}
.flex-column,.flex-row {
    -webkit-box-direction: normal
}

.hidden-xy,.text-ellipsis {
    overflow: hidden
}

body {
    height: 100%
}

.invite-wrapper .invite-user-info {
    padding-top: .2rem;
    padding-bottom: .24rem
}

.invite-wrapper .invite-user-info img {
    width: .88rem;
    height: .88rem;
    margin: auto;
    display: block;
    border-radius: 50%;
    border-style: solid;
    border-width: .04rem;
    border-color: #fff;
    box-shadow: rgba(0,0,0,.8) 0 0 .1rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAAEGkgCiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjU0MTZBNTg2RTU5MTFFNTgzMEI5N0ZEMTEyOUJEREEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjU0MTZBNTk2RTU5MTFFNTgzMEI5N0ZEMTEyOUJEREEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzlGRTg4RDZFNTYxMUU1ODMwQjk3RkQxMTI5QkREQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzlGRTg4RTZFNTYxMUU1ODMwQjk3RkQxMTI5QkREQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiE4FskAABE7SURBVHja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) 50% no-repeat #f5f5f5;
    background-size: contain
}

.invite-wrapper .invite-user-info .nickName {
    text-align: center;
    font-size: .36rem;
    color: #333;
    padding-top: .24rem
}

.invite-wrapper .invite-tips {
    color: #222;
    text-align: center;
    font-size: .3rem;
    font-weight: 700
}

.invite-wrapper .invite-tips img {
    width: .15rem;
    vertical-align: top
}

.invite-wrapper .movie-info {
    padding: .54rem 0 0
}

.invite-wrapper .movie-info .bg-img {
    background-size: auto 100%;
    background-repeat: no-repeat;
    height: 2.4rem;
    display: table-cell
}

.invite-wrapper .movie-info .bg-1 {
    width: .16rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAD+CAMAAADvVM6iAAAAsVBMVEUAAAD///8AAAAAAAABAQEAAAAAAADm5uYAAAAmJibc3Nz5+fn6+vrh4eFycnL+/v7p6emGhoaenp5TU1P+/v729vbW1tb9/f3v7++kpKSpqalWVlb9/f3W1tb6+vr39/fw8PDg4ODBwcG6urr7+/vs7Ozh4eG5ubmwsLCenp79/f339/fl5eXOzs7o6OjV1dXLy8u9vb2AgIBdXV309PTe3t7IyMjKysre3t7FxcXl5eWZUX5kAAAAO3RSTlMBzAYKEgwWQg8cRqihZSbBcS8eFseUXb2HOTEiuTCtnY1cSTmwZlFGPyrFmF5ZVTcsIBkPkG5OQUAoemj4UY8AAAIFSURBVFjD7djdTsJAEAXglm7R2h8KFFCKIALyIwIiKvr+D+a6hF26cxKbsgZinDu+hBIOcy4Gy+CU+GivxVApOVlyxCi6sPcjiVgJm4PsSpqko8ytPQTELlk5VGbtjWPWXG6er0wgY2WvKc2SVpWmHuhlctk9MJKmHngP7I7awCbW7uhWDyt21m6DBP1GujnIboMZMccVn0G+b7tDrTwBVr4GudwTYzArD1gVWBOYTy0kmXLSTOxQkfyw1cJNQjNl054NsmoAS1sg0xhkegMySPNlCt8bU4sqxOo9kuk00PJ7HjVsk5k666tHkCmbo0xDYLvd0Mr/BDKt5swvLd7zMeh5i/R8ZLTnvQrqed98z8eg56nhnnepxSRTTll7+Vj4Rnu+uJ6BnYwaR/X8NWfPvVP0vH2qnvdz9zww3PMI2Fu+nr/bxAak57U40fJbdu3Cma4aqOes36LGpkOQ380xPY/OpOfz7sl6fgcs7RjueQpsAuyzaM8Hvt7zOCi8k1tgTn0Le95MQH79c+r5xlzPh/89F+YV7PlqPizYaXybAhO3gW48lpCaQHo3+iDnpmZ0T4WhTH/9vlyPzN6XSc77kv2N+9Il9yXZIbpr2H7+H0SlYsgEYcv/vKW/n8x/Mt/7zOfAXMaRjzCJl0zw3jhKtQ5QKB8ri8IthZIthXKUKbbICCs8X8fpOaT4xQRRAAAAAElFTkSuQmCC)
}

.invite-wrapper .movie-info .bg-2 {
    width: 1.66rem;
    background-repeat: repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAD+BAMAAAAJ/3J2AAAAGFBMVEX///8AAAAAAAAAAAAAAAD19fUAAAAAAAABzsg4AAAACHRSTlPMBwMYC6oRD0nF8YwAAAAjSURBVBjTY1AAQwEwdGAYBcMNBDAYgGECQwEwfh0gMQ2JdQDGewORQ6xe4wAAAABJRU5ErkJggg==)
}

.invite-wrapper .movie-info .bg-3 {
    width: .26rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAD+CAMAAADxnf4RAAAAxlBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAADZ2dkODg7W1tbZ2dnn5+f7+/sAAADW1tbj4+PW1tbz8/PZ2dn+/v7Y2NjX19fW1tb39/f9/f3X19fX19fw8PDf39/4+PjW1tbs7Oz9/f37+/vb29vt7e3KysqJiYn39/fl5eWenp5cXFwBAQH5+fni4uLs7Ozh4eHIyMi9vb2wsLDV1dXR0dF/f3+9vb1aWlr5+fn09PTx8fHl5eXh4eHOzs7f39+pqamenp7a2trGX6NLAAAAQXRSTlPMAQULBxIWGfUd0L65xA/Ht+DA+cfuw9bCxenkvrip27u6r7eHQTGXeiokF55vZlFORz83LiUgFaOQh15bWUUxHmVRYO0AAAKASURBVFjD7dnncptAFAXga0EsQhECoWYJ1Ivl3tMT3v+lcreYTQbdTQZGk4B1fnn8sSorzi4McKLLP9IGNBqkNZgSzgDgWXIeZwDwaHLODzQj1BtzD6OZz4BZGpxzaNwwnRmcc2h8BJZvGas3RfwRcU1aihUaSxC5NgQ3uElcgUy0EixjMjyfwWs8xtJNgXNQiT63GPMYmBUfqXL5YGQ5/wS5JNcPL4bx8vhlA0SiIRzzdwltyw5J7adp2ie1g9oh1Uf1SfWcvuPBMSLjSToZkzrBmZyQapX4FYaO7dSsK7EfQ8HZsFAtUgPUgNTpKB1Ngc4AKpfQDWmMcTZiUs9QuwXn2UFdABl34ULlEum6H6RB0e7rV2Ab1SbV80d+vVbgaOEvIlJ7OBu9w3S/m3Zr1v2BO6Cx3Uk7bW33z0p039F0P65g9/VXX1071Pa3T6pVpvu9oFfBs1KXttMG/XlV8JwcoY5Ida3UcoGMN63eEhtqu4/f98Ddp3/fWqXYnVf57g9w339L3dfv+139vq/vPu77mu4Px9W7tVKfmVrrjt0vH+xg4A8K9ld1n1439Ncbtcqf9/0S3T97S/t+NI6g2Fqn7o/o7hdcnyHuxVCrsGtvr2D3O6W6b9Wt+4fLPPkwj/bKcHn3nud+O8vhdsek2eQHXHm/2ewORYYdsU5AZb5mdnEqwv0yQ48h/vsdD/5x0WzustFfcRy3FoYfgOPXkcANDmRmyLQEXwm9R2SmwnnnMZxnaPK8Dm8umW4lIshnQJJvmd4KlKb49Inpd47c1LMnzkNIkieB0n7lDWQvi5hj2IOKoaUwz6BwDwM3rnk2gUDBQJhgoBDD9D98WnryE53mVSVHkPP2AAAAAElFTkSuQmCC)
}

.invite-wrapper .movie-info .auto-width {
    width: 200rem
}

.invite-wrapper .movie-info .bg-reverse {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1)
}

.invite-wrapper .movie-info img {
    width: 1.46rem;
    height: 2.02rem;
    padding: .16rem .1rem
}

.invite-wrapper .movie-info .title {
    font-size: .3rem;
    color: #222;
    padding-top: .48rem;
    padding-left: .1rem
}

.invite-wrapper .movie-info .en-name {
    font-size: .2rem;
    color: #222;
    padding-top: .1rem;
    padding-left: .1rem
}

.invite-wrapper .movie-info .other-info {
    font-size: .22rem;
    color: #666;
    padding-top: .16rem;
    padding-left: .1rem
}

.invite-wrapper .cinema-info .time {
    font-size: .28rem;
    color: #333;
    padding-top: .28rem;
    padding-left: .2rem
}

.invite-wrapper .cinema-info .cinema {
    font-size: .28rem;
    color: #333;
    font-weight: 700;
    padding-top: .24rem;
    padding-left: .2rem
}

.invite-wrapper .cinema-info .address {
    font-size: .24rem;
    color: #999;
    padding-top: .18rem;
    padding-left: .2rem
}

.invite-wrapper .cinema-info .address .icon {
    font-size: .24rem
}

.invite-wrapper .cinema-info .logo {
    text-align: center;
    padding-top: .88rem;
    padding-bottom: .12rem
}

.invite-wrapper .cinema-info .logo img {
    width: 2rem
}

.listOfFollower dl {
    background-color: inherit
}

.listOfFollower dl .title {
    font-size: .26rem;
    color: #999
}

.listOfFollower dl img {
    border-radius: 50%;
    width: .72rem;
    height: .72rem
}

.listOfFollower dl .open-name {
    font-size: .3rem;
    color: #999;
    padding-left: .3rem
}

.listOfFollower dl .time {
    position: absolute;
    right: 0;
    font-size: .2rem;
    color: #333
}

.listOfFollower dl .comment {
    font-size: .28rem;
    color: #333;
    padding-left: .3rem;
    position: absolute;
    bottom: .22rem
}

#tips {
    display: none;
    font-size: .26rem;
    background-color: #FFF6E0;
    color: #D78900;
    border-bottom: 1px solid #FFEBC8;
    text-align: center;
    padding: .2rem;
    line-height: 1.4
}

#tips.tips-err {
    display: block
}

.icon {
    font-size: 1em;
    line-height: 1em;
    display: inline;
    vertical-align: middle
}

.icon:before {
    line-height: 1;
    display: inline-block;
    font-family: canary_icon;
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-lg {
    font-size: 1.33333333em;
    line-height: .75em;
    vertical-align: -15%
}

.icon-2x {
    font-size: 2em
}

.icon-3x {
    font-size: 3em
}

.icon-4x {
    font-size: 4em
}

.icon-5x {
    font-size: 5em
}

.icon-fw {
    width: 1.28571429em;
    text-align: center
}

.icon-rotate-30:before {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg)
}

.icon-rotate-60:before {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg)
}

.icon-rotate-90:before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.icon-rotate-180:before {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.icon-rotate-270:before {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
}

.icon-vip:before {
    content: "\EA44"
}

.icon-venus:before {
    content: "\EA43"
}

.icon-v5:before {
    content: "\EA42"
}

.icon-v4:before {
    content: "\EA41"
}

.icon-v3:before {
    content: "\EA40"
}

.icon-v2:before {
    content: "\EA3F"
}

.icon-v1:before {
    content: "\EA3E"
}

.icon-ugc-raise:before {
    content: "\EA3D"
}

.icon-ugc-fall:before {
    content: "\EA3C"
}

.icon-timer:before {
    content: "\EA3B"
}

.icon-ticket:before {
    content: "\EA3A"
}

.icon-success:before {
    content: "\EA39"
}

.icon-star-v2:before {
    content: "\EA38"
}

.icon-star-half2:before {
    content: "\EA37"
}

.icon-star-half-o:before {
    content: "\EA36"
}

.icon-signal:before {
    content: "\EA35"
}

.icon-share:before {
    content: "\EA34"
}

.icon-seat:before {
    content: "\EA33"
}

.icon-rules:before {
    content: "\EA32"
}

.icon-right-ticket:before {
    content: "\EA31"
}

.icon-right-rest:before {
    content: "\EA30"
}

.icon-remove:before {
    content: "\EA2F"
}

.icon-remove-sign:before {
    content: "\EA2E"
}

.icon-remove-narrow:before {
    content: "\EA2D"
}

.icon-remove-circle:before {
    content: "\EA2C"
}

.icon-phone:before {
    content: "\EA2B"
}

.icon-paper:before {
    content: "\EA2A"
}

.icon-ok:before {
    content: "\EA29"
}

.icon-ok-sign2:before {
    content: "\EA28"
}

.icon-ok-sign:before {
    content: "\EA27"
}

.icon-ok-circle:before {
    content: "\EA26"
}

.icon-music:before {
    content: "\EA25"
}

.icon-movie:before {
    content: "\EA24"
}

.icon-mars:before {
    content: "\EA23"
}

.icon-local:before {
    content: "\EA22"
}

.icon-highlights:before {
    content: "\EA21"
}

.icon-heart:before {
    content: "\EA20"
}

.icon-heart-empty:before {
    content: "\EA1F"
}

.icon-hand:before {
    content: "\EA1E"
}

.icon-fail:before {
    content: "\EA1D"
}

.icon-eye:before {
    content: "\EA1C"
}

.icon-delete:before {
    content: "\EA1B"
}

.icon-comment:before {
    content: "\EA1A"
}

.icon-collect-tag:before {
    content: "\EA19"
}

.icon-close:before {
    content: "\EA18"
}

.icon-chevron-up:before {
    content: "\EA17"
}

.icon-chevron-right:before {
    content: "\EA16"
}

.icon-chevron-left:before {
    content: "\EA15"
}

.icon-chevron-down:before {
    content: "\EA14"
}

.icon-caret-up:before {
    content: "\EA13"
}

.icon-caret-right:before {
    content: "\EA12"
}

.icon-caret-left:before {
    content: "\EA11"
}

.icon-caret-down:before {
    content: "\EA10"
}

.icon-badge:before {
    content: "\EA0F"
}

.icon-arrow-thin-left:before {
    content: "\EA0E"
}

.icon-arrow-right:before {
    content: "\EA0D"
}

.icon-arrow-down:before {
    content: "\EA0C"
}

.icon-arrow-double:before {
    content: "\EA0B"
}

.icon-approved:before {
    content: "\EA0A"
}

.icon-approve:before {
    content: "\EA09"
}

.icon-angle-up:before {
    content: "\EA08"
}

.icon-angle-right:before {
    content: "\EA07"
}

.icon-angle-left:before {
    content: "\EA06"
}

.icon-angle-down:before {
    content: "\EA05"
}

.icon-alert:before {
    content: "\EA04"
}

.icon-add2:before {
    content: "\EA03"
}

.icon-add:before {
    content: "\EA02"
}

.icon-abc:before {
    content: "\EA01"
}

.icon-play-circle:before {
    content: "\64AD"
}

.icon-home:before {
    content: "\5BB6"
}

.icon-star-half:before {
    content: "\2736"
}

.icon-star-o:before {
    content: "\2606"
}

.icon-star:before {
    content: "\2605"
}

.icon-approved {
    font-size: 1.1em
}

.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.flex-item,.flex-item-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.flex-item-2 {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2
}

.flex-row {
    -webkit-box-orient: horizontal;
    -ms-flex-flow: row;
    flex-flow: row;
    -ms-flex-direction: row;
    flex-direction: row
}

.flex-column {
    -webkit-box-orient: vertical;
    -ms-flex-flow: column;
    flex-flow: column;
    -ms-flex-direction: column;
    flex-direction: column
}

.flex-left {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.flex-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.flex-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.flex-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.flex-around {
    -ms-flex-pack: distribute;
    justify-content: space-around
}

.flex-top {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.flex-middle {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.flex-bottom {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}

.flex-baseline {
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline
}

.flex-stretch {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}

.text-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap
}

header.navbar .change-city {
    margin: .3rem 0 0 .3rem;
    color: #FFF;
    font-size: .3rem;
    line-height: 1.5;
    border-radius: 2px
}

header.navbar .change-city:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 4px;
    border-width: 8px;
    border-color: #fff transparent transparent;
    border-style: solid;
    font-size: 0;
    vertical-align: -2px
}

header.navbar h1.nav-header {
    margin-left: .94rem
}

header.navbar .nav-wrap-left {
    float: none;
    position: absolute;
    height: 1.01rem;
    line-height: 1.01rem
}

.imgbox.album-imgbox-desc {
    height: auto;
    border-radius: 5px;
    overflow: hidden
}

.imgbox.album-imgbox-desc .album-desc {
    text-align: center;
    padding: 8px 5px
}

.imgbox.album-imgbox-desc img {
    position: relative;
    min-width: 300px;
    top: 0;
    left: 0;
    -webkit-transform: translate(0,0);
    transform: translate(0,0)
}

.dealcard-img>img {
    height: inherit
}
@charset "UTF-8";.btn,.more {
    box-sizing: border-box
}

td,th,ul {
    padding: 0
}

.text-block,h6,p {
    text-align: justify
}

.select select:focus,.stepper .btn,.stepper input,a,a:active,a:hover,button:focus,input.input-weak:focus {
    outline: 0
}

.footer-copyright a,a,dl.list del {
    text-decoration: none
}

.btn,.nav-bar .nav {
    -webkit-user-select: none
}

#deal-list .poi-list-item h6,#deal-list-abtest .poi-dealcard h6,#search .poi-list-item h6,.cinemacard .title,.dealcard .title,.dropdown-sub-scroller .sub-name,.footer-citybtn,.footer-minebtn,.nav-head-name,.single-line {
    text-overflow: ellipsis;
    overflow: hidden
}

button,input,optgroup,select,textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button,html input[type=button],input[type=reset],input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

img {
    vertical-align: middle;
    border: none
}

@-ms-viewport {
    width: device-width
}

html {
   
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    min-width: 320px;
    overflow-x: hidden
}

body {
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    /* font-size: .28em; */
    line-height: 1;
    color: #333;
    background-color: #f0efed
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
    line-height: 1.1
}

.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small {
    font-weight: 400;
    line-height: 1
}

.h1,.h2,.h3,h1,h2,h3 {
    margin-top: .28rem;
    margin-bottom: .14rem
}

.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small {
    font-size: 65%
}

.h4,.h5,.h6,h4,h5,h6 {
    margin-top: .14rem;
    margin-bottom: .14rem
}

.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small {
    font-size: 75%
}

.h1,h1 {
    font-size: .364rem
}

.h2,h2 {
    font-size: .2996rem
}

.h3,h3 {
    font-size: .238rem
}

.h4,h4 {
    font-size: .175rem
}

.h5,h5 {
    font-size: .14rem
}

.h6,h6 {
    font-size: .119rem
}

h6 {
    margin-top: 0;
    margin-bottom: 0
}

button,input,select,textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

a {
    color: #e54847
}

a:focus {
    outline: dotted thin;
    outline: -webkit-focus-ring-color auto 5px;
    outline-offset: -2px
}

a.react,label.react {
    display: block;
    color: inherit;
    height: 100%
}

a.react.react-active,a.react:active,label.react:active {
    background: rgba(0,0,0,.1)
}

ul {
    margin: 0;
    list-style-type: none
}

hr {
    margin-top: .28rem;
    margin-bottom: .28rem;
    border: 0;
    border-top: 1px solid #DDD8CE
}

h6,p {
    line-height: 1.41;
    margin: -.2em 0;
    word-break: break-all
}

small,weak {
    color: #666
}

.color-weak {
    color: #666!important
}

.color-weaker {
    color: #999!important
}

.color-strong {
    color: #e54847!important
}

.color-stronger {
    color: #cc7a00!important
}

.color-ok {
    color: #6bbd00!important
}

.color-warning {
    color: #fa7251!important
}

space {
    display: inline-block;
    width: .12rem
}

.clearfix:after,.clearfix:before {
    content: " ";
    display: table
}

.clearfix:after {
    clear: both
}

.center-block {
    display: block;
    margin-left: auto;
    margin-right: auto
}

.pull-right {
    float: right!important
}

.pull-left {
    float: left!important
}

.hide {
    display: none!important
}

.invisible {
    visibility: hidden
}

.text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0
}

.userImgbox,.userImgbox img {
    border-radius: 50%
}

.single-line {
    white-space: nowrap
}

.text-block {
    line-height: 1.41
}

.btn,input.mt.number,ol.crumbs,ol.crumbs li {
    text-align: center
}

.nopadding {
    padding: 0!important
}

.nomargin {
    margin: 0!important
}

.strong-color {
    color: #e54847
}

.more {
    position: relative;
    padding-right: .3rem;
    width: 100%
}

.more:after {
    position: absolute;
    right: .05rem;
    top: 50%;
    display: block;
    content: '';
    width: .6em;
    height: .6em;
    border-left: .04rem solid #e54847;
    border-bottom: .04rem solid #e54847;
    -webkit-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
    -moz-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
    -ms-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg)
}

.flex1,.flex10,.flex11,.flex12,.flex2,.flex3,.flex4,.flex5,.flex6,.flex7,.flex8,.flex9 {
    width: 1px
}

.stars,ol.crumbs li {
    display: inline-block
}

.more-weak:after {
    border-left: .04rem solid #999;
    border-bottom: .04rem solid #999
}

.more .more-after {
    position: absolute;
    right: .25rem;
    top: 50%;
    -webkit-transform: translateY(-.5em);
    color: #e54847
}

.more-weak .more-after {
    color: #999
}

.more-down:after {
    -webkit-transform: translateY(-80%) scaleX(.8) rotateZ(-45deg);
    -ms-transform: translateY(-80%) scaleX(.8) rotateZ(-45deg)
}

.imgbox {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAAEAAQMAAACJUpNeAAAAA3NCSVQICAjb4U/gAAAABlBMVEX///////9VfPVsAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAFWUlEQVRoge3aTa7kNBAAYFuWMAtEuIE5yfhiaBxWLLmSb8AVwoolQbMYS4SYqnLs2PmvJ2YEQ1t66rTjLz/lihOnnxBvKirGPi93cX4mhrxs4/RAyBhDXo6PRNWswrDngzJmMa/NHglXhC51dyKuYngibAlv91CYImDJPxR+a69FV4R9LoYixBOhD6J2LdRBX96KkMX0SJRskgwxtfROlMNXj0VOxSoRb0XMYngm7NLV3VuEvxP6sH7+skSJmyi58RKfQGhKvJf45GItpnoOEC/xEp9byIPUDW8Xtq1/iZd4iX9eXF7nn0NU65ijj2ULxxaRKyRbKLbQbGHYwrKFq8UmD3IZGhG5QrKFYgvNFoYtLFs4tohcIdlCsQUG9yNLGPj+G0tgk59YwsF3zRLwdWYJDO7EEhjcwBIwy48jSxj8evjUty1Z4DZ7lsDgHj9ZngkMLktQcI+FPR6vKLgsQcFlCQouS1BwWYKCyxIUXI5IweWIFNxj4Q5FCi5HpOByRAquuL8+fBYpuByRgssQS3AZYgkuQyzBZQrPFj1bCK6Y2WJii8AWI1t4tujZQnDFzBYTWwS2GNnCb0U9MFQvwkUR/amgTQ97kb50eyFPxPJziNmL9BA17sS0eyJrRdiJcCrSM+20E+Op6Kh23gl/Kkyq3on+VNhS3QpxKlzp60Z8ey6g6q+2Q0h8cyqwNrQdQuLrU4HdMbqmQ86eqZeC3THapkO2QrQCg0tz68cCG3vThPdG0IF2TbA2Ym4F5WE6mTMxtYLykNz0UFjarWwyayNCK5aNNHmyEUMj9LIRF9tf+2rhG0GJO+aDOxSzqEXZrakPS7UDRSO6vNsuVod1JVzu0zKBvRG67tO1Ew+EWlbG0kOiZNClSGeRDt9VOzkQmtYtM8p1rpHP5ECY5YE8lh7K+5sXcVBGURbzbvOKW1F+E34sln5jiOUk7XPRl2g8FNX/TDwUOf3kY1H6yt2IIYu+6tZHYh1B9EOxJpC8EX59e9KeyJ2ob7HdtejFAteirkVKpPY/fNyVmJNoLxx9JaYyh6nLlQi02m9EdyFGFEFsizsXcAJH/9gkzwV0XNwDPJUTsT+eV3mV/2b54V8q3n0RQvzPxPdCpo9a9PAn0+JXZe13QkL9Ox2FpReGEN0uTtrjHNBGIUebbo84BuOk26goDFRZmLPj3c3AbSQLD4O7l2N+lJvxkWiglg5aWht/xUHewaaKwEdE+Ue6adP7DwejujVxwCrr4od0lw6rwGdO+SEJAx8Sb4CwbWpp6ZcKT3VF4Psh+THd76AB7nPGbf9JImiYcg1qUjPklRMkzKCDxGoQDr9NMlLLAarsqGDKNehRzJSJSfQS23Qo8EMH4Xo7SmwpLByQ0IMeYPtFWBQzVIOAjxHb9XaglihwFczcbSWEmOREAj4UCuOtJw1WTEmYfisUvjIIQgXjUfQgVBGm34lAQgVAsLYbqCUKkUW3ClGJEfLlUEDn+krISgg8ED1Qy1XYjVCtEAcCn2gqYSY5sgSkyyJ0FuO1iKsYklDXQrFFFwNTwMV5L/ACXfvci/szb4QT4ja6hi/6VRj/vhEyHGUJ5po/FSkT9yLlLl48M2bimLOdro90CVRivaLwsqwEJWS6ojZiaIUqYkrX+U7g9ZvOfITx5r3QScAx0SiA1+pWBBpLLBw0DFROdEXA8Ixro9gINUscr+ykJhjxnHdFwLJXs9qJNIqiiPF3j1n24yJsGnfnrUgjNQhY+QuI2WVh0kxo2gm6G+AdJcafvYmhCHq3jWu3gu44+KrVzng3GIpQOCHAtVnkovK0Ir1t7SnRqLihWvuW8jcg0Wxz1AbH1QAAAABJRU5ErkJggg==);
    background-color: #E0E0E0;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50%;
    max-width: 4rem;
    height: 3.9rem;
    position: relative
}

.userImgbox {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAA3NCSVQICAjb4U/gAAABm1BMVEX////q6urJycnq6urJycnq6urJycnq6urd3d3Jycnq6urJycnq6urJycvq6urJycnq6urJycnq6urJycnq6urq6urJycnq6urJycnq6urJycnq6urJycn79/b59vX59fT59fX39PP38/L18fHz8O/y7+/z7+/x7u3w7ezx7e3t6+rv6+vq6urt6unp6enr6ejr6enn5+fq5+fp5+fp5ubl5eXn5eXn5OPj4+Pl4+Pl4+Lh4eHj4eHf39/i39/h39/d3d3f3d7f3d3e3Nvb29vd29rd29vZ2dnZ2drb2drb2dnY2NnZ2NfX19fZ19fV1dbX1dXV1dXU1NXV1NPV1NXT09PV09PR0dHR0dLR0M/Pz8/Pz9DPzs3MzMzJycnJycvLycnHx8fFxcbGxcXExMXDw8PExMPBwcHBwcK/v8C/v7+9vb69vb2+vb28vb27u7u6u7u5ubq6urm5ubm4ubm5t7e1t7e2t7e1tbSztLSys7OxsbCvsLCvr6+tr6+srK2rq6yqq6upqaqnp6ekpaWjpKSio6OhoaGgoaGh6GQLAAAAiXRSTlMAEREiIjMzREREVVVmZnd3iIiZmaq7u8zM3d3u7v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////54pIicAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAF3RFWHRDcmVhdGlvbiBUaW1lADIwMTUuNS4xNBgX2AIAAAgTSURBVGiBvVr5XxNHFIdiasVUIoYjhoUSQGgag0FAlMOgUFBYoyACYXfW0KThKh6lWKm11R76ZzfZfTM752ZzfPr9ic9k5n15b94x82abmqpCS6A1FO6KRBOJaKQrHGoNtFS33j+az7eXWERE2883N5orEJJSEcpQoIFcYS8qjHBDGJuDnnoxOgbrtWpzyC+Xg1A9hNWS1UcYrJ6sjGBNZC2R2tgSiUgNwdheK1kZ7f+barUo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);
    background-size: cover
}

.imgbox img {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%)
}

.stars {
    color: #f90
}

.stars i {
    margin-right: .2em;
    vertical-align: 0
}

.btn,.nav-btn,.navbar .nav-city,.stars em,input.mt.number,label.mt {
    vertical-align: middle
}

.stars em {
    font-style: normal;
    margin-left: .4em
}

ol.crumbs {
    list-style: none;
    padding-left: 0;
    margin: 0
}

ol.crumbs li+li {
    margin-left: .6rem;
    position: relative
}

ol.crumbs li.active {
    color: #e54847
}

ol.crumbs li+li:before {
    content: ">";
    display: block;
    position: absolute;
    left: -.4rem;
    font-weight: bolder;
    color: #aaa
}

.hBox,.vBox {
    display: -webkit-flex;
    display: -webkit-box
}

.hBox {
    -webkit-box-orient: horizontal
}

.vBox {
    -webkit-box-orient: vertical
}

.flex1 {
    -webkit-box-flex: 1
}

.flex2 {
    -webkit-box-flex: 2
}

.flex3 {
    -webkit-box-flex: 3
}

.flex4 {
    -webkit-box-flex: 4
}

.flex5 {
    -webkit-box-flex: 5
}

.flex6 {
    -webkit-box-flex: 6
}

.flex7 {
    -webkit-box-flex: 7
}

.flex8 {
    -webkit-box-flex: 8
}

.flex9 {
    -webkit-box-flex: 9
}

.flex10 {
    -webkit-box-flex: 10
}

.flex11 {
    -webkit-box-flex: 11
}

.flex12 {
    -webkit-box-flex: 12
}

input.mt[type=checkbox],input.mt[type=radio] {
    -webkit-appearance: none;
    width: .45rem;
    height: .45rem;
    margin: -.07rem 0;
    border-radius: 50%;
    border: .02rem solid #DDD8CE;
    text-align: center;
    vertical-align: middle;
    line-height: .45rem;
    outline: 0
}

input.mt[type=checkbox] {
    border-radius: .06rem
}

label.mt {
    margin-right: .16rem;
    font-size: .3rem
}

label.btn input {
    display: none
}

input.mt[type=checkbox]:checked,input.mt[type=radio]:checked {
    background-color: #e54847;
    border: none;
    color: #fff
}

input.mt[type=checkbox]:checked:after,input.mt[type=radio]:checked:after {
    content: "✓";
    font-size: .4rem;
    font-family: base_icon
}

.select::after,.toggle-btn:after {
    content: ''
}

.mt[disabled=disabled] {
    background: #eee;
    border-color: #ccc;
    color: #ccc
}

input.input-weak,textarea.input-weak {
    border: none;
    height: .6rem;
    margin: -.15rem 0;
    text-indent: .1rem;
    line-height: 1;
    font-size: .3rem;
    border-radius: .06rem;
    padding: 0
}

input.input-strong,input.mt.number {
    border: .02rem solid #DDD8CE;
    box-sizing: border-box
}

input.input-strong {
    height: .8rem;
    line-height: .8rem;
    width: 100%;
    padding: 0 .2rem
}

input.input-weak:focus {
    background: #ececec
}

textarea.input-weak {
    padding: 0;
    margin: -.2em 0;
    line-height: 1.41;
    height: 2.8em
}

input.mt.number {
    -webkit-appearance: initial;
    height: .6rem;
    display: inline-block;
    border-radius: .06rem;
    line-height: .6rem;
    width: 1.2rem
}

.stepper .btn {
    width: .6rem;
    padding: 0;
    font-size: .5rem;
    line-height: .6rem;
    font-weight: lighter;
    font-family: CourierNewPSMT,"Times New Roman"
}

.select,.select select {
    width: 100%;
    display: block
}

.stepper .btn.minus {
    font-family: CourierNewPSMT,Verdana
}

.select {
    height: .6rem;
    margin: -.15rem 0;
    position: relative
}

.select select {
    text-indent: .1rem;
    line-height: 1;
    -webkit-appearance: none;
    border: none;
    background: 0 0;
    font-size: .3rem;
    height: 100%
}

.btn,.select::after {
    display: inline-block
}

.select select:focus {
    background: #ececec
}

/* .btn,.btn:active {
    background-color: #e54847
} */

.select::after {
    position: absolute;
    top: 50%;
    right: .2rem;
    width: .5em;
    height: .5em;
    border-bottom: .03rem solid #999;
    border-left: .03rem solid #999;
    -webkit-transform: translateY(-70%) rotateZ(-45deg);
    -moz-transform: translateY(-70%) rotateZ(-45deg);
    -ms-transform: translateY(-70%) rotateZ(-45deg)
}

.albumContainer img {
    width: 100%;
    height: auto
}

.btn {
    margin: 0;
    height: .6rem;
    padding: 0 .32rem;
    border-radius: .06rem;
    color: #fff;
    border: none;
    font-size: .28rem;
    line-height: .6rem;
    cursor: pointer
}

.btn-block {
    display: block;
    width: 100%
}

.btn-large {
    height: .8rem;
    line-height: .8rem;
    font-size: .4rem
}

.btn-large.btn-link {
    font-size: .3rem
}

.btn-larger {
    height: .94rem;
    line-height: .94rem;
    font-size: .4rem
}

.toggle-btn,.toggle-btn:after {
    display: inline-block;
    height: .58rem
}

 .btn-weak {
    border: .02rem solid #e54847 !important;
    padding: 0 .3rem;
    background: 0 0;
    color: #e54847 !important
} 



.btn-link {
    padding: 0 .3rem;
    background: 0 0;
    color: #e54847
}

.btn-link:active {
    background-color: rgba(0,0,0,.1)
}

.btn-weak.color-strong {
    border-color: #f90;
    /* color: #f90!important */
}

.btn-weak.color-strong:active {
    background-color: #f90;
    color: #fff
}

.btn-strong {
    background-color: #f90
}

.btn-strong:active {
    background-color: #cc7a00
}

.btn-warning {
    background-color: #fa7251
}

.btn-warning:active {
    background-color: #f94a1f
}

.btn.btn-disabled,.btn:disabled {
    background-color: #dcdcdc;
    color: #999;
    border: none
}

.toggle-btn {
    width: 1rem;
    border-radius: 1rem;
    border: .04rem solid #DDD8CE;
    background: #eee;
    overflow: hidden;
    padding: 0;
    box-sizing: content-box;
    white-space: nowrap;
    text-align: left;
    position: relative
}

dl.list,dl.list dd,dl.list dt {
    border-bottom: 1px solid #DDD8CE
}

.toggle-btn:after {
    width: .58rem;
    background-color: #fff;
    border-radius: 50%;
    position: absolute
}

.toggle-btn.active {
    background-color: #e54847
}

.toggle-btn.active:after {
    right: 0
}

.wrapper {
    overflow: hidden;
    padding: 0 .2rem
}

.wrapper h4 {
    font-size: .3rem
}

.wrapper-list h4 {
    margin: .6rem .2rem .2rem;
    font-size: .34rem;
    font-weight: 400
}

.weapper-list h4:first-of-type {
    margin-top: .3rem
}

.box {
    padding: .28rem .2rem;
    border: 1px solid #DDD8CE;
    border-radius: .06rem;
    overflow: hidden;
    background-color: #FDFDFC
}

.box-btn {
    padding: 0;
    text-align: center
}

.box-btn a {
    padding: .2rem
}

dl.list {
    border-top: 1px solid #DDD8CE;
    margin-top: .2rem;
    margin-bottom: 0;
    background-color: #fff
}

dl.list dd,dl.list dt {
    margin: 0;
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative
}

dl.list dd:last-of-type,dl.list dt:last-child {
    border-bottom: none
}

dl.list .dd-padding,dl.list dd>.react,dl.list dt {
    padding: .28rem .2rem
}

dl.list dd.poi-list-item>.react {
    padding-bottom: .2rem;
    padding-top: .2rem
}

dl.list dt {
    font-size: .34rem;
    padding-bottom: .2rem;
    color: #333
}

dl.list .db {
    height: .8rem;
    line-height: .8rem;
    font-size: .3rem
}

dl.list dd dl {
    margin: 0 0 -1px;
    padding-left: .2rem;
    border: none
}

dl.list dd dl dd>.react,dl.list dd dl>.dd-padding,dl.list dd dl>dt {
    padding-left: 0
}

dl.list .db>.react {
    color: #e54847;
    padding: 0 .2rem
}

dl.list .posi-right-bottom {
    position: absolute;
    bottom: .26rem;
    right: .2rem
}

.taba,.taba li {
    position: relative
}

dl.list .statusInfo {
    color: #666;
    font-size: .24rem
}

dl.list del:before {
    content: '门市价:'
}

dl.list-in,dl.list:first-child {
    margin: 0;
    border-top: 0
}

dl.list dd>.input-weak {
    width: 100%;
    display: block
}

dl.list dd>.btn {
    margin-top: -.15rem;
    margin-bottom: -.15rem
}

.kv-line {
    display: -webkit-box;
    display: -ms-flexbox;
    margin: .2rem 0
}

.kv-line>.kv-k,.kv-line>h6 {
    display: block;
    width: 5em;
    font-size: inherit;
    font-weight: 400
}

.kv-line>.kv-v,.kv-line>p {
    display: block;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1
}

.kv-line-r {
    display: -webkit-box;
    display: -ms-flexbox;
    margin: .2rem 0
}

.kv-line-r>.kv-k,.kv-line-r>h6 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    font-size: inherit;
    font-weight: 400;
    margin-right: .2rem;
    display: block
}

.kv-line-r>.kv-v,.kv-line-r>p {
    display: block
}

.tab li,ul.tab {
    display: inline-block
}

ul.tab {
    height: .6rem;
    line-height: .6rem;
    border-radius: .04rem;
    border: 1px solid #666
}

.tab li {
    text-align: center;
    width: 2.4rem;
    border-right: 1px solid #666
}

.tab li:last-child {
    border: none
}

.tab li.active {
    background: #666;
    color: #fff
}

.navbar,.tab-strong li.active {
    background: #e54847
}

.nav-bread,.nav-bread h1,.taba li.active,ul.tab-strong {
    color: #e54847
}

ul.tab-strong {
    border-color: #e54847
}

.tab-strong li {
    border-right-color: #e54847
}

.taba {
    display: -webkit-box;
    display: -ms-flexbox;
    padding-left: .2rem;
    padding-right: .2rem;
    border-bottom: .08rem solid #DDD8CE
}

.taba li {
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1
}

.taba .slide,.taba li.active:after {
    position: absolute;
    bottom: -.08rem;
    border-bottom: .08rem solid #e54847
}

.taba li.active:after {
    content: "";
    display: block;
    width: 100%
}

.taba li a.react {
    padding-top: .28rem;
    padding-bottom: .2rem
}

.taba.noslide li.active:after {
    content: none
}

.taba .slide {
    -webkit-transition: left .2s ease-in
}

.nav-dropdown li,.navbar {
    border-bottom: 1px solid #e54847
}

.nav-bread {
    padding: .3rem .2rem 0;
    margin-bottom: .3rem;
    font-size: .24rem
}

.nav-bread h1 {
    font-size: .24rem;
    font-weight: 400;
    display: inline
}

.navbar {
    height: 1.01rem;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative
}

.navbar .nav-wrap-left {
    height: 1.01rem;
    line-height: 1.01rem
}

.navbar .nav-wrap-right {
    height: 100%
}

.navbar .box-search {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border-radius: .06rem;
    background: rgba(0,0,0,.15);
    height: .64rem;
    line-height: .64rem;
    -webkit-box-sizing: border-box;
    position: relative;
    margin-top: .2rem
}

.navbar .h1.nav-header,.navbar h1.nav-header {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
    line-height: 1rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
}

.navbar .icon-search {
    position: absolute;
    left: .2rem;
    font-size: .26rem;
    color: #fff
}

.navbar .box-search span {
    font-size: .26rem;
    color: #68dbce;
    padding-left: .6rem;
    box-sizing: border-box;
    width: 100%;
    display: block
}

.navbar.fix-bangs {
    padding-top: env(safe-area-inset-top)
}

.ios .navbar.fix-bangs {
    padding-top: calc(2 * env(safe-area-inset-top))
}

.nav-wrap-left a.back {
    height: 1rem;
    width: .45rem;
    line-height: 1rem;
    padding: 0 .3rem
}

.qqbrand {
    font-size: .24rem;
    margin-top: .12rem;
    display: none
}

#header_qq .qqbrand {
    display: block
}

.navbar .nav-city {
    line-height: 1;
    display: inline-block;
    text-align: center;
    margin-right: .2rem;
    margin-left: .2rem;
    font-size: .32rem
}

.nav-wrap-right a {
    display: inline-block;
    height: 100%;
    line-height: 1rem;
    text-align: center;
    width: .94rem
}

.nav-wrap-right a:last-child {
    margin-right: .04rem
}

.nav-btn {
    display: inline-block;
    font-size: .2rem;
    line-height: 1
}

.nav-btn .text-icon {
    display: block;
    margin: auto auto .12rem;
    font-size: .4rem
}

.navbar .nav-dropdown {
    position: absolute;
    right: .04rem;
    top: 1.06rem;
    width: 2rem;
    background: #e54847;
    opacity: .9;
    z-index: 100;
    height: 0;
    overflow: hidden;
    -webkit-transition: height .1s
}

.nav-dropdown.active {
    height: 2.5rem
}

.nav-dropdown li {
    height: .83rem;
    line-height: .83rem;
    text-align: center
}

.nav-dropdown .text-icon {
    font-size: .34rem
}

footer {
    margin-top: .3rem;
    padding: 0 .2rem .4rem;
    background-color: #f0efed
}

.footer-bar {
    font-size: .28rem;
    margin-bottom: .4rem
}

.footer-nav {
    margin-bottom: .18rem
}

.footer-bar .ft-mine {
    font-family: base_icon,Arial,sans-serif;
    vertical-align: top;
    margin-right: .04rem
}

.footer-nav ul {
    margin: 0;
    padding: .18rem 0;
    font-size: .24rem;
    white-space: nowrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -moz-box
}

.footer-nav li {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -moz-box-flex: 1;
    border-right: .02rem solid #666;
    text-align: center
}

.footer-nav li>a {
    color: #e54847
}

.footer-nav li:last-child {
    border-right: none
}

.footer-links {
    font-size: .24rem;
    margin: .3rem .2rem;
    text-align: center
}

.footer-links a+a {
    padding-left: .5rem
}

.footer-copyright {
    font-size: .22rem;
    text-align: center;
    position: relative;
    color: #999
}

.footer-copyright .hr {
    display: block;
    content: "";
    width: 100%;
    position: absolute;
    top: 50%;
    border-top: 1px solid #999
}

.footer-copyright a {
    color: #999
}

.footer-copyright-text {
    position: relative;
    padding: 0 .3rem;
    background-color: #f0efed
}

.footer-citybtn,.footer-minebtn {
    width: 1.8rem;
    white-space: nowrap
}

.cinemacard,.dealcard {
    position: relative;
    box-sizing: border-box;
    margin: -.08rem 0
}

.dealcard .dealcard-new {
    position: absolute;
    right: -.2rem;
    top: -.2rem;
    padding-right: .08rem;
    font-size: .24rem;
    height: .28rem;
    line-height: .28rem;
    width: .6rem;
    background: #e54847;
    color: #fff;
    text-align: right
}

.dealcard .dealcard-nobooking {
    position: absolute;
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    z-index: 1
}

.dealcard .dealcard-nobooking:after {
    content: "免预约";
    font-size: .24rem;
    background: #e54847;
    color: #fff;
    padding: .05rem;
    position: absolute;
    width: 1.3rem;
    text-align: center;
    -webkit-transform: rotateZ(-45deg);
    left: -.35rem;
    top: .2rem
}

.dealcard .dealcard-new:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: -.2rem;
    border: .14rem solid #e54847;
    border-left: .14rem solid transparent
}

.dealcard-img {
    position: absolute;
    width: 1.8rem;
    height: 1.64rem;
    text-align: center;
    overflow: hidden
}

.dealcard-img>img {
    background-size: 100%;
    background-color: #f0efed;
    border: none
}

.dealcard .dealcard-block-right {
    margin-left: 2rem;
    position: relative;
    height: 1.64rem
}

.cinemacard .cinemacard-brand,.dealcard .dealcard-brand {
    padding-top: .1rem;
    margin-bottom: .12rem;
    font-size: .3rem;
    font-weight: 400;
    color: #333
}

.cinemacard .cinemacard-brand {
    padding-top: 0
}

.cinemacard .title,.dealcard .title {
    font-size: .24rem;
    height: .68rem;
    margin-bottom: .16rem;
    color: #666;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

.cinemacard .price,.dealcard .price {
    color: #666;
    position: relative
}

.dealcard .price {
    position: absolute;
    width: 100%;
    bottom: 0
}

.dealcard .price>del,.dealcard .price>span {
    vertical-align: sub
}

.cinemacard .price .strong,.cinemacard .price>strong,.dealcard .price .strong,.dealcard .price>strong {
    font-size: .38rem;
    color: #e54847
}

.cinemacard .price del,.dealcard .price del {
    font-size: .24rem
}

.cinemacard .price>.strong-color,.dealcard .price>.strong-color {
    font-size: .26rem;
    color: #e54847
}

.cinemacard .price .line-right,.dealcard .line-right {
    position: absolute;
    top: .04rem;
    right: 0;
    font-size: .24rem
}

.dealcard .tag,.poi-dealcard .tag {
    border: .02rem solid #f90;
    color: #f90;
    line-height: 1.5;
    display: inline-block;
    padding: 0 .06rem;
    font-size: .22rem;
    border-radius: .06rem
}

.simpleCard .dealcard .dealcard-block-right {
    margin-left: .45rem;
    margin-right: .2rem
}

.more .dealcard .line-right {
    display: none
}

.cinemacard .cinemacard-brand,.cinemacard .cinemacard-type,.dealtype-icon,.loadmore .more {
    display: inline-block
}

.simpleCard .title {
    font-size: .3rem;
    height: .78rem
}

.dealcard .dealtype-icon {
    position: absolute;
    top: .03rem
}

.dealtype-icon {
    background-color: #e54847;
    color: #fff;
    font-size: .24rem;
    padding: .05rem;
    border-radius: .06rem;
    vertical-align: text-bottom;
    line-height: 1
}

.dealtype-icon.dealcard-magiccard {
    background-color: #FF500B
}

.dealtype-icon.dealcard-waimai {
    background-color: #e95200
}

.cinemacard .cinemacard-type {
    vertical-align: top;
    margin-top: .14rem
}

.tuangou,.xuanzuo {
    padding: .02rem .04rem;
    border-radius: 20%;
    color: #fff
}

.tuangou {
    background: #e54847
}

.xuanzuo {
    background: #e95200
}

.loadmore {
    text-align: center
}

.loadmore .more {
    padding-right: .45rem;
    width: auto
}

.preferent::before {
    content: '惠';
    font-size: .28rem;
    background: #f90;
    color: #fff;
    font-weight: 400;
    margin-right: .2rem;
    padding: .02rem .04rem;
    border-radius: 20%;
    vertical-align: middle
}

.cinemacard .stars {
    margin-top: .16rem;
    margin-bottom: .12rem
}

#deal-list-abtest .poi-list-item .dealcard-img {
    width: 1.63rem;
    height: 1.45rem;
    margin: -.08rem 0
}

#deal-list-abtest .poi-list-item .info-right {
    margin-left: 1.84rem;
    height: 1.3rem
}

#deal-list-abtest .poi-list-item .name-line {
    height: .55rem
}

#deal-list-abtest .poi-list-item .score-line {
    margin-bottom: .24rem
}

#deal-list-abtest .poi-list-item .addr-line {
    font-size: .24rem;
    color: #666
}

#deal-list-abtest .poi-dealcard .left {
    display: inline-blcok;
    width: 1.52rem;
    height: .88rem
}

#deal-list-abtest .poi-dealcard .right {
    display: block;
    position: absolute;
    right: .2rem;
    bottom: .18rem;
    top: .18rem;
    left: 1.74rem
}

#deal-list-abtest .poi-dealcard strong {
    font-size: .4rem
}

#deal-list-abtest .poi-dealcard .color-strong {
    display: block;
    margin-bottom: .2rem
}

#deal-list-abtest .poi-dealcard del {
    color: #666;
    font-size: .24rem
}

#deal-list-abtest .poi-dealcard h6 {
    font-size: .26rem;
    height: .74rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

#deal-list-abtest .poi-dealcard .right small {
    float: right
}

#deal-list-abtest .list-poi dl {
    padding-left: .3rem
}

#deal-list-abtest .list-poi dl a.react {
    padding-top: .18rem;
    padding-bottom: .18rem
}

#deal-list .poi-list-item .kv-line-r,#search .poi-list-item .kv-line-r {
    margin-top: .1rem;
    margin-bottom: 0;
    -webkit-box-align: center
}

#deal-list .poi-list-item .poiname,#search .poi-list-item .poiname {
    font-size: .3rem
}

#deal-list .poi-list-item p,#search .poi-list-item p {
    font-size: .24rem;
    color: #666
}

#deal-list .dealcard-poi .title,#search .dealcard-poi .title {
    font-size: .3rem;
    color: #333;
    height: .8rem;
    margin-bottom: .32rem;
    line-height: 1.41
}

.poi-list-item {
    position: relative
}

.poi-list-item p[data-com=redirect] {
    position: absolute;
    right: .2rem;
    bottom: .2rem;
    font-size: .24rem;
    color: #666
}

.poi-list-item p[data-com=redirect] a {
    color: #666
}

.feedbackCard .userInfo {
    margin-bottom: .12rem;
    font-size: .24rem
}

.feedbackCard .time {
    color: #999
}

.feedbackCard .score {
    margin-bottom: .4rem;
    font-size: .24rem
}

.feedbackCard .stars {
    font-size: .28rem;
    margin-right: .2rem;
    vertical-align: bottom
}

.feedbackCard .comment {
    margin-bottom: .22rem;
    font-size: .3rem;
    margin-top: .3rem
}

.feedbackCard .comment-rich {
    display: inline-block;
    width: 1.1rem;
    height: .36rem;
    line-height: .36rem;
    vertical-align: text-bottom;
    text-align: center;
    font-size: .24rem;
    border-radius: .06rem;
    background-color: #e54847;
    color: #fff
}

.feedbackCard .pics {
    margin-bottom: .26rem
}

.feedbackCard .pics .pic-container {
    display: inline-block;
    width: 1.1rem;
    height: 1.1rem;
    margin-bottom: .14rem;
    overflow: hidden;
    text-align: center;
    vertical-align: top
}

.feedbackCard .user-wrapper {
    position: relative
}

.feedbackCard .user-pic {
    position: absolute;
    width: .73rem;
    height: .73rem;
    vertical-align: top
}

.feedbackCard .user-pic .imgbox {
    width: 100%;
    height: 100%;
    overflow: hidden
}

.feedbackCard .user-pic img {
    width: 100%;
    height: 100%;
    border-radius: 50%
}

.feedbackCard .user-info-text {
    margin-left: .8rem;
    font-size: .24rem;
    color: #999;
    vertical-align: top;
    height: .73rem;
    overflow: hidden
}

.feedbackCard .serious-evaluation {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: -.18rem;
    right: .25rem
}

.feedbackCard .serious-evaluation img {
    width: 100%;
    height: 100%
}

.block-reply {
    color: #666;
    margin-top: .2rem;
    background-color: #F7F7F6;
    padding: .2rem;
    position: relative;
    border-radius: .06rem
}

.block-reply:before {
    content: "";
    display: block;
    position: absolute;
    width: .2rem;
    height: .2rem;
    top: -.1rem;
    left: .5rem;
    background-color: #F7F7F6;
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg)
}

.block-reply .reply-time {
    float: right;
    color: #999
}

.block-reply-head {
    border-bottom: 1px solid #E0DDD7;
    font-size: .24rem;
    padding-bottom: .2rem
}

.block-reply p {
    margin-top: .2rem;
    font-size: .3rem;
    color: #ED852C
}

.icon-toggle-arrow {
    float: right;
    width: 2em;
    text-align: center
}

.toggleContent.active .icon-toggle-arrow:after {
    top: 0;
    -webkit-transform: rotateZ(135deg);
    -moz-transform: rotateZ(135deg);
    -ms-transform: rotateZ(135deg)
}

.toggleContent .feedbackmore {
    display: none
}

.toggleContent.active .feedbackmore {
    display: inline
}

.toggleContent.active .icon-ell {
    display: none
}

.deal-container {
    position: relative
}

.no-deals {
    padding-top: .6rem;
    padding-bottom: 1.25rem;
    font-size: .32rem;
    text-align: center;
    margin: 0
}

.pager {
    padding: .16rem .2rem
}

.pager-current {
    color: #666;
    display: inline-block;
    width: .45rem;
    text-align: center
}

.loading,.shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    z-index: 20
}

.loading .loading-spin {
    position: absolute;
    left: 50%;
    font-size: .6rem;
    margin-left: -.15rem
}

.dropdown-wrapper,.nav-bar {
    position: relative
}

.nav-bar {
    z-index: 30
}

.nav-bar .nav {
    display: -webkit-box;
    display: -ms-flexbox;
    background: #FFF;
    border-bottom: 1px solid #c6c0b3;
    text-align: center;
    height: .84rem;
    line-height: .84rem
}

.dropdown-toggle {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    border-left: 1px solid #c6c0b3;
    width: 100%;
    text-align: left;
    text-align: center;
    color: #666
}

.dropdown-toggle.active,.sort-wrapper li.active {
    color: #e54847
}

.dropdown-toggle:first-child {
    border: none
}

.dropdown-toggle.caret.active:after,.dropdown-toggle.caret:after {
    border-left: .09rem solid transparent;
    border-right: .09rem solid transparent
}

.dropdown-toggle.caret:after {
    content: "";
    width: 0;
    height: 0;
    display: inline-block;
    border-top: .15rem solid #B7B7B7;
    border-bottom: none;
    margin-left: .12rem
}

.dropdown-toggle.caret.active:after {
    border-top: none;
    border-bottom: .15rem solid #e54847;
    margin-bottom: .04rem
}

.biz .sub-nav,.subway .sub-nav {
    display: block
}

.nav-head-name {
    display: inline-block;
    white-space: nowrap;
    max-width: 80%;
    vertical-align: middle
}

.biz-wrapper,.brand-wrapper,.category-wrapper,.csp-wrapper,.floor-wrapper,.sort-wrapper,.sub-nav,.subway-wrapper {
    display: none
}

.sub-nav {
    background: #FEFEFE;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #c6c0b3;
    text-align: center
}

.dropdown-module {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    -webkit-transition: height .3s
}

.scroller-wrapper {
    position: relative
}

.scroller-wrapper .dropdown-scroller {
    width: 100%;
    background: #f6f4f0
}

.scroller-wrapper .dropdown-scroller ul {
    width: 100%;
    background: #FFF
}

.scroller-wrapper .dropdown-sub-scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 100%;
    bottom: 0;
    border-left: 1px solid #ddd8cd;
    background: #f6f4f0
}

.biz-wrapper.active,.brand-wrapper.active,.category-wrapper.active,.csp-wrapper.active,.floor-wrapper.active,.sort-wrapper.active,.subway-wrapper.active {
    display: block
}

.dropdown-list {
    width: 100%
}

.dropdown-list>li {
    -webkit-transform: translate3d(0,0,0);
    border-bottom: 1px solid #ddd8cd;
    line-height: .87rem;
    height: .87rem;
    position: relative
}

.dropdown-list>li.active {
    background: #f6f4f0
}

.dropdown-list>li:last-child {
    border-bottom: none
}

.dropdown-sub-scroller li.active {
    border-left: none
}

.dropdown-list span {
    text-align: left;
    margin: 0 0 0 .4rem
}

.dropdown-list .quantity {
    display: inline-block;
    text-align: right;
    margin-right: .16rem;
    font-size: .22rem;
    position: absolute;
    right: 0;
    top: .3rem
}

.dropdown-sub-scroller .sub-quantity {
    color: #B4B4B4;
    position: absolute;
    margin-right: .16rem;
    right: 0;
    top: 0
}

.dropdown-sub-scroller .sub-name {
    display: block;
    margin-right: .6rem;
    white-space: nowrap
}

.dropdown-sub-scroller .dropdown-list>li:active .sub-quantity {
    color: #FFF
}

.dropdown-list .quantity>b {
    font-weight: 400;
    background: #CCC;
    border-radius: .8rem;
    padding: 0 .14rem;
    color: #FFF;
    line-height: .28rem;
    font-size: .24rem;
    height: .28rem;
    float: right
}

.right-arrow-point-right .quantity>b:after {
    content: '>';
    -webkit-transform: scale(.8,1.5);
    padding-left: 7px;
    font-family: simsun
}

.geo-addr {
    padding-left: .2rem;
    height: .8rem;
    line-height: .8rem;
    margin: 0;
    border-bottom: 1px solid #DDD8CE;
    color: #999
}

.geo-addr .kv-v {
    position: relative;
    padding-right: .2rem;
    padding-left: .5rem
}

.csp-wrapper .kv-line-r {
    margin: 0
}

.csp-wrapper .footer {
    background-color: #f6f4f0
}

.csp-wrapper .radioarea {
    margin-left: -.06rem;
    margin-right: -.06rem;
    margin-bottom: -.2rem
}

.csp-wrapper .dd-padding label.btn {
    margin: 0 .06rem .2rem;
    min-width: 1.4rem;
    padding: 0 .2rem
}

.csp-wrapper .checklist h6 {
    font-size: .28rem;
    font-weight: 400;
    margin-bottom: .3rem
}

.merchant {
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center
}

.merchant .biz-detail {
    -webkit-box-flex: 1;
    -ms-box-flex: 1
}

.merchant .biz-detail h5 {
    font-size: .32rem;
    margin-top: 0;
    margin-bottom: .18rem;
    color: #000
}

.merchant .biz-detail .address {
    padding-right: .2rem;
    color: #666
}

.merchant .biz-call {
    width: 1.4rem;
    text-align: center;
    border-left: 1px solid #DDD8CE;
    font-size: .5rem;
    height: 1.2rem;
    line-height: 1.2rem;
    color: #e54847
}

.merchant .dist {
    margin-top: .2rem;
    color: #666
}

.merchant .dist .dist-text {
    margin-left: .12rem
}

@-webkit-keyframes rotateing-anim {
    0% {
        -webkit-transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(360deg)
    }
}

@keyframes rotateing-anim {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

.text-icon {
    font-family: base_icon;
    display: inline-block;
    vertical-align: middle;
    font-style: normal
}

.loading-spin {
    opacity: .8;
    display: inline-block;
    border-radius: 50%;
    width: .25em;
    height: .25em;
    box-shadow: 0 -.4em 0 0 #fff,-.28em -.28em 0 0 rgba(255,255,255,.75),-.4em 0 0 0 rgba(255,255,255,.5),-.28em .28em 0 0 rgba(255,255,255,.25);
    -webkit-animation: .85s rotateing-anim steps(8) infinite;
    animation: .85s rotateing-anim steps(8) infinite
}

.icon-refresh {
    width: 1em;
    height: 1em;
    position: relative
}

.icon-refresh:after,.icon-refresh:before {
    content: "";
    position: absolute
}

.icon-refresh:before {
    box-sizing: border-box;
    width: 1em;
    height: 1em;
    border: .1em solid #999;
    border-top: .1em solid transparent;
    border-radius: 50%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    display: inline-block;
    top: 0
}

.icon-refresh:after {
    border: .25em solid transparent;
    border-left: .25em solid #999;
    top: -.2em;
    left: .5em
}

.icon-downarrow:after,.icon-toggle-arrow:after {
    content: '';
    display: inline-block;
    top: -.2em;
    width: .5em;
    height: .5em
}

.icon-downarrow,.icon-downarrow:after,.icon-toggle-arrow,.text-icon.icon-back {
    position: relative
}

.icon-downarrow:after {
    border-bottom: .03rem solid #fff;
    border-left: .03rem solid #fff;
    -webkit-transform: scaleX(.7) rotateZ(-45deg);
    -moz-transform: scaleX(.7) rotateZ(-45deg);
    -ms-transform: scaleX(.7) rotateZ(-45deg)
}

.icon-toggle-arrow:after {
    position: relative;
    border-bottom: .03rem solid #C3C5C9;
    border-left: .03rem solid #C3C5C9;
    -webkit-transform: rotateZ(-45deg);
    -moz-transform: rotateZ(-45deg);
    -ms-transform: rotateZ(-45deg)
}

.icon-ell:after {
    content: "...";
    display: inline
}

.text-icon.icon-back:after,.text-icon.icon-back:before {
    content: '';
    display: block
}

.text-icon.icon-back {
    width: .45rem;
    height: .45rem;
    vertical-align: middle
}

.text-icon.icon-back:before {
    position: absolute;
    left: .07rem;
    top: 0;
    width: .4rem;
    height: .4rem;
    border-bottom: .04rem solid #fff;
    border-left: .04rem solid #fff;
    -webkit-transform: scaleY(.8) rotateZ(45deg);
    -moz-transform: scaleY(.8) rotateZ(45deg);
    -ms-transform: scaleY(.8) rotateZ(45deg)
}

.text-icon.icon-back:after {
    position: absolute;
    top: .2rem;
    left: .03rem;
    height: 0;
    width: .45rem
}

.text-icon.icon-star:after {
    content: '★'
}

.text-icon.icon-star-empty:after {
    content: '☆'
}

.text-icon.icon-star-gray:after,.text-icon.icon-star-half:after {
    content: '★'
}

.text-icon.icon-star-half {
    position: absolute;
    left: 0;
    width: .55em;
    overflow: hidden
}

.text-icon.icon-star-gray {
    position: relative
}

.text-icon.icon-star-gray:after {
    color: #E2E2E2
}

.text-icon.icon-share:after {
    content: '⎋'
}

.text-icon.icon-card:after {
    content: "▭"
}

#tips {
    display: none;
    font-size: .26rem;
    background-color: #FFF6E0;
    color: #D78900;
    border-bottom: 1px solid #FFEBC8;
    text-align: center;
    padding: .2rem;
    line-height: 1.4
}

#tips.tips-err {
    display: block
}

.btn-wrapper {
    margin: .28rem .2rem
}

.banner img {
    width: 6.4rem
}

.banner {
    height: 1rem
}

#meituan_check {
    height: 0;
    overflow: hidden
}

.top-btn {
    display: none;
    position: fixed;
    right: .3rem;
    bottom: 1.5rem;
    width: .86rem;
    height: .86rem;
    line-height: .86rem;
    background: #e54847;
    z-index: 130;
    border-radius: 50%;
    color: #fff;
    overflow: hidden;
    text-align: center;
    font-size: .5rem
}

.level-icon {
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background: url(/bs/file/?f=myfe/canary:static/deploy/css/i/vip3.png);
    background-size: .3rem;
    margin-top: -.08rem
}

.albumContainer,.page {
    height: 100%;
    left: 0;
    top: 0;
    width: 100%
}

.level1 {
    background-position-y: -.4rem
}

.level2 {
    background-position-y: -.8rem
}

.level3 {
    background-position-y: -1.2rem
}

.level4 {
    background-position-y: -1.6rem
}

.level5 {
    background-position-y: -2rem
}

.level6 {
    background-position-y: -2.4rem
}

body .box-search.active {
    border-color: #e54847
}

.search-suggestion .list-item .match_word {
    color: #e54847
}

.albumContainer {
    position: fixed;
    background: #000;
    z-index: 1000;
    display: none
}

.page {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    overflow: hidden;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -ms-box-align: center;
    -ms-flex-pack: justify
}

.page.next {
    -webkit-transform: translateX(105%);
    -ms-transform: translateX(105%)
}

.page.prev {
    -webkit-transform: translateX(-105%);
    -ms-transform: translateX(-105%)
}

.page.next2 {
    -webkit-transform: translateX(210%);
    -ms-transform: translateX(210%)
}

.page.prev2 {
    -webkit-transform: translateX(-210%);
    -ms-transform: translateX(-210%)
}

.page.current {
    z-index: 2
}

.automove .page {
    -webkit-transition: -webkit-transform .2s
}

.albumContainer .page img {
    display: block
}

.albumContainer .page-number-container {
    z-index: 2;
    position: absolute;
    color: #fff;
    font-size: .4rem;
    left: 0;
    top: 0;
    text-align: center;
    width: 100%;
    margin-top: .3rem
}

.albumContainer .page-number {
    padding: .2rem;
    background: rgba(0,0,0,.5)
}

.table {
    min-height: .8rem;
    position: relative;
    overflow: hidden;
    z-index: 0
}

.table:after,.table:before {
    content: '';
    position: absolute;
    height: 100%;
    border-left: 1px solid #ddd8ce
}

.table:before {
    width: 25%;
    left: 25%;
    border-right: 1px solid #ddd8ce
}

.table:after {
    width: 10%;
    left: 75%;
    border-right: none
}

.table.table-t3:before {
    width: 33.33%;
    left: 33.33%
}

.table.table-t3:after {
    border: none
}

.table h4,.table li {
    display: inline-block;
    width: 25%;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
    text-align: center;
    border-bottom: 1px solid #ddd8ce;
    margin-bottom: -1px;
    float: left;
    position: relative;
    z-index: 10
}

.table.table-t3 h4,.table.table-t3 li {
    width: 33.33%
}

.table h4 {
    margin: 0 0 -1px;
    height: 1.6rem;
    line-height: 1.6rem;
    color: #B7B7B7;
    font-size: .8rem
}

.icon-wrapper {
    height: 3.6rem;
    -webkit-transform: scale(1)
}

.list-ico {
    position: absolute;
    bottom: .22rem;
    text-align: center;
    width: 100%
}

.list-ico li {
    display: inline-block;
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background-color: #F0EFED;
    margin: 0 .15rem
}

.list-ico li.active {
    background-color: #e54847
}

.icon-list.page {
    display: block
}

.icon-list {
    height: auto
}

.icon-list .icon {
    display: inline-block;
    box-sizing: border-box;
    width: 25%;
    text-align: center
}

.icon-list .icon>a {
    padding: .2rem 0
}

.icon-list .icon-circle {
    display: block;
    margin: auto auto .14rem;
    font-family: cate_icon;
    width: .8rem;
    height: .8rem;
    border-radius: 10rem;
    text-align: center;
    line-height: .8rem;
    font-size: .4rem;
    color: #fff
}

.icon-list .icon-desc {
    text-align: center;
    font-size: .24rem;
    color: #666
}

body .icon-circle {
    background-color: #f82
}

body .typeid163,body .typeid22,body .typeid235,body .typeid241,body .typeid242,body .typeid243 {
    background-color: #F48C78
}

body .typeid147,body .typeid149,body .typeid165,body .typeid2,body .typeid206 {
    background-color: #F8B868
}

body .typeid,body .typeid0,body .typeid278,body .typeid5 {
    background-color: #45D3BF
}

body .typeid162,body .typeid195,body .typeid226,body .typeid4,body .typeid78 {
    background-color: #62C4EA
}

body .typeid1 {
    background-color: #f82
}

body .typeid3 {
    background-color: #a8dd99
}

body .typeid20 {
    background-color: #7788f2
}

body .typeid99 {
    background-color: #ea6644
}

.theme-color {
    color: #e54847!important
}

.border-bottom-wide {
    border-bottom: 4px solid #e54847
}

.background-color {
    background-color: #e54847!important
}

.time-line .showday.active {
    border-bottom: .04rem solid #e54847
}

#msg .msg-ft .msg-btn,.time-line .showday.active a {
    color: #e54847
}

</style>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from "vuex";
export default Vue.extend({
    mounted() {
    this.htms = document.getElementsByTagName("html")[0];
    this.htms.style.fontSize = "50px";
  },
  destroyed() {
    this.htms.style.fontSize = "";
  },
  data() {
      return {
          num:1,
          b_show1:false,
          b_show2:false
      }
  },
  created() {
    this.setAadd();
  },
  methods: {
    ...mapMutations(["setAadd"]),

      add(){
          this.num++
        this.b_show2=true;
        this.b_show1=false;
      },
      del(){
           if(this.num<=0){
                return false
           }else{
          this.num--;
        this.b_show2=false;
        this.b_show1=true;
      }
      }
  },
})
</script>
