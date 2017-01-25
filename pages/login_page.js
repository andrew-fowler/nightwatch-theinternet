/**
 * Created by andrewfowler on 1/25/17.
 */
module.exports = {
    url: 'https://the-internet.herokuapp.com/login',
    elements:
    {
        username: {
            selector: 'input[type=text]'
        },
        password: {
            selector: 'input[type=password]'
        },
        submit:{
            selector: 'button[type=submit]'
        },
        flash:{
            selector: 'div[id="flash"]'
        }
    }
};