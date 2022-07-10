# smart-green-campus
### 프로젝트 설명
다학제간 캡스톤 디자인에서 진행한 프로젝트로, 22년도 상반기부터 시작하였습니다.


스마트 그린 캠퍼스의 데이터를 관리하는 서비스를 만들어 봅니다.
- 건축공학과(기타 등등)에서 각종 데이터(강수량, 전기 발전량 등등..)을 측정합니다.
- 컴퓨터공학과에서 각 학과에서 센싱한 데이터들을 MQTT protocol을 이용해 publish합니다.
- 정보통신공학과에서는 MQTT broker로부터 subscribe한 데이터를 받아, API server에 전달합니다.
- 요청을 받은 API server는 Database에 접근하여 동작합니다.
- 이후 Web에서 데이터들을 볼 수 있는 화면도 구축할 예정입니다.

---

세부 사항은 [노션](https://leedongyeop.notion.site/1-4147cdcd10e342debdf95ff3d6be199f)에 정리하고 있습니다.

-----
**[진행 상황]**

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
