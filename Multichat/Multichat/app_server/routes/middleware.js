var jwt = require('jwt-simple');
var moment = require('moment');

module.exports.isAuthenticated = function (req, res, next) {
    var token = (req.cookies && req.cookies.token);
    var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');

    if (!token)
    {
        res.redirect('./login?p=' + req.path); //there is no token in the request
    }

    try
    {
        var payload = jwt.decode(token, secret);
        //var payload = jwt.decode(token, process.env.JWT_SECRET);
    }
    catch (err)
    {
        res.redirect('./login?p=' + req.path); //token is not valid
    }

    //var payload = jwt.decode(token, process.env.JWT_SECRET);

    if (payload.exp <= moment().unix())
    {
        res.redirect('./login?p=' + req.path); //token has expired
    }

    req.sub = payload.sub;
    next();
};

module.exports.detectAuthenticated = function (req, res, next) {
    var token = (req.cookies && req.cookies.token);

    if (!token)
    {
        req.sub = false;
    }
    else
    {
        try
        {
            var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');
            var payload = jwt.decode(token, secret);
            //var payload = jwt.decode(token, process.env.JWT_SECRET);

            if (payload.exp <= moment().unix())
            {
                req.sub = false;
            }
            else
            {
                req.sub = payload.sub;
            }
        }
        catch (err)
        {
            req.sub = false;
        }
    }

    next();
};