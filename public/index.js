/**
 * Created by Administrator on 2018/9/27.
 */
const express = require('express');
const app = express();
app.use(express.static('.'));
app.listen(8888);
