/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    // ============================================================== 
    // Sales overview
    // ============================================================== 
     new Chartist.Line('#sales-overview2', {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
        , series: [
          {meta:"", data: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200]},
          {meta:"", data: [0, 150, 160, 180, 240, 500, 600, 700, 700, 750, 760, 800, 800, 810, 820, 820, 950, 1250]}
      ]
    }, {
        low: 0
        , high:1001
        , showArea: true
        , divisor: 10
        , lineSmooth:false
        , fullWidth: true
        , showLine: true
        , chartPadding: 30
        , axisX: {
            showLabel: true
            , showGrid: false
            , offset: 100
        }
        , plugins: [
        	Chartist.plugins.tooltip()
      	], 
      	// As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
        axisY: {
        	onlyInteger: true
            , showLabel: true
            , scaleMinSpace: 15 
            , showGrid: true
            , offset: 20,
            labelInterpolationFnc: function(value) {
		      return (value / 1000) + 'K'
		    },

        }
        
    });

    // ============================================================== 
   // totalCoin
   // ============================================================== 
    var totalCoin10 = 0;
    var totalCoin50 = 34;
    var totalCoin100 = 234;
    var totalCoin500 = 34;
    var totalCoinTotal = totalCoin10 + totalCoin50 + totalCoin100 + totalCoin500;
    $("#totalCoin10").text(Math.round((totalCoin10 / totalCoinTotal) * 100))
    $("#totalCoin50").text(Math.round((totalCoin50 / totalCoinTotal) * 100))
    $("#totalCoin100").text(Math.round((totalCoin100 / totalCoinTotal) * 100))
    $("#totalCoin500").text(Math.round((totalCoin500 / totalCoinTotal) * 100))

   var chart = c3.generate({
       bindto: '#totalCoin',
       data: {
           columns: [
             ['10원', totalCoin10],
             ['50원', totalCoin50],
             ['100원', totalCoin100],
             ['500원', totalCoin500],
           ],
           
           type : 'donut',
           onclick: function (d, i) { console.log("onclick", d, i); }
           // onclick: function (d, i) { console.log("onclick", d, i); },
           // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
           // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
       },
       donut: {
           label: {
               show: false
             },
           title:"Coin",
           width:20,
           
       },
       
       legend: {
         hide: true
         //or hide: 'data1'
         //or hide: ['data1', 'data2']
       },
       color: {
        pattern: ['#AE7F6C', '#FEC0CF', '#ACE0DD', '#FA6690']
       }
   });
  // ============================================================== 
  //  todayCoin
  // ============================================================== 
  var todayCoin10 = 0;
  var todayCoin50 = 34;
  var todayCoin100 = 2;
  var todayCoin500 = 34;
  var todayCoinTotal = todayCoin10 + todayCoin50 + todayCoin100 + todayCoin500;
  $("#todayCoin10").text(Math.round((todayCoin10 / todayCoinTotal) * 100))
  $("#todayCoin50").text(Math.round((todayCoin50 / todayCoinTotal) * 100))
  $("#todayCoin100").text(Math.round((todayCoin100 / todayCoinTotal) * 100))
  $("#todayCoin500").text(Math.round((todayCoin500 / todayCoinTotal) * 100))
  

  var chart = c3.generate({
      bindto: '#todayCoin',
      data: {
          columns: [
            ['10원', todayCoin10],
            ['50원', todayCoin50],
            ['100원', todayCoin100],
            ['500원', todayCoin500],
          ],
          
          type : 'donut',
          onclick: function (d, i) { console.log("onclick", d, i); }
          // onclick: function (d, i) { console.log("onclick", d, i); },
          // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          label: {
              show: false
            },
          title:"Coin",
          width:20,
          
      },
      
      legend: {
        hide: true
        //or hide: 'data1'
        //or hide: ['data1', 'data2']
      },
      color: {
            pattern: ['#AE7F6C', '#FEC0CF', '#ACE0DD', '#FA6690']
      }
  });
      
    

















    // ============================================================== 
    // Website Visitor
    // ============================================================== 
    var chart = new Chartist.Line('.website-visitor', {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          series: [
            [0, 5, 6, 8, 25, 9, 8, 24]
            , [0, 3, 1, 2, 8, 1, 5, 1]
          ]}, {
          low: 0,
          high: 28,
          showArea: true,
          fullWidth: true,
          plugins: [
            Chartist.plugins.tooltip()
          ],
            axisY: {
            onlyInteger: true
            , scaleMinSpace: 40    
            , offset: 20
            , labelInterpolationFnc: function (value) {
                return (value / 1) + 'k';
            }
        },
        });
    	// Offset x1 a tiny amount so that the straight stroke gets a bounding box
        // Straight lines don't get a bounding box 
        // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
        chart.on('draw', function(ctx) {  
          if(ctx.type === 'area') {    
            ctx.element.attr({
              x1: ctx.x1 + 0.001
            });
          }
        });

        // Create the gradient definition on created event (always after chart re-render)
        chart.on('created', function(ctx) {
          var defs = ctx.svg.elem('defs');
          defs.elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
          }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 255, 255, 1)'
          }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(38, 198, 218, 1)'
          });
        });
});
