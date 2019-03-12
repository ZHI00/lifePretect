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
    }
 
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
            num:'--',
            textafter:'ml'
        },
        {
            textbefore:'峰流速',
            num:'--',
            textafter:'L/min'
        },
        {
            textbefore:'平均流速',
            num:'--',
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
    }
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
            num:'--',
            textafter:''
        },
        {
            textbefore:'体脂肪率',
            num:'--',
            textafter:''
        },
        {
            textbefore:'BMI',
            num:'--',
            textafter:''
        },
        {
            textbefore:'身体年龄',
            num:'--',
            textafter:''
        },
        {
            textbefore:'腰臀比',
            num:'--',
            textafter:''
        },
        {
            textbefore:'内脏脂肪',
            num:'--',
            textafter:''
        },
        {
            textbefore:'人体水分',
            num:'--',
            textafter:''
        },
        {
            textbefore:'人体肌肉',
            num:'--',
            textafter:''
        },
        {
            textbefore:'骨骼重量',
            num:'--',
            textafter:''
        },
        {
            textbefore:'基础代谢',
            num:'--',
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
    }
 
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
      
      [// 这里第一页空缺
        {
            textbefore:'收缩压',
            num:'--',
            textafter:'mmHg'
        }
      ],
      [//这是第二页舒张压
        {
            textbefore:'心率',
            num:'--',
            textafter:'bpm'
        },
      ],
      [//第三页心率
        {
            textbefore:'睡眠时长',
            num:'--',
            textafter:''
        },
        {
            textbefore:'深睡',
            num:'--',
            textafter:''
        },
        {
            textbefore:'浅睡',
            num:'--',
            textafter:''
        },
        {
            textbefore:'苏醒',
            num:'--',
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
    }
 
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
            num:'--',
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
    }
 
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
            num:'--',
            textafter:'%'
        }
      ],
      [//这是第二页舒张压
        {
            textbefore:'心率',
            num:'--',
            textafter:'bpm'
        },
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
    }
 
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
            num:'--',
            textafter:''
        },
        {
            textbefore:'总胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'甘油三脂',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'高密度脂蛋白胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'低密度脂蛋白胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
      ],
      [// 这里是第二页
        {
            textbefore:'卒中风险',
            num:'--',
            textafter:''
        },
        {
            textbefore:'总胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'甘油三脂',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'高密度脂蛋白胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'低密度脂蛋白胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
      ],
      [// 这里是第三页
        {
            textbefore:'卒中风险',
            num:'--',
            textafter:''
        },
        {
            textbefore:'总胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'甘油三脂',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'高密度脂蛋白胆固醇',
            num:'--',
            textafter:'mmol/L'
        },
        {
            textbefore:'低密度脂蛋白胆固醇',
            num:'--',
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
    }
 
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
            num:'--',
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
    }
 
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
            num:'--',
            textafter:''
        },
        {
            textbefore:'PH值',
            num:'--',
            textafter:''
        },
        {
            textbefore:'葡萄糖',
            num:'--',
            textafter:''
        },
        {
            textbefore:'蛋白质',
            num:'--',
            textafter:''
        },
        {
            textbefore:'尿胆原',
            num:'--',
            textafter:''
        },
        {
            textbefore:'潜血',
            num:'--',
            textafter:''
        },
        {
            textbefore:'胆红素',
            num:'--',
            textafter:''
        },
        {
            textbefore:'亚硝酸盐',
            num:'--',
            textafter:''
        },
        {
            textbefore:'白细胞',
            num:'--',
            textafter:''
        },
        {
            textbefore:'酮体',
            num:'--',
            textafter:''
        },
        {
            textbefore:'VC维生素C',
            num:'--',
            textafter:''
        },


      ],
      [// 这里是第一页收缩压
        {
          textbefore:'比重',
          num:'--',
          textafter:''
      },
      {
          textbefore:'PH值',
          num:'--',
          textafter:''
      },
      {
          textbefore:'葡萄糖',
          num:'--',
          textafter:''
      },
      {
          textbefore:'蛋白质',
          num:'--',
          textafter:''
      },
      {
          textbefore:'尿胆原',
          num:'--',
          textafter:''
      },
      {
          textbefore:'潜血',
          num:'--',
          textafter:''
      },
      {
          textbefore:'胆红素',
          num:'--',
          textafter:''
      },
      {
          textbefore:'亚硝酸盐',
          num:'--',
          textafter:''
      },
      {
          textbefore:'白细胞',
          num:'--',
          textafter:''
      },
      {
          textbefore:'酮体',
          num:'--',
          textafter:''
      },
      {
          textbefore:'VC维生素C',
          num:'--',
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
    }
 
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
            num:'--',
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
    }
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