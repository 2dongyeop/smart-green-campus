# smart-green-campus
스마트 그린 캠퍼스의 데이터를 관리하는 서비스를 만들어 봅니다.

세부 설명은 [노션](https://leedongyeop.notion.site/1-4147cdcd10e342debdf95ff3d6be199f)에 정리합니다.

-----
22/6/27 
- MQTT Broker로부터 받은 가공된 데이터를 API-server로 전송합니다.
- API-server는 전달받은 데이터를 DB에 저장합니다.
    - 현재 node.js로 작성하고, 추후에 nest.js로 다시 작성합니다.
- DB는 MySQL을 사용하며, 추후에 PostgreSQL로 수정할 예정입니다.
    - 수정하더라도 데이터에는 영향이 없습니다.