import * as CryptoJS from 'crypto-js'

import authEncryptionKey from '@idea/constants/authEncryptionKey'

export const encrypt = (value) => {
  const secretKey = authEncryptionKey
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const iv = CryptoJS.enc.Utf8.parse(secretKey)

  const settings = {
    keySize: 128,
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }

  return CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(value),
    key,
    settings
  ).toString()
}

export const generateRandomPassword = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  // let letters = "0123456789"
  let password = ''

  for (var i = 0; i < 6; i++) {
    const generate = letters[Math.floor(Math.random() * 60)]
    password += generate
  }

  return password
}
