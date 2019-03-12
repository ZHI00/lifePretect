// export default {
//   // 数据模板，路由穿进去数据就是这里的设备型号
//   btnData: {
//     // 血压计手动记录
//     sphy: {
//       btn_0: {
//         // 按钮的样式
//         btnType: 'primary',
//         inputType: true,
//         beforeText: '收缩压',
//         num: '--',
//         afterText: 'mmHg',
//         // 弹出层的控制
//         precision: 1,
//         lengths: 201,
//         curIndex: 100,
//         initNum: 0,
//         // 控制弹出层开关
//         popupIndex: 0

//       },
//       btn_1: {
//         btnType: 'primary',
//         inputType: true,
//         beforeText: '收缩压',
//         num: '--',
//         afterText: 'mmHg',
//         // 弹出层的控制
//         precision: 1,
//         lengths: 201,
//         curIndex: 100,
//         initNum: 0,
//         // 控制弹出层开关
//         popupIndex: 1

//       },
//       btn_2: {
//         btnType: 'primary',
//         beforeText: '收缩压',
//         num: '--',
//         afterText: 'mmHg',
//         // true就是picker选择器
//         inputType: true,
//         // 弹出层的控制
//         precision: 1,
//         lengths: 201,
//         curIndex: 100,
//         initNum: 0,
//         // 控制弹出层开关
//         popupIndex: 2
//       }
//     }
//   },
//   deviceTitle: {
//     sphy: '血压计--点击记录'
//   }

// }


export default {
  sphy:{
    title:'血压计',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '收缩压',
        num: '--',
        afterText: 'mmHg',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '舒张压',
        num: '--',
        afterText: 'mmHg',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 1
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '心率',
        num: '--',
        afterText: 'bpm',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 2
      }
    ],
    show:{
      timeFrame:false,
      btn:true,
      write:false
    }

  },
  // 肺活
  pulm:{
    title:'肺活仪',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '肺活量',
        num: '--',
        afterText: 'ml',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '峰流速/PEF',
        num: '--',
        afterText: 'L/min',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 1
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '平均流速',
        num: '--',
        afterText: 'L/min',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 2
      }
    ],
    show:{
      timeFrame:false,
      btn:false,
      write:true
    }

  },
  // tizhicheng
  bodyfat:{
    title:'体脂秤',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '体重',
        num: '--',
        afterText: 'kg',
        // 弹出层的控制
        precision: 0.1,
        lengths: 1101,
        curIndex: 550,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      } 
    ],
    show:{
      timeFrame:false,
      btn:true,
      write:false
    }

  },
  // xuetangyi
  gluc:{
    title:'血糖仪',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '血糖',
        num: '--',
        afterText: 'mmol/L',
        // 弹出层的控制
        precision: 0.1,
        lengths: 201,
        curIndex: 60,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      } 
    ],
    show:{
      timeFrame:true,
      btn:true,
      write:false
    }

  },
  // xueyangyi
  oxim:{
    title:'血氧仪',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '血氧饱和度',
        num: '--',
        afterText: '%',
        // 弹出层的控制
        precision: 1,
        lengths: 100,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '心率',
        num: '--',
        afterText: 'bpm',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 70,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 1
      }
    ],
    show:{
      timeFrame:false,
      btn:true,
      write:false
    }

  },
  LDX:{
    title:'血脂仪',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '总胆固醇',
        num: '--',
        afterText: 'mmol/L',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '甘油三酯',
        num: '--',
        afterText: 'mmol/L',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 1
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '高密度脂蛋白胆固醇',
        num: '--',
        afterText: 'mmol/L',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 2
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '低密度脂蛋白胆固醇',
        num: '--',
        afterText: 'mmol/L',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 3
      }
    ],
    show:{
      timeFrame:false,
      btn:false,
      write:true
    }

  },
  // 尿酸
  uric:{
    title:'尿酸分析仪',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '尿酸',
        num: '--',
        afterText: 'mmol/L',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      }
    ],
    show:{
      timeFrame:false,
      btn:false,
      write:true
    }

  },
  // 尿液
  urine:{
    title:'尿液分析仪',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '比重',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 0
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: 'PH值',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 1
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '葡萄糖',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 2
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '蛋白质',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 3
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '尿胆原',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 4
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '潜血',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 5
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '胆红素',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 6
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '亚硝酸盐',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 7
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '白细胞',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 8
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '酮体',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 9
      },
      {
        btnType: 'primary',
        inputType: true,
        beforeText: 'VC维生素C',
        num: '--',
        afterText: '',
        // 弹出层的控制
        precision: 1,
        lengths: 201,
        curIndex: 100,
        initNum: 0,
        // 控制弹出层开关
        popupIndex: 10
      }
    ],
    show:{
      timeFrame:false,
      btn:true,
      write:false
    }

  },
  // tiwen
  ther:{
    title:'体温计',
    // 这里是输入数据的左右文字
    btnsItem:[ 
      {
        btnType: 'primary',
        inputType: true,
        beforeText: '体温',
        num: '--',
        afterText: '摄氏度',
        // 弹出层的控制
        precision: 0.1,
        lengths: 161,
        curIndex: 70,
        initNum: 30,
        // 控制弹出层开关
        popupIndex: 0
      }
    ],
    show:{
      timeFrame:false,
      btn:true,
      write:false
    }

  },
  // 
}