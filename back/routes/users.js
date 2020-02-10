const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const db = require('../models')

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 12);
        const exUser = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (exUser) {
            return res.status(403).json({
                errCode: 1,
                message: '이미 회원가입 되어있습니다.'
            })
        }
        const newUser = await db.User.create({
            email: req.body.email,
            password: hash,
            nickname:  req.body.nickname
        })
        return res.status(201).json(newUser);
    } catch (err) {
        console.log(err)
        return next(err)
    }   
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) {
            console.error(err)
            return next(err)
        }
        if(info) {
            return res.status(401).send(info.reason)
        }
        return req.login(user, async (err) => {
            if(err) {
                console.error(err)
                return next(err)
            }
            return res.json(user)
        });
    })(req, res, next);
});

router.post('/logout', (req, res) => {
    if(req.isAuthenticated()) {
        req.logout()
        req.session.destroy()
        return res.status(200).send('로그아웃 되었습니다.')
    }
})

module.exports = router