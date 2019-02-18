# Ipl-Kaggle-Dataset-Analysis - [View](http://iplmodel.s3-website-us-east-1.amazonaws.com/#!/insights)
![](https://i2.wp.com/www.wallpapersbyte.com/wp-content/uploads/2016/04/IPL-2016-Team-Captains-IPL-9-MCC-Spirit-Sign-WallpapersByte-com-1366x768.jpg?resize=1366%2C768&ssl=1)

## Inspiration
Being a sports aficionado, I was always interested to work with a sports dataset. We have good knowledge about cricket and thus, we thought the IPL dataset would be a great to generate some meaningful insights. We were always curious on what factors are players purchased in auctions and wanted to kind of decipher the entire decision process.

## What it does
It gives teams in-depth analysis using visualization tools in JavaScript to understand what factors contribute in a champion team. Uses the XGBoost Machine Learning technique to predict young players to watch out for in the league and the valuable experienced players.

## How we built it
We got the open data-set from Kaggle and did some data-preprocessing using _Numpy_ and _Pandas_. New columns and derived data-sets were created using mathematical computations in _Python_. These plot values were passed as a list to the visualization in JavaScript using HighCharts in the Angular framework.
 
## Challenges we ran into
The data-set wasn't big enough to train a Machine Learning Model, so we had to derive features from the data we had. Figuring out the different visualization tools and choosing the best one.

## Accomplishments that we're proud of
Creating an in-depth analysis in a day and also built a Machine Learning model to suggest players.

## What's next for IPL Cricket Dataset Analysis
It can be used in actual auctions and the accuracy could be increased with more data and features. These techniques can also be applied to  sports fields like NBA, NFL and others.
