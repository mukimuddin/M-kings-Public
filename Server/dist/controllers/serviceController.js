"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getService = exports.getAllServices = void 0;
const Service_1 = require("../models/Service");
const errorHandler_1 = require("../middleware/errorHandler");
const getAllServices = async (req, res, next) => {
    try {
        const { category, search, sort } = req.query;
        // Build query
        const query = { isActive: true };
        if (category) {
            query.category = category;
        }
        if (search) {
            query.$text = { $search: search };
        }
        // Build sort
        const sortOptions = {};
        if (sort === 'price-asc') {
            sortOptions.price = 1;
        }
        else if (sort === 'price-desc') {
            sortOptions.price = -1;
        }
        else {
            sortOptions.createdAt = -1;
        }
        const services = await Service_1.Service.find(query).sort(sortOptions);
        res.status(200).json({
            status: 'success',
            results: services.length,
            data: {
                services,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllServices = getAllServices;
const getService = async (req, res, next) => {
    try {
        const service = await Service_1.Service.findById(req.params.id);
        if (!service) {
            return next(new errorHandler_1.AppError(404, 'Service not found'));
        }
        res.status(200).json({
            status: 'success',
            data: {
                service,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getService = getService;
const createService = async (req, res, next) => {
    try {
        const service = await Service_1.Service.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                service,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createService = createService;
const updateService = async (req, res, next) => {
    try {
        const service = await Service_1.Service.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!service) {
            return next(new errorHandler_1.AppError(404, 'Service not found'));
        }
        res.status(200).json({
            status: 'success',
            data: {
                service,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateService = updateService;
const deleteService = async (req, res, next) => {
    try {
        const service = await Service_1.Service.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
        if (!service) {
            return next(new errorHandler_1.AppError(404, 'Service not found'));
        }
        res.status(200).json({
            status: 'success',
            message: 'Service deactivated successfully',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteService = deleteService;
