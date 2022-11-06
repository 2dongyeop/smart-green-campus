## 💡 Setting
> 본 프로그램은 nodejs 16.16.0 version을 이용합니다.
>
> 개인 정보를 위해 ignore된 파일들은 아래에 표시합니다.

<br/>

- `api-server/app/mysql/config/config.js`
    ```javascript
    module.exports = {
        host: 'localhost',
        username: 'root',
        password: 'password',
        db: 'database name',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };
    ```
<br/>

- `api-server/nodemailer/config/senderInfo.json`
    ```JSON
    {
    "user": "사용할 이메일 계정",
    "pass": "계정 비밀번호"
    }
    ```
