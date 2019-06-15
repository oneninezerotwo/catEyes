<template>
  <div class="search-wrapper" data-search-type="movie">
    <div class="search-header" v-show="h_show">
      <div class="input-wrapper">
        <img
          class="search-icon"
          src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png"
          alt
        >
        <input class="search-input" type="text" placeholder="搜电影、搜影院">
        <img
          @click="text_delete"
          class="del-input"
          style
          src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png"
          alt
        >
      </div>
      <div class="cancel" @click="go">取消</div>
    </div>

    <div class="search-history" v-show="history_show">
      <div class="history-item" :key="index" v-for="(k,index) in history_data" @click="active_history(index)">
        <span class="history-icon"></span>
        <span class="word one-line">{{k}}</span>
        <div class="del-word" @click.stop="history_delete(index)"></div>
      </div>
    </div>

    <div class="search-result" v-show="c_show">
      <div class="result-wrapper">
        <div class="result">
          <h3 v-show="h_show">影院</h3>
          <div :class="{'list':true,'list_a':h_show}">
            <div class="cinema cell" data-id="6134" :key="index" v-for="(k,index) in s_data" @click="detail">
              <div class="info">
                <p class="name-price">
                  <span class="name one-line" v-text="k.nm"></span>
                  <span class="sell-price">
                    <span class="price" v-text="k.sellPrice"></span>
                    元起
                  </span>
                </p>
                <p class="address one-line">{{k.addr}}</p>
                <p class="feature-tags"></p>
              </div>
              <div class="distance" v-text="k.distance"></div>
            </div>
          </div>
          <div class="more-result" @click="allData" v-show="h_show">查看全部{{s_data.length}}家电影院</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result .more-result,
.result .no-related-result {
  text-align: center;
  line-height: 44px;
  height: 44px;
  font-size: 15px;
}

.hot-search,
.result .movie .detail-section,
.search-header,
.search-header .del-input {
  position: relative;
}

h3 {
  font-weight: 400;
}

h3,
p {
  margin: 0;
}

.one-line {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.search-wrapper {
  background-color: #f5f5f5;
  height: 100vh;
}

.result-wrapper {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.search-header {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 0 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1;
}

.search-header .input-wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.search-header .search-icon {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  float: left;
  position: relative;
  top: 6px;
}

.search-header .search-input {
  -webkit-box-flex: 1;
  flex: 1;
  border: none;
  font-size: 13px;
  color: #333;
  line-height: 20px;
  padding: 4px 0;
  width: calc(100% - 40px);
}

.search-header .del-input {
  width: 15px;
  height: 15px;
  float: right;
  top: 6px;
}

.search-header .cancel {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 16px;
  color: #f03d37;
}

.search-history {
  background-color: #fff;
}

.search-history .history-item {
  margin-left: 15px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  line-height: 44px;
  -webkit-box-align: center;
  align-items: center;
}

.search-history .history-item:last-child {
  border-bottom: none;
}

.search-history .history-item .history-icon {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAVFBMVEUAAACrq6u2traqqqqrq6utra2vr6+qqqqqqqqrq6urq6urq6urq6usrKyqqqqrq6urq6urq6urq6urq6uqqqqsrKyrq6uqqqqvr6+qqqqrq6uqqqqL2Pn/AAAAG3RSTlMA7gf3nBcL5NSxqHFJNN/IwoWDeWNQTyQgNumZiWHTAAABnklEQVRIx5SS2xKDIAxEIwJVQGu91vb//7PdyEynigL74DjiSZZNKKjVyq4tyrJoO2kbSpOYTfH+U2FmEccGT+3YIYKOt/eJbuMF5ir/V1lbtygh1OJsXfqPlTvjHt6WnDTRT3qS3v4jiOl6a9brwFm/ta0DZ8/NplQUlJKb3eeBe3ECFzNrOLfXjtTc767oQurOPf/d8v2MiMzY8D0PeRqKyuyydexTxEHBbn/zrJCLogQpJFSR14gyDSWpwb+j748qkhIl4U4QNGBfDkZROWgWOzRwQyxiT6kg9VhntJzxotNBjUazn42kdJCknzkKTDngBItEK6LROaBGPCtZXr8ckBfbsmObB1pOpcPy5YFY7Y7a73PJA5fvUcuhqjxQcayISOSBAoP4dF4GJwDDQAzrAh2g+y/ap0BwGKR/IOR8tnMfFD54X1X4qvfjCD/OPQ7hcSCAgQWA5AaWHCIfSOQvazXQWrHIGy8y1rHBOjCric0Ke9xgj9mQawTU0MkxV4O1RnkuD7mu9ILUK1kvgb129qLbq3Uv8/v78D0AP8WcS0GTLxhaAAAAAElFTkSuQmCC)
    no-repeat;
  background-size: contain;
  display: inline-block;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}

.search-history .history-item .word {
  color: #333;
  font-size: 15px;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  display: inline-block;
}

@media only screen and (max-device-width: 320px) {
  .search-history .history-item .word {
    max-width: 230px;
  }
}

.search-history .history-item .del-word {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAASFJREFUKBV9kj2OwjAQhWPTkwppL0ADXZIGutVKHICODglWVLtUXIIOuIBvshfIj4SUKhdAossBEt7LMsFEmJGcmWTeZ09mrOI4PiqlRliLIAiu3huD9hfpNbRzTaiu66+qqv7SNB24uCRJdsgdoB/D+wQXCHKssQsmhM330FbQrcIwTBQCjycRIoyVa60/pewXkIHGa0AGr2CcsuycZKiltSBfbBhlXQB9WOUZasSeQH4kDOB8h+DqbRRFJwHEawnEQ8jyeBIhbrzhZpIX/wTajQC0hcjZ7Ra0IQArlsfuuuDmH7sQ5mQANGY3DB/aUSkkfjBDXjsZrvlHHs8u7Pv+VAP6fgcR52Wwyy7LcuJlWTZEqeFjf3dUFEUfF32GxvVumtjRa2eCUPQAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: 15px;
  background-size: 10px;
  -webkit-align-self: center;
  align-self: center;
  padding: 17px 15px;
  width: 10px;
  height: 10px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}

.hot-search {
  padding: 0 0 8px 15px;
  background-color: #fff;
  top: -1px;
}

.hot-search h3 {
  border-top: 1px solid #e5e5e5;
  padding-top: 17px;
  font-size: 15px;
  color: #666;
}

.hot-search .hot-movies-wrap {
  margin-top: 15px;
  padding-right: 15px;
  overflow: hidden;
}

.hot-search .hot-movies-wrap .hot-movie {
  float: left;
  padding: 6px 12px;
  margin: 0 12px 12px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
}

.result-list {
  padding-left: 15px;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.result {
  margin-bottom: 10px;
  background-color: #fff;
}

.result .everyone-search {
  color: #999;
  font-size: 13px;
  padding: 6px 15px;
  background-color: #f5f5f5;
}

.result .everyone-search + .list {
  border-top: none;
}
.list_a {
  height: 326px;
}

.result .no-related-result {
  color: #999;
}

.result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
}

.result .list {
  padding-left: 15px;
  overflow: hidden;
  border-top: 1px solid #e6e6e6;
}

.result .cell,
.result .list {
  border-bottom: 1px solid #e6e6e6;
}

.result .cell:last-child {
  border-bottom: none;
}

.result .more-result {
  color: #ef4238;
}

.result .movie {
  padding: 12px 0;
  min-height: 90px;
}

.result .movie .name-score {
  font-size: 16px;
  color: #222;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 2px;
}

.result .movie .name-score .name {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.result .movie .name-score .name .one-line {
  display: inline-block;
  font-weight: 700;
  font-size: 17px;
}

.result .movie .name-score .score,
.result .movie .name-score .wish {
  color: #fa0;
  font-size: 10px;
  flex-shrink: 0;
  padding-left: 5px;
}

.result .movie .name-score .num {
  font-size: 16px;
}

.result .movie .name-score .no-score {
  font-size: 14px;
  color: #666;
  flex-shrink: 0;
}

.result .movie .detail-section .detail-items {
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow: hidden;
  padding-right: 10px;
  margin-right: 48px;
  min-height: 27px;
}

.result .movie .detail-section .catogary,
.result .movie .detail-section .ename,
.result .movie .detail-section .release {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}

.result .movie .detail-section .btn,
.result .movie .detail-section .buy-btn {
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  -webkit-align-self: flex-end;
  align-self: flex-end;
  flex-shrink: 0;
  width: 48px;
  text-align: center;
  height: 27px;
  line-height: 27px;
  right: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.result .movie .detail-section .sale {
  background-color: #ef4238;
}

.result .movie .detail-section .presale {
  background-color: #3c9fe6;
}

.result .movie .detail-section .toggle-wish-btn[data-wishst="0"] {
  background-color: #faaf00;
  border: none;
  color: #fff;
}

.result .movie .detail-section .toggle-wish-btn[data-wishst="1"] {
  background-color: #fff;
  border: 1px solid #eaeaea;
  color: #666;
}

.result .movie .poster {
  background-color: #eee;
  width: 64px;
  height: 90px;
  float: left;
  margin-right: 10px;
}

.result .movie .info {
  margin-right: 15px;
  margin-top: 1px;
}

.result .cinema {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 15px 15px 15px 0;
}

.result .cinema .info {
  -webkit-box-flex: 1;
  flex: 1;
  overflow: hidden;
}

.result .cinema .name-price {
  font-size: 16px;
  color: #000;
  margin-bottom: 6px;
  display: -webkit-box;
  display: flex;
}

.result .cinema .sell-price {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
  margin-left: 10px;
}

.result .cinema .price {
  font-size: 17px;
  color: #ef4238;
}

.result .cinema .address {
  font-size: 13px;
  color: #999;
}

.result .cinema .feature-tags {
  margin-top: 7px;
}

.result .cinema .feature-tags span {
  border: 1px solid #589daf;
  color: #589daf;
  position: relative;
  display: inline-block;
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  font-size: 0.6rem;
}

.result .cinema .feature-tags span.featrue {
  color: #f90;
  border-color: #f90;
}

.result .cinema .distance {
  font-size: 13px;
  color: #999;
}

.version {
  background-size: contain;
  background-repeat: no-repeat;
  height: 14px;
  margin-left: 5px;
  display: inline-block;
}

.version.v2d.imax {
  width: 43px;
  background-image: url(data:image/png;base64,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);
}

.version.v3d {
  width: 17px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAA0VJREFUSA3tV1tIFGEU/mZ23F11vaTrZbNs1TIxawkSuyEWIRVU2ksEvRQFRU+91EvQmw9Rb1EQRARFVCC9iCRF201MKlRCMctN3RRb23VRd9e9TecfW2XWmdEedvOh8zJzzn/+c745t39+DkRH73evEcOBqwBXJ4qihckSTRzHjQGinROMF5tP2JycBCIU6BaBnEQ7V7LPAW4uxWgTWCT+FQgGTPJNGHiWDiWkyZVxdXyyakLrwxgGisjKoP9A4vMgxAvieYHnsHe9GdacNESiIhxuH14P/kKY3hlV5JtQSmsxYuLx6Vk4J/1wzQRj4iWfmkCyjAKaDlZidaYR/lAEOo6DXuDRWGXBpZZe+EhWU7wKDcQrUdeoFzffOZYFSBPIme1WCcStdgdefpsAT0CO2YrQuNmCQ5sK8ajrx7z/y619cHh8MOh45JsM2LY2G0dI5/rhKpxv7sHUbHheV+lFtVgpI6iksA9MTKPtiwuhiIjZcBSt/eOSHUuGQWaPRcwXjMDjD6HfNY0Hn5y49uorMgwCjm8tkukqMaoRYbk+9bhr0R6bJUuS9Y5PLVqLF3QOT2KIosTSd7tjKH5ZxqsCkWkRc7pmHTaY01Gam4ann8ekVMXrKPFObwC7rDnQU8qCkaiSiiRTTU38jnyTHuZ0vVQnzCjrpuXQzJ/aMBl0murLjkjTiwHJUG1pLi7Ulklfd+/DiKZxtphHhRuk2nL7Qpq6qhEppGI8t8OK3SXyv4M3NEMmqSCrqSuWIpNeh3JKp9PrX0oVqkC8gRD2lefhZHUxpWPBTgEBZPPFG9Bux9QUHmd3liCduuZJz+iCAZU31dT4Q1G09f/E/ooCXKmvgJ3mCKuRPWVm0N8VWvrm2jhml4H2UPjZwGPRrCrMRHZqCp4PuNAx5ImpqT5VgbAddzqHwdq4fmMetlgyJSMsLTfeDqL9u1tm9AABZsSOATbi2fx5Rh/y0emV6akxXMPd93OHhpoGyfU6DgUZRgRoaP3N+aFhctGSZkRi2kGaqiN0iCWSVIs1kU6VbK8cIHP3CyWMyZMxDBQR0Z48l2qeRDvPblo0r+S9qKafADnzzTDw0nWPblo0ox4mM03Ml+STfDMMvwErHhRiC0ymfAAAAABJRU5ErkJggg==);
}

.version.v3d.imax {
  width: 43px;
  background-image: url(data:image/png;base64,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);
}

.no-result {
  height: 100vh;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: -20%;
}

.no-result img {
  width: 87px;
  height: 100px;
  margin-bottom: 16px;
}

.no-result p {
  font-size: 16px;
  color: #999;
}
.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.navbar .nav-wrap-left {
  height: 50.5px;
  line-height: 50.5px;
}

.navbar .h1.nav-header,
.navbar h1.nav-header {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.nav-wrap-left a.back {
  height: 50px;
  width: 22.5px;
  line-height: 50px;
  padding: 0 15px;
}

.navbar.fix-bangs {
  padding-top: env(safe-area-inset-top);
}

.icon-back {
  display: inline-block;
  width: 22.5px;
  height: 22.5px;
  vertical-align: middle;
  position: relative;
}

.icon-back:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
hr,
input[type="search"] {
  box-sizing: content-box;
}

img,
legend {
  border: 0;
}

legend,
td,
th {
  padding: 0;
}

body,
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

.arrow,
sub,
sup {
  position: relative;
}

.footerTab,
a,
div {
  -webkit-tap-highlight-color: transparent;
}

html {
  font-family: sans-serif;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

a {
  background-color: transparent;
}

a:active,
a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
optgroup,
strong {
  font-weight: 700;
}

dfn {
  font-style: italic;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

mark {
  background: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  width: 100%;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}

hr {
  height: 0;
}

pre,
textarea {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  margin: 0;
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
  -webkit-touch-callout: inherit;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
}

body.gray {
  background-color: #f0f0f0;
}

body.white,
select {
  background-color: #fff;
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.clearfix:after {
  display: table;
  content: " ";
  clear: both;
}

a,
img {
  display: block;
}

.arrow,
.grid-10 > div,
.grid-11 > div,
.grid-12 > div,
.grid-1 > div,
.grid-2 > div,
.grid-3 > div,
.grid-4 > div,
.grid-5 > div,
.grid-7 > div,
.grid-8 > div,
.grid-9 > div {
  display: inline-block;
}

button,
input,
select,
textarea {
  outline: 0;
  resize: none;
}

.arrow {
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  border-left: none;
  border-top: none;
  left: -2px;
}

.arrow.down {
  margin: 0 5px !important;
  -webkit-transform: rotate(45deg) translateY(-3px);
  transform: rotate(45deg) translateY(-3px);
}

.arrow.up {
  margin-left: 10px !important;
  -webkit-transform: rotate(-135deg) translateY(-3px);
  transform: rotate(-135deg) translateY(-3px);
}

.flex {
  -webkit-box-flex: 1;
  flex: 1;
}

.grid-1 {
  font-size: 0;
}

.grid-1 > div {
  width: 100%;
  font-size: medium;
}

.grid-2 {
  font-size: 0;
}

.grid-2 > div {
  width: 50%;
  font-size: medium;
}

.grid-3 {
  font-size: 0;
}

.grid-3 > div {
  width: 33.33333%;
  font-size: medium;
}

.grid-4 {
  font-size: 0;
}

.grid-4 > div {
  width: 25%;
  font-size: medium;
}

.grid-5 {
  font-size: 0;
}

.grid-5 > div {
  width: 20%;
  font-size: medium;
}

.grid-6 {
  font-size: 0;
}

.grid-6 > div {
  width: 16.66667%;
  display: inline-block;
  font-size: medium;
}

.grid-7 {
  font-size: 0;
}

.grid-7 > div {
  width: 14.28571%;
  font-size: medium;
}

.grid-8 {
  font-size: 0;
}

.grid-8 > div {
  width: 12.5%;
  font-size: medium;
}

.grid-9 {
  font-size: 0;
}

.grid-9 > div {
  width: 11.11111%;
  font-size: medium;
}

.grid-10 {
  font-size: 0;
}

.grid-10 > div {
  width: 10%;
  font-size: medium;
}

.grid-11 {
  font-size: 0;
}

.grid-11 > div {
  width: 9.09091%;
  font-size: medium;
}

.grid-12 {
  font-size: 0;
}

.grid-12 > div {
  width: 8.33333%;
  font-size: medium;
}

.box-flex {
  display: -webkit-box;
  display: flex;
}

.inline-flex {
  display: -webkit-inline-box;
  display: inline-flex;
}

.box-flex.column,
.inline-flex.column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.box-flex.column.middle,
.inline-flex.column.middle {
  -webkit-box-pack: center;
  justify-content: center;
}

.box-flex.column.top,
.inline-flex.column.top {
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.box-flex.column.bottom,
.inline-flex.column.bottom {
  -webkit-box-pack: end;
  justify-content: flex-end;
}

.box-flex.column.around,
.inline-flex.column.around {
  justify-content: space-around;
}

.box-flex.column.between,
.inline-flex.column.between {
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.box-flex.wrap,
.inline-flex.wrap {
  flex-wrap: wrap;
}

.box-flex:not(.column).middle,
.inline-flex:not(.column).middle {
  -webkit-box-align: center;
  align-items: center;
}

.box-flex:not(.column).top,
.inline-flex:not(.column).top {
  -webkit-box-align: start;
  align-items: flex-start;
}

.box-flex:not(.column).bottom,
.inline-flex:not(.column).bottom {
  -webkit-box-align: end;
  align-items: flex-end;
}

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.text-middle:before {
  content: "";
  display: inline-block;
  height: 100%;
}

.text-middle:before,
.text-middle > * {
  vertical-align: middle;
}

[data-modal-toggle] {
  cursor: pointer;
}

ol {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

ol li {
  list-style: inside;
}

ol.decimal li {
  list-style-type: decimal;
}

select {
  border: none;
}

.disable-btn {
  background-color: #ccc !important;
  border: 0 !important;
  color: #fff;
}

.awating-btn {
  background-color: #ffc2ad !important;
  border: 0 !important;
  color: #fff !important;
}

.primary-btn-lg,
.primary-btn-md,
.primary-btn-sm {
  min-width: 60px;
  font-family: inherit;
  text-align: center;
  display: inline-block;
  padding: 0 5px;
  box-sizing: border-box;
  background-color: #f63;
  color: #fff;
}

.primary-btn-sm {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}

.primary-btn-md,
.primary-btn-sm {
  border: 0;
  border-radius: 2px;
}

.primary-btn-md {
  font-size: 16px;
  height: 39px;
  line-height: 39px;
}

.primary-btn-lg {
  border: 0;
  font-size: 18px;
  border-radius: 5px;
  height: 44px;
  line-height: 44px;
}

.white-btn-lg,
.white-btn-md,
.white-btn-sm {
  min-width: 60px;
  font-family: inherit;
  display: inline-block;
  padding: 0 5px;
  background-color: #fff;
  color: #666;
  text-align: center;
  box-sizing: border-box;
}

.white-btn-sm {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}

.white-btn-md,
.white-btn-sm {
  border: 1px solid #bbb;
  border-radius: 2px;
}

.white-btn-md {
  font-size: 16px;
  height: 39px;
  line-height: 39px;
}

.white-btn-lg {
  border: 1px solid #bbb;
  font-size: 18px;
  border-radius: 5px;
  height: 44px;
  line-height: 44px;
}

.single-though-btn {
  display: block;
  margin: 0 15px;
}

.ui-image-viewer-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  z-index: 1000;
  display: none;
}

.ui-image-viewer-container .page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  overflow: hidden;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -ms-box-align: center;
  -ms-flex-pack: justify;
}

.ui-image-viewer-container .page.next {
  -webkit-transform: translateX(105%);
  -ms-transform: translateX(105%);
}

.ui-image-viewer-container .page.prev {
  -webkit-transform: translateX(-105%);
  -ms-transform: translateX(-105%);
}

.ui-image-viewer-container .page.next2 {
  -webkit-transform: translateX(210%);
  -ms-transform: translateX(210%);
}

.ui-image-viewer-container .page.prev2 {
  -webkit-transform: translateX(-210%);
  -ms-transform: translateX(-210%);
}

.ui-image-viewer-container .page.current {
  z-index: 2;
}

.ui-image-viewer-container .page img {
  display: block;
  width: 100%;
  height: auto;
}

.ui-image-viewer-container .page-number-container {
  z-index: 2;
  position: absolute;
  color: #fff;
  font-size: 0.4rem;
  left: 0;
  top: 0;
  text-align: center;
  width: 100%;
  margin-top: 0.3rem;
}

.ui-image-viewer-container .page-number {
  padding: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
}

.footerTab {
  background-image: -webkit-linear-gradient(
    top,
    #e1e1e1,
    #e1e1e1 50%,
    transparent 0
  );
  background-image: linear-gradient(
    180deg,
    #e1e1e1,
    #e1e1e1 50%,
    transparent 0
  );
  background-position: 0 0;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-color: #fff;
  height: 50px;
  display: -webkit-box;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  z-index: 998;
  padding: 0;
}

.footerTab .footerItem .tabIcon.index,
.footerTab .footerItem .tabIcon.meishi,
.footerTab .footerItem .tabIcon.movie,
.footerTab .footerItem .tabIcon.myinfo,
.footerTab .footerItem .tabIcon.waimai,
.footerTab .footerItem .tabIcon.wanle,
.footerTab .footerItem.on .tabIcon.index,
.footerTab .footerItem.on .tabIcon.meishi,
.footerTab .footerItem.on .tabIcon.movie,
.footerTab .footerItem.on .tabIcon.myinfo,
.footerTab .footerItem.on .tabIcon.waimai,
.footerTab .footerItem.on .tabIcon.wanle {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAFDCAMAAABWT4GwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNjBDOUVFOTJEN0MxMUU3OUM3QTlEQTcwNDMyMUREMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNjBDOUVFQTJEN0MxMUU3OUM3QTlEQTcwNDMyMUREMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM2MEM5RUU3MkQ3QzExRTc5QzdBOURBNzA0MzIxREQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM2MEM5RUU4MkQ3QzExRTc5QzdBOURBNzA0MzIxREQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cliUMgAAAwBQTFRFq6ur/+bQ/6dY//Pr/4tl/1pTjdSY9vb2Q6zd1tbW6urqsbGx7u7u5vT6/3gA+fn5kpKS8vn9d8yF/9HDh8rpgoKC/7d4/9e0/0dH/8y9/86impqa8fHx/+3d/4sksuK6/2w7/9XH/8zL/7Oa/4Na/4MV2tPDzs7O/9Kq/9LR/5CM//n1T7Lf/8TCZmZm/3FD4uLi/5t5/6Shmtmk/6OF/8jG/3Zx//LxpaWl/5NyW8JrpN2t/7yr/6xjvr6+/2Fc//HEjY2N++zDbm5u/5xE/6yp8vr0aWlp/42JQ7lWxsbG/2lk//b1/+PKxOnK/7Ju/3l1/zg4/7y6fn5+/9rY5ubmycnJ2dnZ/8G+cXFx/6ml/5WS/3Jt//z8/7Sy//Xx/8uc/7i2/8WS/5Bs/+vk/30KwsLC/1dR/21oy+vQ3Nzc/72CUb5j/5Mzu7u7//r6dXV12PDc/56a/9nM/356u+bCbcl8/+jU/+3p//v6/+jo/4mE//Hj/6GK/11Y4fTk/8Oy/62T/+Xk+/v7/+Xh/8KM/rai//jx0u7W/97V/+Lh/7ul9/z4/+Xd/4UZ//r5/2VfeXl5/4OA/+HXYsRyoKCg/3xS//j3/6iL/+/tk9ee/9zR/+nhh4eHS7xd/5yA/6Ge/97c/7Cu/5Z74tjB/+Df/9fW/1VP/5Au09PT/5g9/9nR/2k3/8Ct/3lM6Pfr/3oE/3RH/5mW/+DF/6FO8+XBt7e33vPhP7dS/92//9va0M3G/+zlrOC1/66bzlkyasd5ccqAg9GQ/0BA/5Y47fjv5fXn/+/g+/78/2c0RrlY29O//6eR/8i3O7VP/4gf09HO/24/O7ZO09PSz8vE/5d01NTUObVNZ8Z20NDQN6fb/////1JLm9PtaL3kzen2/1NM2e74XLfi//7+/v7+//39tN7x/+Tb/4AP0dHR/3wH0NDR///+p9jvwOP00NHRdcLmyEcc+v36/f39PLdP/8eW0dHS89bM3o910tLS1XBP9+3HfM6J7N/C/2Yz////Pm5GyQAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAABI9SURBVHja7J29a+NK18BVRUQy2ARU2ZDS3WBII2wwCEGEXaQRdtA/ELAxxim8bYo0KdIY7Cbg9Ful86YJJIaEkMLFFutdntbNtvE2C4F5Z/RhjWR9W84m952Be9ceyaP5zZnzMUf37mHgf6IxFINiUAyKQTEoBsWgGBSDYlCMOO2mVZneD8vDh539b4+fFGPRurqe221YOf2MGK29uavVrs5ij2L99h9hXO7M5uuts58EIQzFG+MSLePe5WYUp8O5d9t5TQrhD+KJcfkF/+BhI46Lztyv7R0mhvADYXwpNuO4uJ77t73XDSg8ORh/ik04bsoOxe50XhwTmW5C4cXBBFBswPHFYWZbT08XlZ92z2x2twmFBwcTRJGY444Y4sDUhMvKLSGfszgU3j1BGE4KxPGagOKJUAzCvvYJjreYFCEcTDBFMo4D22EckP0Ve9g/FzEpgjmYEIokHI+2rS07wqhDwpXsbA/DiyIBR98WxpXzCiGOzk1U9Q7pXsPwpojN8Txd/fJ73xVkfbdH7W8Jw48iLsfj9UoaNZcGfLuOsKvm0TDm3hj+FDE5Tm1hvJz6Y/y8jOoyArtdGJcPQf4mDgehGrdHrhDljz3k9U10z+fTuY4RTBGLg/R9FeelfXLIs0QOPBAjjCIOxwEZiLz6xijz0xAKPyvrxWFgPD+Ew0fmuCJ/5Qie+uSV2UWkw57H+vtiXMwiCPEogTTmty3C3NYc430LxPDYY763WBiH5XCKTtS8RoX81T0x2TOHzGdnqWMg5QjSrRd08XURVTeOiED2zrETX/dr4W58IwwYhpHEb7ys7cOWfXy6v4yEEeAIt4uxigxJvVh5jppPuJWGiqeK8bzjZaXWXMcRTN3gpophKceD99W9MIuxgftz/L5jdbwkwzDs3vdWoOpcxTiG+/duEwNWsBu6f/bJ6+pmt3YaHSNOaJgmBlby2UFgzLUTP+H57hg46rj1PWzjMPf6JnpyJ+7pLz0MOJ3X+v7HqvmsDz8FxuFw/tLy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);
  background-repeat: no-repeat;
}

.mew-desc,
.triangle-label,
.wish-toast {
  position: absolute;
  text-align: center;
}

.footerTab .footerItem {
  text-decoration: none;
  color: #666;
  font-size: 16px;
  -webkit-box-flex: 1;
  text-align: center;
  line-height: 50px;
  height: 50px;
  display: block;
}

.footerTab .footerItem .tabIcon {
  vertical-align: middle;
  width: 28px;
  height: 31px;
  margin: 0 auto;
}

.footerTab .footerItem .tabIcon.index {
  background-position: 0 -46px;
  background-size: 112px;
}

.footerTab .footerItem .tabIcon.meishi {
  background-position: -45px -142px;
  background-size: 110px;
}

.footerTab .footerItem .tabIcon.wanle {
  background-position: -72px -126px;
  background-size: 100px;
}

.footerTab .footerItem .tabIcon.waimai {
  background-position: -1px -145px;
  background-size: 111px;
}

.footerTab .footerItem .tabIcon.movie {
  background-position: -77px -43px;
  background-size: 106px;
}

.footerTab .footerItem .tabIcon.myinfo {
  background-position: -45px -47px;
  background-size: 113px;
}

.footerTab .footerItem .tabText {
  font-size: 12px;
  -webkit-transform: scale(0.92);
  transform: scale(0.92);
  line-height: 16px;
  text-decoration: none;
}

.footerTab .footerItem.on .tabIcon.index {
  background-position: 0 1px;
  background-size: 112px;
}

.footerTab .footerItem.on .tabIcon.meishi {
  background-position: -45px -97px;
  background-size: 110px;
}

.footerTab .footerItem.on .tabIcon.wanle {
  background-position: -72px -87px;
  background-size: 100px;
}

.footerTab .footerItem.on .tabIcon.waimai {
  background-position: -1px -99px;
  background-size: 111px;
}

.footerTab .footerItem.on .tabIcon.movie {
  background-position: -76px -1px;
  background-size: 106px;
}

.footerTab .footerItem.on .tabIcon.myinfo {
  background-position: -45px -2px;
  background-size: 113px;
}

.footerTab .footerItem.on .tabText {
  color: #39b54d;
}

.mb-outline-b {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC)
    0 bottom repeat-x;
}

.mb-outline-t {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzOUQ0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzOUM0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqBKdxIAAAAYSURBVHjaYnz48OF/BiBg/P8fTDMABBgATToGolgmNfoAAAAASUVORK5CYII=)
    0 top repeat-x;
}

.mb-outline-tb {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzOUQ0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzOUM0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqBKdxIAAAAYSURBVHjaYnz48OF/BiBg/P8fTDMABBgATToGolgmNfoAAAAASUVORK5CYII=)
      0 top repeat-x,
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC)
      0 bottom repeat-x;
}

.mb-line-b {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
}

.mb-line-t {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==)
    0 top repeat-x;
}

.mb-line-tb {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==)
      0 top repeat-x,
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
      0 bottom repeat-x;
}

.mb-line-l {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjaGBoAAACBAEBHBEyvwAAAABJRU5ErkJggg==)
    left 0 repeat-y;
}

.mb-line-r {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjcGBwAAABBACBuS4d8AAAAABJRU5ErkJggg==)
    right 0 repeat-y;
}

.mb-line-lr {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjaGBoAAACBAEBHBEyvwAAAABJRU5ErkJggg==)
      left 0 repeat-y,
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjcGBwAAABBACBuS4d8AAAAABJRU5ErkJggg==)
      right 0 repeat-y;
}

.mb-line-all {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==)
      0 top repeat-x,
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjcGBwAAABBACBuS4d8AAAAABJRU5ErkJggg==)
      right 0 repeat-y,
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
      0 bottom repeat-x,
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjaGBoAAACBAEBHBEyvwAAAABJRU5ErkJggg==)
      left 0 repeat-y;
}

@media (-webkit-min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 3) {
  .mb-line-all,
  .mb-line-b,
  .mb-line-l,
  .mb-line-lr,
  .mb-line-r,
  .mb-line-t,
  .mb-line-tb,
  .mb-outline-b,
  .mb-outline-t,
  .mb-outline-tb {
    background-size: 1px 1px;
  }
}

body {
  font-size: 14px;
  color: #777;
}

strong {
  color: red;
}

::-webkit-scrollbar {
  height: 0 !important;
}

.hidden {
  display: none !important;
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.loader-wrap {
  text-align: center;
  line-height: 40px;
}

.loader-wrap .loader-img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzU2RDE5Q0I0NzNCMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzU2RDE5Q0M0NzNCMTFFNkEyMkFFN0M2MDc0NjIyN0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNTZEMTlDOTQ3M0IxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNTZEMTlDQTQ3M0IxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmqsYvkAAAPvSURBVHjazJlLSFRRGMfvY2p0ytDsaUn2IsMWvRZF1EYjiGybFLToAS2DoGXQInBVi0BaGBGE0KIgosKNRBEUSu+C6EFJoeEDmrIa9c7p/+F36vNwZ7zX5s6dAz9mxOHO7373O9/5zhl7661mK4JhgxnAAb8LeeFE4fyU/oMkd4HbIAPegdfgBbgLHoHRaX9TBBGuAv1gJv+dZRS/DoNroB08C3txJ4J0KM9xXSVu6BC4z+Lr4hYeAucMUeUjTmMnp8kZkIxLmPL2FKgBi8AWcBRcAQOGNL264BjoBMvjELa4MvSBr6AHXAaHwQqwDzwUkdc0gDtgYxzCucYYuAmaQAv4aEzISnAVbIhF2M7/b4rmdnBDRJmkU+ASqPMVtiMUVlN/5Ds4As4akaZK0uY3ER0VOjCR3FcrOG/U7HpwYqqUsA2KOVo5v6X0QRbPK2zFJEyCJ0GvkCaH47mEba6JToxR/gFOC2FiB1jrJ+waoirYvCl4HekC3cAT0i35hJ1Clzs7fB25aES5STdTjhA3UyFbxPJmjnu8jHtMuW6SHBFdKa2seMc4S8u02GwKy3TIWvGPHvbQUV4ldxwJY7KVgvB7FtVPe4kUdkUelEJK0PhiCFdKYXOJLgXhn4ZwcpKwsZsseJSnccEET75Ja0LCZymOpFKo8LdQzRHWXmkprESl0O8jnnhqKv15LKz/PSyFsyKyFh+CjBW787HyC/fK3PWMxaOsBCZdg1g4PC5zf4UzxsKRiqFTs4y+Zj2LjvPrcyk8Kiacy41GKkZh2oTOFhGmtvONFFa8NZf9RFWMwnug4Ill+YGeU7KNTAthivIsvstiD0qFlYihFO7064czRpSJxUU+u6A2cr8QBTYdGH7ItacbMLZKVC2WFkmWvvcAp6KuDEgD1ZFvE0pR/mZIV+tOKeKxF2wyWspOXX/znfz0c9WQqVETNtIha+Ju0GjU3U/gepCjKsUf9gzpWj4jcAu4LUpyGjSKnYXHBeCC32qb6yeDDCd6vSG9gPtS+hlg8D9TYA1oNpocxd/dZv07mg0kTGOEi3U9f07X5xQX9jSfPg6EaJSciZJlbePDPlfscDyuUu38hK2wwvpg4xUfZFQYO2uazfN56STpIb6JEfEoacWcw1FcxrIV/L1Zo62l8+SOXJENKkzjF3hqTRxG1wpp/VomZFwmYbzK90p0h4pvuJsrwniQrj7IyHLe0on6arAwz8Gh7TP3lA/6ml1cmQJvQ8IMOs99zI+5juuz6yOtcr+38cTUW7x/wgEIvW+azkhzu/cSzOWIVzLUfyRhn1UTjzjDn6cdw2fI9onG3CqWsEyVQb8SF9W2+48AAwCEmSvliW8SKQAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 20px;
  -webkit-animation: loader 1.2s linear;
  animation: loader 1.2s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.type-label {
  display: -webkit-inline-box;
  display: inline-flex;
  font-size: 8.76px;
  font-weight: 700;
  line-height: 15px;
  height: 15px;
  border: 1px solid #b9b7c5;
  border-radius: 2px;
  box-sizing: border-box;
}

.type-label > div {
  padding: 0 3px;
}

.type-label > div > span {
  display: inline-block;
}

.type-label .three-d {
  background-color: #b9b7c5;
  color: #fff;
}

.type-label .imax {
  color: #b9b7c5;
}

.discount-label {
  display: -webkit-inline-box;
  display: inline-flex;
}

.discount-label:before {
  content: "";
  display: block;
  width: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transform: translateX(2px);
  transform: translateX(2px);
}

.discount-label > .after {
  display: block;
  color: #fff;
  padding: 0.5px 4px 0 2px;
  line-height: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 0 2px 2px 0;
  font-size: 10px;
  font-weight: 700;
}

.discount-label.normal:before {
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAgAA4DAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACQcG/8QAGAEAAwEBAAAAAAAAAAAAAAAABQcIBgn/2gAMAwEAAhADEAAAAHgDEjwg+wtPogcfVTEsDVXcfVTEUjpHCp4QfYX/xAAnEAABAgUDAwUBAAAAAAAAAAABAgMEBQYHEQgxQRMhYQAQEhQVUf/aAAgBAQABPwC4dwKZtfR8dXFXR3QgYFr5L5U4o9ktoHKlHAA8+rz6hLiXpqt+fTqdxMPB9U/nypiJUGYVGwAAwFKxuojJPjAGrzUjHXyrRcnkr626blD6kS9nb7DgyFRCh/TskcJ8qPtq803R1ja0XOJKwtym5u+pcve3+u53KodR/o3SeU+Un2uHb+mboUfHUPV0D14GNa+K+FNqHdLiDwpJwQfV59PdxLLVW/IZ1JYmIg+qfz5sxDKLMW33wQRkJVjdGcg+ME//xAAnEQABAwIFAwUBAAAAAAAAAAABAgMFBkEABAcREiExURAiUmFxQv/aAAgBAgEBPwCdnI6m4p2QzyuLbY3PkmwAuSegGKurueq+TXmX3VJb39jYJ4oFulz5V3ONVNQHqylywwSMqySED5HsXD+/yLJ+yfTVTT96jZcvsAnKvElB+J7ls/ndJun7B9J2DjqjinY/PJ5NuDY+QbKBsQeoOKuoSepCTXlsw0pTe/scAPFYsd7HykncY//EACkRAAECAwQLAQAAAAAAAAAAAAECAwQFBgARMVEHEBITISJBQlJxgcH/2gAIAQMBAT8Ak8ojp5MW4KETetZ+AdScgBxNqZpCTUzAJYZQCu7mWQNpR/BkMBbR3RbVLyzfPC+IdAKj4jEIHruzOrR3WjVUSzcvG6IaACh5DALHvuyOqTzeOkcxbjYRVy0H4R1BzBHA2pmrpPU0vD7LgC7uZBI2kn9GRwNv/9k=);
}

.discount-label.normal > .after {
  background-color: #ff941a;
}

.discount-label.mew:before {
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAgAA4DAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABwgJCv/EABgBAAMBAQAAAAAAAAAAAAAAAAYHCQQF/9oADAMBAAIQAxAAAAC5WXvwRT1OiNuElRHHg1xGj1RHHhpWe0goIp6nX//EACUQAAECBQIHAQAAAAAAAAAAAAECAwQFBgcRCCEACRIxMkFRYf/aAAgBAQABPwC/d9Lc6bbTzm8t1ZyIKTyaGLjuMFx9w7IYaSSOtxasJSPp3wONXuvG/Wr650bW1X1hMIGUiJUZFTEFHrTCSxjcJSlKSAtzHk6R1KP5hI5rHMJnOs+766TpCNdYt9SsW4zIYTsJg+MoXHuD2VdmwfBH6teeOaxy9Zzowu+urKQgnX7fVVFuOyGL7iXvnK1wDh9FPdsnzR9KF44v3Yq3OpG085s1dWTCNk85hi27jAcYcG6H2lEHocQrCkn6N8jY6vNB1+9INzo2iawo+Yx0pMSoSKp4OAWqEmbG5SpKkghDmPJonqSfowo//8QAJhEAAQMDAAsBAAAAAAAAAAAAAQIEBQADYQYQESExM0FSocHhUf/aAAgBAgEBPwB27sMWyr907EjzgZNSUu8k3BWtRA6AHcPv6a0imlSjkoRy08MnuPrVpFCqi3JWjlq4YPafWp20sPmyrF0bUnxkVJRDyMvm2tJKehA3H7iv/8QAJxEAAgAEBAYDAQAAAAAAAAAAAQIDBAUGBxEhQQAQEjFRUhMyYZH/2gAIAQMBAT8Ate2qtd9cg0qmp1RYpyHgDdmOyqNSeLCwytewqMknKwVeLkPkilR1xG3JJzIXP6p2A/pwQwrl8PaAJmaUGemADEPop1EIHwO7+zfgHLBDFSXxCoAlppgJ6XAEQe6jQRQPB7P6t+EcrXuWrWhXINVpr9MWEcx4I3VhurDQjiwsTLYv2jJOSsZUi5D5IRYdaNuCNCVz+r9iOP/Z);
}

.discount-label.mew > .after {
  background-color: #ed1e24;
}

.discount-label-text {
  display: inline-block;
  margin-left: 8px;
  font-size: 13px;
}

.more {
  line-height: 40px;
  height: 40px;
  text-align: center;
}

.triangle-label {
  top: -20px;
  right: -20px;
  width: 37px;
  height: 37px;
  line-height: 1;
  background-color: #6bc87a;
  color: #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  font-size: 10px;
  font-weight: 700;
  padding-bottom: 1px;
}

.triangle-label:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: bottom;
}

.body .movie-detail .detail .content .type > span,
.mew-desc img {
  vertical-align: top;
}

.default-img-bg {
  background-color: #e1e1e1;
  background-size: 100% 100%;
}

.toast-box {
  max-width: 210px !important;
}

.alert_content {
  color: #333;
}

.mew-desc {
  width: 100%;
  bottom: 18px;
  z-index: -1;
}

.mew-desc img {
  width: 20px;
  display: inline-block;
}

.mew-desc span {
  color: #c1c0c5;
  font-size: 12px;
}

.util-m-share-container {
  display: none;
}

.wish-toast {
  width: 100px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 7%, 0.7);
  color: #fff;
  top: 50%;
  left: 0;
  right: 0;
  margin: -100px auto 0;
  padding: 10px;
}

.wish-toast .toast-bg {
  display: inline-block;
  width: 50px;
  margin: 20px 0 12px;
}

.wish-toast .tips {
  display: block;
}

body,
html {
  height: 100%;
}

.body > .cinema-list .locatebanner {
  bottom: 0;
}

.body .movie-detail {
  height: 188px;
  position: relative;
  cursor: pointer;
}

.body .movie-detail .movie-filter {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #333;
}

.body .movie-detail .poster-bg {
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  -webkit-filter: blur(1.2rem);
  filter: blur(1.2rem);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.55;
}

.body .movie-detail .detail {
  height: 150px;
  padding: 19px 30px 19px 15px;
}

.body .movie-detail .detail .poster img {
  width: 110px;
  height: 150px;
  box-sizing: border-box;
}

.body .movie-detail .detail .content {
  overflow-x: hidden;
  margin-left: 12.5px;
  line-height: 1;
  color: #fff;
}

.body .movie-detail .detail .content .title {
  font-size: 20px;
  margin-top: 2px;
  font-weight: 700;
  overflow: hidden;
}

.body .movie-detail .detail .content .score {
  font-size: 18px;
  font-weight: 700;
  color: #fc0;
  margin-top: 11px;
}

.body .movie-detail .detail .content .score span.no-score {
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}

.body .movie-detail .detail .content .pubDesc,
.body .movie-detail .detail .content .snum,
.body .movie-detail .detail .content .src,
.body .movie-detail .detail .content .title-en-name,
.body .movie-detail .detail .content .type {
  margin-top: 10px;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}

.body .movie-detail .detail .content .type .type-group {
  display: inline-block;
  width: 42px;
  opacity: 0.85;
}

.body .page,
.fixed .movie-detail {
  display: none;
}

.body .movie-detail .arrow-g {
  position: absolute;
  width: 10px;
  right: 15px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.body .nav-wrap,
.fixed .topbar {
  position: relative;
}

.body .cinema-list {
  margin-top: 0;
}

.body .tab .chosenTitle {
  color: #e54847;
}

.body #noListTip {
  text-align: center;
  margin-top: 10px;
}

.fixed {
  height: 100%;
  overflow: hidden;
}

.fixed .topbar {
  width: 100%;
  z-index: 100;
}

.fixed .body {
  overflow: hidden;
  height: 100%;
}

.fixed .blacker {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.fixed .page.singleton,
.fixed .page.singleton .page-wrap {
  overflow: hidden;
}

#showDays,
#showDays #timeline {
  overflow-x: scroll;
  height: 45px;
}

.fixed #showDays {
  position: relative;
  z-index: 100;
}

.fixed .nav-wrap.filter-nav-wrap {
  z-index: 100;
}

.fixed .close-tab,
.fixed .close-tab .page {
  display: block;
}

#showDays {
  width: 100%;
  background-color: #fff;
}

#showDays #timeline {
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

#showDays #timeline .showDay {
  position: relative;
  display: inline-block;
  width: 115px;
  line-height: 43px;
  margin-left: 4.5px;
  font-size: 14px;
  text-align: center;
  list-style: none;
  color: #666;
}

#showDays #timeline .showDay.predateShowDay {
  width: auto;
  padding-left: 10px;
}

#showDays #timeline .showDay.predateShowDay .isPredate {
  float: right;
  margin: 14px 3px;
  width: 26px;
  height: 15px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAeCAYAAABjTz27AAAAAXNSR0IArs4c6QAABJ9JREFUWAndmH+IlEUYx7+zu6mdldZF2VUGpUVC9gMJlaIuI7vzCBSJ/qioQ4ugwOCMiAr/sMgMCqs/+qtIrqBEjDw1ME0sEbI/hCBDKIhS+0FJnHdl502fZ3bf9d19971972492gZm5/k1z8x3nmfmnR0niv9Ul2pQr8jpNnldYrKmKU5HmfMena0et0g/uQDmLx1A+JoKetfdjUETFb+DAAzrAeb/pKZonvN9eg/moOvSuibCkZiq36anwHFDDs3tFpmERbMJctoYsPit4PqfFMNiERpT8V550rXLf6LLx+SgTif2xizS6K46Zgn1mAHpK00mth9rSHcmvDZCMKx72ey9o3VVGG2HhL3XAkL9T0IeCaZqi2tXv7F+u5bqlB6NVKF1OuKWqLtCNg5m/ICklYxvtXYZ1CwUARARvaL0rSseQk43ojO9SN8Z6O8xOhSvm2mnsFiPlCTWHOY03h3jE+T4ATl1s8JvJzynCbz6mVSIEnvkGUAUo5PXbNL3LQD/QtdTyM+hbYFfE1x5tUJ/AD0ioLHvoTDKGfhxWsgCtSmnl/D+u9GBd/o8y2iZIsRKzmfFbq1weEyTAu/VQbpcWKErMj8ykfdryM+oKBMgZnAHdS31WHk2LlB2TbqlVMsqiPNZgC9p/7OA2LUaJPfb4rNOo9nIm9HVipp1mUpEXw59h4l8cWEC24ifrBFqxFhFH05nQRTT13HLl042zrm4xU108TpOpBfYsNEpR8Su44R7IkzF61kifJyMsOhNh361NMXZyNqwXc3eXF+SJZrRACrg7OGEh1oC+95IJ2qpaspymsatoBXdLupMgMxk8tdDF6AX09pePVxKz6uhU0s2QD7cBIYY5I1UT9UKpy+qRWm86whH8qJIT1SuhDYAe2gHiEhnpKvXZgPUote5vqSGuXoQLq45bQ97pVqVlX8aQ/vT2Q2obwHYXu+GEDmu+2H1B/haD+gb8v1x60Q7hwF6IgfwV5GKm6iWZsWyTTtGiGYLtmusYlOOStSV+55FYyVLshYQ32HTC6h1LFKm87AuIP2s53B6kfL6KAzqdA3teoBcFvg83ybPJLzuC3zxpw9+BcCXxWQRORliaana0X4oUuBzPpeeXvhe18lN3sokvYCvm9SnDSHyQTjCD4P6NDW6a1nJk7TPRzbwM6wP9f6YzCJ0sMyTcvD7sfnN7wybPaiY8Cpkv0Z28dYig+5P+u3y+3jyiBVkD6Ebom6u1sXMhL7OHzynN+lwRBec3j9sULstfE9tLztz+pBlmcuE55jMOc6sglaQJOfp79hbRZ5UzOmxcj8Iv1sF+m0gMn2we3WxutxC3qBihTHfod9y/HXqD+2kz/SYuoJMTbkQXqd9OOmpHgDZXqods8WS11aIHwBlR20obrG+hngRu4GSSMgOkUqbIt5aDhs7PVuZcI+WAGbeafsKu05twa4DWb/OHeGTYGGKd8xCZ92gWXw10qZ+yqWMRkqNehFSXDVcnCMljobHuoa7nliHAQNYbA99Fl4eJ3b8xo82pAcNS4Hn09XiKZiTRmzMjU35FGxgnFaFp2BbqqZ/rLcsIzD2WP8v1uNyTE/IErcAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#showDays #timeline .showDay.chosen {
  border-bottom: 2px solid #f03d37;
  color: #f03d37;
}

.close-tab {
  position: relative;
  width: 100%;
  background: #fff;
  z-index: 100;
  overflow: scroll;
  display: none;
}

.close-tab .tab-content {
  font-size: 15px;
}

.close-tab .tab-content .page {
  position: relative !important;
  overflow: scroll;
}

.close-tab .tab-content .page .noItem {
  line-height: 150px;
  text-align: center;
  font-size: 15px;
  color: #999;
}

.close-tab .tab-content .page.special {
  min-height: 208px;
  overflow: hidden;
}

.close-tab .tab-content .page.special #special-content {
  min-height: 150px;
  max-height: 270px;
  overflow: scroll;
}

.close-tab .tab-content .page.special #special-content .item-title {
  margin-left: 12px;
  margin-top: 11px;
  font-size: 15px;
}

.close-tab .tab-content .page.special #special-content .item-list {
  margin: 0 12px 12px;
}

.close-tab .tab-content .page.special #special-content .item-list:after {
  display: block;
  clear: both;
  content: "";
}

.close-tab .tab-content .page.special #special-content .item-list .item {
  float: left;
  width: 21.3%;
  height: 30px;
  padding: 3px 0;
  margin-right: 3%;
  margin-top: 10px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.7rem;
}

.close-tab .tab-content .page.special #special-content .item-list .item.chosen {
  background: #fcf0f0;
  color: #f03d37;
  border: 1px solid #f03d37;
}

.close-tab
  .tab-content
  .page.special
  #special-content
  .item-list
  .item:nth-child(4n + 0) {
  margin-right: 0;
}

.close-tab .tab-content .page.special #special-btn {
  height: 60px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  margin-top: 10px;
  background: #fafafa;
}

.close-tab .tab-content .page.special #special-btn .btn {
  display: inline-block;
  height: 34px;
  width: 21.3%;
  margin: 13px 11px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  text-align: center;
  line-height: 34px;
  font-size: 14px;
}

.close-tab .tab-content .page.special #special-btn #confirm-btn {
  float: right;
  background: #f03d37;
  border: 1px solid #f03d37;
  color: #fff;
}

.close-tab .tab-content .page.brand {
  min-height: 150px;
  max-height: 352px;
}

.close-tab .tab-content .page.brand #brand-content .brand-list {
  position: relative;
  line-height: 44px;
  height: 44px;
  padding: 0 15px 0 26px;
  border-bottom: 1px solid #e5e5e5;
  color: #333;
}

.close-tab .tab-content .page.brand #brand-content .brand-list span {
  display: inline-block;
  width: 49%;
}

.close-tab .tab-content .page.brand #brand-content .brand-list .brand-count {
  text-align: right;
  color: #8f9296;
  font-size: 12px;
}

.close-tab .tab-content .page.brand #brand-content .item.chosen,
.close-tab .tab-content .page.brand #brand-content .item.chosen .brand-count {
  color: #dd403b;
}

.close-tab .tab-content .page.brand #brand-content .item.chosen:before {
  content: "";
  display: block;
  position: absolute;
  left: 8px;
  top: 18px;
  width: 11.5px;
  height: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.close-tab .tab-content .page.region #region-tab {
  height: 44px;
}

.close-tab .tab-content .page.region #region-tab ul {
  padding: 0;
  margin: 0;
}

.close-tab .tab-content .page.region #region-tab ul li {
  position: relative;
  display: inline-block;
  padding: 0 10px;
  width: 50%;
  height: 100%;
  line-height: 44px;
  text-align: center;
}

.close-tab .tab-content .page.region #region-tab ul li:before {
  content: none;
}

.close-tab .tab-content .page.region #region-tab ul li.chosen {
  color: #f03d37;
}

.close-tab .tab-content .page.region #region-tab ul li.chosen:after {
  content: "";
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  width: 90%;
  border-top: 2px solid #f03d37;
}

.close-tab .tab-content .page.region #region-list {
  background: #f5f5f5;
  height: 380px;
}

.close-tab .tab-content .page.region #region-list .clearfix {
  clear: both;
}

.close-tab .tab-content .page.region #region-list .item {
  border: 0;
}

.close-tab .tab-content .page.region #region-list #region-sidenav {
  width: 35%;
  height: 100%;
  float: left;
  overflow: scroll;
}

.close-tab .tab-content .page.region #region-list #region-sidenav #district,
.close-tab .tab-content .page.region #region-list #region-sidenav #subway {
  min-height: 100%;
  background: #fff;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-sidenav
  #district
  .district-li,
.close-tab
  .tab-content
  .page.region
  #region-list
  #region-sidenav
  #subway
  .district-li {
  height: 44px;
  padding-left: 10px;
  line-height: 44px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-sidenav
  #district
  .chosen,
.close-tab
  .tab-content
  .page.region
  #region-list
  #region-sidenav
  #subway
  .chosen {
  color: #f03d37;
  background: #f5f5f5;
}

.close-tab .tab-content .page.region #region-list #region-list-item {
  width: 65%;
  height: 100%;
  float: right;
  overflow: scroll;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list {
  background: #f5f5f5;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item {
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 0 0 25px;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item
  span {
  display: inline-block;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item
  span.item-name {
  width: 80%;
  font-size: 14px;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item
  span.item-count {
  float: right;
  width: 20px;
  margin-right: 10px;
  color: #8f9296;
  font-size: 12px;
  text-align: right;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item.chosen,
.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item.chosen
  span.item-count,
.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item.chosen
  span.item-name {
  color: #f03d37;
}

.close-tab
  .tab-content
  .page.region
  #region-list
  #region-list-item
  #filter-list
  .item.chosen:before {
  content: "";
  display: block;
  position: absolute;
  left: 8px;
  top: 19px;
  width: 11.5px;
  height: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.fixedNav #showDays,
.fixedNav .nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  padding-top: env(safe-area-inset-top);
}

.cinema .page-wrap.fix-nav .nav-wrap {
  position: fixed;
}

.triangle-label.mew {
  background-color: #ed1e24 !important;
}

.triangle-label.fav {
  background-color: #f8a586 !important;
}

.triangle-label.used {
  background-color: #6bc87a !important;
}

.cinema-list .list-wrap {
  background-color: #fff;
}

.cinema-list .list-wrap .item {
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.cinema-list .list-wrap .title-block {
  display: block;
}

.cinema-list .list-wrap .title-block .title {
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
}

.cinema-list .list-wrap .title-block .label-block {
  height: 17px;
  line-height: 17px;
  margin-top: 4px;
  margin-bottom: 4px;
  overflow: hidden;
  font-size: 0;
  flex-shrink: 0;
}

.cinema-list .list-wrap .title-block .label-block > div {
  position: relative;
  display: inline-block;
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  font-size: 0.6rem;
}

.cinema-list .list-wrap .title-block .label-block > div + div {
  margin-left: 5px;
}

.cinema-list .list-wrap .title-block .label-block div.allowRefund,
.cinema-list .list-wrap .title-block .label-block div.endorse,
.cinema-list .list-wrap .title-block .label-block div.hallType,
.cinema-list .list-wrap .title-block .label-block div.sell {
  color: #589daf;
  border: 1px solid #589daf;
}

.cinema-list .list-wrap .title-block .label-block div.snack,
.cinema-list .list-wrap .title-block .label-block div.vipTag {
  color: #f90;
  border: 1px solid #f90;
}

.cinema-list .list-wrap .price-block {
  padding-top: 9px;
  padding-left: 3px;
}

.cinema-list .list-wrap .price-block .d,
.cinema-list .list-wrap .price-block .price,
.cinema-list .list-wrap .price-block .q {
  font-size: 11px;
  color: #f03d37;
}

.cinema-list .list-wrap .price-block .q {
  margin-left: 3px;
}

.cinema-list .list-wrap .price-block .price {
  font-size: 18px;
}

.cinema-list .list-wrap .location-block {
  margin-top: 6px;
  font-size: 13px;
  color: #666;
}

.cinema-list .list-wrap .location-block .distance,
.cinema-list .list-wrap .location-block .region {
  margin-left: 5px;
}

.cinema-list .list-wrap .min-show-block {
  padding: 0 15px 0 0;
  margin-right: -15px;
  line-height: 1.5;
  font-size: 0;
}

.cinema-list .list-wrap .min-show-block > span {
  font-size: 12px;
  color: #999;
}

.cinema-list .list-wrap .min-show-block > span.time-line {
  display: inline-block;
  position: relative;
}

.cinema-list .list-wrap .min-show-block > span.time-line + span.time-line {
  margin-left: 14px;
}

.cinema-list
  .list-wrap
  .min-show-block
  > span.time-line
  + span.time-line:before {
  content: "";
  display: block;
  position: absolute;
  height: 15px;
  width: 1px;
  left: -7px;
  background: #e1e1e1;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.cinema-list .list-wrap .show-block {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding-top: 15px;
  margin: 0 -15px;
  font-size: 0;
}

.cinema-list .list-wrap .show-block .show-wrap {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 6px 10px;
  border-radius: 6px;
  line-height: 1;
  text-align: center;
}

.cinema-list .list-wrap .show-block .show-wrap:first-child {
  margin-left: 15px;
}

.cinema-list .list-wrap .show-block .show-wrap .time {
  font-size: 17px;
  color: #333;
  margin-top: 5px;
}

.cinema-list .list-wrap .show-block .show-wrap .info {
  padding: 5px 0;
  font-size: 10px;
  color: #999;
}

.cinema-list .list-wrap .show-block .show-wrap .price {
  font-size: 0;
  color: #ef4238;
}

.cinema-list .list-wrap .show-block .show-wrap .price > span {
  font-size: 11px;
  display: inline-block;
  -webkit-transform: translateX(-1px);
  transform: translateX(-1px);
}

.cinema-list .list-wrap .show-block .show-wrap .triangle-label {
  background-color: #fca832;
}

.cinema-list .list-wrap .show-block .show-wrap .nextDay {
  position: absolute;
  width: 40px;
  height: 12px;
  top: -7px;
  left: 15px;
  background: url(data:image/png;base64,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)
    no-repeat;
  background-size: 100% 100%;
}

.cinema-list .list-wrap .show-block .show-wrap + .show-wrap {
  margin-left: 12.5px;
}

.cinema-list .list-wrap .show-block .show-wrap.more {
  vertical-align: top;
  font-size: 0;
}

.cinema-list .list-wrap .show-block .show-wrap.more > span {
  font-size: 13px;
}

.cinema-list .no-cinema {
  width: 50%;
  padding-top: 20%;
  margin: auto;
}

.cinema-list .no-cinema img {
  display: block;
  width: 40%;
  margin: auto;
}

.cinema-list .no-cinema .no-cinema-tip {
  text-align: center;
}

.cinema-list .discount-block {
  color: #999;
  margin-bottom: 4px;
}

.cinema-list .discount-block .discount-label {
  width: 15px;
  height: 14px;
  position: relative;
  top: 3px;
}

.cinema-list .discount-block .discount-label:before {
  display: none;
}

.cinema-list .discount-block .discount-label > .after {
  width: 16px;
  height: 15px;
  padding: 3px;
  float: left;
  margin-right: 3px;
  background-size: 100% 100% !important;
}

.cinema-list .discount-block .discount-label > .after.platform {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAA0VJREFUSA3FV1tIVFEUXXccNc3RSsgMX6EooehHQZSZFWSaBPURSR9hQUSR/UT+9BEU/UgfQS8qehIUQgV99KKPLIugLIyMiuxFNEo+Ksu3Tmt75jLece7xkjhuOHPOfpy91z1n733nGiD5ziAFPtRwWcx5rsgmjQx8p+86GKg2tuGb4Q/eyMCzJi1oKMcGOgiiwD3y5OEOLoBUzBoXF8tDAQyLjLFdDJQclmChgyQLgP+nlBJAxgTIrd0bMQ0wNBjz96rtLfX2bnzDwFCvrd7wnWIW2FHFByA+007rTP67GbiaZWurP4G764CIaNvNKDyqdI+r7G2G+ux11OgBdL6mRSzb07nQTjzzlLzAfxXBVnVbgcHuYKmF1wMQU1ckkLkReHceaH9l2YzEAsW3Pg2S5wM5W4BH263yENz4AMxNXV+AjiAA/V1KGyyPSjB3jTs7B5DBfEhabHUYb15BtVUek2TlNZxzAC8OAJ9vWF2V3VH87VKrPGM9UHLdKrPhnANYeRkYHrC6cU9XfOVPq1zyxiGND0Du2a6Oi5mYQnVMOJOkea25BzTXAmaOmLoQsx5AQg6QvlZVgjyVi+YyG/7Zk67WCw+yXGPYMzikbKX75VQC3Xz1P9sXImxApAcQPQPI3sxaZisdZkORpiJtVWp7sAf4ekutB/4AMgY5+n8BfbwSAbviktK/PBSIGLTSt2IxdscBiazrH88BTwaQtQloPKwcF50EWp8A7y9a3ebuAjqbFKiuT0Bvm1U/itO8afxWebuB1TfV0SdkAwv2A1EeKnnM7Y3AsrNsVBWjXHI5exGw6po6CU1w2aQHEMlA+XuApuN84r/WIMK9OQE0EFDRaSA2ma9mlmPhMXbAHbz/FqCUwM1KGbt7RKIHkFtFB8zqJv9Lx3QSGW+uALnf2vkM6AXmLAVSy1Qu3N8AxKUBS44EbEOs9EmYyid6yyM2j1HuVaicZeZ9qNbmr5yW/Dn5yPITEtv6ncDMPDIGh0+kY0ifhK4odYT9nYGNkoRp5arkAlL6HwLaGvjSugD08Pgdkh6AQycTMdPnwEQ8O9wrAJg9U0ZeF/PjwZSFZ+wp/zRzGfxAlG80jis8iXBch3ckFmNK7H9lNNyRgjo67AAAAABJRU5ErkJggg==)
    no-repeat;
}

.cinema-list .discount-block .discount-label > .after.card {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==)
    no-repeat;
}

.cinema-list .discount-block .discount-label > .after.merchant {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAqxJREFUSA3Fl7tKJEEUhr8eZbwi3mUXRUFBFGERFBTRXTEw0EQE9QXMjBfNJt5AMBN9AE1EH2HWSBCDQQNTZVhF8Yb38TJbZ2uHnra7nB5HxwNN1/mr6vx/1zlV3W2hLB4K1XJ//0s1v6vrq2AfaH9U7N/k5f20QqGo9Y88FosQj5d/IKk7tGWdEgx+y/3/5NklFznywGrVA1jWD7e8LCGKO6CUfMkSnZtGcQfcqAEJqKGlpYbOt8O5vqe2tsL4OMzOQlERtLWlnnpyApubr47zL6CzEw4O4OwMmpqgrw/2983BKyv1+HcRUFamSVdXnYTz804/2ZuY0CuVjHm0/dVARwdqy0Ak4hEiMyi1gJIS6O6G7W14eMiMzWN26hoYGYH8fLi9dU/v7XVjCaSqCm5uEp7x/rqA9nZobnZPjsXg/FyvTKK3uBien52kR0eJXuPdLEC22vCwXvq6OmcAqYWX9TA5CZeXsLzsHJvCM9fA0xNcXMDKineIgQFobPTuSwM1C7i7g8VFkOV+acEg9PeD7PUMzZwCCexVeIJLSuRojkbFs62lBaanbV9aa2uwu+vEkrzXBSQNdDQbGkBSdHjogJGi29pyY07E4b1NQH095ORAbS3s7dkB5ezf2LB9Hy1zDZgmy+4QAVIjg4OmUb7x9AXI4WNZsLAANTUwNKTrwTelc2B6KSgshK4ufTZI/uXlNDami1JOSzkH0rT0BPT06NyHw5pmZ0efiKOjUF2tP1impuD6WqdIVkpqRYReXXlKS0+AvP/X1+H42A4mW3FuDioq9CtbaqSgQF+5KrzsFhFkMCs+MxM39NmwBJJzXq53Nn8r8Pj4zrR2OPksV99Zn2SKWz7Lw59ELz8n4YD8o6lVOM26COFU3AH5QZR/NCVgKSvp0ClfEk7h/gtUublRgtVXDgAAAABJRU5ErkJggg==)
    no-repeat;
}

.cinema-list .discount-block .discount-label > .after.coupon {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAA7BJREFUSA3FV0tME2EQ/nbb0tLyphQhBUGQh4IENQYkIiKSyMGbR018xEQ9cEMvKGpihHgxevCEJ+WAxkSN8SRoFPAikvCQl1aBggIF5P3qOv+GJd0u3baExyTb3X/mn2/mn5l//v4cGDW9tQLOKgjCURrFirzN+7GD4z4AfBlySvo50bjgbAGEiM2zuRYy5wDHZ/HiyrfcOHOILdhZRQ6ggA23iQp4ynvMNhmnIAgxLAI+UbQuAMl6o2zukeAIXIneKeMl6gORT3xfyWcHKuPT8SLlIFwVLpPxS5Z4ma0HCRmosKbIeGoDVzy1eSjv60RKoAlnzLRjV4hF4OOkQxqiKMSMkjALSm1tqzxvH1pvE0I1WrCH0ZO/fUgyGBEfYEAsPVYKd9fstDhm8mxTCGpGBjCxvCjyJpaX6HuJiTwSh8bXgkcpCVg4b/oRUlesW/1dqKBHjbw6YNbqYNYGyDCMvAbv9+TipWMIlfYemcx1MLK0gJGlRVeW4ttrChiAO8j12CQEkhM3+jvRtzCnAPWHoerA+ag4HAuJVOCdCo/GOOX5blyaQubOqPs3iurhPnf26ljVgQCOg0mjWZ1s4rUoDouCbW4GzTMTMpmB0+BkuAVfpyfwa35mVYdhqJHXGpCULVQHb9IOIZJqIr+tEQOLytDfsabioiUOxzua0D47Jamqvn3qA6kGExoy8rBDp0dhe9OaxpmVcqqJd+PDqKcCzQsKVzUsCVUjEKHRody6m9ptAgao2Oy06p8UfjXScTzSqGHtM4bgKfWEa787SG/eo4rHGgimKm/PKoCRaoCB1I4O4mHiXjHviXQmZJKBV2NDMmA9GS+hAi2mFARRvTzelYmiUDOSv9Vh2rksmysNVCNwOiIGDZNjipDXpedgURBQ/P2LhCO+2WHVnV2I3NZPaJoaRxTVTXpgkKxdyxRo4DECbGKtY9B9PoppRQX0nO1pVsjMdGIyGl1pPsPUiIZdzgqFAjF8KkJJ0URpuUenYgtttWeUX3diqWE06EdzUo2AqwG2E56nHICFdsIJyvFaGWX5/jE3jSkP+XbFk769OsDyeDsuFReoK3YT+OHWz+hdaTRX6f+AnuexTMdZFhXlOeoB9+29ErZPb68OLAhO7Kdjlu2ER39sYvFJyMxoIa2akYPyXmprRTUd2f6Q6i7wB2i9c/0qwvUaUdPj6Zai3GtqGhspI9ssAvUbieknVj05QHc00DVpy4nZ5Mt4dkFkdzRKRc2WpIOlXLRFNsn2fw7wH5Lrel5PAAAAAElFTkSuQmCC)
    no-repeat;
}

.cinema-list .discount-block .discount-label > .after.star {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAplJREFUSA3FV0trFEEQ/qpnJpvVNSQmSFYjMRrRRDTRIIKo60kPohevXr0Lgv4EMb/BgzdPOXpRCb4uihGzgvGxkRVcEwgqBjWP2em2erIL+5hHL+tuCnZ7uqq6vq+6unumCSzq9tSAK2lSETJQaqfWtUyIvpHCE0eoG3Tz8lfywRVmlcL2loEGBCbCD4cwZvuZQ7UVXPPRCbuKJoUCzgYQbItKYwvmkm4LWiCISjOBzRXbCD7ZAfvChJFr2UmtrMO7P1PuhrZmBBwLYjgN+aEA9fNPaLCygXb3QvR3wysrIlozAqUAXvYL1PxiRLgNk3VmFHRkMNZPOzREwMocAo4PxwamnlSsT9mhIQKq8B1qabk8NrTV5aIdXaH2SkNDBGRu0agElOpsDQH7/DjgGiytLR2AJysTDX02mwHeUsXptwC3xuIWjVzNCFgC1ukReI+ykLP5qsDOtYuQMzl4z+aq9KYdIwLi8CDIYdetCYjxPdWx+Yyg/p56fclLzhWANbd6TEXPiIB1bC/U6jqssaGKoaVHQaCBXlh9wate5peaIyBO7AdSSbh3HgK//tYRcK5f4hLMw3v6rs5mooicAerbxrUfhfec67vK09iVDIhJQMIJtulFG7NrIgmgO8Vn/2/Il59gnRqBdfJgAAHAmtjn/2qNxQdvIF9/rlVX9Wnt1hR/F0RIJ2ens9dZJur5OlfPQWbz8F58rA/S9AzokBpci17JgauZ+Wv98sqGX4P/9SnVBLCvZED8PRAqNr+qjw5BHNgV6uLenQ5dC7EE5PsCwHu9KZHhVY4n8CrXFHbc4E3/JmQCtBDHsnV2WuCDFI9bBxAdWWML/47G16Ro1/9v9a9mfD8U+oKo72j8SrnXnnLQgsbyMRn7H2L+wgj6kKPPAAAAAElFTkSuQmCC)
    no-repeat;
}

.cinema-list .discount-block .discount-label-text {
  margin-left: 0;
  font-size: 11px;
}

.cinema-list .location-block,
.cinema-list .price-block,
.cinema-list .title-block {
  line-height: 1.5;
}

.cinema-list .icon-label {
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  background-size: contain;
}

.cinema-list .icon-label.used {
  background-image: url(data:image/png;base64,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);
}

.cinema-list .icon-label.fav {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABpCAYAAAA5gg06AAAABGdBTUEAALGPC/xhBQAABYlJREFUeAHt282PFEUUAPBXrJtdliUbNR5AieC6IF6MBm9+Ho1/ANHEgyYcPBoj0YuoVzl4NpyIiQc9GQmJiYrGoxHXjwBBJaIiiTFKlo+sy0zxXg2FPUtPz3R1VfWr6ldJUz3dXVWv349qprsH1TsCb4CGAyCFbQYURSZQbH1MYAZJoBJBEii+UDdmkg1RLn02E3zqm5AoNIHiA0SRlCLRDoGiLPAoI5EoPIFKAEmgEkESqPahKi93xfDk0lfMRtz1iZEoLIGKi2NHq4UkUDZtcevaSJ2FWtgzkLnwdVwhHM0JqXNQ87tBPfKNwdFfPQRw8URUqA2uo009ja84FLzp2j6ldmrpAKip2cGy9Hr00J1nko00+y8Tc4ugnjgFSk2ZU9a6B/rYLoDLP9sUBK+dZ5KNLPcZpRb33wCicyYsdc8r9vSj1I1nko0yyxk1swXUk2fwMjdjT9PUurcK+vPtAKvnh7aH+tB4JtnAcpxRasdLNwHR+RIa7YtVvM0kG3A2M2puCdRjywiy0Z7aUK17V0B/+QD+23R6aHuID95mkg0uixk1exeohz8aCUTnSnh0DMxus6cerPaORJEmC7VhDmDbPnNPpObvG5t0OkY9ivdP2AaobaDi/XJXjJPtpU9NA2y6Fxf8Kj2/CxTVtCw8WDl7iue2fp0uf3DhOMClU6BxgYu4UH3pJwC9tv7wWp+DIlEk7KB2vAxqJ96c3rK5VqJcD9ZXV0Cffgvgl4OuXUCQy10xGm6XPrV1bzQgygP9ZVBb9hZTUns9OBJFxAlKn3wNdP9q7US5NqCx9MlXXZubdlGQaCQ2UH9/CvrbZ4Ee74Qu5hHS8WcAcMwmJRoSBckG6s8PEOo5hOo3yV1lWwOEY8D5DyuPm2RnVCQKiA3UufdBLz8fBIrw9fILADiGjxIdiRXUH4dB//CijzwO9WH6xL59lVaQKHg2M+rsu6B/f89XPgd9YZ8+S/D7pHHBsriPoud05p1Rs3Rora+/a/L7PK+1mWTxWMwoeki68r0Nyb2mPgI8cG0diTLCAmrlR3cc29JHH7avQs0CieJpHUo1u9SZnProo4BjV9kgUUCtQm3cbnPiXvvoo2R0VkgUX2tQ+LOtxsVHHyVBsEOiGKNDzdwJanqhJD31Npk+ZrbWazTB0SyRKO6oUJvvr0yVeUh65SxoWsY9nB3TV+VAI3ayRaJ4o0GNuEzpy79C/7t9oD+5DfRndw8WXDfbcF9pma8GL20zZiNrJIo9BpTatHMoTXrtX+if2A/6C3xb+9shfHO58v9+WsdttM8cg8cWy/q+ivtc19kj0YkFh6JX31h0/z/QZ97B39Qt4pvUtwH6q2Z76R+0D4+hY00bbGvK9b5K2zhu9HBz4DiyQ7Ngj5CmbwW44yl873MMf/B4ziEybIJfPuD2xwH+Ogqw9o9bHyNaJYVE5xAMakSCOGxODqmLUEkidQ0qWaQuQSWN1BWo5JG6AJUFUu5Q2SDlDJUVUq5Q2SHlCJUlUm5Q2SLlBJU1Ui5Q2SPlANUJpNShOoOUMlSnkFKF6hxSilCdREoNqrNIKUF1GikVqM4jpQAlSKSEhfOvkARpYMQaSpAKSLTKcUYJ0jokjlCCVILEDUqQRiBxghKkCiQuUII0BokDlCBNgNQ2lCBNiNQmlCDVQGoLSpBqIrUBJUgOSLGhBMkRKSaUIDVAigUlSA2RYkAJkgek0FCC5AkpJJQgeUQKBSVInpFCQAlSACTfUIIUCMknlCAFRPIFJUiBkXxACVIEpKZQghQJqQmUIEVEcoUSpMhILlCC1AJSXShBagmpDpQgtYg0KZQgtYw0CZQgMUAaByVITJCqoASJEdIoKEFihlQGJUgMkcqgmIYpYdF/De19DFoywTwDBHUNk10+Cd/6zecAAAAASUVORK5CYII=);
}

.cinema-list .icon-label.vip {
  background-image: url(data:image/png;base64,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);
}

.nav-wrap.filter-nav-wrap {
  width: 100%;
  height: 40px;
  z-index: 10;
  background-color: #fff;
}

.nav-wrap.filter-nav-wrap .tab {
  display: -webkit-box;
  display: flex;
}

.nav-wrap.filter-nav-wrap .tab .item {
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
  line-height: 40px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  font-size: 13px;
  text-overflow: ellipsis;
}

.nav-wrap.filter-nav-wrap .tab .item .drop {
  display: inline-block;
  position: absolute;
  top: 18px;
  width: 0;
  height: 0;
  margin-left: 4px;
  border: 4px solid transparent;
  border-top-color: #b0b0b0;
}

.nav-wrap.filter-nav-wrap .tab .item.chosenTitle .drop {
  border-bottom-color: #f03d37;
  border-top-color: transparent;
  top: 14px;
}

.nav-wrap.filter-nav-wrap .tab .item.chosenTitle.filterSlideUp .drop {
  border-top-color: #f03d3f;
  border-bottom-color: transparent;
  top: 18px;
}

.nav-wrap.filter-nav-wrap .tab .item + .item:before {
  content: "";
  display: block;
  position: absolute;
  height: 20px;
  top: 10px;
  left: 0;
  border-left: 1px solid #e8e8e8;
}

.nav-wrap.filter-nav-wrap .tab-content .page {
  background-color: #fff;
  overflow: auto;
  z-index: 999;
}

.nav-wrap.filter-nav-wrap .tab-content .page .item {
  font-size: 15px;
  padding: 0 15px;
}

.nav-wrap.filter-nav-wrap .tab-content .page .item.active {
  color: #ff970c;
}
</style>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  data() {
    return {
      seachLists: [
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/mseach1", //横店
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/mseach2", //万达
        "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/mseach3" //中影
      ],
      s_data: [],
     c_data: [],
     history_data:[],
     history_data2:[],
      history_show: false,
      text: "",
      c_show: false,
      h_show: true
    };
  },
  created() {
    this.setAadd();
  },
  methods: {
    ...mapMutations(["setAadd"]),
    async axi(url) {
      let lists = await this.$axios(url);
      this.s_data = lists.data.cinemas.list;
    },
    allData() {
      this.h_show = false;
      this.history_show = false;
    },
    detail(){
      this.$router.push({ path: "detail" });
    },
    active_history(index){
        // this.axi(this.seachLists[index])
        this.history_show = false;
        if(this.history_data[index]=="万达"){
        this.but_text.value="万达";
        this.axi(this.seachLists[1])
        }else if(this.history_data[index]=="横店"){
        this.but_text.value="横店";
        this.axi(this.seachLists[0])

        }else if(this.history_data[index]=="中影"){
        this.but_text.value="中影";
        this.axi(this.seachLists[2])

        }
         this.c_show = true;
    },
    go(){
        this.$router.go(-1);
    },
    history_delete(index){
        this.history_data.splice(index,1)
        console.log(this.history_data)
    },
    text_delete(){
        this.but_text.value=""
        this.history_show = true;
        this.c_show=false;
    }
  },
  mounted() {
    this.but_text = document.getElementsByTagName("input")[0];
    this.but_text.onkeyup = function(e) {
      this.text1 = this.but_text.value.match(/^横店/g);
      this.text2 = this.but_text.value.match(/^万达/g);
      this.text3 = this.but_text.value.match(/^中影/g);
      if (this.text1) {
        this.axi(this.seachLists[0]);
        if (this.history_data.indexOf("横店") == -1) {
          this.history_data.push("横店");
        }
        this.c_show = true;
      } else if (this.text2) {
        this.axi(this.seachLists[1]);
        if (this.history_data.indexOf("万达") == -1) {
          this.history_data.push("万达");
        }
        this.c_show = true;
      } else if (this.text3) {
        this.axi(this.seachLists[2]);
        if (this.history_data.indexOf("中影") == -1) {
          this.history_data.push("中影");
        }
        this.c_show = true;
      } else {
        this.c_show = false;
      }
      
        if (this.but_text.value == "") {
          if (this.history_data.length != 0) {
            this.history_show = true;
          } else {
            this.history_show = false;
          }
        }else{
             this.history_show = false;
        }
        
    }.bind(this);
  }
});
</script>
