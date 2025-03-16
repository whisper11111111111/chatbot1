@echo off
echo 正在启动NBTCA聊天网站...

echo 安装前端依赖...
cd client
call npm install
start cmd /c npm start
cd ..

echo 安装后端依赖...
cd server
call npm install
start cmd /c npm run dev
cd ..

echo NBTCA聊天网站已启动！
echo 前端地址: http://localhost:3000
echo 后端地址: http://localhost:5000
echo.
echo 请确保在server/.env文件中配置了有效的OpenAI API密钥