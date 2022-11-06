## API 설계도
### Sensing value CRUP
- #### 센싱 값 삽입 : `POST /api/sensors`
    - request
        ```JSON
            "sensor_name": "[sensor_name]",
            "value": "[value]",
            "location": "[location]"
        ```

<br/>

- #### 센싱 값 조회
    - 전체 조회 : `GET /api/sensors`
    - 개별 조회 : `GET /api/sensors/:id`

<br/>

- #### 센싱 값 수정 : `PUT /api/sensors/:id`
    - request
        ```JSON
            "sensor_name": "[sensor_name]",
            "value": "[value]",
            "location": "[location]"
        ```

<br/>

- #### 센싱 값 삭제 : `DELETE /api/sensors/:id`
    
