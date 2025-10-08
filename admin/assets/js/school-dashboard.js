(function () {
    "use strict";

    /* School Revenue */
    const options1 = {
        series: [{
            name: 'This Year',
            type: "column",
            data: [44, 30, 57, 80, 90, 55, 70, 43, 23, 54, 77, 34]
        }, {
            name: 'Last Year',
            type: "area",
            data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
        }],
        chart: {
            height: 320,
            type: 'line',
            stacked: !1,
            toolbar: {
                show: !1
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 6,
                left: 0,
                blur: 0,
                color: 'var(--primary-color)',
                opacity: 0.05
            },
        },
        grid: {
            borderColor: '#f2f6f7',
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["var(--primary-color)", "rgb(255, 73, 205)"],
        fill: {
            type: ['solid', 'gradient'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100],
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "var(--primary-color)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "var(--primary-color)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: 'var(--primary-color)',
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "rgba(255, 73, 205, 0.1)",
                            opacity: 0.1
                        },
                        {
                            offset: 75,
                            color: "rgba(255, 73, 205, 0.1)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: 'rgba(255, 73, 205, 0.2)',
                            opacity: 1
                        }
                    ],
                ]
            }
        },
        stroke: {
            width: [1.5, 1.5],
            curve: "smooth",
            dashArray: [0, 4]
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        legend: {
            show: true,
            position: 'top'
        },
        plotOptions: {
            bar: {
                columnWidth: "25%",
                borderRadius: 2
            }
        },
        tooltip: {
            enabled: true,
            theme: "dark",
        }
    };
    const chart1 = new ApexCharts(document.querySelector("#school-revenue"), options1);

    if(chart1) chart1.render();

    const chart4 = new ApexCharts(document.querySelector("#school-revenue2"), options1);
    if(chart4) chart4.render();
    /* School Revenue */

    /* Students Overview */
    const options2 = {
        series: [6560, 3354],
        chart: {
            height: 227,
            type: 'donut',
        },
        colors: ["var(--primary-color)", "rgba(255, 73, 205, 1)"],
        labels: ["Boys", "Girls"],
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                offsetY: 10,
                expandOnClick: false,
                donut: {
                    size: '85%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            offsetY: -5
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            color: undefined,
                            offsetY: 5,
                            fontWeight: 600,
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total Students',
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#495057',
                        }
                    }
                }
            }
        },
        stroke: {
            width: 0
        },
        dataLabels: {
            enabled: false,
            dropShadow: {
                enabled: false,
            },
        },
    };
    const chart2 = new ApexCharts(document.querySelector("#students-overview"), options2);
    if(chart2) chart2.render();
    /* Students Overview */

    /* Attendance Overview */
    const options3 = {
        series: [
            {
                name: "Girls",
                data: [44, 42, 57, 86, 58, 55, 45],
            },
            {
                name: "Boys",
                data: [-34, -22, -37, -56, -21, -35, -34],
            },
        ],
        chart: {
            stacked: true,
            type: "bar",
            height: 365,
            toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        colors: ["var(--primary-color)", "rgba(253, 175, 34, 1) "],
        plotOptions: {
            bar: {
                borderRadius: 2,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "all",
                columnWidth: "25%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
            fontFamily: "Mulish",
            markers: {
                width: 10,
                height: 10,
            },
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        xaxis: {
            type: "month",
            categories: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                rotate: -90,
            },
        },
    };
    const chart3 = new ApexCharts(document.querySelector("#attendance-overview"), options3);
    if(chart3) chart3.render();
    /* Attendance Overview */

    const multipleoptions = {
        series: [{
            name: 'Năm 2024',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 1.4, 2, 2.5, 1.5]
        }, {
            name: 'Năm 2025',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 1.1, 3, 3.1, 4]
        }],
        chart: {
            height: 320,
            type: 'line',
            stacked: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1, 4]
        },
        title: {
            // text: 'XYZ - Stock Analysis (2009 - 2016)',
            align: 'left',
            offsetX: 110,
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        colors: ["#985ffd", "#ff49cd", "#fdaf22"],
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: [
            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#985ffd'
                },
                labels: {
                    style: {
                        colors: '#985ffd',
                    }
                },
                title: {
                    // text: "Income (thousand crores)",
                    style: {
                        color: '#985ffd',
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'Income',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#ff49cd'
                },
                labels: {
                    style: {
                        colors: '#ff49cd',
                    }
                },
                title: {
                    // text: "Operating Cashflow (thousand crores)",
                    style: {
                        color: '#ff49cd',
                    }
                },
            },
            // {
            //     seriesName: 'Revenue',
            //     opposite: true,
            //     axisTicks: {
            //         show: true,
            //     },
            //     axisBorder: {
            //         show: true,
            //         color: '#fdaf22'
            //     },
            //     labels: {
            //         style: {
            //             colors: '#fdaf22',
            //         },
            //     },
            //     title: {
            //         text: "Revenue (thousand crores)",
            //         style: {
            //             color: '#fdaf22',
            //         }
            //     }
            // },
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
            },
        },
        legend: {
            horizontalAlign: 'left',
            offsetX: 40
        }
    };
    const multiplechart = new ApexCharts(document.querySelector("#mixed-multiple-y1"), multipleoptions);
    const multiplechart2 = new ApexCharts(document.querySelector("#mixed-multiple-y2"), multipleoptions);
    if(multiplechart) multiplechart.render();
    if(multiplechart2) multiplechart2.render();


})();