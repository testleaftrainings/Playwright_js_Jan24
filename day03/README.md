Week 2 Day1 [Saturday]

*Agenda*: *Get Started with Playwright*


>> 09.00 AM - Recap
>> 09.15 AM - Understanding Playwright Architecture
>> 10.00 AM - Key components - Browser, Context, Page
>> 10.30 AM - [Break]
>> 10.40 AM - Write a basic first test script [Promise, async, await]
>> 11.20 AM - [Practice]
>> 11.35 AM - Selectors/Locators
>> 11.50 AM - Learn basic CSS syntax
>> 12.20 PM - [Practice]
>> 12.35 PM - Locating a web element using Playwright getBys 
>> 01.00 PM - Wrap & Assignments

# Key Components 
- Browser Instance
- Browser Context
- Page

Whenever you launch a browser, a new browser reference is created

*Browser Context*
- incognito window (analogy)
- can have multiple browser contexts within the same browser instance

1 browser instance --> you can open multiple incognito windows

*Page*
Browser Context 1 --> can have multiple pages 
						PAGE 1 --> leaftaps
						PAGE 2 --> amazon
						PAGE 3 --> salesforce

Browser Context 2  --> can multiple pages
						page 1, page 2,...


3 steps (Hierarchy)
1. Create a browser instance
	browser = await chrome. launch()

2. Once the browser is launched, you have to create a new browser context
	context1 = await	browser.newContext();
	context2 =	await	browser.newContext();

3. Inside the browser context, you can open a new page.
	page1 = await context1.newPage();
	page2 = await context1.newPage();

4. load an URL
	page.goto(URL)

	context1.close();
	context2.close();
	browser.close();


//Callback function
A function is written inside another function

test(

async()

) --> function

Browsers
1. Chromium --> Chrome, Edge
2. Firefox
3. Webkit

Default mode is headless

//To run the test --> npx playwright test filename.spec.ts
(root directory)

DOM - Document Object Model

<html> -->  tagname
	<head>

		<title>Leaftaps</title>

		</head>
	<body>
		<input> username</input>
		<input> password </input>
		<div>
		<a href=""></a>
		<h1>
		<span>
		<p>
	</body>
	</html


	tagname		attribute	attribute value		attributeName	attributeVal
	<input     class=      "inputLogin"         type=         "text" 

	attribute 	value		attribute    val
	id=        "username"   name=       "USERNAME" size="50">

							text
	<label for="username">Username</label>

# Selecting strategies

	1. CSS
	2. XPath
	3. Text Selectors
	4. Playwright recommended locators

# How to choose the attributes?

	1. id --> unique 
		You cannot use id when it has numbers
	2. name 
	3. className
	4. text
	5. link
	6. partial

# CSS
- By id:
    #idValue

- By class:
	.classValue

- By attribute
	[attrName = 'value']
	[name = 'PASSWORD']
	[type = 'text']