const express = require('express');
const router = express.Router();
const axios = require('axios');

// 浙江大学API密钥 - 从环境变量获取
const API_KEY = process.env.ZJU_API_KEY || 'sk-KP7G1O8e63HfV1Iz04042748Dd164f1c9c8b8f90Bb079055';

// 聊天API路由
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: '消息不能为空' });
    }
    
    // 调用浙江大学API
    const response = await axios({
      method: 'post',
      url: 'https://chat.zju.edu.cn/api/ai/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      data: {
        model: 'deepseek-r1-distill-qwen',
        messages: [
          {role: 'system', content: 'You are a helpful assistant.'},
          {role: 'user', content: message}
        ],
        stream: false
      },
      responseType: 'json'
    });
    
    // 返回AI回复
    return res.json({ 
      message: response.data.choices[0].message.content 
    });
    
  } catch (error) {
    console.error('API错误:', error.response?.data || error.message || error);
    
    // 提供更详细的错误信息
    let errorMessage = '服务器错误，请稍后再试';
    
    // 检查是否是API密钥错误
    if (error.response?.status === 401 || error.response?.data?.error?.includes('authentication')) {
      errorMessage = 'API密钥验证失败，请联系管理员';
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      errorMessage = '无法连接到AI服务器，请检查网络连接';
    }
    
    return res.status(500).json({ 
      error: errorMessage,
      message: errorMessage
    });
  }
});

module.exports = router;