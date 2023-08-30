const axios = require("axios");
const { response } = require("express");
//url
const url="https://orderstatusapi-dot-organization-project-311520.uc.r.appspot.com/api/getOrderStatus"

// Data to be sent in the request body

const getDate=(req,res)=>{
    
    const orderId = req.body.queryResult.parameters["number"];
    console.log(orderId);

    const data = {
        "orderId": orderId
    };
    var shipmentDate = null;

    axios.post(url, data).then(response=>{
        const date = response.data;
        shipmentDate = date.shipmentDate;
        console.log(shipmentDate)
        //change format
        shipmentDate = formatAndFormatDate(shipmentDate)
        const fulfillmentResponse = {
            fulfillmentText: `Your order ${orderId} will be shipped on ${shipmentDate}`}
        
        console.log(shipmentDate)
        res.json(fulfillmentResponse);

    }).catch(err=>{
        res.json("Pleae provide a valid orderID")
    })

}

// Date format function
function formatAndFormatDate(dateString) {
    const string = dateString.split("T")[0];
    const finalDate = new Date(string);

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(finalDate);

    return formattedDate;
}

const getMessage=(req,res)=>{
    res.json("Working!");
}
module.exports={getDate, getMessage}