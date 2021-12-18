"use strict";(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[6478],{1380:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-6e7f8c98",path:"/back/rust/WindowsRust%E5%AE%89%E8%A3%85/WindowsRust%E5%AE%89%E8%A3%85.html",title:"Windows 上用国内源安装Rust",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"一、获取安装包",slug:"一、获取安装包",children:[]},{level:2,title:"二、修改环境变量",slug:"二、修改环境变量",children:[]},{level:2,title:"三、运行安装包",slug:"三、运行安装包",children:[]}],filePathRelative:"back/rust/WindowsRust安装/WindowsRust安装.md",git:{updatedTime:1631856991e3,contributors:[]}}},813:(e,s,n)=>{n.r(s),n.d(s,{default:()=>c});var a=n(6252);const l=(0,a._)("h1",{id:"windows-上用国内源安装rust",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#windows-上用国内源安装rust","aria-hidden":"true"},"#"),(0,a.Uk)(" Windows 上用国内源安装Rust")],-1),r=(0,a._)("h2",{id:"一、获取安装包",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#一、获取安装包","aria-hidden":"true"},"#"),(0,a.Uk)(" 一、获取安装包")],-1),t=(0,a.Uk)("在Rust官网上下载安装包"),u=(0,a._)("br",null,null,-1),i={href:"https://www.rust-lang.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("官网链接"),o=(0,a.Uk)(":https://www.rust-lang.org/zh-CN/"),h=(0,a.uE)('<h2 id="二、修改环境变量" tabindex="-1"><a class="header-anchor" href="#二、修改环境变量" aria-hidden="true">#</a> 二、修改环境变量</h2><ul><li>在安装包所在目录运行powershell，并修改环境变量为国内源</li></ul><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token variable">$env</span>:RUSTUP_DIST_SERVER=<span class="token string">&quot;https://mirrors.tuna.tsinghua.edu.cn/rustup&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="三、运行安装包" tabindex="-1"><a class="header-anchor" href="#三、运行安装包" aria-hidden="true">#</a> 三、运行安装包</h2><ul><li>开始安装，并选择自己需要的编译器环境</li></ul><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token punctuation">.</span>\\rustup<span class="token operator">-</span>init<span class="token punctuation">.</span>exe\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),c={render:function(e,s){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,r,(0,a._)("ul",null,[(0,a._)("li",null,[t,u,(0,a._)("a",i,[d,(0,a.Wm)(n)]),o])]),h],64)}}}}]);