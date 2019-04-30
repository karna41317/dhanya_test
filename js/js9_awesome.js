function setRemainCash() {
  document.getElementById('money').innerHTML = cash
}

function addProductToList() {
  var b = document.createElement('TR')
  b.setAttribute('id', purchase),
    b.setAttribute('product-name', prodNames[product])
  var d = document.createElement('TH')
  var a
  product == 6
    ? (a = document.createTextNode(prodNames[product - 1]))
    : (a = document.createTextNode(prodNames[product])),
    d.appendChild(a)
  var e = document.createElement('TH')
  var a = document.createTextNode(numbOfItem)
  e.appendChild(a)
  var f = document.createElement('TH')
  var a = document.createTextNode(totalPrice)
  f.appendChild(a)
  var g = document.createElement('TH')
  var c = document.createElement('Button')
  var a = document.createTextNode('Sell')
  c.setAttribute('onclick', 'sellThis(' + purchase + ')'),
    c.appendChild(a),
    g.appendChild(c),
    b.appendChild(d),
    b.appendChild(e),
    b.appendChild(f),
    b.appendChild(g),
    document.getElementById('bought').appendChild(b),
    purchase++
}
function setProduct(a) {
  product = a
}
function sellThis(a) {
  ;(cashAdd = parseFloat(document.getElementById(a).children[2].innerHTML)),
    (productSold = document.getElementById(a).children[0].innerHTML),
    (productXSold = document.getElementById(a).children[1].innerHTML),
    (cashAdd = bSell(cashAdd, productSold, a)),
    (cash += cashAdd),
    (document.getElementById('message').innerHTML =
      'You sold ' +
      productXSold +
      ' x ' +
      productSold +
      ' for a total of ' +
      cashAdd),
    setRemainCash(),
    document.getElementById(a).remove(),
    removeFromReceipt(cashAdd)
}
function bSell(a, c, b) {
  return c == prodNames[1] && a--, b == 10 && (a += 50), b == 6 && (a -= 10), a
}
function buyStuff() {
  ;(numbOfItem = document.getElementById('buyAmount').value),
    numbOfItem == '' && (numbOfItem = 1),
    (canYouBuy = checkBuyParam(numbOfItem)),
    canYouBuy &&
      ((totalPrice = numbOfItem * prodPrices[product]),
      bBuy(),
      (cash -= totalPrice),
      setRemainCash(),
      addProductToList(),
      addToReceipt(totalPrice, prodMoms[product], numbOfItem),
      (document.getElementById('message').innerHTML =
        'You bought ' +
        numbOfItem +
        ' x ' +
        prodNames[product] +
        ' for a total of ' +
        totalPrice))
}
function addToReceipt(b, a, c) {
  ;(a = c * a),
    (totReceipt = parseFloat(document.getElementById('totalPrice').innerHTML)),
    (momsReceipt = parseFloat(document.getElementById('totalVAT').innerHTML)),
    (document.getElementById('totalPrice').innerHTML = totReceipt + b),
    (document.getElementById('totalVAT').innerHTML = a + momsReceipt)
}
function removeFromReceipt(a) {
  ;(totReceipt = parseFloat(document.getElementById('totalPrice').innerHTML)),
    (momsReceipt = parseFloat(document.getElementById('totalVAT').innerHTML)),
    (moms = a / 4),
    (document.getElementById('totalPrice').innerHTML = totReceipt - a),
    (document.getElementById('totalVAT').innerHTML = momsReceipt - moms)
}
function checkBuyParam(a) {
  return a < 0
    ? ((document.getElementById('message').innerHTML =
        'Enter a amount higher than 0.'),
      !1)
    : a == 0
    ? ((document.getElementById('message').innerHTML =
        "You can't buy 0 amount"),
      !1)
    : isNaN(a)
    ? ((document.getElementById('message').innerHTML =
        'Please enter a correct number'),
      !1)
    : product == 0
    ? ((document.getElementById('message').innerHTML =
        'Please select a product!'),
      !1)
    : ((totalPrice = a * prodPrices[product]),
      cash - totalPrice < 0
        ? ((document.getElementById('message').innerHTML =
            'Insufficient funds!'),
          !1)
        : !0)
}
function bBuy() {
  numbOfItem > 100 && (numbOfItem = 100),
    product == 4 &&
      numbOfItem > 5 &&
      (totalPrice = (numbOfItem - 1) * prodPrices[product]),
    product == 5 && (totalPrice = numbOfItem * (prodPrices[product] - 100)),
    product == 8 && numbOfItem++
}
var purchase = 0
var cash = 10000
var product = 0
var prodPrices = [0, 15, 23, 34, 4, 999, 4999, 399, 29, 299, 9500]
var prodMoms = [0, 3.75, 5.75, 8.5, 1, 249, 1249.75, 99.75, 7.24, 49.75, 2375]
var prodNames = [
  '',
  'Apple',
  'Banana',
  'Orange',
  'Grape',
  'Bicycle',
  'Samsung S5',
  'Toy train',
  'Cup of Coffee',
  'Chair',
  'TV',
]
var numbOfItem
var totalPrice
setRemainCash()
