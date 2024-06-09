const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    startWorkYear: Number,
    departmentID: Number
})

const departmentSchema = new mongoose.Schema({
    name: String,
    Manager: Number
})

const shiftSchema = new mongoose.Schema({
    date: Number,
    startingHour: Number,
    endingHour: Number
})

const model = mongoose.model("employee", employeeSchema, "department", departmentSchema, "shift", shiftSchema)

module.exports = model