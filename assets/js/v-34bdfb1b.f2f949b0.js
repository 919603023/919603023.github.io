"use strict";(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[6400],{2746:(e,l,n)=>{n.r(l),n.d(l,{data:()=>a});const a={key:"v-34bdfb1b",path:"/blockchain/DF/_blog/DF_WSL2_Explore/DF_WSL2_Explore.html",title:"黑暗森林DF显卡开图(WSL2)",lang:"zh-CN",frontmatter:{title:"黑暗森林DF显卡开图(WSL2)",data:"2021年12月7日"},excerpt:"",headers:[{level:2,title:"黑暗森林DF显卡开图(WSL2)",slug:"黑暗森林df显卡开图-wsl2",children:[{level:3,title:"所需工具",slug:"所需工具",children:[]},{level:3,title:"操作过程",slug:"操作过程",children:[]}]},{level:2,title:"一、升级Windows系统为预览版或Windows11",slug:"一、升级windows系统为预览版或windows11",children:[]},{level:2,title:"二、安装WSL2内核以及Ubuntu",slug:"二、安装wsl2内核以及ubuntu",children:[{level:3,title:"1. 完整的安装步骤",slug:"_1-完整的安装步骤",children:[]},{level:3,title:"2. 一键安装",slug:"_2-一键安装",children:[]}]},{level:2,title:"三、安装WSL-Cuda驱动",slug:"三、安装wsl-cuda驱动",children:[{level:3,title:"1. 选择Get CUDA Driver",slug:"_1-选择get-cuda-driver",children:[]},{level:3,title:"2. 下载",slug:"_2-下载",children:[]},{level:3,title:"3. 安装",slug:"_3-安装",children:[]}]},{level:2,title:"四、Ubuntu上下载必要工具",slug:"四、ubuntu上下载必要工具",children:[{level:3,title:"1. 设置密码",slug:"_1-设置密码",children:[]},{level:3,title:"2. 安装工具",slug:"_2-安装工具",children:[]}]},{level:2,title:"五、下载CUDA工具包",slug:"五、下载cuda工具包",children:[]},{level:2,title:"六、下载源码",slug:"六、下载源码",children:[{level:3,title:"1. 下载core源码",slug:"_1-下载core源码",children:[]},{level:3,title:"2. 进入到第三方插件文件夹",slug:"_2-进入到第三方插件文件夹",children:[]},{level:3,title:"3. 下载CGBN源码",slug:"_3-下载cgbn源码",children:[]},{level:3,title:"4. 下载workflow源码",slug:"_4-下载workflow源码",children:[]}]},{level:2,title:"七、编译",slug:"七、编译",children:[{level:3,title:"1. 编译workflow",slug:"_1-编译workflow",children:[]},{level:3,title:"2. 回到df-explorer目录",slug:"_2-回到df-explorer目录",children:[]},{level:3,title:"3. 创建build文件夹并进入",slug:"_3-创建build文件夹并进入",children:[]},{level:3,title:"4. 编译Release版df-explorer",slug:"_4-编译release版df-explorer",children:[]}]},{level:2,title:"八、运行df-explorer",slug:"八、运行df-explorer",children:[]},{level:2,title:"九、浏览器开启不安全内容权限",slug:"九、浏览器开启不安全内容权限",children:[{level:3,title:"1. chrome",slug:"_1-chrome",children:[]},{level:3,title:"2. Edge",slug:"_2-edge",children:[]}]},{level:2,title:"十、remote-explorer插件添加链接",slug:"十、remote-explorer插件添加链接",children:[]}],filePathRelative:"blockchain/DF/_blog/DF_WSL2_Explore/DF_WSL2_Explore.md",git:{updatedTime:1639040836e3,contributors:[]}}},9950:(e,l,n)=>{n.r(l),n.d(l,{default:()=>tl});var a=n(6252),s=n(9941),r=n(2832);const i=(0,a._)("h2",{id:"黑暗森林df显卡开图-wsl2",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#黑暗森林df显卡开图-wsl2","aria-hidden":"true"},"#"),(0,a.Uk)(" 黑暗森林DF显卡开图(WSL2)")],-1),u=(0,a.Uk)("本文作者: "),t={href:"https://wgb5445.github.io/",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("WGB"),_=(0,a._)("br",null,null,-1),c=(0,a.Uk)(" Twitter: "),o={href:"https://twitter.com/Adelaide5445",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("Adelaide5445"),b=(0,a._)("h3",{id:"所需工具",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#所需工具","aria-hidden":"true"},"#"),(0,a.Uk)(" 所需工具")],-1),p=(0,a._)("ul",null,[(0,a._)("li",null,"Windows电脑"),(0,a._)("li",null,"10系以上显卡"),(0,a._)("li",null,"网络")],-1),g=(0,a._)("h3",{id:"操作过程",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#操作过程","aria-hidden":"true"},"#"),(0,a.Uk)(" 操作过程")],-1),m=(0,a._)("ol",null,[(0,a._)("li",null,"升级Windows系统为预览版"),(0,a._)("li",null,"安装WSL2内核、安装或升级WSL ubuntu为WSL2"),(0,a._)("li",null,"安装显卡的WSL驱动"),(0,a._)("li",null,"下载ubuntu上必要的工具"),(0,a._)("li",null,"安装ubuntu的cuda工具"),(0,a._)("li",null,"下载源码"),(0,a._)("li",null,"编译"),(0,a._)("li",null,"执行"),(0,a._)("li",null,"修改浏览器设置"),(0,a._)("li",null,"成功开图")],-1),k=(0,a._)("h2",{id:"一、升级windows系统为预览版或windows11",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#一、升级windows系统为预览版或windows11","aria-hidden":"true"},"#"),(0,a.Uk)(" 一、升级Windows系统为预览版或Windows11")],-1),x=(0,a.Uk)("为了在WSL2 上启用NVIDIA CUDA，需要将系统升级为Windows 10 的 Windows 预览体验计划或者Windows 11"),f=(0,a._)("br",null,null,-1),v=(0,a.Uk)(" 对于Windows 10，需要先注册 Windows预览体验计划，并升级预览体验成员版本"),U=(0,a._)("br",null,null,-1),w=(0,a.Uk)(" 需要升级为windows10预览版内部版本 19044.1263 或更高版本"),W=(0,a._)("br",null,null,-1),D=(0,a.Uk)(" 可以按照微软官方的步骤进行注册升级"),L=(0,a._)("br",null,null,-1),S={href:"https://insider.windows.com/zh-cn/getting-started#register",target:"_blank",rel:"noopener noreferrer"},C=(0,a.Uk)("https://insider.windows.com/zh-cn/getting-started#register"),F=(0,a._)("h2",{id:"二、安装wsl2内核以及ubuntu",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#二、安装wsl2内核以及ubuntu","aria-hidden":"true"},"#"),(0,a.Uk)(" 二、安装WSL2内核以及Ubuntu")],-1),A=(0,a._)("p",null,"在升级为预览版以后WSL2就可以支持调用显卡资源，安装WSL2以及Ubuntu可以使用命令一键安装，也可以手动逐个安装",-1),E=(0,a._)("h3",{id:"_1-完整的安装步骤",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_1-完整的安装步骤","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. 完整的安装步骤")],-1),T=(0,a.Uk)("可以使用官网步骤进行下载并安装"),P=(0,a._)("br",null,null,-1),y={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"},G=(0,a.Uk)("https://docs.microsoft.com/zh-cn/windows/wsl/install"),z=(0,a._)("h3",{id:"_2-一键安装",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_2-一键安装","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. 一键安装")],-1),B=(0,a._)("p",null,"也可以使用命令行进行简便安装",-1),N=(0,a._)("div",{class:"language-PowerShell ext-PowerShell line-numbers-mode"},[(0,a._)("pre",{class:"language-PowerShell"},[(0,a._)("code",null,"wsl --install\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),M=(0,a._)("p",null,"此命令将启用所需的可选组件，下载最新的 Linux 内核，将 WSL 2 设置为默认值，并安装 Linux 发行版（默认安装 Ubuntu）。",-1),H=(0,a._)("h2",{id:"三、安装wsl-cuda驱动",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#三、安装wsl-cuda驱动","aria-hidden":"true"},"#"),(0,a.Uk)(" 三、安装WSL-Cuda驱动")],-1),R=(0,a.Uk)("由于系统默认不提供显卡-WSL2的驱动，所以需要自行下载驱动，可以从英伟达官网进行下载"),I=(0,a._)("br",null,null,-1),V={href:"https://developer.nvidia.com/cuda/wsl",target:"_blank",rel:"noopener noreferrer"},Y=(0,a.Uk)("https://developer.nvidia.com/cuda/wsl"),q=(0,a._)("h3",{id:"_1-选择get-cuda-driver",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_1-选择get-cuda-driver","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. 选择Get CUDA Driver")],-1),K=(0,a._)("p",null,[(0,a._)("img",{src:s,alt:"驱动下载"})],-1),O=(0,a._)("h3",{id:"_2-下载",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_2-下载","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. 下载")],-1),j=(0,a._)("p",null,[(0,a.Uk)("根据显卡型号选择对应驱动"),(0,a._)("br"),(0,a._)("img",{src:r,alt:"驱动下载"})],-1),J=(0,a._)("h3",{id:"_3-安装",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_3-安装","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. 安装")],-1),Q=(0,a._)("p",null,"下载后，按默认方法安装即可",-1),X=(0,a._)("h2",{id:"四、ubuntu上下载必要工具",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#四、ubuntu上下载必要工具","aria-hidden":"true"},"#"),(0,a.Uk)(" 四、Ubuntu上下载必要工具")],-1),Z=(0,a._)("p",null,[(0,a.Uk)("由于接下来需要编译代码，所以需要安装一系列的工具进行编译 "),(0,a._)("strong",null,"注意:如果已经有编译好的df-explorer可以跳过")],-1),$=(0,a._)("h3",{id:"_1-设置密码",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_1-设置密码","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. 设置密码")],-1),ee=(0,a._)("p",null,[(0,a.Uk)("新下载的Ubuntu需要等待安装一小会后，设置用户名及其密码"),(0,a._)("br"),(0,a.Uk)(" 设置用户名及其密码的过程需要注意:")],-1),le=(0,a._)("ul",null,[(0,a._)("li",null,"输入用户名后回车即可"),(0,a._)("li",null,"输入密码时屏幕不显示字符"),(0,a._)("li",null,"输入完成后直接回车即可"),(0,a._)("li",null,"再次输入密码即可进入Ubuntu系统中")],-1),ne=(0,a._)("h3",{id:"_2-安装工具",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_2-安装工具","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. 安装工具")],-1),ae=(0,a._)("p",null,[(0,a.Uk)("这一步使用命令行进行安装，安装需要良好的网络环境"),(0,a._)("br"),(0,a.Uk)(" 国内用户可以选择国内镜像源安装，速度可达3MB每秒 输入命令后可能需要输入密码，密码为上一小步设置的密码")],-1),se=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"sudo apt install -y git libgmp-dev cmake openssl libssl-dev nvidia-cuda-toolkit\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),re=(0,a._)("h2",{id:"五、下载cuda工具包",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#五、下载cuda工具包","aria-hidden":"true"},"#"),(0,a.Uk)(" 五、下载CUDA工具包")],-1),ie=(0,a.Uk)("为了在Ubuntu下编译CUDA的程序，需要安装CUDA工具包 所需的安装包可以在英伟达官网链接中获取(官网中同样是通过命令行的方式获取) "),ue={href:"https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=WSL-Ubuntu&target_version=2.0&target_type=deb_local",target:"_blank",rel:"noopener noreferrer"},te=(0,a.Uk)("官网链接"),de=(0,a._)("br",null,null,-1),_e=(0,a.Uk)(" 这一步需要依次执行下列命令"),ce=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"wget"),(0,a.Uk)(" https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),oe=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"mv"),(0,a.Uk)(" cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),he=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"wget"),(0,a.Uk)(" https://developer.download.nvidia.com/compute/cuda/11.5.1/local_installers/cuda-repo-wsl-ubuntu-11-5-local_11.5.1-1_amd64.deb\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),be=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" dpkg -i cuda-repo-wsl-ubuntu-11-5-local_11.5.1-1_amd64.deb\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),pe=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(" apt-key "),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(" /var/cuda-repo-wsl-ubuntu-11-5-local/7fa2af80.pub\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),ge=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"apt-get"),(0,a.Uk)(" update\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),me=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"sudo"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"apt-get"),(0,a.Uk)(" -y "),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)(" cuda\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),ke=(0,a._)("p",null,"如果所有命令均无出错，可以视为安装成功",-1),xe=(0,a._)("h2",{id:"六、下载源码",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#六、下载源码","aria-hidden":"true"},"#"),(0,a.Uk)(" 六、下载源码")],-1),fe=(0,a._)("p",null,"使用Git工具下载最新的df-explorer源码",-1),ve=(0,a._)("h3",{id:"_1-下载core源码",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_1-下载core源码","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. 下载core源码")],-1),Ue=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"git"),(0,a.Uk)(" clone https://github.com/guild-w/df-explorer.git\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),we=(0,a._)("h3",{id:"_2-进入到第三方插件文件夹",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_2-进入到第三方插件文件夹","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. 进入到第三方插件文件夹")],-1),We=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" df-explorer/thirdparty\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),De=(0,a._)("h3",{id:"_3-下载cgbn源码",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_3-下载cgbn源码","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. 下载CGBN源码")],-1),Le=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"git"),(0,a.Uk)(" clone https://github.com/NVlabs/CGBN.git\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Se=(0,a._)("h3",{id:"_4-下载workflow源码",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_4-下载workflow源码","aria-hidden":"true"},"#"),(0,a.Uk)(" 4. 下载workflow源码")],-1),Ce=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"git"),(0,a.Uk)(" clone https://github.com/sogou/workflow.git\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Fe=(0,a._)("h2",{id:"七、编译",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#七、编译","aria-hidden":"true"},"#"),(0,a.Uk)(" 七、编译")],-1),Ae=(0,a._)("p",null,"编译源码需要使用到之前下载的工具包，同样是执行命令",-1),Ee=(0,a._)("h3",{id:"_1-编译workflow",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_1-编译workflow","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. 编译workflow")],-1),Te=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" workflow "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"make"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Pe=(0,a._)("h3",{id:"_2-回到df-explorer目录",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_2-回到df-explorer目录","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. 回到df-explorer目录")],-1),ye=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},".."),(0,a.Uk)("/"),(0,a._)("span",{class:"token punctuation"},".."),(0,a.Uk)("/\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Ge=(0,a._)("h3",{id:"_3-创建build文件夹并进入",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_3-创建build文件夹并进入","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. 创建build文件夹并进入")],-1),ze=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"mkdir"),(0,a.Uk)(" build "),(0,a._)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a._)("span",{class:"token builtin class-name"},"cd"),(0,a.Uk)(" build\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Be=(0,a._)("h3",{id:"_4-编译release版df-explorer",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_4-编译release版df-explorer","aria-hidden":"true"},"#"),(0,a.Uk)(" 4. 编译Release版df-explorer")],-1),Ne=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a.Uk)("cmake "),(0,a._)("span",{class:"token punctuation"},".."),(0,a.Uk)(" -DCMAKE_BUILD_TYPE"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("Release\n"),(0,a._)("span",{class:"token function"},"make"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br")])],-1),Me=(0,a._)("p",null,"最后在文件夹中生成df-explorer文件，可以使用ls命令查看",-1),He=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"ls"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Re=(0,a._)("p",null,"出现",-1),Ie=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"CMakeCache.txt  CMakeFiles  Makefile  cmake_install.cmake  df-explorer  samples\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Ve=(0,a._)("p",null,"里面的df-explorer就是最终的可执行文件",-1),Ye=(0,a._)("h2",{id:"八、运行df-explorer",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#八、运行df-explorer","aria-hidden":"true"},"#"),(0,a.Uk)(" 八、运行df-explorer")],-1),qe=(0,a._)("p",null,"成功编译了df-explorer后，可以使用./def-explorer的方式运行软件",-1),Ke=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"./df-explorer\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),Oe=(0,a._)("p",null,"如果成功出现以下的提示则为成功(运行成功后界面不可关闭，否则程序将中断)",-1),je=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"cuda block size :128\ncuda device id: 0\nstart server on port 8880\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br")])],-1),Je=(0,a._)("h2",{id:"九、浏览器开启不安全内容权限",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#九、浏览器开启不安全内容权限","aria-hidden":"true"},"#"),(0,a.Uk)(" 九、浏览器开启不安全内容权限")],-1),Qe=(0,a._)("p",null,[(0,a.Uk)("由于DF游戏网页采用HTTPS协议，但是开图程序使用http协议，在默认的浏览器设置中不可以在HTTPS的网页中带有HTTP协议的请求"),(0,a._)("br"),(0,a.Uk)(" 所以需要修改浏览器设置，并对DF的游戏网页设置不安全内容权限")],-1),Xe=(0,a._)("h3",{id:"_1-chrome",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_1-chrome","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. chrome")],-1),Ze=(0,a._)("p",null,"对于Chrome用户可以访问以下链接设置不安全内容权限",-1),$e=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"chrome://settings/content/insecureContent\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),el=(0,a._)("p",null,'在"允许显示不安全内容"的栏中添加DF网址后刷新网页即可',-1),ll=(0,a._)("h3",{id:"_2-edge",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_2-edge","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. Edge")],-1),nl=(0,a._)("p",null,"对于Edge用户可以访问以下链接设置不安全内容权限",-1),al=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"edge://settings/content/insecureContent\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),sl=(0,a._)("p",null,'在"允许"的栏中添加DF网址后刷新网页即可',-1),rl=(0,a._)("h2",{id:"十、remote-explorer插件添加链接",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#十、remote-explorer插件添加链接","aria-hidden":"true"},"#"),(0,a.Uk)(" 十、remote-explorer插件添加链接")],-1),il=(0,a._)("p",null,"由于是本机链接，所以添加如下链接即可开图",-1),ul=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"http://localhost:8880/explore\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),tl={render:function(e,l){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("blockquote",null,[(0,a._)("p",null,[u,(0,a._)("a",t,[d,(0,a.Wm)(n)]),_,c,(0,a._)("a",o,[h,(0,a.Wm)(n)])])]),b,p,g,m,k,(0,a._)("p",null,[x,f,v,U,w,W,D,L,(0,a._)("a",S,[C,(0,a.Wm)(n)])]),F,A,E,(0,a._)("p",null,[T,P,(0,a._)("a",y,[G,(0,a.Wm)(n)])]),z,B,N,M,H,(0,a._)("p",null,[R,I,(0,a._)("a",V,[Y,(0,a.Wm)(n)])]),q,K,O,j,J,Q,X,Z,$,ee,le,ne,ae,se,re,(0,a._)("p",null,[ie,(0,a._)("a",ue,[te,(0,a.Wm)(n)]),de,_e]),ce,oe,he,be,pe,ge,me,ke,xe,fe,ve,Ue,we,We,De,Le,Se,Ce,Fe,Ae,Ee,Te,Pe,ye,Ge,ze,Be,Ne,Me,He,Re,Ie,Ve,Ye,qe,Ke,Oe,je,Je,Qe,Xe,Ze,$e,el,ll,nl,al,sl,rl,il,ul],64)}}},9941:(e,l,n)=>{e.exports=n.p+"assets/img/驱动官网.07c670a4.png"},2832:(e,l,n)=>{e.exports=n.p+"assets/img/驱动官网2.ce0b2855.png"}}]);