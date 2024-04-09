const cron = require('node-cron');
const nodeMailer  = require('nodemailer')



function sendEmailNotification() {
    //giving access to the nodemailer to our gmail 
var transporter = nodeMailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:'sivar7737@gmail.com',
        pass:'fxxysmeml'
    }
    
}); 
var mailOptions ={
    from:'sivasekar7737@gmail.com',
    to:'perinbaraj777@gmail.com',   //considered as the mailid of the owner 
    subject:'checking the nodemailer in nodejs',
    html:`<p>booking details:<br>customerid:${customerId}<br>Services:${Services}<br>Expected delivery date:${serviceDate}</p>`,
    
    };
    transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log('E mail sent' + info.response);
            }
        });
          


    console.log('Sending email notification...');

}

// Schedule a cron job to send email notifications every day at 9:00 AM
cron.schedule('0 9 * * *', () => {
    sendEmailNotification();
}, {
    timezone: 'Your/Timezone' // Specify your timezone here
});

cron.schedule('0 22 * * 1', () => {
    console.log('Task scheduled for every Monday at 10:00 PM');
}, {
    timezone: 'Your/Timezone' // Specify your timezone here
});

console.log('Cron jobs scheduled successfully.');
