var apikey = 'PIX32TME9I2CQJJ6';

function getdata(){
    var inputval= document.getElementById("sm").value;
    var inputDate = document.getElementById("date").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;
    var inputDate2 = inputDate-1;
    var inputDate3 = inputDate-2;
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${inputval}&outputsize=full&apikey=${apikey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const firstDate = data["Time Series (Daily)"][`${inputYear}-${inputMonth}-${inputDate}`];
       
        document.getElementById("p1").innerHTML = firstDate["1. open"];
        document.getElementById("p2").innerHTML = firstDate["4. close"];
        document.getElementById("p3").innerHTML = firstDate["2. high"];
        document.getElementById("p4").innerHTML = firstDate["4. close"];
        document.getElementById("p5").innerHTML = firstDate["5. volume"];
        document.getElementById("firDate").innerHTML = inputDate+"-"+inputMonth+"-"+inputYear;
        const secondDate = data["Time Series (Daily)"][`${inputYear}-${inputMonth}-0${inputDate2}`];
       
        document.getElementById("p11").innerHTML = secondDate["1. open"];
        document.getElementById("p12").innerHTML = secondDate["4. close"];
        document.getElementById("p13").innerHTML = secondDate["2. high"];
        document.getElementById("p14").innerHTML = secondDate["4. close"];
        document.getElementById("p15").innerHTML = secondDate["5. volume"];
        document.getElementById("secDate").innerHTML = "0"+inputDate2+"-"+inputMonth+"-"+inputYear;
        const thirdDate = data["Time Series (Daily)"][`${inputYear}-${inputMonth}-0${inputDate3}`];
        
        document.getElementById("p21").innerHTML = thirdDate["1. open"];
        document.getElementById("p22").innerHTML = thirdDate["4. close"];
        document.getElementById("p23").innerHTML = thirdDate["2. high"];
        document.getElementById("p24").innerHTML = thirdDate["4. close"];
        document.getElementById("p25").innerHTML = thirdDate["5. volume"];
        document.getElementById("thiDate").innerHTML = "0"+inputDate3+"-"+inputMonth+"-"+inputYear;
    })
}


function clear(){
    window.location="index.html";
  }