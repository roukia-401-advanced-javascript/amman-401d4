'use strict';

module.exports = (req, res, next) => {
    res.status(404);
    res.json({error: 'Not Found'});
};