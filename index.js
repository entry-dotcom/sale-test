// 業界
const industries = ['manufacture', 'financial', 'real_estate']

// 売上と利益のデータ
const report = [
  {
    industry: 'manufacture',
    department: 'chemical',
    domestic: 8060786,
    overseas: 7047191,
  },
  {
    industry: 'financial',
    department: 'insurance',
    domestic: 9859531,
    overseas: 7620080,
  },
  {
    industry: 'manufacture',
    department: 'paper',
    domestic: 3373828,
    overseas: 5384591,
  },
  {
    industry: 'real_estate',
    department: 'house',
    domestic: 8094797,
    overseas: 5303474,
  },
  {
    industry: 'financial',
    department: 'securities',
    domestic: 8045496,
    overseas: 9235759,
  },
  {
    industry: 'real_estate',
    department: 'hotel',
    domestic: 3806430,
    overseas: 5303474,
  },
  {
    industry: 'manufacture',
    department: 'oil',
    domestic: 5453934,
    overseas: 1977028,
  },
  {
    industry: 'real_estate',
    department: 'apartment',
    domestic: 7803898,
    overseas: 6480764,
  },
  {
    industry: 'manufacture',
    department: 'steel',
    domestic: 9085945,
    overseas: 5485068,
  },
]

//棒グラフのデータを取得
report_manufacture = report.filter((x) => x.industry === 'manufacture')
console.log(report_manufacture)
const manufacture_label = report_manufacture.map((el) => {
  let department = el.department
  return department
})
console.log(manufacture_label)

//円グラフのデータを取得
const industry_label = ['financial', 'real_estate', 'manufacture']
console.log(industry_label)
const report_financial = report.filter((x) => x.industry === 'financial')
const report_financial_domestic = report_financial.reduce(
  (i, x) => i + x.domestic,
  0
)
console.log(report_financial_domestic)
const report_real_estate = report.filter((x) => x.industry === 'real_estate')
const report_real_estate_domestic = report_real_estate.reduce(
  (i, x) => i + x.domestic,
  0
)
console.log(report_real_estate_domestic)
const report_manufacture_2 = report.filter((x) => x.industry === 'manufacture')
const report_manufacture_domestic = report_manufacture_2.reduce(
  (i, x) => i + x.domestic,
  0
)
console.log(report_manufacture_domestic)
const sum_revenue = [
  report_financial_domestic,
  report_real_estate_domestic,
  report_manufacture_domestic,
]

// グラフの描画
// chart を表示する canvas タグの id を指定
const ctx = document.getElementById('bar_chart').getContext('2d')
// Chart クラスをインスタンス化
const bar_chart = new Chart(ctx, {
  //グラフのタイプ
  type: 'bar',
  data: {
    //ラベル
    labels: manufacture_label,
    // グラフで可視化するデータ
    datasets: [
      // 国内の売上データ
      {
        label: '国内', //ラベル
        data: report_manufacture.map((item) => item['domestic']), // 国内の売上データ
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1, //棒グラフの枠線の太さ
      },
      // 利益データ
      {
        label: '海外', //ラベル
        data: report_manufacture.map((item) => item['overseas']), // 追記：利益データ
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1, //棒グラフの枠線の太さ
      },
    ],
  },
})

// chart を表示する canvas タグの id を指定
const cty = document.getElementById('pie_chart').getContext('2d')
// Chart クラスをインスタンス化
const pie_chart = new Chart(cty, {
  //グラフのタイプ
  type: 'pie',
  data: {
    //ラベル
    labels: industry_label,
    // グラフで可視化するデータ
    datasets: [
      // 国内のfinancial売上データ
      {
        label: '国内', //ラベル
        data: sum_revenue, // 国内の業界別売上データ
        backgroundColor: [
          'rgba(255, 0, 0)',
          'rgb(0, 0, 255)',
          'rgb(255, 255, 0)',
        ],
      },
    ],
  },
})
