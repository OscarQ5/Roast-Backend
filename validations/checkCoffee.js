const checkName = (req, res, next) => {
    if (req.body.name) {
        return next();
    } else {
        res.status(400).json({ error: "Name is required" });
    }
};

const checkOrigin = (req, res, next) => {
    if (req.body.origin) {
        return next();
    } else {
        res.status(400).json({ error: "Origin is required" });
    }
};

const checkRoast = (req, res, next) => {
    if (req.body.roast) {
        return next();
    } else {
        res.status(400).json({ error: "Roast is required" });
    }
};

const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite
    if (typeof fav === 'boolean') {
        return next();
    } else {
        res.status(400).json({ error: "is_favorite must be type boolean" })
    }
};

module.exports = { checkName, checkOrigin, checkRoast, checkBoolean };