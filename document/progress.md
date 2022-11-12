## 💡 진행 상황
#### 22/11/3
- 기존에 Node.js로 설계한 서버를 Nest.js로 바꾸어 작성하는 중입니다.

<br/>

#### 22/08/04
- Firebase 사용법에 어려움을 겪어 우선 nodemailer 모듈을 이용해, 센싱 값이 이상하다고 판단되면, 메일을 보내 알리는 기능을 추가하였습니다.
    - nodemailer의 동작 방식은 [레포](https://github.com/2dongyeop/node-mailer) 혹은 [블로그](https://velog.io/@dongvelop/NodeJs-nodemailer-%EB%AA%A8%EB%93%88-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0)를 통해 설명합니다.

<br/>

#### 22/07/26
- 직접 아두이노에 온도센서를 연결해 값을 측정하고, MQTT로 보내는 과정을 해봅니다.
- Firebase를 이용해 센싱 값이 이상하다고 판단되면, 알림을 보내는 과정을 연습합니다.


<br/>

#### 22/07/20
- 측정한 온도 값이 35도 이상이면 폭염주의보를 발령하는 과정을 추가하였습니다.

<br/>

#### 22/6/30
- 서버 URI를 sensors로 수정합니다.
- DB 센싱값 분류를 sensor_name과 location, value등으로 세분화하였습니다.
- MQTT client가 받은 데이터를 외부 API server로 데이터를 전송하도록 연결하였습니다.

<br/>

#### 22/6/27 
아래 3단계로 구체적인 세부 계획을 세웁니다.

- MQTT Broker로부터 받은 가공된 데이터를 API-server로 전송합니다.
    - MQTT Broker에게 보내는 역할은 컴퓨터 공학과가 담당하여 기록하지 않았습니다.
- API-server는 전달받은 데이터를 DB에 저장합니다.
    - 현재 node.js로 작성하고, 추후에 nest.js로 다시 작성합니다.
- DB는 MySQL을 사용하며, 추후에 PostgreSQL로 수정할 예정입니다.
    - 수정하더라도 데이터에는 영향이 없습니다.