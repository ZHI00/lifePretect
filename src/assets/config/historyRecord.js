export default {
  //血压
  sphy:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'血压计',
    tabbarItem:[
      {
        text:'收缩压',
        id:0,//请求参数
        index:0 //按钮index
      },
      {
        text:'舒张压',
        id:1,//请求参数
        index:1//按钮index
      },
      {
        text:'心率',
        id:2,//请求参数
        index:2//按钮index
      }
    ],
    items:[
      
      [// 这里是第一页收缩压
        {
            textbefore:'收缩压',
            num:'systolic',
            textafter:'mmHg'
        }
      ],
      [//这是第二页舒张压
        {
            textbefore:'舒张压',
            num:'diastolic',
            textafter:'mmHg'
        },
      ],
      [//第三页心率
        {
            textbefore:'心率',
            num:'heartRate',
            textafter:'mmHg'
        }
      ]
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:true,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
        textbefore:'收缩压',
        num:'systolic',
        textafter:'mmHg'
      },
      {
        textbefore:'舒张压',
        num:'diastolic',
        textafter:'mmHg'
      },
      {
        textbefore:'心率',
        num:'heartRate',
        textafter:'bpm'
      },
    ]
 
  },
  //肺活
  pulm:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'肺活仪',
    items:[
      
      [// 这里是第一页收缩压
        {
            textbefore:'肺活量',
            num:'vitalCapacity',
            textafter:'ml'
        },
        {
            textbefore:'峰流速',
            num:'pef',
            textafter:'L/min'
        },
        {
            textbefore:'平均流速',
            num:'af',
            textafter:'L/min'
        }
      ]
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:false,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
        textbefore:'肺活量',
        num:'vitalCapacity',
        textafter:'ml'
      },
      {
        textbefore:'峰流量',
        num:'pef',
        textafter:'mmol/L'
      },
      {
        textbefore:'平均流速',
        num:'af',
        textafter:'mmol/L'
      }
    ]
  },
  //体脂
  bodyfat:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'体脂秤',
    items:[
      [// 这里是第一页
        {
            textbefore:'体重',
            num:'weight',
            textafter:''
        },
        {
            textbefore:'体脂肪率',
            num:'axungeRatio',
            textafter:''
        },
        {
            textbefore:'BMI',
            num:'BMI',
            textafter:''
        },
        {
            textbefore:'身体年龄',
            num:'bodyage',
            textafter:''
        },
        {
            textbefore:'腰臀比',
            num:'WHR',
            textafter:''
        },
        {
            textbefore:'内脏脂肪',
            num:'visceralFat',
            textafter:''
        },
        {
            textbefore:'人体水分',
            num:'moisture',
            textafter:''
        },
        {
            textbefore:'人体肌肉',
            num:'muscle',
            textafter:''
        },
        {
            textbefore:'骨骼重量',
            num:'boneWeight',
            textafter:''
        },
        {
            textbefore:'基础代谢',
            num:'baseMetabolism',
            textafter:''
        }
      ]
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:false,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
          textbefore:'体重',
          num:'weight',
          textafter:''
      },
      {
          textbefore:'体脂肪率',
          num:'axungeRatio',
          textafter:''
      },
      {
          textbefore:'BMI',
          num:'BMI',
          textafter:''
      },
      {
          textbefore:'身体年龄',
          num:'bodyage',
          textafter:''
      },
      {
          textbefore:'腰臀比',
          num:'WHR',
          textafter:''
      },
      {
          textbefore:'内脏脂肪',
          num:'visceralFat',
          textafter:''
      },
      {
          textbefore:'人体水分',
          num:'moisture',
          textafter:''
      },
      {
          textbefore:'人体肌肉',
          num:'muscle',
          textafter:''
      },
      {
          textbefore:'骨骼重量',
          num:'boneWeight',
          textafter:''
      },
      {
          textbefore:'基础代谢',
          num:'baseMetabolism',
          textafter:''
      }
    ]
 
  },
  // shouhuan
  bangle:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'手环',
    tabbarItem:[
      {
        text:'计步',
        id:0,//请求参数
        index:0 //按钮index
      },
      {
        text:'心率',
        id:1,//请求参数
        index:1//按钮index
      },
      {
        text:'睡眠',
        id:2,//请求参数
        index:2//按钮index
      }
    ],
    items:[
      
      [// 这里第一页空缺,占位
        {
            textbefore:'收缩压',
            num:'--',
            textafter:'mmHg'
        }
      ],
      [//这是第二页舒张压
        {
            textbefore:'心率',
            num:'heartRate',
            textafter:'bpm'
        },
      ],
      [//第三页心率
        {
            textbefore:'睡眠时长',
            num:'sleepDuration',
            textafter:''
        },
        {
            textbefore:'深睡',
            num:'deepDuration',
            textafter:''
        },
        {
            textbefore:'浅睡',
            num:'shallowDuration',
            textafter:''
        },
        {
            textbefore:'苏醒',
            num:'wakeupDuration',
            textafter:''
        }
      ]
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:true,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:true,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
        textbefore:'步数',
        num:'steps',
        textafter:'步'
      },
      {
        textbefore:'卡路里',
        num:'kcal',
        textafter:'千卡'
      },
      {
        textbefore:'里程',
        num:'mileage',
        textafter:'公里'
      },
      {
        textbefore:'心率',
        num:'heartRate',
        textafter:'bpm'
      },
      {
        textbefore:'睡眠时长',
        num:'sleepDuration',
        textafter:'小时'
      },
      {
        textbefore:'深睡',
        num:'deepDuration',
        textafter:'分钟'
      },
      {
        textbefore:'浅睡',
        num:'shallowDuration',
        textafter:'分钟'
      },
      {
        textbefore:'苏醒',
        num:'wakeupDuration',
        textafter:'分钟'
      },
    ]
 
  },
  // xuetang
  gluc:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'血糖仪',
    items:[
      
      [//只有一页
        {
            textbefore:'血糖浓度',
            num:'bloodSugar',
            textafter:'mmol/L'
        }
      ],
      
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:false,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:true,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
        textbefore:'血糖浓度',
        num:'bloodSugar',
        textafter:'mmol/L'
      }
    ]
 
  },
  // 血氧
  oxim:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'血氧仪',
    tabbarItem:[
      {
        text:'血氧',
        id:0,//请求参数
        index:0 //按钮index
      },
      {
        text:'心率',
        id:1,//请求参数
        index:1//按钮index
      }
    ],
    items:[
      
      [// 这里是第一页收缩压
        {
            textbefore:'血氧饱和度',
            num:'saturation',
            textafter:'%'
        }
      ],
      [//这是第二页舒张压
        {
            textbefore:'心率',
            num:'heartRate',
            textafter:'bpm'
        }
      ]
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:true,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
        textbefore:'血氧饱和度',
        num:'saturation',
        textafter:'%'
      },
      {
        textbefore:'心率',
        num:'heartRate',
        textafter:'bpm'
      }
    ]
 
  },
  // 血脂
  LDX:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'血脂仪',
    tabbarItem:[
      {
        text:'卒中风险',
        id:0,//请求参数
        index:0 //按钮index
      },
      {
        text:'总胆固醇',
        id:1,//请求参数
        index:1//按钮index
      },
      {
        text:'甘油三脂',
        id:2,//请求参数
        index:2//按钮index
      }
    ],
    items:[
      
      [// 这里是第一页收缩压
        {
            textbefore:'卒中风险',
            num:'lapidRatio',
            textafter:''
        },
        {
            textbefore:'总胆固醇',
            num:'TC',
            textafter:'mmol/L'
        },
        {
            textbefore:'甘油三脂',
            num:'TG',
            textafter:'mmol/L'
        },
        {
            textbefore:'高密度脂蛋白胆固醇',
            num:'HDL',
            textafter:'mmol/L'
        },
        {
            textbefore:'低密度脂蛋白胆固醇',
            num:'LDL',
            textafter:'mmol/L'
        },
      ],
      [// 这里是第二页
        {
            textbefore:'卒中风险',
            num:'lapidRatio',
            textafter:''
        },
        {
            textbefore:'总胆固醇',
            num:'TC',
            textafter:'mmol/L'
        },
        {
            textbefore:'甘油三脂',
            num:'TG',
            textafter:'mmol/L'
        },
        {
            textbefore:'高密度脂蛋白胆固醇',
            num:'HDL',
            textafter:'mmol/L'
        },
        {
            textbefore:'低密度脂蛋白胆固醇',
            num:'LDL',
            textafter:'mmol/L'
        },
      ],
      [// 这里是第三页
        {
            textbefore:'卒中风险',
            num:'lapidRatio',
            textafter:''
        },
        {
            textbefore:'总胆固醇',
            num:'TC',
            textafter:'mmol/L'
        },
        {
            textbefore:'甘油三脂',
            num:'TG',
            textafter:'mmol/L'
        },
        {
            textbefore:'高密度脂蛋白胆固醇',
            num:'HDL',
            textafter:'mmol/L'
        },
        {
            textbefore:'低密度脂蛋白胆固醇',
            num:'LDL',
            textafter:'mmol/L'
        },
      ],
      
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:true,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
          textbefore:'卒中风险',
          num:'lapidRatio',
          textafter:''
      },
      {
          textbefore:'总胆固醇',
          num:'TC',
          textafter:'mmol/L'
      },
      {
          textbefore:'甘油三脂',
          num:'TG',
          textafter:'mmol/L'
      },
      {
          textbefore:'高密度脂蛋白胆固醇',
          num:'HDL',
          textafter:'mmol/L'
      },
      {
          textbefore:'低密度脂蛋白胆固醇',
          num:'LDL',
          textafter:'mmol/L'
      }
    ]
 
  },
  // 尿酸
  uric:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'尿酸分析仪',
    items:[
      
      [// 这里是第一页收缩压
        {
            textbefore:'尿酸',
            num:'UA',
            textafter:'mmol/L'
        }
      ],
      
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:false,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
        textbefore:'尿酸',
        num:'UA',
        textafter:'mmol/L'
      }
    ]
 
  },
  // 尿液
  urine:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'尿液分析仪',
    tabbarItem:[
      {
        text:'比重',
        id:0,//请求参数
        index:0 //按钮index
      },
      {
        text:'PH值',
        id:1,//请求参数
        index:1//按钮index
      }
    ],
    items:[
      
      [// 这里是第一页收缩压
        {
            textbefore:'比重',
            num:'SG',
            textafter:''
        },
        {
            textbefore:'PH值',
            num:'pH',
            textafter:''
        },
        {
            textbefore:'葡萄糖',
            num:'GLU',
            textafter:''
        },
        {
            textbefore:'蛋白质',
            num:'PRO',
            textafter:''
        },
        {
            textbefore:'尿胆原',
            num:'UBG',
            textafter:''
        },
        {
            textbefore:'潜血',
            num:'BLD',
            textafter:''
        },
        {
            textbefore:'胆红素',
            num:'BIL',
            textafter:''
        },
        {
            textbefore:'亚硝酸盐',
            num:'NIT',
            textafter:''
        },
        {
            textbefore:'白细胞',
            num:'LEU',
            textafter:''
        },
        {
            textbefore:'酮体',
            num:'KET',
            textafter:''
        },
        {
            textbefore:'VC维生素C',
            num:'VC',
            textafter:''
        },

      ],
      [// 这里是第一页收缩压
        {
            textbefore:'比重',
            num:'SG',
            textafter:''
        },
        {
            textbefore:'PH值',
            num:'pH',
            textafter:''
        },
        {
            textbefore:'葡萄糖',
            num:'GLU',
            textafter:''
        },
        {
            textbefore:'蛋白质',
            num:'PRO',
            textafter:''
        },
        {
            textbefore:'尿胆原',
            num:'UBG',
            textafter:''
        },
        {
            textbefore:'潜血',
            num:'BLD',
            textafter:''
        },
        {
            textbefore:'胆红素',
            num:'BIL',
            textafter:''
        },
        {
            textbefore:'亚硝酸盐',
            num:'NIT',
            textafter:''
        },
        {
            textbefore:'白细胞',
            num:'LEU',
            textafter:''
        },
        {
            textbefore:'酮体',
            num:'KET',
            textafter:''
        },
        {
            textbefore:'VC维生素C',
            num:'VC',
            textafter:''
        },

      ],
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:true,
      tabbar:true,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
          textbefore:'比重',
          num:'SG',
          textafter:''
      },
      {
          textbefore:'PH值',
          num:'pH',
          textafter:''
      },
      {
          textbefore:'葡萄糖',
          num:'GLU',
          textafter:''
      },
      {
          textbefore:'蛋白质',
          num:'PRO',
          textafter:''
      },
      {
          textbefore:'尿胆原',
          num:'UBG',
          textafter:''
      },
      {
          textbefore:'潜血',
          num:'BLD',
          textafter:''
      },
      {
          textbefore:'胆红素',
          num:'BIL',
          textafter:''
      },
      {
          textbefore:'亚硝酸盐',
          num:'NIT',
          textafter:''
      },
      {
          textbefore:'白细胞',
          num:'LEU',
          textafter:''
      },
      {
          textbefore:'酮体',
          num:'KET',
          textafter:''
      },
      {
          textbefore:'VC维生素C',
          num:'VC',
          textafter:''
      },
    ]
 
  },
  // tiwen
  ther:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'体温计',
    items:[ 
      [// 这里是第一页收缩压
        {
            textbefore:'摄氏度',
            num:'temperature',
            textafter:''
        }
      ]
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:false,
      tabbar:false,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:true, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:true
    },
    history:[
      {
        textbefore:'摄氏度',
        num:'temperature',
        textafter:'℃'
      }
    ]
  },
  // 心电图
  elec:{
    // 判断是否需要显示，那就是tabbarItem.length
    // 常规设置
    title:'心电仪',
    items:[
      
      [// 这里是第一页收缩压
        {
            textbefore:'收缩压',
            num:'--',
            textafter:'mmHg'
        }
      ],
      [//这是第二页舒张压
        {
            textbefore:'舒张压',
            num:'--',
            textafter:'mmHg'
        },
      ],
      [//第三页心率
        {
            textbefore:'心率',
            num:'--',
            textafter:'mmHg'
        }
      ]
    ],
    btns:{
      week:{
        id:2
      },
      month:{
        id:3
      },
      trimester:{
        id:4
      },
    },
    // 这个是时间段按钮的id，可用来请求
    timeFrame:[1,2,3,4,5,6],
    // 特殊设置
    show:{
      setdata:false,
      tabbar:false,      //导航条
      chart:true,
      btnGroup:true,
      circle_info:false, //比较通用
      circle:true,  //单单是去掉圆形，那就是只留下信息了
      info:true,  //圆环旁边的信息
      stepNum:false,  //这个是手环特有的
      timeFrame:false,  //这个是血糖专门的
      moreHistroy:false
    }
 
  },
}