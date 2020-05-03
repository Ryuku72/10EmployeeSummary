![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/HomeworkW10?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Ryuku72/HomeworkW10?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/HomeworkW10?style=for-the-badge)

# HomeWork Week 10 
## Node.Js Group Profile Generator
1st May 2020


### Aim
This week homework task was to build a Profile Generator and run tests against our code. Like HomeworkW9 there was heavy use of node.js and inquirer.
Second aim... remove bootstrap

### Working Project Example
Current Mock version exists https://ryuku72.github.io/HomeworkW10/
Youtube video prior bug fix https://youtu.be/FWMDHz_RQfg

### Key Concepts for HomeworkW10
Objects, This, Callbacks, Constructors, Prototypes, TDD, Tests, Classes, Inheritance
    
## Contents
* [Build_Process](#Build_Process)
* [Project_Issues](#Project_Issues)
* [Removing Bootstrap](#Bootstrap)
* [Future Plans](#future)
* [Installation](#Installation)
* [Usuage](#Usuage)
* [Tests](#Tests)
* [Additional_Information](#Additional_Information)



<a name="Build_Process">

## Build Process 
> 
> 
> This week we were provided with a lengthy explanation on how to tackle our homework. The two core concepts was, build a website using Classes and 
> Constructors then run Npm Test to ensure everything passes. Whilst this seemed straight forward there were some heardles of overcome first.
> 
> The first major issue for myself was learning how Classes and inhertance work properly. There is class, extends and super which all play a 
> particular role. The next learning block was how to pass functions between the classes. Next is how to push these Classes together for the Render 
> function. Finally how to run tests.
> 
> The most interesting point to make is Test are very particular about order. I found that I needed to align my function orders in line with the test 
> or they would not pass. This did however offer additional hints of how to tackle certain problems so I was happy about that.
> 
> I spent a lot of time playing around with inquirer. I learnt more about validation and a number of packages that can run tests. I read a lot of 
> documentation on how to run certain functions through validation. I also looked into things like chalk and how to make boxes etc. I didn't really do 
> this in the end but will add more color to my terminal based work in the future. 
> 
> Overall, once I understood how to make the website this homework was not that difficult. It was the process of gettting there. 
> 
> PS. BOOTSTAP has been removed!!!! 
> 
> 

<a name="Project_Issues">

## Project Issues 
> 
> 
> Issues were primary focused around 2 points. The first point was how to correctly use the data 
> from inquirer and place that into the classes. In the 
> past I would just use the results of inquire in order to funnel that information into my 
> function. Homework W9 is a good example of this.
> 
> I learnt the hard way that actually inside of the class I need to manually break down the 
> results and not expect the result to break down itself. 
> This was annoying.
> 
> The next issue, was render. I did not know I had to ensure that the Class heading e.g. 
> "engineer", had to stay on the project in order for the 
> function to work correctly. Once I overcame this issue everything else was smooth sailing
> 
> Currently there is a bug in which 2 classes placed next to each other will result in a "," 
> separator on the webpage. Unsure how to fix this.
> 01/05/20: This has been fixed by adding .join('') to the htmlrender file.
> 
> 03/05/20 Another issue fixed. If you run tests with getRole using 'this.role', the test will 
> fail. Replaced 'this.role' with the actual role. eg. Engineerr is "Engineer"
>
> Both bootstrap and my project have the same issue of you cant use grids to correct make the 
> wesbite responsive.

<a name="future">

## Future plans

> Currently the project is done however, I do want to add some additional flavour in the near 
> future.
> 
>(01/05/20 Complete) Use chalk and boxin for 'node app' file
> 
> (03/05/20 Make a Mock website and link it to my profile page
> (Incomplete)Make the mock website responsive
>
> (03/05/20 Complete) Add a Javascript for links
> 
> Currently I have made a small profile at the end of the website to indicate outstanding issues.
>
>

<a name="bootstrap>

## Removing Bootsrap

I removed bootstrap for a couple of reasons. 

1. When you had more than 4 or 5 employee the page would smosh the profiles togehter and not place them inside a grid. 

2. I had issues controlling the properties themselves. Was hard to style and just annoying.

3. It had a particular look and file catalgoue I dont like. I want my code to look as clean as possible and having <div> and <class="container-something> everywhere is not something I like.

The only issue about now is I need to make the website more responsive. Whilist bootstrap responsiveness is a lie (maybe cause I have additional properties e.g. Profile picture), I will need to now go in an use media query to fix the problem. At least the profiles are in a grid of 3 columns... which is nice. 


<a name="Installation">

## Installation 

1. Copy project from GitHub page. Open terminal, 

```sh
$ cd homeworkW10
$ npm install
$ node app
```

<a name="Usuage">

## Usuage 
To create a team list by collecting certain data points. This project will ask for name, email, id, gender, age and assign you a profile picture.
Answers are also verified  

<a name="Tests">

## Tests
npm run test shows everything passed.



<a name="Additional_Information">

## Additional Information
Licenses: MIT
Contributions: Joshua K Bader

## Resources
W3 Schools
Google Font
Developer.mozilla.org
Getbootstrap.com
Stackoverflow.com
Resources provided in Slack
Youtube tutorials
Dillinger.io


## Technology
* PhotoShop
* HyperText Markup Language
* Cascading Style Sheets
* Node.JS
* Inquirer
* Visual Studio Code
* GitHub
* Google Chrome


## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 10 / Homework repository on GitLab https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%2010/Homework

### Joshua K Bader // Ryuku72 // jaybshinsen@hotmail.com
### Made with ReadMe.Md Generator 
