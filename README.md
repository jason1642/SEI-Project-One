# SEI-Project-One

**Aliantra** - stock market for small, local or start-up businesses. This project just displays real company stock prices and info
using apis and a user friend UI

## The sites main features 
- On home page, main section, displays top 5 stocks with highest market cap
- On home page, side bar, the user is able to add up to 5 stocks of their choice which displays as cells. Each cell displays 
company name, price, and todays percent change
- User can select anywhere on the entire cell div to go to another page displaying alot more information about 
the company. For example, description, logo image, market cap, ceo, 52 week range, etc
- A home button on the header will return user back to the main page (keeping all added stocks on page if possible)
- User can click on delete button next to added stock cell on home page, prompting the user if they want to remove the cell div.

## Logic/js
- After 5 cells have been added to right side bar, it will reject any more attempts to add another cell and notify user under side
div to remove a stock in order to add a new one
- If user types in an invalid stock symbol, a message will appear next to the search bar informing user that stock symbol 
doesn't exist. If get gets rejected
- (Attempting) To add a setInterval that will update price every number of seconds or minutes
- (Attempting) Add another api, that will display a few news articles on the stock info page

## Styling 
- On desktop, pages will be 100 view height
- Color scheme will be blue and white
- Clicking on *Aliantra* logo or h1 name will bring user back to the home page
- Most info will be visible without scrolling on company info page
- Most of the website will use grid, include entire page container, main and side cell divs, and company info page
- On mobile, cell container divs will stack ontop of eachother. Home button will disappear, but user can still return to main page via logo or click on the *Aliantra* title



![Main page](https://github.com/jason1642/SEI-Project-One/blob/master/Screen%20Shot%202020-03-07%20at%2011.02.39%20PM.png)





![Secondary, stock info page](https://github.com/jason1642/SEI-Project-One/blob/master/Screen%20Shot%202020-03-08%20at%205.23.07%20PM.png)

## Mobile Version
![Main page, moblie](https://github.com/jason1642/SEI-Project-One/blob/master/Screen%20Shot%202020-03-08%20at%206.29.49%20PM.png)


![Secondary page, mobile](https://github.com/jason1642/SEI-Project-One/blob/master/Screen%20Shot%202020-03-08%20at%206.33.26%20PM.png)



## Available information from the api
- Market Cap
- CEO Name
- Price
- 52 Week Range
- Company Logo
- Industry
- Description
- Website
- Changes 
- Company Name
- Change Percentage
- Average Volume

##### If MVP achieved early, I will either add another api that displays news, or launch website on Aliantra.com (My domain)
