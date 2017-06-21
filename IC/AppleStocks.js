// 1. Loop through price and keep track of current lowest price
// 2. When the lowestPrice changes, update maxProfit

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPrices) {
  var maxProfit = stockPrices[1] - stockPrices[0]
  var lowestPrice = stockPrices[0]

  for (var i = 1; i < stockPrices; i++) {
  	var currentPrice = stockPrices[i]
  	lowestPrice = Math.min(lowestPrice, stockPrices[i]);

  	var potentialProfit = currentPrice - lowestPrice;
  	maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)