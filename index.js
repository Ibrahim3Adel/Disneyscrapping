
import {gethttps,Posthttps} from './httpsRequests.js'
var base_url = ""
const user_data = {
    "pid":"428411449216",
    "quantity":1
}
const urls = {
    "product_url":"https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html?fbclid=IwAR1ZyrY68_a6EYrW-kJK_7xO7dO0Gxp_2AukRx8Ml4ZIZdhdKVoc44tWH6o",
    "addToCart_url":"https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct"
}
async function start () {
    var csrftoken = ""
    csrftoken = await gethttps(urls.product_url)
    await Posthttps(urls.addToCart_url,csrftoken,user_data.quantity,user_data.pid)
}

start()