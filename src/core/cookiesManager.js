
import jwt from 'jsonwebtoken';

export const generateCookie = (info, auth, res) => {
    // const expiresIn = 60; // 180 days
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(info, auth.jwt.secret, { expiresIn });

    //  TODO: store the {userId,token} in redis if we need
    //  set token in cookies
    res.cookie('id_token', token,
        {
            expires: new Date(Date.now() + 900000),
            maxAge: 1000 * expiresIn,
            httpOnly: true,
        });
}
