const { work } = require("../model/register.model");

const getRegister = async function (req, res) {
try {
    const register = await work.findAll();
    res.status(200).json({
        status: "success",
        data: { register },
});
} catch {
    console.log("error");
}
    res.end();
};

const getIdRegister = async function (req, res) {
try {
    const { id } = req.params;
    const {dayFiltered} = req
    res.status(200).json({
        status: `success: ${id}`,
        data: { dayFiltered },
});
} catch {
    console.log("error");
}
};

const createRegister = async function (req, res) {
try {
    const { entranceTime } = req.body;
    console.log(entranceTime);
    const newRegister = await work.create({ entranceTime });
    res.status(202).json({
        status: "succes",
        body: { newRegistration },
});
} catch {
    console.log("error");
}
};

const updateRegister = async function (req, res) {
try {
    const { id } = req.params;
    const { exitTime } = req.body;
    
    const updated = await work.findOne({ where: { id } });
    updated.update({ exitTime, status: "out" });
    res.status(202).json({
    status: "Succes",
    data: { updated },
});
} catch {
    console.log("error");
}
};

const deleteRegister = async function (req, res) {
try {
    const { id } = req.params;
    const deleted = await work.findOne({ where: { id } });
    await deleted.update({ status: "cancelled" });
    res.status(202).json({
    status: "cancell the register",
    body: { deleted },
});
} catch {}
};
module.exports = {
    getRegister,
    getIdRegister,
    createRegister,
    updateRegister,
    deleteRegister,
};