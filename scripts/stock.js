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

      
   let company_info =[
    { c_name:"reliance industries",
    market_p1:" 2,291.90 ",
    market_p2:"36.15(1.60%)",
    graphImage:"./images/one.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
   { c_name:"TCS",
    market_p1:" 3,514.50 ",
    market_p2:"112.85(3.32%)",
    graphImage:"./images/two.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
   { c_name:"HDFC bank",
    market_p1:"1,462.60 ",
    market_p2:"43.20(3.04%)",
    graphImage:"./images/three.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
   { c_name:"hindustan unilever",
    market_p1:"2,180.85 ",
    market_p2:"9.45(0.44%)",
    graphImage:"./images/four.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
   { c_name:"HDFC",
    market_p1:" 2,411.35 ",
    market_p2:"68.30(2.92%)",
    graphImage:"./images/five.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'


   },
   { c_name:"ICICI bank",
    market_p1:" 737.00 ",
    market_p2:"29.60(4.18%)",
    graphImage:"./images/six.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
   { c_name:"ITC",
    market_p1:" 215.15 ",
    market_p2:"6.653.19%)",
    graphImage:"./images/seveb.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'


   },
   { c_name:"kotak mahindra bank",
    market_p1:" 1,848.85 ",
    market_p2:"54.00(3.01%)",
    graphImage:"./images/eight.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
   { c_name:"infosys",
    market_p1:"1,702.30 ",
    market_p2:"24.15(1.44%)",
    graphImage:"./images/nine.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
   { c_name:"SBI",
    market_p1:" 486.90 ",
    market_p2:"14.25(3.01%)",
    graphImage:"./images/ten.png",
    btn_source:'<span class="iconify" data-icon="fluent:add-circle-16-regular" data-width="30" color="grey" style=" cursor: pointer; "></span>'

   },
    ] ;
 localStorage.setItem("comapany_detail",JSON.stringify(company_info));
    