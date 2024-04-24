import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Accordion } from 'react-bootstrap';
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js/auto";

import Header from "./Layout/Header";
import myDataCss from "../assets/css/myData.css";

import kakaoLogo from "../assets/image/kakaobank_icon.png"
import ibkLogo from "../assets/image/ibk_icon.png"
import tossLogo from "../assets/image/toss_icon.png"
import kbLogo from "../assets/image/kb_icon.png"

function ListPage() {
    const navigate = useNavigate();
    const [isAccount, setAccount] = useState<boolean>(false);
    const accordionRef = useRef<HTMLDivElement>(null);

    const handleToggle = (isOpen: boolean) =>{
        if(isOpen && accordionRef.current){
            const accordionBottom = accordionRef.current.getBoundingClientRect().bottom;
            window.scrollTo({top: accordionBottom, behavior: "smooth"});
        }
    }

    // useEffect(() => {
    //     if(accordionRef.current){
    //         const accordionBottom = accordionRef.current.getBoundingClientRect().bottom;
    //         window.scrollTo({top: accordionBottom, behavior: "smooth"});
    //     }
    // },[isAccount])

    // 보유자산내역
    const [otherAcctInfo, setOtherAcctInfo] = useState([
        {
            alias: "카카오뱅크",
            accountType: "입출금",
            accountNum: "3333-01-7777777",
            amt: 700000000,
            bankCode: "777",
            bankName: "카카오뱅크",
            imgLink: kakaoLogo
        }, 
        {
            alias: "토스뱅크",
            accountType: "입출금",
            accountNum: "1000-8888-8888",
            amt: 800000000,
            bankCode: "888",
            bankName: "토스뱅크",
            imgLink: tossLogo
        },
        {
            alias: "KB증권",
            accountType: "증권계좌",
            accountNum: "202-01-999999",
            ownerName: "KB증권종합매매",
            amt: 900000000,
            bankCode: "999",
            bankName: "KB증권",
            imgLink: kbLogo
        },
        {
            alias: "IBK기업은행",
            accountType: "입출금계좌",
            accountNum: "127-777777-77-777",
            ownerName: "IBK기업은행자유적금",
            amt: 500000000,
            bankCode: "127",
            bankName: "기업은행",
            imgLink: ibkLogo
        },
    ]);

    // 총 보유자산 계산
    let total = 0;
    for( let i=0; i<otherAcctInfo.length; i++ ){
        total = total + otherAcctInfo[i].amt;
    }

    // Chart.js 초기화
    useEffect(() => {
        Chart.register(...registerables);
    }, [])

    // 도넛 차트 설정 START
    const chartData1 = {
        labels: otherAcctInfo.map(account => account.alias), 
        datasets: [{
            data: otherAcctInfo.map(account => account.amt),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',  
                '#9966FF'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
            ]
        }]
    };

    const chartOptions1 = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: "", 
                        size: 20
                    }
                }
            }
        }, 
        tooltip: {
            titleFont: {
                size: 100
            }
        }
    }
    // 도넛 차트 설정 END

    // 소비내역
    const [spendList, setSpendList] = useState([
        {
            paymentDate: "20240415", 
            paymentAmount: 13500,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240415", 
            paymentAmount: 7700,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240416", 
            paymentAmount: 25000,
            paymentBank: "카카오뱅크",
        },
        {
            paymentDate: "20240417", 
            paymentAmount: 15400,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240417", 
            paymentAmount: 38500,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240420", 
            paymentAmount: 13500,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240420", 
            paymentAmount: 7700,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240420", 
            paymentAmount: 25000,
            paymentBank: "카카오뱅크",
        },
        {
            paymentDate: "20240420", 
            paymentAmount: 15400,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240421", 
            paymentAmount: 38500,
            paymentBank: "토스뱅크",
        },  
        {
            paymentDate: "20240422", 
            paymentAmount: 13500,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240422", 
            paymentAmount: 7700,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240423", 
            paymentAmount: 25000,
            paymentBank: "카카오뱅크",
        },
        {
            paymentDate: "20240423", 
            paymentAmount: 15400,
            paymentBank: "토스뱅크",
        },
        {
            paymentDate: "20240423", 
            paymentAmount: 38500,
            paymentBank: "토스뱅크",
        },
    ]);

    // SpendData 타입 정의
    interface Spendata {
        paymentDate: string;
        paymentAmount: number;
        paymentBank: string;
    }

    // 막대그래프 정의
    const aggregateSpendData = (spendList: Spendata[]) : {labels:string[], datasets: [{label: string, data: number[], backgroundColor: string, borderColor: string, borderWidth: number}]} => {
        const dataByDate: { [key: string]: number } = {};

        // 소비내역 
        spendList.forEach((item) => {
            const { paymentDate, paymentAmount } = item;
            if( dataByDate[paymentDate] ){
                dataByDate[paymentDate] += paymentAmount;
            } else {
                dataByDate[paymentDate] = paymentAmount;
            }
        });

        const labels = Object.keys(dataByDate);
        const amounts = Object.values(dataByDate);

        return {
            labels: labels, 
            datasets: [
                { 
                    label: "소비 내역", 
                    data: amounts, 
                    backgroundColor: "rgba(75,192,192,0.4)", 
                    borderColor: "rgba(75,192,192,1)", 
                    borderWidth: 1,
                }, 
            ],
        }; 
    };

    const chartOptions2 = {
        index: "x",   
        scales: {
            x: {
                title: {
                    display: true, 
                    text: "결제 일자", 
                },
            },
            y: {
                title: {
                    display: true, 
                    text: "결제 금액",
                },
                beginAtZero: true,
            },
        },
    };

    const chartData2 = aggregateSpendData(spendList);

    return (
        <div className={myDataCss.mainBody}>
            <Header />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>총 계좌 - {otherAcctInfo.length}개&nbsp;
                        <div>
                            {total.toLocaleString()}원
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className={myDataCss.padding} ref={accordionRef}>
                        <div className={myDataCss.product}>
                            {otherAcctInfo.map((info, index) => {
                                return ( 
                                    <div key={index} className={myDataCss.product_info}>
                                        <img src={info.imgLink} className={myDataCss.product_icon}/>
                                        <div className={myDataCss.product_details}>
                                            <div className={myDataCss.alias}>{info.alias}</div>  
                                            <div className={myDataCss.amt}>{info.amt.toLocaleString()}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Doughnut data={chartData1} options={chartOptions1}></Doughnut>
                        <div>&nbsp;</div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>2024.04 소비내역&nbsp;</Accordion.Header>
                    <Accordion.Body className={myDataCss.padding} ref={accordionRef}>
                        <Bar data={chartData2} options={chartOptions2}></Bar>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>&nbsp;</div>
        </div>
    )
}

export default ListPage;


// const spendData = (data) => {
//     const mySpendData = {};
//     data.forEach((item) => {
//         const { paymentDate, paymentAmount } = item;
//         if(mySpendData[paymentDate]){
//             mySpendData[paymentDate] += paymentAmount;
//         } else {
//             mySpendData[paymentDate] = paymentAmount;
//         }
//     });
//     return mySpendData;
// }