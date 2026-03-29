import express from "express"

const router = express.Router();

router.get('/all', (req, res) => {
    res.json({"users": "All users"})
})

export default router;