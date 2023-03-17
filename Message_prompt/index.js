const express = require('express');
var sid = 'AC41781c166a7f5b17dac90ac8894f18cb'

var auth_token = '98c7f46e3e4186a94d619b70f4d5f142'

var twilio = require('twilio')(sid,auth_token)

twilio.messages.create({
    from:"+15076687763",
    to:"+919910755685",
    body:"This is a test message"
})
.then((res)=>console.log('message has sent !'))
.catch((err)=>{console.log(err);
});

