# How to create free Github Account and Github repositories

`Github` --> Github is a open source platform to store source code in central place (cloud [https://github.com](https://github.com)) 

`Git` --> Git is a command line utility, which is installed in our computer to connect to Github.

### How to create Github account

Go to [https://github.com](https://github.com)

Click on `Signup`
![git](/content/git/tutorials/images/01-account-creation/git-github-com.png)

Enter the `email id`, `password`, `username` verify the puzzle and click on `Create account` then you will recieve verification mail with link in your inbox.

![git](/content/git/tutorials/images/01-account-creation/git-github-signup1.png)

![git](/content/git/tutorials/images/01-account-creation/git-github-signup2.png)

![git](/content/git/tutorials/images/01-account-creation/git-github-signup3.png)

Click on the link received on your mail for complete the email verification. Once the email verification is completed, login to [https://github.com](https://github.com)

After login, click on `Create repository` to create a first repository in Github.

In Github, the repository is used to store the source code files.

![git](/content/git/tutorials/images/01-account-creation/git-github-first-login.png)

Enter the repository name eg: `firstproject` and select the repository type as `public` or `private`

`public` --> Anybody can see the repository and its files from github. Anybody can clone you project.

`private` --> The repository and its files are only visible to you. Need username and password for cloning. 

![git](/content/git/tutorials/images/01-account-creation/git-github-create-repository1.png)

Click the check box `Add a README file`

`README.md` file is used to tell about your repository, like for what purpose you have created this reposirory.

![git](/content/git/tutorials/images/01-account-creation/git-github-create-repository2.png)

The content in your `README.md` will be shown in your repository home page.

Now you have only one file `README.md` in your repository

![git](/content/git/tutorials/images/01-account-creation/git-firstproject.png)

### How to install git in linux operating system

`Ubuntu`
Run the following command to install git in ubuntu operating system
```
sudo apt update
sudo apt install git
```

`Centos`
Run the following command to install git in Centos operating system
```
sudo yum update
sudo yum install git
```

### How to check the version of git
```
git --version
```

### How to clone(download) the repository from Github to local computer

Go to your repository --> click on `code` --> make sure `https` is selected --> copy the url

![git](/content/git/tutorials/images/01-account-creation/git-clone.png)

In your terminal type  `git clone` and your copied url
```
git clone https://github.com/vigneshsweekaran/firstproject.git
```

![git](/content/git/tutorials/images/01-account-creation/git-clone-terminal.png)

Now we have successfully created the repository in github and cloned that repository to our local computer.
