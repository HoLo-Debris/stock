### git工具常用命令介绍

&emsp;&emsp;这里只介绍一些简单的git使用，根据后续需要，再进行补充。

#### 1. 本地git与Github进行连接

##### 1.1 环境准备

&emsp;&emsp;账号注册无需多说，想要在本地`coding`，且本地仓库与远端进行数据交互，本地需要安装**git**。Windows、Linux、以及MacOS不同平台安装稍有差异，但不难安装。

&emsp;&emsp;到这里环境准备已经差不多了，但是，没有可视化界面对项目版本的变更情况很难有清晰的了解，因此，可以下载[GUI客户端](https://git-scm.com/downloads/guis)。种类繁多，选择顺手的即可。

##### 1.2 仓库(repository)准备

&emsp;&emsp;仓库的来源有很多，从git的工作模式来看，可分为**本地仓库**和**远端仓库**，通常代码在本地修改，提交到远端。本地的仓库可以直接使用`git clone`从远端克隆，也可以在自己的工作目录使用`git init`在本地初始化一个仓库，再和远端连接，稍后会详细介绍。远端仓库，指的就是Github中的项目了。

&emsp;&emsp;使用`git fetch`可以仓库或者URL中获取项目数据，使用`git pull`可以从远端仓库拉取指定的分支(branch)，使用`git push`可以将本地仓库的代码提交到远端仓库。

##### 1.3 身份认证

&emsp;&emsp;想要将本地仓库连接到自己Github项目中的远端仓库，则需要进行身份认证。2021年8月以前，使用自己的git使用Github账号密码的方式认证，但是之后摒弃了这种方式，改为使用密钥验证。这种方式应该属于一种非对称加密的方式，公钥和私钥都由本地生成，远端Github账户保存公钥，私钥保存在用户本地。可使用如下方式产生密钥：

```shell
# 双引号中为Github账号中的邮箱
ssh-keygen -t rsa -C "debris@123.com"

# 之后终端会输出如下两行，提示输入私钥文件保存的位置
# 公钥文件名自动生成为与私钥文件同一目录下的(私钥文件名).pub
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/debris/.ssh/id_rsa): 

# 默认存储在 ~ 目录下的.ssh目录中，本地与远端连接时，会到.ssh目录寻找密钥文件
```

&emsp;&emsp;在Github个人中心-设置中，我们可以看到`SSH keys and GPG keys`选项，点击`new ssh key`将公钥文件中的内容填入即可。

&emsp;&emsp;之后可以在本地测试是否可以连接上：

```shell
ssh -T git@github.com
# 之后可以看到如下字样,说明连接成功
# Hi! ** You've successfully authenticated, but GitHub does not provide shell access.
# 如果连接失败，可以再加上-v参数，查看终端连接过程中的信息，便于排查问题，如
ssh -vT git@github.com
```

&emsp;&emsp;之后可以使用git设置邮箱名与用户名：

```shell
git config --global user.name"username"

git config --global user.email"email"
```

##### 1.5 本地与远端连接

&emsp;&emsp;如果使用本地初始化好的git仓库与远端仓库进行连接，可以执行以下命令：

```shell
# 连接远端仓库
git remote add origin git@github.com:用户名/仓库名.git
# 从远端仓库拉取到本地的master分支
git pull origin master
```

#### 2. Contribute

##### 2.1 常用命令

`git init`——在本地初始化git仓库，会使用默认分支名master

`git status` ——查看工作区代码相对于**暂存区**的差别。使用add命令可以将代码提交到暂存区，而使用commit则是提交到代码仓库
`git add .` ——将当前目录下修改的所有代码从工作区添加到暂存区，`.` 代表当前目录
`git commit -m '注释'`——将缓存区内容提交到本地仓库，并备注提交内容
`git pull origin <远程分支名>`——先将远程仓库同步到本地
`git push origin <远程分支名>` ——将本地版本库推送到远程服务器

`git log` —— 查看历史提交记录。

`git blame <file>` —— 以列表形式查看指定文件的历史修改记录。

##### 2.2 fork与pull

&emsp;&emsp;这两个命令得到的项目中，都带有提交历史和分支信息，但又存在着一些差别。

&emsp;&emsp;如果说想要向别人的项目中提交代码，可以先`fork`复制到自己的Github仓库中，也就是从该项目的版本产生一个分支，自己修改之后，可以通过`pull request`发起代码提交请求，之后，代码评审完成通过，管理员可以将代码变更合并(merge)到原项目中。

&emsp;&emsp;而如果由pull拉取的代码，则是将远程分支拉取并合并到本地。

#### 3. 注意事项

##### 3.1 空目录

&emsp;&emsp;git是无法提交空目录(空文件夹)的，但是如果目录中有文件，则是可以提交的。因此，在初期尚且没有那么多文件，而是先规划目录结构的情况下，可以通过添加`.gitignore`文件的方法，成功设置目录。这个文件也有很多用途，如果有一些系统生成的文件，或者编译产生的中间文件，不想提交到远端仓库，可以将此类文件名写入`.gitignore`文件中，git工具将会忽略这些文件。
