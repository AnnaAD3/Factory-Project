const factoryModel = require("../models/factoryModel")

const getEmployee = async () => {
    try {
        const employee = await factoryModel.findOne({});
        return employee;
    } catch (error) {
        console.error("Error fetching employee:", error);
        throw error;
    }
};

const getDepartment = async () => {
    try {
        const department = await factoryModel.findDepartment({});
        return department;
    } catch (error) {
        console.error("Error fetching department:", error);
        throw error;
    }
};

const getShift = async () => {
    try {
        const shift = await factoryModel.findShift({});
        return shift;
    } catch (error) {
        console.error("Error fetching shift:", error);
        throw error;
    }
};

module.exports = {getEmployee, getDepartment, getShift}