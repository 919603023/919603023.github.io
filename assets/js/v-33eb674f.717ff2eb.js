"use strict";(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[1175],{6250:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-33eb674f",path:"/other/docker/_blog/%E4%BD%BF%E7%94%A8Dockerfile%E9%83%A8%E7%BD%B2%E5%B8%A6%E6%9C%89ssh%E7%9A%84Ubuntu/%E4%BD%BF%E7%94%A8Dockerfile%E9%83%A8%E7%BD%B2%E5%B8%A6%E6%9C%89ssh%E7%9A%84Ubuntu.html",title:"使用Dockerile部署带有ssh的Ubuntu",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"一、Dockerfile 展示",slug:"一、dockerfile-展示",children:[]},{level:2,title:"二、分步解析",slug:"二、分步解析",children:[{level:3,title:"1. 容器的选择",slug:"_1-容器的选择",children:[]},{level:3,title:"2. 环境变量的设置",slug:"_2-环境变量的设置",children:[]},{level:3,title:"3. root用户的密码更改",slug:"_3-root用户的密码更改",children:[]},{level:3,title:"4. 换国内源、安装SSH",slug:"_4-换国内源、安装ssh",children:[]},{level:3,title:"5. 创建ssh的目录",slug:"_5-创建ssh的目录",children:[]},{level:3,title:"6. 暴露端口",slug:"_6-暴露端口",children:[]},{level:3,title:"7. 在开机时启动ssh服务",slug:"_7-在开机时启动ssh服务",children:[]}]},{level:2,title:"二、构建镜像",slug:"二、构建镜像",children:[{level:3,title:"1. 构建镜像",slug:"_1-构建镜像",children:[]}]},{level:2,title:"三、启动镜像",slug:"三、启动镜像",children:[{level:3,title:"1. 前台启动",slug:"_1-前台启动",children:[]},{level:3,title:"2. 后台启动",slug:"_2-后台启动",children:[]}]},{level:2,title:"四、连接docker",slug:"四、连接docker",children:[]}],filePathRelative:"other/docker/_blog/使用Dockerfile部署带有ssh的Ubuntu/使用Dockerfile部署带有ssh的Ubuntu.md",git:{updatedTime:1629551095e3,contributors:[]}}},6591:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});const a=(0,n(6252).uE)('<h1 id="使用dockerile部署带有ssh的ubuntu" tabindex="-1"><a class="header-anchor" href="#使用dockerile部署带有ssh的ubuntu" aria-hidden="true">#</a> 使用Dockerile部署带有ssh的Ubuntu</h1><h2 id="一、dockerfile-展示" tabindex="-1"><a class="header-anchor" href="#一、dockerfile-展示" aria-hidden="true">#</a> 一、Dockerfile 展示</h2><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>FROM ubuntu:20.04 \nENV TZ Asia/Shanghai\nENV LANG zh_CN.UTF-8\nRUN echo &#39;root:root&#39; |chpasswd\nRUN echo &quot;deb http://mirrors.163.com/ubuntu/ focal main restricted universe multiverse\\n \\\ndeb http://mirrors.163.com/ubuntu/ focal-security main restricted universe multiverse \\n \\\ndeb http://mirrors.163.com/ubuntu/ focal-updates main restricted universe multiverse\\n\t\\\ndeb http://mirrors.163.com/ubuntu/ focal-backports main restricted universe multiverse\\n&quot;\\\n            &gt; /etc/apt/sources.list        \\\n            &amp;&amp; apt update &amp;&amp; apt install -y \\ \n\t\t\topenssh-server \\\n\t\t\tvim \\\n\t\t\t&amp;&amp; apt clean \\\n\t\t\t&amp;&amp; rm -rf /tmp/* /var/lib/apt/lists/* /var/tmp* \\\n\t\t\t&amp;&amp; echo &quot;PermitRootLogin yes&quot; &gt;&gt; /etc/ssh/sshd_config\nRUN mkdir /var/run/sshd\n\nEXPOSE 22\nCMD [&quot;/usr/sbin/sshd&quot;,&quot;-D&quot;]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="二、分步解析" tabindex="-1"><a class="header-anchor" href="#二、分步解析" aria-hidden="true">#</a> 二、分步解析</h2><h3 id="_1-容器的选择" tabindex="-1"><a class="header-anchor" href="#_1-容器的选择" aria-hidden="true">#</a> 1. 容器的选择</h3><blockquote><p>由于平时使用的大多是ubuntu 所以这次选择了选择了ubuntu20.04 版</p></blockquote><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>FROM ubuntu:20.04 \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-环境变量的设置" tabindex="-1"><a class="header-anchor" href="#_2-环境变量的设置" aria-hidden="true">#</a> 2. 环境变量的设置</h3><blockquote><p>设置时区和文字环境，其实作用并不大，但是还是设置上吧</p></blockquote><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>ENV TZ Asia/Shanghai\nENV LANG zh_CN.UTF-8\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-root用户的密码更改" tabindex="-1"><a class="header-anchor" href="#_3-root用户的密码更改" aria-hidden="true">#</a> 3. root用户的密码更改</h3><blockquote><p>因为ssh 时需要用登陆用户名和密码，所以将root密码改成自己想要的</p></blockquote><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>RUN echo &#39;root:root&#39; |chpasswd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p> &quot; ：&quot; 前面的root 是用户名， &quot; : &quot;  后面的root是密码</p></blockquote><h3 id="_4-换国内源、安装ssh" tabindex="-1"><a class="header-anchor" href="#_4-换国内源、安装ssh" aria-hidden="true">#</a> 4. 换国内源、安装SSH</h3><blockquote><p>因为镜像在本地构建，所以使用国内源可以有一个比较好的网速来下载。<br> 然后通过apt 安装vim 和 openssh-server 以便使用ssh 和一些简单的编辑。<br> 当ssh使用root登陆时需要更改配置中的 &quot;PermitRootLogin&quot;  为  &quot;Yes&quot;  以便root用户使用ssh。</p></blockquote><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>RUN echo &quot;deb http://mirrors.163.com/ubuntu/ focal main restricted universe multiverse\\n \\\ndeb http://mirrors.163.com/ubuntu/ focal-security main restricted universe multiverse \\n \\\ndeb http://mirrors.163.com/ubuntu/ focal-updates main restricted universe multiverse\\n\t\\\ndeb http://mirrors.163.com/ubuntu/ focal-backports main restricted universe multiverse\\n&quot; \\\n            &gt; /etc/apt/sources.list \\\n            &amp;&amp; apt update &amp;&amp; apt install -y \\ \n\t\t\topenssh-server \\\n\t\t\tvim \\\n\t\t\t&amp;&amp; apt clean \\\n\t\t\t&amp;&amp; rm -rf /tmp/* /var/lib/apt/lists/* /var/tmp* \\\n\t\t\t&amp;&amp; echo &quot;PermitRootLogin yes&quot; &gt;&gt; /etc/ssh/sshd_config\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_5-创建ssh的目录" tabindex="-1"><a class="header-anchor" href="#_5-创建ssh的目录" aria-hidden="true">#</a> 5. 创建ssh的目录</h3><blockquote><p>如果没有这个目录，ssh 是会崩掉的，所以乖乖加上。</p></blockquote><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>RUN mkdir /var/run/sshd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_6-暴露端口" tabindex="-1"><a class="header-anchor" href="#_6-暴露端口" aria-hidden="true">#</a> 6. 暴露端口</h3><blockquote><p>ssh默认的端口号是 22 所以在这里我们暴露镜像的端口号。</p></blockquote><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>EXPOSE 22\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_7-在开机时启动ssh服务" tabindex="-1"><a class="header-anchor" href="#_7-在开机时启动ssh服务" aria-hidden="true">#</a> 7. 在开机时启动ssh服务</h3><blockquote><p>虽然在系统中安装了openssh-server ,但是ssh服务仍需要在开机时启动。</p></blockquote><div class="language-DockerDockerfile ext-DockerDockerfile line-numbers-mode"><pre class="language-DockerDockerfile"><code>CMD [&quot;/usr/sbin/sshd&quot;,&quot;-D&quot;]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="二、构建镜像" tabindex="-1"><a class="header-anchor" href="#二、构建镜像" aria-hidden="true">#</a> 二、构建镜像</h2><h3 id="_1-构建镜像" tabindex="-1"><a class="header-anchor" href="#_1-构建镜像" aria-hidden="true">#</a> 1. 构建镜像</h3><blockquote><p>使用 docker build 命令创建一个 名为 ssh_docker  的镜像</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker build -t ssh_docker <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="三、启动镜像" tabindex="-1"><a class="header-anchor" href="#三、启动镜像" aria-hidden="true">#</a> 三、启动镜像</h2><h3 id="_1-前台启动" tabindex="-1"><a class="header-anchor" href="#_1-前台启动" aria-hidden="true">#</a> 1. 前台启动</h3><blockquote><p>有时候我们需要前台启动镜像以便之间能和镜像交互，但是这种方法很不推荐。<br> 因为如果你使用了这种方法，构建镜像时的&quot;CMD&quot;命令就不能被执行，所以需要在参数中附带要执行的指令。</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker run -it  -p <span class="token number">10122</span>:22 ssh_docker  /bin/bash\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后需要<strong>手动开启ssh功能</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> <span class="token function">ssh</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或者</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/sbin/sshd -D\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-后台启动" tabindex="-1"><a class="header-anchor" href="#_2-后台启动" aria-hidden="true">#</a> 2. 后台启动</h3><blockquote><p>这种方法还是比较推荐的，因为这样可以减少交互，使用起来也比较无感。</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> docker run -itd  -p <span class="token number">10122</span>:22 ssh_docker  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这样会自动执行构建时CMD 的命令，所以ssh服务就成功启动了。</p><h2 id="四、连接docker" tabindex="-1"><a class="header-anchor" href="#四、连接docker" aria-hidden="true">#</a> 四、连接docker</h2><blockquote><p>在本机使用ssh 就可以连接docker了，注意端口和用户名</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> root@127.0.0.1 -p <span class="token number">10122</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注意：多次开启镜像后连接ssh可能出现错误，这时清除该地址的记录就可以了</p>',46),r={render:function(e,s){return a}}}}]);