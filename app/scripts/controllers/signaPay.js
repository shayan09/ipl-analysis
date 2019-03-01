'use strict';

/**
 * @ngdoc function
 * @name feApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feApp
 */
angular.module('feApp')
  .controller('AboutCtrl', function ($scope,Events) {
      // $scope.plot();
      // Highcharts.chart('qwq', {
      //
      //     xAxis: {
      //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      //             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      //     },
      //
      //     series: [{
      //         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      //     }]
      // });


      // $scope.open = (data)=>{
      //     console.log("clicked");
      // };
      //
      //
      //
      //
      // let data = [{:}]

      Highcharts.chart('container11', {
          title: {
              text: 'Runs scored across seasons'
          },
          chart: {
              type: 'line',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Runs',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [17937, 16353, 18883, 21154, 22453, 22602, 18931, 18353, 18862, 18786]
          }]
      })

      Highcharts.chart('container12', {
          title: {
              text: 'Number of matches played each season'
          },
          chart: {
              type: 'line',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Matches',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [58,57,60,73,74,76,60,59,60,59]
          }]
      });



      Highcharts.chart('container13', {
          title: {
              text: 'Man of the match awards'
          },
          chart: {
              type: 'bar',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['CH Gayle', 'YK Pathan', 'AB de Villiers', 'DA Warner', 'SK Raina', 'RG Sharma', 'MS Dhoni', 'G Gambhir', 'MEK Hussey', 'AM Rahane'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Matches',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [18, 16, 15, 15, 14, 14, 13, 13, 12, 12]
          }]
      });



      Highcharts.chart('container14', {
          chart: {
              type: 'pie',
              options3d: {
                  enabled: true,
                  alpha: 45
              }
          },
          title: {
              text: 'Likelihood of Toss determining win'
          },
          credits: {
              enabled: false
          },
          subtitle: {
              text: 'IPL'
          },
          plotOptions: {
              pie: {
                  innerSize: 100,
                  depth: 45
              }
          },
          series: [{
              name: 'Delivered amount',
              data: [
                  ["Yes",51.1],
                  ["No",48.9]
              ]
          }]
      });




      Highcharts.chart('container15', {
          title: {
              text: 'Favourite venues'
          },
          chart: {
              type: 'column',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['M Chinnaswamy Stadium', 'Eden Gardens', 'Feroz Shah Kotla', 'Wankhede Stadium', 'Rajiv Gandhi International Stadium, Uppal', 'MA Chidambaram Stadium, Chepauk', 'Punjab Cricket Association Stadium, Mohali', 'Sawai Mansingh Stadium', 'Subrata Roy Sahara Stadium', 'Dr DY Patil Sports Academy', 'Kingsmead', 'Maharashtra Cricket Association Stadium', 'Sardar Patel Stadium, Motera', 'SuperSport Park', 'Punjab Cricket Association IS Bindra Stadium, Mohali'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Rating',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data:  [66, 61, 60, 57, 49, 48, 35, 33, 17, 17, 15, 15, 12, 12, 11]
          }]
      });



      Highcharts.chart('container16', {
          title: {
              text: 'Toss Decisions over the seasons'
          },
          chart: {
              type: 'column'
          },
          credits: {
              enabled: false
          },
          xAxis: {
              categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
          },

          plotOptions: {
              series: {
                  groupPadding: 0
              }
          },

          series: [{
              name:"Bat",
              data: [26, 35, 39, 25, 37, 45, 19, 25, 11, 11]
          }, {
              name:"Field",
              data: [32, 22, 21, 48, 37, 31, 41, 34, 49, 48]
          }]
      });



      Highcharts.chart('container17', {
          title: {
              text: 'Experienced Umpires'
          },
          chart: {
              type: 'column',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['HDPK Dharmasena', 'S Ravi', 'AK Chaudhary', 'C Shamshuddin', 'SJA Taufel', 'M Erasmus', 'Asad Rauf', 'BR Doctrove', 'CK Nandan', 'RE Koertzen'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Rating',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data:  [87, 85, 58, 56, 55, 54, 51, 42, 41, 41]
          }]
      });


      Highcharts.chart('container18', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Stacked column chart'
          },
          xAxis: {
              categories: ['MI', 'RCB', 'KKR', 'KXIP', 'DD', 'CSK', 'RR', 'SRH', 'DC', 'PW', 'GL', 'RPS', 'KTK']
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Wins / matches'
              },
              stackLabels: {
                  enabled: true,
                  style: {
                      fontWeight: 'bold',
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                  }
              }
          },
          legend: {
              align: 'right',
              x: -30,
              verticalAlign: 'top',
              y: 25,
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
              borderColor: '#CCC',
              borderWidth: 1,
              shadow: false
          },

          plotOptions: {
              column: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: true,
                      color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                  }
              }
          },
          series: [{
              name: 'Loss',
              data: [65, 73, 71, 75, 77, 68, 56, 34, 46, 31, 17, 18, 8]
          }, {
              name: 'Wins',
              data:  [92, 79, 77, 73, 70, 63, 62, 42, 29, 15, 13, 12, 6]
          }]
      });



      Highcharts.chart('container19', {
          title: {
              text: 'Analyzing two teams battle over seasons (MI vs CSK)',
          },
          chart: {
              type: 'column'
          },
          credits: {
              enabled: false
          },
          xAxis: {
              categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
          },

          plotOptions: {
              series: {
                  groupPadding: 0
              }
          },

          series: [{
              name:"MI",
              data: [7, 5, 11, 10, 10, 13, 7, 10]
          }, {
              name:"CSK",
              data: [9, 8, 9, 11, 10, 12, 10, 10]
          }]
      });


      Highcharts.chart('container20', {
          title: {
              text: 'Average innings score across seasons',
          },
          chart: {
              type: 'column'
          },
          credits: {
              enabled: false
          },
          xAxis: {
              categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
          },

          plotOptions: {
              series: {
                  groupPadding: 0
              }
          },

          series: [{
              name:"Innings 1",
              data:  [114.25, 124.23, 151.71, 127.91, 128.31]
          }, {
              name:"Innings 2",
              data:  [104.16, 139.17, 152.72, 124.01, 127.8]
          }]
      });


      Highcharts.chart('container21', {
          title: {
              text: 'Top run scorers'
          },
          chart: {
              type: 'bar',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['SK Raina', 'V Kohli', 'RG Sharma', 'G Gambhir', 'DA Warner'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Matches',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [4548, 4423, 4207, 4132, 4014]
          }]
      });



      Highcharts.chart('container22', {
          title: {
              text: 'Highest Wicket Takers'
          },
          chart: {
              type: 'column',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['SL Malinga', 'A Mishra', 'Harbhajan Singh', 'PP Chawla', 'DJ Bravo'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Wickets',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data:   [154, 134, 127, 126, 122]
          }]
      });




      Highcharts.chart('container23', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',
              options3d: {
                  enabled: true,
                  alpha: 45
              }
          },
          title: {
              text: 'Suresh Raina'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          legend : {
              enabled : false
          },
          credits: {
              enabled: false
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'S Raina',
              colorByPoint: true,
              data: [{
                  name: '0\'s',
                  y: 1163,
              }, {
                  name: '1\'s',
                  y: 1377
              }, {
                  name: '2\'s',
                  y: 242
              }, {
                  name: '3\'s',
                  y: 10
              }, {
                  name: '4\'s',
                  y: 403
              }, {
                  name: '6\'s',
                  y: 174,
                  sliced: true,
                  selected: true
              }]
          }]
      });

      Highcharts.chart('container24', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Virat Kohli'
          },
          credits: {
              enabled: false
          },
          legend : {
              enabled : false
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'V Kohli',
              colorByPoint: true,
              data: [{
                  name: '0\'s',
                  y: 1287,
              }, {
                  name: '1\'s',
                  y: 1410
              }, {
                  name: '2\'s',
                  y: 242
              }, {
                  name: '3\'s',
                  y: 11
              }, {
                  name: '4\'s',
                  y: 384
              }, {
                  name: '6\'s',
                  y: 160,
                  sliced: true,
                  selected: true
              }]
          }]
      });


      Highcharts.chart('container25', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          credits: {
              enabled: false
          },
          legend : {
              enabled : false
          },
          title: {
              text: 'Rohit Sharma'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'R Sharma',
              colorByPoint: true,
              data: [{
                  name: '0\'s',
                  y: 1185,
              }, {
                  name: '1\'s',
                  y: 1379
              }, {
                  name: '2\'s',
                  y: 277
              }, {
                  name: '3\'s',
                  y: 5
              }, {
                  name: '4\'s',
                  y: 355
              }, {
                  name: '6\'s',
                  y: 173,
                  sliced: true,
                  selected: true
              }]
          }]
      });


      Highcharts.chart('container26', {
          chart: {
              type: 'pie',
              options3d: {
                  enabled: true,
                  alpha: 45
              }
          },
          title: {
              text: 'Player dismissal distribution'
          },
          credits: {
              enabled: false
          },
          subtitle: {
              text: 'IPL'
          },
          plotOptions: {
              pie: {
                  innerSize: 100,
                  depth: 45
              }
          },
          series: [{
              name: 'Delivered amount',
              data: [['caught', 4373], ['bowled', 1382], ['run out', 755], ['lbw', 455], ['stumped', 243], ['caught and bowled', 211]]
          }]
      });

      // $scope.plot=()=>{
      //     console.log("hihihih");
      //     var myChart = Highcharts.chart('container11', {
      //         title: {
      //             text: 'Sentimental Analysis Of Reviews'
      //         },
      //
      //         subtitle: {
      //             text: 'Source: yelp.com and google reviews'
      //         },
      //
      //         yAxis: {
      //             // title: {
      //             //     text: 'Number of Employees'
      //             // }
      //
      //         },
      //
      //         xAxis:{
      //             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      //                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      //             labels: {
      //                 enabled: false
      //             }
      //         },
      //
      //         legend: {
      //             layout: 'vertical',
      //             align: 'right',
      //             verticalAlign: 'middle'
      //         },
      //
      //         plotOptions: {
      //             series: {
      //                 label: {
      //                     connectorAllowed: false
      //                 },
      //                 // pointStart: 2010
      //             }
      //         },
      //
      //         series: [{
      //             name: 'Polarities',
      //             data: [17937, 16353, 18883, 21154, 22453, 22602, 18931, 18353, 18862, 18786]
      //         }]
      //     });
      // };
  });
