const postbtn = document.getElementById('post-btn');
const http_request_function = (emailvalue,subject,msgvalue)=>{
    var obj={
        'email':emailvalue,
        'subject':subject,
        'msg':msgvalue,
       
    }
    obj=JSON.stringify(obj);

    const url='http://localhost:5000/mywebsite/api/contacts/email';

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(obj);
    xmlhttp.responseType='json';
    //after receiving the response from server
    xmlhttp.onload = function() {
        if (xmlhttp.status >= 200 || xmlhttp.status<=400) {
           // Store in local storage api
           console.log('http msg successful')
           //window.location.replace("./"),alert("You are logged in");
        } else {
          alert(xmlhttp.response)
        }
      };

      xmlhttp.onerror = function() { // only triggers if the request couldn't be made at all
            alert('Network Error');
        };

        xmlhttp.onprogress = function(event) { // triggers periodically

            alert("data is being sent to server");
          };
}

const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json'
        console.log(data)
        if(data){
            xhr.setRequestHeader('Content-Type','application/json');
        
        }
        xhr.onload = () =>{
            resolve(xhr.response);
            console.log(xhr.response)
        };
        //console.log(data)
        xhr.send(JSON.stringify(data));
    });
    alert('contact successfully!')
    return promise;
}
//sending req for storing to database the contact msg
const sendData=()=>{
    var emailvalue = document.getElementById('InputEmail1').value;
    var subject = document.getElementById('Inputsubject').value;
    var msgvalue = document.getElementById('InputMsgarea').value;
    console.log("hi from http"+document.getElementById('InputMsgarea').value);
    console.log("hi"+document.getElementById('InputEmail1').value);
    /*sendHttpRequest('POST','http://localhost:5000/mywebsite/api/contacts/email',{
        subject:subject,
        email:emailvalue,
        msg:msgvalue
    });*/
    http_request_function(emailvalue,subject,msgvalue)
};

//postbtn.addEventListener('click',sendData);
document.getElementById("post-btn").addEventListener('click', e => {
    e.preventDefault();
    sendData();
});