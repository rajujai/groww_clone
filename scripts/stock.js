let res= JSON.parse(localStorage.getItem("comapany_detail"))
showdata(res);
function showdata(data){
console.log(data)
   data.map(ele =>{
    document.getElementById("m-cap-tbody").innerHTML+=` <tr>
        <td class="m-cap-content">${ele.c_name}</td>
        
        <td><img src="${ele.graphImage}" alt=""></td>
        <td class="m-cap-content">${ele.market_p1} <br>
        <p> ${ele.market_p2}</p></td>
        <td class="m-cap-content-btn"><button id="added-btn-cap" onclick="myFunction()">${ele.btn_source}</button></td>
        
        </tr>`

        // document.getElementById("added-btn-cap").addEventListener('click', myWatchlist);

   });
 
};
function myFunction(){
document.getElementById("added-btn-cap").innerHTML="";
            alert("Added To Watchlist Succsessfully!!");
            document.getElementById("added-btn-cap").innerHTML='<span class="iconify" data-icon="el:ok-circle"  data-width="20" color="grey" onclick="myFunction2()"></span>'
           
        }

        function myFunction2(){
document.getElementById("added-btn-cap").innerHTML="";
                  myFunction=null;
            alert("Removed From Watchlist Succsessfully!!");
            document.getElementById("added-btn-cap").innerHTML='<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'
            
           
        }