"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserRole = exports.getAllUsers = exports.getDashboardStats = void 0;
const User_1 = require("../models/User");
const Service_1 = require("../models/Service");
const Contact_1 = require("../models/Contact");
const errorHandler_1 = require("../middleware/errorHandler");
const getDashboardStats = async (req, res, next) => {
    try {
        const [totalUsers, totalServices, totalContacts, pendingContacts,] = await Promise.all([
            User_1.User.countDocuments(),
            Service_1.Service.countDocuments({ isActive: true }),
            Contact_1.Contact.countDocuments(),
            Contact_1.Contact.countDocuments({ status: 'pending' }),
        ]);
        res.status(200).json({
            status: 'success',
            data: {
                stats: {
                    totalUsers,
                    totalServices,
                    totalContacts,
                    pendingContacts,
                },
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getDashboardStats = getDashboardStats;
const getAllUsers = async (req, res, next) => {
    try {
        const { role, search, sort } = req.query;
        // Build query
        const query = {};
        if (role) {
            query.role = role;
        }
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }
        // Build sort
        const sortOptions = {};
        if (sort === 'name-asc') {
            sortOptions.name = 1;
        }
        else if (sort === 'name-desc') {
            sortOptions.name = -1;
        }
        else {
            sortOptions.createdAt = -1;
        }
        const users = await User_1.User.find(query).sort(sortOptions);
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllUsers = getAllUsers;
const updateUserRole = async (req, res, next) => {
    try {
        const { role } = req.body;
        const user = await User_1.User.findByIdAndUpdate(req.params.id, { role }, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return next(new errorHandler_1.AppError(404, 'User not found'));
        }
        res.status(200).json({
            status: 'success',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateUserRole = updateUserRole;
const deleteUser = async (req, res, next) => {
    try {
        const user = await User_1.User.findByIdAndDelete(req.params.id);
        if (!user) {
            return next(new errorHandler_1.AppError(404, 'User not found'));
        }
        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteUser = deleteUser;
