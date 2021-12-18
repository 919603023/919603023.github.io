"use strict";(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[9494],{795:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-4e90abc0",path:"/front/vue/_blog/Vue%E7%9A%84%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B/Vue%E7%9A%84%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"front/vue/_blog/Vue的简单示例/Vue的简单示例.md",git:{updatedTime:1629171763e3,contributors:[]}}},456:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(6252),t=a(3577);const e=(0,p.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>_你好， {{ msg }}_\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RedDiv</span><span class="token punctuation">&gt;</span></span>\n\n_当前计数为： {{ count }}_\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RedDiv</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">RedDiv</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>\n  <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;red-div&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  ctx<span class="token punctuation">.</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    RedDiv<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&#39;Markdown 中的 Vue&#39;</span>\n    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      msg<span class="token punctuation">,</span>\n      count<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.red-div</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>',1);var c=a(2262);const l={components:{RedDiv:(n,s)=>(0,p.h)("div",{class:"red-div"},s.slots.default())},setup:()=>({msg:"Markdown 中的 Vue",count:(0,c.iH)(0)}),render:function(n,s,a,c,l,o){const u=(0,p.up)("RedDiv");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("p",null,[(0,p._)("em",null,"你好， "+(0,t.zw)(c.msg),1)]),(0,p.Wm)(u,null,{default:(0,p.w5)((()=>[(0,p._)("p",null,[(0,p._)("em",null,"当前计数为： "+(0,t.zw)(c.count),1)])])),_:1}),(0,p._)("p",null,[(0,p._)("button",{onClick:s[0]||(s[0]=n=>c.count++)},"点我！")]),e],64)}}}}]);