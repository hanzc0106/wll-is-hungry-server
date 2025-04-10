import * as dotenv from 'dotenv'

const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev'
dotenv.config({ path: envFile })

export const ENV = {
  development: 'development',
  production: 'production'
}

console.log(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_HOST,
  process.env.DB_PORT
)
// mysql配置
export const DATABASE = {
  // 本地环境
  development: {
    dbName: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || '',
    port: Number(process.env.DB_PORT) || 3306
  },

  // 阿里云
  production: {
    dbName: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || '',
    port: Number(process.env.DB_PORT) || 3306
  }
}

// jsonwebtoken-jwt配置
export const JWT = {
  secret: 'xxx', //密钥
  expires: 60 * 60 * 24 * 30 // 30天
}

// sms短信配置
export const SMS = {
  accessKeyId: 'xxx',
  accessKeySecret: 'xxx',
  signName: 'xxx',
  templateCode: 'xxx'
}

// 平台Map
export const PLATFORM = {
  wxMini: '微信小程序',
  wxH5: '微信H5',
  webH5: 'webH5',
  dyMini: '抖音小程序',
  ksMini: '快手小程序',
  qqMini: 'QQ小程序'
}

// 支付配置
export const PAY = {
  wx: {
    miniAppid: 'xxx',
    h5Appid: 'xxx',
    mchid: 'xxx',
    v3Key: 'xxx' //https://pay.weixin.qq.com/index.php/core/cert/api_cert#/api-password-v3
  }
}

// 支付方式配置
export const PAY_TYPE = [{ label: '微信小程序支付', value: 1 }]

// xxx
export const WX_MINI = {
  appid: 'xxx',
  secret: 'xxx'
}

// 全局参数
export const FIXED_KEY = {
  port: 3232
}
