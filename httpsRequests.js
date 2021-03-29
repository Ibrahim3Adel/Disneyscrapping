import axios from 'axios'
import cheerio from 'cheerio'
export async function gethttps (url) {
    await axios.get(url, {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9,ar;q=0.8",
          "cache-control": "max-age=0",
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "cross-site",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1"
        },
        "referrerPolicy": "origin",
        "mode": "cors",
        "credentials": "include"
      }).then((response)=>{
          if (response.status == '200') console.log("get product success")
          const getdata = response.data
          const $ = cheerio.load(getdata)
          var csrftoken =$('input[name="csrf_token"]').val()
          console.log("Security token: ",csrftoken)
          return csrftoken
      })
}
export async function Posthttps (url,csrf_token,quantity,pid){
    await axios.post(url, {
        "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,ar;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html?fbclid=IwAR1ZyrY68_a6EYrW-kJK_7xO7dO0Gxp_2AukRx8Ml4ZIZdhdKVoc44tWH6o",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "data": `format=ajax&Quantity=${quantity}&pid=${pid}&csrf_token=${csrf_token}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
        }).then((response)=> {
            if (response.status == '200') console.log("add product to cart success")
            
        })
}