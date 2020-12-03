import {compactInteger} from './DatePicker/FormaterNum'
import 'chartjs-plugin-datalabels';

let data = [
    "10000",
    "12300",
    "24500",
    "66300",
    "48700",
    "63200",
    "41200",
    "58200",
    "88800",
    "95100",
    "14700",
    "12300",
    "65200",
    "48900",
    "74100",
    "71500",
    "49300",
    "72800",
    "99200",
    "15400",
    "47700",
    "65200",
    "48900",
    "74100",
    "71500",

]
let data2 = [
    "10000",
    "12300",
    "24500",
    "66300",
    "48700",
    "63200",
    "41200",
    "58200",


]

export const color2 = [
    '#E0FFFF',
    '#AFEEEE',
    '#7FFFD4',
    '#40E0D0',
    '#48D1CC',
    '#00CED1',
    '#5F9EA0',
    '#4682B4',
    '#B0C4DE',
    '#B0E0E6',
    '#ADD8E6',
    '#87CEEB',
    '#87CEFA',
    '#00BFFF',
    '#1E90FF',
    '#6495ED',
    '#4169E1',
    '#00FFFF',
    '#5F9EA0',
    '#4682B4',
    '#87CEEB',
    '#48D1CC',
    '#00CED1',
    '#5F9EA0',
    '#4682B4',

]
export const firstChartData = [
    'Государственные услуги общего характера',
    'Оборона',
    'Общественный порядок, безопасность, правовая, судебная...',
    'Образование',
    'Здравоохранение',
    'Социальная помощь и социальное обеспечение',
    'Жильщно-комунальное хозяйство',
    'Культура, спорт, туризм и информационное пространство',
    'Топливно-энергетический комплекс и недропользование',
    'Сельское, водное, лесное, рыбное хозяйство, градостраительная и ...',
    'Транспорт и коммуникации',
    'Прочее',
    'Обслуживание долга',
    'Трансферы',
    'Общественный порядок, безопасность, правовая, судебная...2',
    'Общественный порядок, безопасность, правовая, судебная...3',
    'Общественный порядок, безопасность, правовая, судебная...4',
    'Общественный порядок, безопасность, правовая, судебная...5',
    'Общественный порядок, безопасность, правовая, судебная...6',
    'Общественный порядок, безопасность, правовая, судебная...7',
    'Общественный порядок, безопасность, правовая, судебная...8',
    'Общественный порядок, безопасность, правовая, судебная...9',
    'Общественный порядок, безопасность, правовая, судебная...10',
    'Общественный порядок, безопасность, правовая, судебная...11',
    'Общественный порядок, безопасность, правовая, судебная...12',

]
export const secondChartData = [
    'Налоговые поступления',
    'Ненаалоговые поступления',
    'Поступления от продажи основного капитала',
    'Поступление трансферов',
    'Погошение бюджетных кредитов',
    'Поступления от продажи финансовых активов государст..',
    'Поступления займов',
    'Используемые остатки бюджетных средств',
]
export const firstPieData2 = {
    labels: firstChartData,
    datasets: [
        {
            label: "# of Votes",
            backgroundColor: color2,
            data: data,
            borderWidth: 0,

        },]
}
export const firstPieOption2 = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 100,
            right: 100,
            top: 100,
            bottom: 100
        }
    },
    legend: {
        display: false,
        position: "bottom",
        labels: {
            fontSize: 14,
            boxWidth: 40,
            boxHeight: 2,
            fontColor: "rgba(255,255,255,1)",
        },
    },
    scales: {
        xAxes: [
            {
                display: false,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
            },
        ],
        yAxes: [
            {
                display: false,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
            },
        ],
    },
    plugins: {
        legend: false,
        outlabels: {

            text: function (value, context) {

                // eslint-disable-next-line no-useless-concat
                return "  " + compactInteger(value.dataset.data[value.dataIndex]) + " (" + ' %p' + ") "
            },
            color: '#233b3b',
            /* stretch: 45,*/
            backgroundColor: null,
            lineColor: '#233b3b',
            lineWidth: 1,
            stretch: 10,
            padding: {
                bottom: 0
            },
            font: {
                resizable: true,
                minSize: 12,
                maxSize: 18
            },

        },
        datalabels: {
            display: false,

        },
    },

};
export const firstPieData22 = {
    labels: secondChartData,
    datasets: [
        {
            label: "# of Votes",
            backgroundColor: color2,
            data: data2,
            borderWidth: 0,

        },]
}
export const firstPieOption22 = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        }
    },
    legend: {
        display: false,
        position: "bottom",
        labels: {
            fontSize: 14,
            boxWidth: 40,
            boxHeight: 2,
            fontColor: "rgba(255,255,255,1)",
        },
    },
    scales: {
        xAxes: [
            {
                display: false,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
            },
        ],
        yAxes: [
            {
                display: false,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
            },
        ],
    },
    plugins: {
        legend: false,
        outlabels: {

            text: function (value, context) {

                // eslint-disable-next-line no-useless-concat
                return "  " + compactInteger(value.dataset.data[value.dataIndex]) + " (" + ' %p' + ") "
            },
            color: '#233b3b',
            /* stretch: 45,*/
            backgroundColor: null,
            lineColor: '#233b3b',
            lineWidth: 1,
            stretch: 10,
            padding: {
                bottom: 0
            },
            font: {
                resizable: true,
                minSize: 12,
                maxSize: 18
            },

        },
        datalabels: {
            display: false,

        },
    },

};
/*по управлениям*/
let first = [
    27000000,
    25000000,
    26000000,
    26000000,
    48000000,
    70000000,
    99000000,
    87000000,
    60000000,
    50000000,
    70000000,
    27000000,
    25000000,
    26000000,
    26000000,
    48000000,
    70000000,
    99000000,
    87000000,
];
let second = [
    420000000,
    480000000,
    410000000,
    330000000,
    220000000,
    180000000,
    140000000,
    170000000,
    190000000,
    180000000,
    170000000,
    420000000,
    480000000,
    410000000,
    330000000,
    220000000,
    180000000,
    140000000,
    170000000
]
let first2 = [
    600000000,
    500000000,
    700000000,
    260000000,
    480000000,
    700000000,
    990000000,
    870000000
];
let second2 = [
    1900000000,
    1800000000,
    1700000000,
    4800000000,
    4100000000,
    3300000000,
    2200000000,
    1800000000
]
export const shortName = [
    "УПИИР",
    "УОР",
    "УГК",
    "УЖП",
    "УСБ",
    "УОЗ",
    "УЗО",
    "УО",
    "УК",
    "УГМ",
    "УпДР",
    "УЗЭ",
    "УКГ",
    "УТ",
    "УС",
    "УГА",
    "УСиБ",
    "УЭиИР",
    "УЦ",


]
export const lineDataOne = {
    labels: shortName,
    datasets: [
        {
            label: "План ",
            backgroundColor: '#4199e9',
            data: first,

            pointBorderColor: 'white',
            borderWidth: 0,


        },
        {
            label: "Факт",
            backgroundColor: '#1d4264',
            data: second,

            pointBorderColor: 'white',
            borderWidth: 0,


        }]
}
export const lineOptionOne = {
    title: {
        display: true,
        text: 'Администраторы бюджетной програмы расходов: Управления',
        fontColor: 'white',
    },
    elements: {
        point: {
            radius: 0
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: -5,
            right: 0,
            top: 10,
            bottom: 0
        }
    },
    legend: {
        display: true,
        position: 'top',
        labels: {
            fontColor: 'white'
        }
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    drawOnChartArea: true,
                    display: true,
                },
                ticks: {
                    fontColor: 'white',
                    display: true,
                    beginAtZero: false,
                },
            },
        ],
        yAxes: [
            {
                display: true,
                gridLines: {
                    drawOnChartArea: true,
                    display: true,
                },
                ticks: {
                    fontColor: 'white',
                    callback: function (label, index, labels) {
                        return compactInteger(label);
                    },
                    display: true,
                    beginAtZero: false,
                },
            },
        ],
    },
    plugins: {
        datalabels: {
            display: false,
            formatter: function (value, ctx, index) {
                console.log('7777777777777777', shortName[ctx.dataIndex])
                console.table('1111111111111111111111', ctx)
                /*     return compactInteger(value);*/

                return shortName[ctx.dataIndex] + value  /*+ cvvt_b[ctx.dataIndex]*/;
            },
            /* backgroundColor:'rgba(0,0,0,0.26)' ,*/
            align: "end",
            anchor: "start",
            rotation: -90,
            clamp: true,
            /* borderColor: 'rgb(255,255,255)',
                         borderRadius: 2,
                         borderWidth: 1,*/
            color: "rgb(255,255,255)",
            padding: 2,
            font: function (context) {
                let w = context.chart.width;
                let custom_size = [
                    [810, 12],
                    [710, 10],
                    [550, 5],
                    [500, 5],
                ];
                let default_size = 14;
                for (let i = 0; i < custom_size.length; i++) {
                    if (w < custom_size[i][0]) {
                        default_size = custom_size[i][1];
                    }
                }
                return {
                    size: default_size,
                };
            },
        },
    },


};
/*по акиматам*/
export const shortName2 = [

    "Алмаинский",
    "Алатауский",
    "Ауэзовский",
    "Бостандыкский",
    "Жетысуйский",
    "Медеуский",
    "Наурызбайский",
    "Турксибский",


]

export const blockTwo_HChartData = {
    labels: shortName,
    datasets: [
        {
            label: "Болезни органов дыхания",
            backgroundColor: "#70d9dd",
            data: first,
            /*fontSize: '22'*/
        },
        {
            label: "Болезни системы кровообращения",
            backgroundColor: "#923c3c",
            data: second,
            /*fontSize: '22'*/
        },]
}
export const blockTwo_HChartOption = {
    /* elements: {
         point:{
             radius: 0
         }
     },*/
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },

    legend: {
        display: true,

        position: 'bottom'
        ,
        align: 'start',
        labels: {
            boxWidth: 50,
            fontColor: 'rgba(255,255,255,1)',
            fontSize: 14,
        },

    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    drawOnChartArea: true,
                    display: true,
                },
                ticks: {
                    fontColor: 'white ',
                    display: true,
                    beginAtZero: false,
                },
            },
        ],
        yAxes: [
            {
                display: true,
                gridLines: {
                    drawOnChartArea: false,
                    display: true,
                },
                ticks: {
                    fontColor: 'white ',
                    callback: function (label, index, labels) {
                        return compactInteger(label);
                    },
                    display: true,
                    beginAtZero: false,
                },
            },
        ],
    },
    plugins: {

        outlabels: {

            text: function (value, context) {

                // eslint-disable-next-line no-useless-concat
                return "  " + compactInteger(value.dataset.data[value.dataIndex]) + " (" + ' %p' + ") "
            },
            color: 'lightBlack',
            /* stretch: 45,*/
            backgroundColor: null,
            lineColor: 'lightBlack',
            lineWidth: 1,
            stretch: 10,
            padding: {
                bottom: 0
            },
            font: {
                resizable: true,
                minSize: 12,
                maxSize: 18
            },

        },
        datalabels: {
            formatter: function (value, ctx) {
                return compactInteger(value);
            },
            display: false,

        },
    },


}
/*Мменю периода*/
export const year = [
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
]
export const month = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
]
/*----------------------*/

export const articleCrimes = [
    "Выбрать все",
    "Вымогательство",
    " Грабеж",
    "Доведение до самоубийства",
    "Изнасилование",
    "Контрабанда изъятых из обращения предметов или предметов, обращение которых ограничено",
    "Кража",
    "Мелкое хищение",
    "Мошенничество",
];
export const categoryCrime = [
    "небольшой",
    "средней",
    " тяжкие",
    "особо тяжкие",
];
/*------------------------------------*/
export const nameCompany = [

    'ГККП "Дворец школьников"',
    'ГККП "ДМШ № 9"',
    'ГККП "ДМШ № 11"',
    'ГККП "ДМШ № 8"',
    'ГККП "ДМШ№1(хоровая)"',
    'ГККП "ДМШ№10"',
    'ГККП "Дом школьников №2"',
    'ГККП "Дом школьников №9"',
    'ГККП "Дом школьников №5"',
    'ГККП "Дом школьников №7"',
    'ДМШ №5',
    'ДМШ №7',
    'ДМШ№3 им. С. Прокофьева',
    'Дом школьников №1',
    'Дом школьников №2',
    'Дом школьников №3',
    'КГКП "Дом школьников № 6"',
    'КГКП "Школа Искусств"',

];
let pay = [
    'Бесплатные',
    'Частично бесплатные',
    'Платные',

]
let payData = [
    1000, 600, 1200
]
export const barOption = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0
        }
    },
    legend: {
        display: false,
        position: "bottom",
        labels: {
            fontSize: 14,
            boxWidth: 40,
            boxHeight: 2,
            fontColor: "rgba(255,255,255,1)",
        },
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    drawOnChartArea: false,


                },
                ticks: {
                    display: true,
                    beginAtZero: true,
                    fontColor: 'white',

                },
            },
        ],
        yAxes: [
            {
                display: true,
                gridLines: {
                    drawOnChartArea: false,

                },
                ticks: {
                    display: true,
                    beginAtZero: true,
                    fontColor: 'white',
                    callback: function (label, index, labels) {
                        return compactInteger(label);
                    },
                },
            },
        ],
    },
    plugins: {
        datalabels: {
            formatter: function (value, ctx) {
                return compactInteger(value);
                /*return 'Всего:' + value + ' \nДетей:' + cvvt_b[ctx.dataIndex];*/
            },
            backgroundColor: 'rgba(0,0,0,0.26)',
            align: "end",
            anchor: "end",
            /*  rotation: -90,*/
            clamp: true,
            borderColor: 'rgb(255,255,255)',
            borderRadius: 2,
            borderWidth: 1,
            color: "rgb(255,255,255)",
            padding: 2,
            font: function (context) {
                let w = context.chart.width;
                let custom_size = [
                    [810, 12],
                    [710, 10],
                    [550, 5],
                    [500, 5],
                ];
                let default_size = 14;
                for (let i = 0; i < custom_size.length; i++) {
                    if (w < custom_size[i][0]) {
                        default_size = custom_size[i][1];
                    }
                }
                return {
                    size: default_size,
                };
            },
        },
    },

};
/*export const barData = {
    labels: distr,
    datasets: [
        {
            label: "Детских кружков",
            backgroundColor: color2,
            data: data,
            borderWidth: 0,
            minBarLength: 5,

        },]
}*/

export const pieData = {
    labels: pay,
    datasets: [
        {

            backgroundColor: [
                '#64eda6',
                '#00bfff',
                '#ffbf1e',
            ],
            data: payData,

            pointBorderColor: 'white',
            borderWidth: 2,
            borderColor: "rgba(255,255,255,0.5)"


        }]
}
export const pieOption = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 90,
            right: 90,
            top: 0,
            bottom: 20
        }
    },
    legend: {
        onClick: (e) => e.stopPropagation(),
        display: true,
        position: "top",
        /*  align: 'start',*/
        labels: {
            fontSize: 14,
            boxWidth: 20,
            boxHeight: 2,
            /*     borderRadius: "50%",*/
            fontColor: "rgba(255,255,255,1)",

            usePointStyle: true,
        },
    },
    scales: {
        xAxes: [
            {
                display: false,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
            },
        ],
        yAxes: [
            {
                display: false,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
            },
        ],
    },
    plugins: {

        outlabels: {

            text: function (value, context) {

                // eslint-disable-next-line no-useless-concat
                return "  " + compactInteger(value.dataset.data[value.dataIndex]) + " (" + ' %p' + ") "
            },
            color: 'white',
            /* stretch: 45,*/
            backgroundColor: null,
            lineColor: 'white',
            lineWidth: 1,
            stretch: 10,
            padding: {
                bottom: 0
            },
            font: {
                resizable: true,
                minSize: 12,
                maxSize: 18
            },

        },
        datalabels: {
            display: false,

        },
    },


};

export const tableData = [
    {

        district: "Алатауский район",
        name: "проспект Абая",
        typeSection: "90",
        finance: "кража из холодильника в особо крупном размере",
        payment: "4",
        paymentBudget: "УПК Алатауского района",
        fio: "УПК Алатауского района",
    },
]


/*88888888888888888888888888888888888888888*/
export const tesst = [

    {
        district: 'Медеуский район ',
        typeSection: '«Дзюдо» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Мырзалиев М.С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Бокс» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Мухамбеткалиев Н. З. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Вольная борьба» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Қожамбір Ғ.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Рукопашный бой» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Жумабаев З.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«вольная борьба» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Комекбай Д. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Годзю рю каратэ до» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Муқаналиев  Б. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Годзю рю каратэ до» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Кармен А.К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Көркем гимнастика» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Бороненко О.С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Көркем гимнастика» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Сайфулина М.К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Таэквондо» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Кабеков И.Ш. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Таэквондо» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Кабынасыр А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Футбол» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Омаров Б. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Айкидо» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Шуланбаев Д.К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Футбол» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Алиев Р. И. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Жүзу» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Саламатов Н.Ж. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Жүзу» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Исмаилов Д. А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Жүзу» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Куприн Д.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Шахматы» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Кулакова  В.Я. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Тоғызқұмалақ» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Айтбаев Р.С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Баскетбол» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Кулинич В. В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Шахматы» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Аширов Т.Р. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Я   и    природа» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Акажанова Г. Г. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Жануарлар әлемі» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Ахметбеков Ж.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Менің бағым» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Базарова А. К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Экологический практикум» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Бейсекожаева Б.С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Денсаулық әліпесі ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Әбей Гулдана '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Юная мастерица» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Беседина Л.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Волшебная кисточка» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Гуртий Л. Ю. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '"Экология растений" ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Джанатаева З.Ж. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Жас аквариумист»                                                                                   ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Жумабай П. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Өнерлі қол – бақытқа жол» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Канатбаева С.К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Гүлдер әлемі» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Касаинова А.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '"Жасыл әлемі" ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Кемпишева К.Р. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '"Менің сүйікті жануарым" ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Куралбаева И.Т. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '"Теремок" ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: ' Маеренко А.Б. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '"Экология города" ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Омарқұлова А.Ж. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Родничок» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Янушевская С. Г. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Жас математик ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Ибраймова Г.Ж. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Робототехника ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Зуева Е.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Робототехника LEGO ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Төрехан А.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Жас математик ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Токтанаева С.Қ. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Cheerful English» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Бекпейсова А.Е. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Клуб старше-классников «Арай» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Лаврушенко О.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Қазақ тілі ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Агадилова М.Е. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Английский язык (обуч.на рус.яз.) ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Римашевская Т. В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Мәңгілік ел» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Касенов Б.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' Школа игры на домбре «Балдаурен» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Кажигали Т.У. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Танцевальный ансамбль «Жан-ел» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Демисинова Г.Р. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Хореографический ансамбль «Жибек  жолы» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'КогутА..Ш. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокальная студия «Алакай» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'КулиноваТ.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокальная студия «Капелька» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Ян Ти Фа Г.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Школа игры на фортепиано «Юный пианист»  ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'УсентаеваР.У. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Танцевальный ансамбль «Арман» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Сарманова Г. С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Шабыт» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Сейтимова С.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Игра на гитаре» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Хан А.Г. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Сценическая речь» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Әбдіпатта Жангали '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Умелые ручки» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Мусрепова С.Т. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Пешеходный туризм ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Шәмшіман Қ.С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Пешеходный туризм ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Джекешова К.У '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Скалолазание ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Бакай Д.С '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные геологи ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Королева Н.Н '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные туристы ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Имамадин Н.И '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные туристы ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Болысбаева А.У. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Пешеходный туризм ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Есембаева Б.Б. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Литературное краеведение ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Бостаева Л.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные туристы ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Искакова А.Т '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные туристы ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Мукашев Н.К '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Географическ. краевед-е ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'ЛапиеваА.К '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Горный  туризм ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Абуов Д.Ш '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные туристы ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Куренкеев К. Б '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные экологи ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Карамергенова Р.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Юные туристы ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Әділбай Б.Е '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Горный туризм ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Ерболатұлы Е. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Пешеходный туризм ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 11915,
        payment: 'платные ',
        finance: 'местный бюджет ',
        fio: 'Тургамбаева К.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ домбра ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'АбикешеваР.Р '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ домбра ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'АкбаеваА.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ скрипка ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Алтынбекова С.М '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ терме ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'АрысбаеваГ.С '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'АубакировД.Т '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'БаймукановаА.Н '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ саксафон ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Бемм А.И '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ домбра ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'БердибаеваК.Б '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ флейта ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Васильцова Е.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ вокал ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Глушко А.С '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Диордица В.И. '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Ермолаева Т.В '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ гитара ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Жумабаев А.Т '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Зырянова И.В '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ  фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Ивченко Э.М '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ шертер ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'ИзмуратоваЗ.Ш. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'ИсатаеваЛ.Т '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ терме ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Искаков Ж.М '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ скрипка ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'ИшкаеваЖ.Х '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'КаденоваМ.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ флейта ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'КазиканА.С '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ вокал ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'КаниК.К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '  ДМШ флейта ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Куанова Д.Т '
    },
    {
        district: 'Медеуский район ',
        typeSection: '  ДМШ домбра ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'КурумбаеваГ.Ж '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Лапина Е.Н '
    },
    {
        district: 'Медеуский район ',
        typeSection: '  ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Власенкова ТА '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Нам-Ли С.К '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ жетыген ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'ТулеугалиеваА.Е '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ скрипка ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Нурмаханова Д.Ш '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ гитара ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Одинцов А.В '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Омарова С.К '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Пелевина О.Ю '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ кобыз ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'РауандинаШ.З '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ саксафон ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Сметанкина Л.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Станевич Н.Н '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Тайжанова Е.В '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Терехова Л.И '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ вокал ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Турунтаева И.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ домбра ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'УтаровН.Т '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ вокал ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Садуахасова А.Ю '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ гитара ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Хан А.Г '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ДМШ вокал ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Шагарова А.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: ' ДМШ скрипка ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Шамсутдинова М.М '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш Духовые ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Аубакиров Э.Н. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш Фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Анищенко А.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш ударные ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Ибрагимов Ф.Д. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш флейта ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Алимбаева А.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш Фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Балашева И.Н. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш Фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Берестова Н.С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш скрипка ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Боровикова В.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш Вокал ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Шатилова В.Т. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Талакин В.Н. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш гитара ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Вакула В.Г. '
    },

    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш тромбон ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Даулетбаев Ч.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Палаткина Е.Н. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Родионова И.К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш духовые ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Куличенко И.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Налобнова О.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз Бас гитара.  ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Напрягло А.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш скрипка ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Баркова В.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш флейта ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Доронина Н.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш Скрипка ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Исагулова Е.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш вокал ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Данилова И.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Демченко А.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш гитара ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'частично платные ',
        finance: 'родительская оплата ',
        fio: 'Хан А.Г. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш ударные ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 22000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ибрагимов Ф.Д. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш гитара ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 22000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Вакула В.Г. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш фортепиано ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 22000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Головина Е.П. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш флейта ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 22000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Доронина Н.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Джаз дмш подготовительный класс ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 14000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Головина Е.П. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Интеллект» (развитие речи, аргументации, коммуникации) ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Садыкова С.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Английский язык «Happy English» (обучение на рус.яз.) ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Римашевская Т.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Английский язык ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Палаханчиди Д. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Cheerful English» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Бекпейісова А.Е. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Английский язык (қаз) ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Жакып Н. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Қазақ тілі ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Агадилова М.Е, '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Русский язык  ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Садыкова С.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Художественная гимнастика ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Бороненко О.С '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Шахматы ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Кулакова В.Я '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Футбол ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Алиев Р.И. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Футбол ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Омаров Б. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Годзюрю каратэ до ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Муканалиев Б. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Художественная гимнастика ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Сайфуллина М.К. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Дзюдо ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мырзалиев Марат Саутбекович '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Плавание ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Саламатов Нурлан '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Айкидо ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Шуланбаев Д.К '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Плавание ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Куприн Д.М '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вольная борьба ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Көмекбай Д.Қ. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вольная борьба ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Қожамбір Ғ.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Бокс ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мухамбеткалиев Н.З. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Баскетбол ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Кулинич В.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Греко-римская борьба ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Булах Д.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Таэквондо  ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Қабынасыр А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Рисунок и живопись ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мустафаева Г.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Жас суретші» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Кәдір Әсел '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Дизайн одежды ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ходжамуратова И.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Умелые ручки ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мусрепова С.Т. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Скульптура и живопись ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мырзабек А.С. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Танцевальный ансамбль «Жан-ел» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Демисинова Г.р. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Хореографический ансамбль «Жибек жолы» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Когут А.Ш. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокальная студия «Алакай» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Кулинова Т.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокальная студия «Капелька» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ян Ти Фа Г.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокальная студия «Еркемай» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Даутов Т.Т. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокальная студия «Шабыт» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Сейтимова С.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Школа игры на домбыре «Балдаурен» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Кажигали Т.У. '
    },
    {
        district: 'Медеуский район ',
        typeSection: '«Игра на гитаре» ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Хан А.Г '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Школа игры на фортепиано «Юный пианист»  ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Усентаева Р.У. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Робототехника ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Зуева Е.А. (ARDUINO) '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Робототехника ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Төрехан А.М. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Жас математик ',
        name: 'ГККП "Дворец школьников" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ибраимова Г.Ж. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Фортопиано, скрипка, гитара, саксофон ',
        name: 'ГККП "ДМШ №8" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ахметбеков Т.А. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Домбра, кобыз, баян ',
        name: 'ГККП "ДМШ №8" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ахметбеков Т.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Хоровое отделение ',
        name: 'ГККП "ДМШ№1(хоровая)" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Байболова М.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Фортопиано ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Виолончель ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Скрипка ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Баян ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Аккордеон ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Ударные инструменты ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Кларнет ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Саксафон ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'флейта ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Вокал ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Прима-Қобыз, қыл-қобыз ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Жетіген ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Гитара ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Хорегография ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'ИЗО ',
        name: 'ГККП "Школа Искусств" ',
        paymentBudget: 10000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гальберг И.В. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "ДМШ №5" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Чалдаева Ш.Х. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Струнные инструменты ',
        name: 'ГККП "ДМШ №5" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Чалдаева Ш.Х. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокал ',
        name: 'ГККП "ДМШ №5" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Чалдаева Ш.Х. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Духовые ',
        name: 'ГККП "ДМШ №5" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Чалдаева Ш.Х. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Русские народные ',
        name: 'ГККП "ДМШ №5" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Чалдаева Ш.Х. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Казахские народные ',
        name: 'ГККП "ДМШ №5" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Чалдаева Ш.Х. '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Хоровое отделение ',
        name: 'ГККП "ДМШ №5" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Чалдаева Ш.Х. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Фортепиано, скрипка,гитара,ударные ',
        name: 'ГККП "ДМШ № 9" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Узбеков М.М. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Домбра, баян ',
        name: 'ГККП "ДМШ № 9" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Узбеков М.М. '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Скрипка ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Баян ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Кобыз ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'флейта ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Кларнет ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Саксафон ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'жетіген  ',
        name: 'ГККП "ДМШ №11" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Оспанова Б.А '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Скрипка ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Кобыз ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Жетыген ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'гитара ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'флейта ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Кларнет ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Саксафон ',
        name: 'ГККП "ДМШ №3 им. С. Прокофьева" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукаева Н.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Казахские народные инструменты ',
        name: 'ГККП "ДМШ№10" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Зуй Т.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "ДМШ№10" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Зуй Т.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Струнные инструменты ',
        name: 'ГККП "ДМШ№10" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Зуй Т.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Гитара ',
        name: 'ГККП "ДМШ№10" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Зуй Т.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Вокал ',
        name: 'ГККП "ДМШ№10" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Зуй Т.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Духовые ',
        name: 'ГККП "ДМШ№10" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Зуй Т.Б. '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "ДМШ №7" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тюлюкпаева В.К '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Скрипка ',
        name: 'ГККП "ДМШ №7" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тюлюкпаева В.К '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "ДМШ №7" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тюлюкпаева В.К '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Кобыз ',
        name: 'ГККП "ДМШ №7" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тюлюкпаева В.К '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Гитара ',
        name: 'ГККП "ДМШ №7" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тюлюкпаева В.К '
    },
    {
        district: 'Ауезовский район ',
        typeSection: 'Саксафон ',
        name: 'ГККП "ДМШ №7" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тюлюкпаева В.К '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок танцевальный "Жұлдыздар" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абдрахманов Бахытбек Алиакбарович '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок"Тіл өнері" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абу Толқын Шарханқызы '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Логика" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Аманжолова Рыскул Ахметжановна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Жас суретші" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Асет Ғабит Асетұлы '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок"Қызықты психология" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Арыстанбекова Акжан  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Жаратылыстану әлемі" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Басқанбаева Гулнұр '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Пифогор" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Бачурина Ольга Михайловна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Авиамоделирование" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Гизатулин Юрий Газисович '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Бокс" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Дадайбеков Бекболат '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Жәдігер" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Дарибаев Самал  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Компьютер и мы" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Джабулаев Максат Абдулманапович  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Веселые нотки" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Джалимбетова Айнаш Аскаровна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Көркем сөз" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Джанузакова Куралай Разаковна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Қызықты психология" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Дилдабаева Балнур  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Театральный кружок "ЖасSTAR" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Әбдісадық Гулдана '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Веселая грамматика" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жангунова Сайлет Темешовна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок домбры"Дала сазы" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жарылкапова Алмаш Ордабековна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Домбыра дастан" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жусіпәлі Мақсат  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Қолөнер" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жумахан Ақерке  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Шахматы" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Иманберлинова Мадина  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Маленький эрудит" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Казанцева Наталья Васильевна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Тоғызқұмалақ" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Калдыбаев Азамат Копсекбаевич  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Студия Академического рисунка "Арт-Фаворит" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Калиева Зухра Касымжановна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Жас өркен" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Келгенбаева Аида Балгабаевна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Шебер қолдар" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Кенесариаева Сауле Кадыржановна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Психологиялық дамыту" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Кожахметов Дауирхан Сейдалиевич  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Zhas talant" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Кулахметов Думан Адебиетович  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Информатика" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Кусайнова Айжан Асетовна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "АБВГдейка" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Лаврушина Екатерина Ивановна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Домбыра" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Манатауова Галия Калымбетовна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "English club" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Маутаева Майра  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Балбұлақ" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Рахметова Айнур Имангазыкызы '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок  "Smart kids" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Рысбай Арай  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Радуга бисера" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Старожилова Людмила Евгеньевна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Ақжүніс" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сыздыкбаева Шекер Бекетовна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Таэквандо" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тегембаев Нурлан  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Вокал" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Толеубек Қуат Қанатұлы  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Қызықты графика әлемі" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Төреханова Әсел  Тұрғанғалиқызы '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Креативная кукла" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Турганбаева Батес Хадыровна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Сахна тілі" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Түзелбек Айдана Ерланқызы '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Баян" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Утегенов Мырзахан Алдабергенович '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок домбры "Інжу маржан" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Үсенбаева Асия  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Дзюдо" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Хамидов Жанкелді  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Қолөнер" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Хамит Ахмад '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Дәстүрлі ән" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Хаумет Айнагуль '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Балауса үні" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Хиттенов Айдар Бейбитшиликович '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Жас қаламгер" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Шагатаева Сайрагуль Садыковна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок рисования "Art space" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Шакир Шекер Арматқызы '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок театральный "Жалын" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Юсип Ұлықман '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Бүркітші" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Саржанов Хайрбек '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Веселая грамматика" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Жангунова Сайлет Темешовна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Студия Академического рисунка "Арт-Фаворит" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Калиева Зухра Касымжановна '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Авиамоделирование" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гизатулин Юрий Газисович '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок "Фортопиано" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Джалимбетова Айнаш Аскаровна  '
    },
    {
        district: 'Алатауский район ',
        typeSection: 'Кружок  "Smart kids" ',
        name: 'ГККП "Дом школьников №1" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Рысбай Арай  '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '"Лего-клуб" ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Оспанова  С.К. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Ансамбль «Мұрагер» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Алимбай Т. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Вокальная группа «Веселые нотки» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Джжалимбетова А.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Дәстүрлі домбыра» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сагындыкова О.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Халық әні» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Оралбекова А.Т. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Хореография  ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Кулманова Р.Т. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Құрдастар» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Елеу С.К. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Ансамбль скрипачей «Дивертисмент»  ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Затуринская С.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Психология - школьнику ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Елисеева И.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Бисероплетение  ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ерещенко Л.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Ғажайып қазақ тілі» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Мухамадиева Б.Ж. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Танцевальный ансамбль «Наргиз» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ибрагимова М.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Хор «Веселая капель» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Гишкелюк Л.В. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Эстрада әні» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ибекеева С.С. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Хор «Солнечный круг» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Булеева  О.Н. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'ИЗО ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Волкова Л.Л. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Шахматы ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сеитов К.М. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Қолөнер» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Куангалиева Б.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Ритмы Кавказа» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тимурзиева Л.М. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Чинсон»  ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ким Т.П. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Көркем сөз ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Таганов М.Е. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Актерлік шеберлік ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Анарбай   Д.Н. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Начальное технитческое моделирование» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Бабьяр Н.Г. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Хореографический коллектив  «Вдохновение» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ким И.Г. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Рукоделие» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: ' '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Дизайн одежды» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абделиева А.У. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Хор» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Баксамбаева Г. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Жас информатик» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Бердиева А.М. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Көркем сөз» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Есимов Ш.К. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Тіл өнері» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Джаппарова Т.К. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Хореография» Азалия ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ким Д.Ш. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Тіл дамыту» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Лекерова Б.М. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Қызықты ағылшын» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Нурелова Ш.Н. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Жас Улан » ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Орманова К.К. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Сиқырлы бояулар» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Онбаева  А.А.                                                       '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Серпін»  ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ошақбаева Ж.Б. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Рисование и гобелен» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ракитина Н.И. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Хореография» Томирис ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Рогожина Е.П. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Көңілді шеберхана» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сарбагысова Э.Т '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Домбырамен ән салу» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тауышова Г.Ш. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Батик» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Токабаева Г.К. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '«Полиглот» ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ибраева А.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сейсенбеккызы Р '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Азбука шитья ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 3920
        ,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Соболевская Е.Н. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Хореография ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ким Д.Ш. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Танцевальная группа "Аяла" ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Кулманова Р.Т. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Английский язык ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Койшебай Б.С. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Фортепиано "Веселые нотки" ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Джалимбетова А.А. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: '"Рисование и гобелен" ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ракитина Н.И. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Шахматы ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Сеитов К.М. '
    },
    {
        district: 'Алмалинский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников №2" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ошақбаева Ж.Б. '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Ансамбль "Күн әлемі" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Алимбетова М.А. '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Студия танца "Апельсин" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Гапчук Е.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Хореографический ансамбль "Сюрприз" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Казакова Н.В '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб спортивного бального танца ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Пахомов Р.Е '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Вокальный ансамбль "Балауса" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Масымходжаева С.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Школа ораторского искусства "Сөз маржан" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жотабаева Р.К '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Ансамбль народных инструментов "Дала сазы" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жарылкапова А.О '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Ансамбль "Домбыра үні" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Аскербекова З.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Оркестр "Русские узоры" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Простомолотов Е.И '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Моделирование одежды ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Меликова Г.И '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Изо студия "Таң-Шолпан" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сарсебаева А.М '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок творческого развития "Балдырған" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Куленов Ж.С '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб творческого развития "Квилинг" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Утегулова А.С '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок "Бисероплетение" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Темирова А.К '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок мастерская "Образ" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Масымходжаев А.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Компьютерный класс ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Седловский А.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Школа развития "Успех" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Мукажанова Г.Ж '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок "Юный шахматист" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Келгенбаев С.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб национальный игры "Тоғызқұмалақ" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Келгенбаев А.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб "Жас улан" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ниязова Г.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Центр работы со старшеклассниками ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Исакова С.Е '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб "Социальной активности" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Курочкин А.С '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб "Лидер" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Морозова С.Л '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб "Улан басы" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Утегулова А.С, Морозова С.Л '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок "Пифагор" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'вакансия '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Фото кружок ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5932,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'вакансия '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Ансамбль "Күн әлемі" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Алимбетова М.А. '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Студия танца "Апельсин" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гапчук Е.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Хореографический ансамбль "Сюрприз" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Казакова Н.В. '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Клуб спортивного бального танца ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Пахомов Р.Е '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Вокальный ансамбль "Балауса" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Масымходжаева С.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Школа ораторского искусства "Сөз маржан" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Жотабаева Р.К '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Ансамбль "Домбыра үні" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Аскербекова З.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Оркестр "Русские узоры" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Простомолотов Е.И '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Изо студия "Таң-Шолпан" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Сарсебаева А.М '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок творческого развития "Балдырған" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Куленов Ж.С '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Школа развития "Успех" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мукажанова Г.Ж '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок "Юный шахматист" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Келгенбаев С.А '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Современные танцы "Urban Dance " ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Абдуллина Г.Т '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок муз эстетического развития "Малышок" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 5000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Заярная Н.И '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок художественное чтение  "Балбұлақ"  ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Рахимова Н.О '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок "Английского языка" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Бестонова Л.Ж '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Кружок  английского языка "Just_speak" ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: ' Абдикеримова Г.Ж '
    },
    {
        district: 'Бостандыкский район ',
        typeSection: 'Робототехника ',
        name: 'ГККП "Дом школьников №3" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Рыбалкина О.А '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Ансамбль "Непоседы" ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2900,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Гладкова Неля Владимировна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Ансамбль "Наурыз" ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2900,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Муратова Гульбаршин Ерсайновна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Ансамбль "Ревьер" ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2900,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Бангерт Мария Андреевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Ансамбль "Аяулы Кыздар" ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2900,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Гладкова Неля Владимировна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Ансамбль "Blak fire" ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2900,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Гартвих Анастасия Сергеевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Ансамбль "Сахара" ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2900,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Шарипова Ирина Викторовна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Классика ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3500,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Аманкулова Айнура '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Классика ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3500,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Бангерт Мария Андреевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3700,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Нурсултанова Наиля Жумабаевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3700,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Алимбетова Сымбат Амангельдиев '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3700,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Егембердиева Шамшат Кайсовна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3700,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ногайбаева Гульназ '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Кобыз ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3700,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Калыкова Салтанат Турысбековна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Вокально-эстрадная студия "Фейерверк" ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3200,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абсалямова Татьяна Николаевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Эстрадное пение ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3200,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Нурсултанова Дина Еркинбековна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Эстрадное пение ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3200,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жантұрған Куаныш Жолдасұлы '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Оркестр народных инструментов ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3200,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тайсариева Гульмира Исакожаевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Оркестр народных инструментов ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3200,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Байдилдаев Утемис Шиналиевич '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Үкілі домбыра  ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3500,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абдукаимова Бота Сатыбалдиевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Моделирование Одежды ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Чернецова Антонина Васильевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Народно-прикладное искусство ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тюгимбековна Жулдузай Шаяхметовнра '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Дизайн ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сапрыгина Любовь Александр '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ИЗОстудия ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2600,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Максимова-Заярная Наталья '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ИЗОстудия ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2600,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Соколов Игорь Генадьевич '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ИЗОстудия ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 2600,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Мырзабек Айдын Серикулы '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Хуждожественное слово ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3700,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Акылжанова Сымбат Акылжановна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Студия ведущих ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 4000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Сидоренко Нино Рафаэловна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Таэквондо ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 4200,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ким Владимир Николаевич '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'ЭКОкрай ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ударцева Елена Рустемовна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Клуб старшеклассников ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Зиновьева Алла Владими ровна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Красотка ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Арипова Юля Владимировна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 4000,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Оспанкулова Дана Акылбековна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Танцевальный кружок ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 3500,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Гартвих Анас тасия Сергеевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'английский язык ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тархова Виктория Викторовна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Подготовка к школе ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 5600,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тархова Вера Дмитриевна '
    },
    {
        district: 'Медеуский район ',
        typeSection: 'Эстрадное пение ',
        name: 'ГККП "Дом школьников №5" ',
        paymentBudget: 4200,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Абсалямова Тат ьяна Николаевна '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Национальное прикладное творчество ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абдильдина С.Б. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Студия вокального мастерства ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абдолданова Э.Х. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танц. Ансамбль «Ерке наз» ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Айдарова Г.М. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Айтжанова Ж.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Аптимов М.С. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Авиамодельный ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Байгожаев Г.Б. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Дефиле ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Джаржанова Е.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Есенова А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Пение с домброй ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жумадуллаева Г.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Изостудия «Палитра» ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ибрашева С.Д. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Шахматы ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Китапиянов А.Д. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Хореография ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Касимов Ф.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Вокально-хор. казахский "Сеным" ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Кудерина Т. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Музыкальный класс ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Лазарева Г.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Казахский язык ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Манатауова О.М. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Английский язык ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Мунатова Ж.Д. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Мұхитқұлы І. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Вокал ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Муханбеталиев Е.Е. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ңурсултанов Д.Т. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Прикладное творчество ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Нұрылдаева А.Қ. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Народное пение ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Оралхан Ә.Т. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Баян ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Процких А.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Вокально-эстрадная студия Квинта ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Реймер Е.М. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Театр моды ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Рябко Н.И. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Волькально-инструмент ансамбль ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Саркучиков Б. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Ансамбль русской песни «Солнышко» ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Садова А.И. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танцевальный ансамбль «Солнышко» ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Садова А.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Актерское мастерство ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Серикова Л.З. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танцы народов мира ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Смаил А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Вокальная студия "Соловушки" ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Соловьева Л.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Театральная азбука ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тауекелова М.З. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Экология ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тюрина О.И. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Изо ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Файзолла А.О. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танцевальный ансамбль «Экзерсис» ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Шрейн С.Г. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Обучение игры на гитаре ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 3800,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Штомпель В.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танц. Ансамбль «Ерке наз» ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Айдарова Г.М. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Айтжанова Ж.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Спорт-бальные танцы ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Айдоган Л. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Клуб Арай ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 12000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Водясова Г.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Пение с домброй ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Жумадуллаева Г.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Шахматы ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Китапиянов А.Д. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'УШУ ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ковалев А.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Ансамбль  танца Кардинал ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Куницкая  '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Музыкальный класс ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Лазарева Г.Н. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Английский язык ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Мунатова Ж.Д. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Вокал ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Муханбеталиев Е.Е. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Домбыра ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Ңурсултанов Д.Т. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Вокально-эстрадная студия "Квинта" ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Реймер Е.М. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танцы народов мира ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Смаил А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Изо ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Файзолла А.О. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Хореографическая студия "Экзерсис" ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Шрейн С.Г. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Обучение игры на гитаре ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 6000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Штомпель В.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танцевальная студия ',
        name: 'ГККП "Дом школьников № 6" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Остапчук А.И. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Кружок "Халық билері" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Даулбаева А.М. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Патриотический клуб Жас улан"" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абирова Д.Т '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Танцевальная студия "Ақерке" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Нурбатурова С.А. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Ансамбль народных инструментов "Өрлеу" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Пайыз А.М. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Ансмабль народных танцев "Достық" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Баякенова Р.Б. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: '"Лего" клуб ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Берчатова Т.Г. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'ИЗО студия "ALEM-art" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тузелбаева А.А. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Прикладное творчество "Ақзер" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тузелбаева А.А. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Театр моды "Керім ай" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Каримова А.Д. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Вокальня группа "Балдәурен" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Какей Б. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Вокальня группа "Тарту" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Джунусканов Т.Е. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Хоровой коллектив "Жас дәурен" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жолдыбаев К.Е. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Танцевальная студия "Айст" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Жумабай Г. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: '"Тоғызқұмалақ" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Бибеков Е.К. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Театр драмы "Толағай" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Рысбеков М.С. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Ансмабль народных танцев "Шаттық" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Акатаева А.Р. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Танцевальная студия "Томирис" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Акатаева А.Р. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Танцевальная студия "Айголек" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Аздерова А.М. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Ансамбль домбристов "Саржайлау" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Егембердиева Ш. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Скорочтение ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Шайых М.Б. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Ансамбль домбристов "Шалқыма" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абдукаимова Б. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Вокальня группа "МұзТау" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ашимов Р.М. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Игра на гитаре ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Байгожаев А. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Вокальня группа "Шабыт" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Шамекеев А.К. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Фортепиано ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Караваева Р.Я. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: '"Интересная математика" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Бидайбаева А.А. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: '"Тіл дамыту" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Репина Д.В. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: '"Айналадағы әлем"" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Ахметова М. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: '"Лего конструирование" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Дорожко В.С. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Прикладное творчество"Бармағынан бал тамған"  ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Камалиева а. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: '"Веселые нотки" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абдуманапова А. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Кружок физ воспитания "Шымыр" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Серікбаева Ж.М. '
    },
    {
        district: 'Турксибский район  ',
        typeSection: 'Кружок физ воспитания "Шымыр" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 5424,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Шаф С.В. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Фортепиано  ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 11000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Караваева Р.Я '
    },
    {
        district: 'Турксибский район ',
        typeSection: '"АБВГДЕЙКА" развивающий кружок ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 15000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Берчатова Т.Г. '
    },
    {
        district: 'Турксибский район ',
        typeSection: '"FREEDOM" развитие личностного роста ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 12000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Толендиева К.С. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'ИЗО студия "ALEM-art"-1 предмет ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 3000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Тузелбаева А.А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Ансмабль народных танцев "Достық" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Баякенова Р.Б. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Танцевальная студия "Айст" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Жумабай Г. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Игра на гитаре ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 7000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Байгожаев А. '
    },
    {
        district: 'Турксибский район ',
        typeSection: 'Ансмабль народных танцев "Шаттық" ',
        name: 'ГККП "Дом школьников №7" ',
        paymentBudget: 8000,
        payment: 'платные ',
        finance: 'родительская оплата ',
        fio: 'Акатаева А.Р. '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Выразительные чтение"  ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Махамбетжанова К.Н '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Мир фантазий" ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Даулетбай А.С '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Изучаем казахский язык" ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Разбекова А.Б '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Бұл-бұл" вокал үйірмесі ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Тәліпханова Р.Т '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: 'Таеквондо ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Еспенбетов Е.Ж '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: 'Оригами  ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Аязбаева А.Ш '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Театральный кружок" ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Майчинова А.Е '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Хореография" ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Абильденова К.С '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: ' "Нац.игры" ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Балмагамбетов Ж.О '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Сырлы кобыз" ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Карабисенова М.С '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: '"Фортепиано" ',
        name: 'ГККП "Дом школьников №9" ',
        paymentBudget: 3036,
        payment: 'бесплатные ',
        finance: 'местный бюджет ',
        fio: 'Малжанов М.Р '
    },
    {
        district: 'Жетысуский район  ',
        typeSection: 'Домбровой кружок «Мирас»',
        name: 'ГККП "Домшкольников №9"',
        paymentBudget: 3036,
        payment: 'бесплатные',
        finance: 'местный бюджет',
        fio: 'ЖолдасовД.П'
    },
]
/*-----------------------------------------------------------*/
let array_dates = ['10.11.2020', '11.11.2020', '12.11.2020', '13.11.2020', '14.11.2020', '15.11.2020', '16.11.2020',]
let distr = [
    "Алмалинский",
    "Алатауский",
    "Ауезовский",
    "Бостандыкский",
    "Жетысуйский",
    "Медеуский",
    "Наурызбайский",
    "Турксибский",
]
export const memorandum = [
    {
        indicatorName: "Индекс физического объема валового регионального продукта",
        plan: '104,4',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Рост налоговых и неналоговых поступлений в местный бюджет",
        plan: '106',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Рост объема не сырьевого экспорта",
        plan: '109,6',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Индекс физического объема выпуска продукции субъектами малого и среднего бизнеса",
        plan: '101',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Валовая добавленная стоимость малого и среднего бизнеса",
        plan: '4102,1',
        fact: null,
        itemUnit: "млрд.тенге",
    },
    {
        indicatorName: "Номинальный рост инвестиций в основной капитал (за исключением инвестиций из государственного бюджета), в % к предыдущему году",
        plan: '107,9',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Уровень безработицы",
        plan: '5,88',
        fact: null,
        itemUnit: "на 1000 нас.",
    },
    {
        indicatorName: "Стандартизованный коэффициент смертности",
        plan: '5',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Материнская смертность",
        plan: '6',
        fact: null,
        itemUnit: "абсолютное число",
    },
    {
        indicatorName: "Младенческая смертность",
        plan: '8,37',
        fact: null,
        itemUnit: "на 1000 родившихся живыми",
    },
    {
        indicatorName: "Охват детей 3-6 лет дошкольным воспитанием и обучением",
        plan: '89',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Количество созданных постоянных рабочих мест",
        plan: '37500',
        fact: '37500x',
        itemUnit: "ед.",
    },
    {
        indicatorName: "Общая площадь введенных в эксплуатацию жилых зданий",
        plan: '2396,4',
        fact: null,
        itemUnit: "тыс. м²",
    },
    {
        indicatorName: "Доля обеспеченности доступа в городах к центральному водоснабжению",
        plan: '98,3',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Доля обеспеченности доступа в городах к центральному водоотведению",
        plan: '85,7',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Доля обеспеченности доступа в городах к центральному газоснабжению",
        plan: '100',
        fact: null,
        itemUnit: "%",
    },
    {
        indicatorName: "Уровень преступности на 10 тысяч населения",
        plan: '387',
        fact: null,
        itemUnit: "ед.",
    },
    {
        indicatorName: "Снижение числа погибших в дорожно-транспортных происшествиях на 100 пострадавших",
        plan: '2,3',
        fact: null,
        itemUnit: "ед.",
    },

]

/*Школы дет сады*/
export const firstPieData_bar = {
    labels: distr,
    datasets: [{
        label: 'проектная мощность',
        backgroundColor: "#4caf50",
        stack: 'Stack 0',
        data: [1, 5, 8, 9, 6, 3, 5, 7]
    }, {
        label: 'Фактическая наполняемость',
        backgroundColor: "#f75b5b",
        stack: 'Stack 0',
        data: [8, 9, 6, 5, 4, 8, 7, 8]
    },
    ]
}
export const firstPieOption_bar = {

    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    legend: {
        display: false,
        position: "bottom",
        labels: {
            fontSize: 14,
            boxWidth: 40,
            boxHeight: 2,
            fontColor: "rgba(255,255,255,1)",
        },
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: true,
                    beginAtZero: false,
                    fontColor: 'white',
                    fontSize: 11
                },
            },
        ],
        yAxes: [
            {
                display: false,
                gridLines: {
                    drawOnChartArea: false,
                    display: false,
                },
                ticks: {
                    display: true,
                    beginAtZero: false,
                },
            },
        ],
    },
    plugins: {
        datalabels: {
            formatter: function (value, ctx) {
                return value;
            },
            align: "center",
            anchor: "center",
            clamp: true,
            color: "white",
        },
    },

};
/*covid*/
let array_city_infected = [10, 12, 14, 10, 18, 14, 10]
let array_city_recovered = [8, 7, 6, 5, 4, 3, 2, 1]
let array_city_fatal = [8, 7, 5, 9, 6, 9, 7]
let array_city_asymptomatic = [10, 11, 25, 11, 5, 16, 17]
export const CovidOptions = {
    elements: {
        point: {
            radius: 0
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: false,
        /*   text: data_check,*/
        fontColor: 'white'
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    layout: {
        padding: {
            left: 0,
            right: 20,
            top: 0,
            bottom: 20
        }
    },
    legend: {
        fullWidth: true,
        display: true,
        position: 'bottom',
        labels: {
            fontSize: 12,
            boxWidth: 20,
            fontColor: 'rgba(255,255,255,1)'
        },
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: "rgba(255,255,255,1)", // this here
            },
            fontColor: 'white',
        }],
        yAxes: [{
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 30
            },
            ticks: {
                fontColor: "rgba(255,255,255,1)", // this here
            },
            gridLines: {
                drawOnChartArea: false,
                display: false
            },
            /* stacked: true,*/
        }]
    },
    plugins: {
        datalabels: {
            display: false,
            align: 'right',
            anchor: 'end',
            color: 'rgb(255,255,255)',
            padding: 2,
            /* font: function (context) {
                 let w = array_dates.length;
                 let custom_size = [
                     [50, 12],
                     [70, 10],
                     [100, 0]
                 ];
                 let default_size = 14;
                 for (let i = 0; i < custom_size.length; i++) {
                     if (w > custom_size[i][0]) {
                         default_size = custom_size[i][1];
                     }
                 }
                 return {
                     size: default_size,
                 };
             },*/
        }
    },
};
export const CovidData = {
    labels: array_dates,
    datasets: [{
        label: 'Заразилось (чел.)',
        fill: false,

        pointBackgroundColor: '#ff0c13',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#ff0c13',

        data: array_city_infected,
    }, {
        label: 'Вылечилось (чел.)',
        fill: false,
        hidden: true,
        pointBackgroundColor: '#00ff00',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#00ff00',
        data: array_city_recovered,

    }, {
        label: 'Летальных исходов (чел.)',
        fill: false,
        hidden: true,
        pointBackgroundColor: '#000000',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#000000',

        data: array_city_fatal,
    }, {
        label: 'Бессимптомных (чел.)',
        fill: false,
        hidden: true,
        pointBackgroundColor: '#fff200',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#fff200',
        data: array_city_asymptomatic,
    }]
};
/*ЧС*/
let ChS_1 = [ 1,2,3,4,5,6,7]
let ChS_2 = [9,8,7,6,5,4,1]
let ChS_3 = [5,1,4,8,3,2,4]
export const ChS_data = {
    labels: array_dates,
    datasets: [
        {
            label: "ЧС",
            backgroundColor: '#7ed321',
            data: ChS_1,
            /*fontSize: '22'*/
        },
        {
            label: "из них пожаров",
            backgroundColor: "#4cbea9",
            data: ChS_2,
            /*fontSize: '22'*/
        },
        {
            label: "из них прочее",
            backgroundColor: "#4a90e2",
            data: ChS_3,
            /*fontSize: '22'*/
        },
        ]
}
export const ChS_option = {
    legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
            boxWidth: 50,
            fontColor: 'rgba(255,255,255,1)',
            fontSize: 14,
        },
        onClick: function (e, t) {
            var n = t.datasetIndex,
                r = this.chart,
                o = null !== r.getDatasetMeta(n).hidden && r.getDatasetMeta(n).hidden
            r.data.datasets.forEach(function (e, t) {
                var a = r.getDatasetMeta(t)
                t !== n
                    ? o
                    ? null === a.hidden && (a.hidden = !0)
                    : (a.hidden = null === a.hidden ? !a.hidden : null)
                    : t === n && (a.hidden = null)
            })
            r.update()
        },
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    /* layout: {
             padding: 20,
         },*/
    /*legend: {display: false},*/

    scales: {
        reverse: false,
        scaleLabel: {
            display: true,
            /* fontSize : 8,*/
            /* fontColor: "#4a4a4a"*/
        },
        xAxes: [
            {
                /* barPercentage: 0.5,*/
                ticks: {
                    fontColor: 'rgba(255,255,255,1)', // this here
                    /*fontSize: 14,*/
                    min: 0,
                },
                fontColor: 'white',
                /* stacked: true,*/
            },
        ],
        yAxes: [
            {
                /*afterFit: function(scale) {
                          scale.height = 350  // уменьшает размер места под У метки
                      },*/
                /*  barPercentage: 0.5,// - задает ширину колонки ( в минус)
                        categoryPercentage: 1,// - задает ширину колонки ( в минус)*/
                ticks: {
                    min: 0,
                    stepSize: 1,
                    /*suggestedMin: 50,
                            suggestedMax: 100,*/
                    fontColor: 'rgba(255,255,255,1)', // цвет меток по ч или у
                    /*      fontSize: 22,*/
                },
            },
        ],
    },
    plugins: {
        datalabels: {
            /* backgroundColor:'rgba(0,0,0,0.26)' ,*/
            align: 'end',
            anchor: 'start',
            /*  rotation: -90,*/
            clamp: true,

            color: 'rgb(255,255,255)',
            padding: {
                left: 2,
                right: 2,
                top: 2,
                bottom: 0,
            },
            font: function (context) {
                let w = context.chart.width
                let custom_size = [
                    [810, 12],
                    [710, 10],
                    [550, 5],
                    [500, 5],
                ]
                let default_size = 14
                for (let i = 0; i < custom_size.length; i++) {
                    if (w < custom_size[i][0]) {
                        default_size = custom_size[i][1]
                    }
                }
                return {
                    size: default_size,
                }
            },
        },
    },
}
/*транспорт */
let cart_all = ["Онай", "Разовые", "СМС"];
let cart_pay_Bus = [1324, 3245, 4570];
let cart_pay_trolleyBus = [3263, 2232, 1450];
let cart_pay_metro = [7862, 3698, 5560];
let cart_pay_train = [7492, 4125, 3320];
export const Transport_data = {
    labels: cart_all,
    datasets: [
        {
            label: "Bus",
            backgroundColor: '#7ed321',
            data: cart_pay_Bus,
            /*fontSize: '22'*/
        },
        {
            label: "trolleyBus",
            backgroundColor: "#4cbea9",
            data: cart_pay_trolleyBus,
            /*fontSize: '22'*/
        },
        {
            label: "metro",
            backgroundColor: "#4a90e2",
            data: cart_pay_metro,
            /*fontSize: '22'*/
        },
        {
            label: "train",
            backgroundColor: "#f5a623",
            data: cart_pay_train,
            /*fontSize: '22'*/
        }]
}
export const Transport_option = []

/*Преступления и дтп*/
export const dtp_data = {
    labels: distr,
    datasets: [{
        label: 'проектная мощность',
        backgroundColor: "#4c90af",
        stack: 'Stack 0',
        data: [1, 5, 8, 9, 6, 3, 5, 7]
    }
    ]
}
export const dtp_option = {
    legend: {
        display: false,
    },
    layout: {},
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: false,
    },
    scales: {
        reverse: false,
        scaleLabel: {
            display: true,
            /* fontSize : 8,*/
            /* fontColor: "#4a4a4a"*/
        },
        xAxes: [
            {
                /* barPercentage: 0.5,*/
                ticks: {
                    display: true,
                    fontColor: "rgba(255,255,255,1)", // this here
                    /*fontSize: 14,*/
                },
                fontColor: "white",
                /* stacked: true,*/
            },
        ],
        yAxes: [
            {
                ticks: {
                    display: false,
                },
            },
        ],
    },
    plugins: {
        datalabels: {
            align: "end",
            anchor: "start",
            clamp: true,
            color: "rgb(255,255,255)",
            padding: 5,
            formatter: function (value, ctx2) {
                return distr[ctx2.dataIndex] + " - " + value;
            },
            font: function (context) {
                let w = context.chart.width;
                let custom_size = [
                    /* [810, 12],
                                 [710, 10],
                                 [550, 5],
                                 [500, 0]*/
                ];
                let default_size = 14;
                for (let i = 0; i < custom_size.length; i++) {
                    if (w < custom_size[i][0]) {
                        default_size = custom_size[i][1];
                    }
                }
                return {
                    size: default_size,
                };
            },
        },
    },
}

/*выход транспорта*/
let transport_1 = [ 1,2,3,4,5]
let transport_2 = [9,8,7,6,5]

let array_time = ['8:00', '18:00', '21:00', '22:00', '23:00']
export const transport_data = {
    labels: array_time,
    datasets: [
        {
            label: "План ",
            backgroundColor: '#7ed321',
            data: transport_1,
            /*fontSize: '22'*/
        },
        {
            label: "Факт",
            backgroundColor: "#4cbea9",
            data: transport_2,
            /*fontSize: '22'*/
        },

    ]
}
export const transport_option = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 50,
            fontColor: 'rgba(255,255,255,0.5)',
            fontSize: 14,
        },
        onClick: function (e, t) {
            var n = t.datasetIndex,
                r = this.chart,
                o = null !== r.getDatasetMeta(n).hidden && r.getDatasetMeta(n).hidden
            r.data.datasets.forEach(function (e, t) {
                var a = r.getDatasetMeta(t)
                t !== n
                    ? o
                    ? null === a.hidden && (a.hidden = !0)
                    : (a.hidden = null === a.hidden ? !a.hidden : null)
                    : t === n && (a.hidden = null)
            })
            r.update()
        },
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    /* layout: {
             padding: 20,
         },*/
    /*legend: {display: false},*/

    scales: {
        reverse: false,
        scaleLabel: {
            display: true,
            /* fontSize : 8,*/
            /* fontColor: "#4a4a4a"*/
        },
        xAxes: [
            {
                /* barPercentage: 0.5,*/
                ticks: {
                    fontColor: 'rgba(255,255,255,1)', // this here
                    /*fontSize: 14,*/
                    min: 0,
                },
                fontColor: 'white',
                /* stacked: true,*/
            },
        ],
        yAxes: [
            {
                /*afterFit: function(scale) {
                          scale.height = 350  // уменьшает размер места под У метки
                      },*/
                /*  barPercentage: 0.5,// - задает ширину колонки ( в минус)
                        categoryPercentage: 1,// - задает ширину колонки ( в минус)*/
                ticks: {
                    min: 0,
                    stepSize: 1,
                    /*suggestedMin: 50,
                            suggestedMax: 100,*/
                    fontColor: 'rgba(255,255,255,1)', // цвет меток по ч или у
                    /*      fontSize: 22,*/
                },
            },
        ],
    },
    plugins: {
        datalabels: {
            /* backgroundColor:'rgba(0,0,0,0.26)' ,*/
            align: 'end',
            anchor: 'start',
            /*  rotation: -90,*/
            clamp: true,

            color: 'rgb(255,255,255)',
            padding: {
                left: 2,
                right: 2,
                top: 2,
                bottom: 0,
            },
            font: function (context) {
                let w = context.chart.width
                let custom_size = [
                    [810, 12],
                    [710, 10],
                    [550, 5],
                    [500, 5],
                ]
                let default_size = 14
                for (let i = 0; i < custom_size.length; i++) {
                    if (w < custom_size[i][0]) {
                        default_size = custom_size[i][1]
                    }
                }
                return {
                    size: default_size,
                }
            },
        },
    },
}
