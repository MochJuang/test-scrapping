const fetch = require('node-fetch');
const cheerio = require('cheerio')
const fs = require('fs')

exports.execute = async function() {
        
    const url = 'https://www.rumah123.com/jual/cari/?q=pamulang%20estate#qid~b2052c58-22eb-4b5c-9ace-a643ea274bf0'

    await fetch(url)
        .then( res => res.text() )
        .then(html => {
            console.log("html")
            console.log(html)
            const $ = cheerio.load(html)
            let listData = []
            // $('.ListingCell-row').each( async(index, item) => {
            //     let row = $(item)
            //     let url = row.find('a.ListingCell-moreInfo-button-v2_redesign').attr('href')
            //     let title = row.find('h2.ListingCell-KeyInfo-title').text().trim() 
            //     let propertyType = row.find('.ListingCell-AllInfo').data('category')
            //     let images = []
            //     row.find('img').each( (i, image) => {
            //         if ($(image).attr('src') != undefined) {
            //             images.push($(image).attr('src'))
            //         }
            //     })
            //     let price = row.find('.PriceSection-FirstPrice').text().trim().toUpperCase()
            //     let currency = ''
            //     if (price.includes('RP')) {
            //         currency = 'IDR'
            //     }else{
            //         currency = 'USD'
            //     }
            //     let buildingSize = row.find('.ListingCell-AllInfo').data('building_size')
            //     let landSize = row.find('.ListingCell-AllInfo').data('land_size')
            //     let catalogueUrl = row.next().next().find('.js-Available-Listings').data('url')
            //     let indexPath = catalogueUrl.indexOf('path')
            //     let pathArr = catalogueUrl.substring(indexPath).split('/')
            //     let province = pathArr[1]
            //     let city = pathArr[2]
            //     let area = pathArr[3]
            //     let address = row.find('.ListingCell-KeyInfo-address-text').text().trim()
            //     let certificate = row.next().next().find('.AgentInfoV2-agent-verified-info-wrapper').find('div').eq(0).text().trim()
            //     let latitude = ''
            //     let longitude = ''
                
            //     let agent = row.find('.ListingDetail-agentDetail-wrapper')
            //     let agentImage = agent.find('.ListingDetail-agent-image').find('img').data('src')
            //     let agentName = agent.find('.ListingDetail-agent-name').text().trim()
            //     let agencyName = row.next().next().find('.AgentInfoV2-agent-agencyLink').text().trim()
            //     let agentContacts = [] 
            //     row.next().next().find('.RequestPhoneFormNumber').each( (i, v) => {
            //         agentContacts.push($(v).text().trim())
            //     } )
            //     let details = []
            //     let facilities = []
            //     let beds = row.find('.ListingCell-AllInfo').data('bedrooms')
            //     let bats = row.find('.ListingCell-AllInfo').data('bathrooms')

            //     listData.push({ url, title, propertyType, listingType : '', images, currency, price, buildingSize, landSize, province, city, area, address, certificate, latitude, longitude, agentImage, agentName, agencyName, agentContacts, details, facilities,  beds, bats})
            // } )

            // let data = JSON.stringify(listData)
            // fs.writeFile('./json/lamudi.json', data, 'utf8', () => {});
        })
        .catch(e => console.log(e))

}