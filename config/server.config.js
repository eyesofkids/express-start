import 'dotenv/config.js'

const env = process.env.NODE_ENV || 'development'

export const serverConfig = {
  // 如果要使用redis session store類型，必需要在 .env 檔案中設定 REDIS_URL
  // 這裡判斷是否為開發環境，如果是開發環境，就使用file session store
  sessionStoreType: env === 'development' ? 'file' : 'redis', // file | redis
  smtp: {
    provider: 'ethereal',
    host: 'smtp.ethereal.email',
    user: '',
    pass: '',
  },
  jwt: {
    secret: 'access_token_secret',
    expiresIn: '3d',
  },
}
