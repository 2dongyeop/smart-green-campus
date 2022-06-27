const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require("body-parser");
const {sequelize} = require('./models');
const Sensor = require("./models/sensor");
// const indexRouter = require('./routes');
// const sensorsRouter = require('./routes/sensor');


const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});
sequelize.sync({force: false})  //서버 실행시 MySQL과 연동되도록 함
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.use('/', indexRouter);
// app.use('/sensors', sensorsRouter);

// app.use((req, res, next) => {
//     const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//     error.status = 404;
//     next(error);
// });
//
// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//     res.status(err.status || 500);
//     res.render('error');
// });

app.get('/sensor', async (req, res, next) => {
    try {
        const sensors = await Sensor.findAll();
        res.json(sensors);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

app.post('/sensor', async (req, res, next) => {
    try {
        const sensor = await Sensor.create({
            id: req.body.id,
            value: req.body.value
        });
        console.log(sensor);
        res.status(201).json(sensor);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});