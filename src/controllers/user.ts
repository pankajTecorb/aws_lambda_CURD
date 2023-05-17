import userModel from '../models/user';
import { CustomError } from '../utils/errors';
import StatusCodes from 'http-status-codes';
import { errors } from '../constants';


/**
 *  Register User
 * 
 * @param body
 * @returns 
 */
function registerUser(body: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await userModel.findOne({ email: body.email, isDelete: false })
            if (data) {
                reject(new CustomError(errors.en.Exists, StatusCodes.BAD_REQUEST))
            } else {
                const response = await userModel.create(body)
                resolve(response)
            }
        } catch (err: any) {
            console.log(err)
            if (err.code == 11000) {
                reject(new CustomError(errors.en.somethingwrong, StatusCodes.BAD_REQUEST))
            }
            reject(err)
        }
    });
}

//***********Edit *********/

function editUser(body: any, userId: Object): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const userData: any = await userModel.findOne({ _id: userId })
            if (userData) {
                const userObj = await userModel.updateOne({ _id: userData._id }, body, { new: true });
                resolve(userObj)
            } else {
                reject(new CustomError(errors.en.noDatafound, StatusCodes.BAD_REQUEST))
            }
        } catch (err) {
            reject(err)
        }
    });
}

//**** List****/

function getUser(body: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const { page = 1, pageSize = 10, search, fromDate, toDate } = body;
            let condition: any = {
                isDelete: false

            }
            if (search && search != '' && fromDate && toDate) {
                condition = {
                    ...condition,
                    email: { $regex: search, $options: 'i' },
                    name: { $regex: search, $options: 'i' },
                    phoneNumber: { $regex: search, $options: 'i' },
                    createdAt: { $gte: fromDate, $lte: toDate }
                }
            } else if (fromDate && toDate) {
                condition = {
                    ...condition,
                    createdAt: { $gte: fromDate, $lte: toDate }
                }
            }
            if (search && search != '') {
                condition = {
                    ...condition,
                    email: { $regex: search, $options: 'i' },
                    name: { $regex: search, $options: 'i' },
                    phoneNumber: { $regex: search, $options: 'i' }

                }

            }

            const response = await userModel.find(condition).skip(Number(page - 1) * Number(pageSize))
                .limit(Number(pageSize)).sort({ createdAt: -1 })
            const Total = await userModel.count(condition)
            if (!response) {
                reject(new CustomError(errors.en.noDatafound, StatusCodes.BAD_REQUEST))
            } else {
                resolve({ response, Total })
            }
        } catch (err) {
            reject(err)

        }
    });
}


//**** Detail By Id*****/

function userProfile(userId: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await userModel.findOne({ "_id": userId })
            if (!response) {
                reject(new CustomError(errors.en.noDatafound, StatusCodes.BAD_REQUEST))
            } else {
                resolve(response)
            }
        } catch (err) {
            reject(err)

        }
    });
}

//***** Delete *****/

function deleteUser( userId: Object): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            
            const userData: any = await userModel.findOne({ _id: userId });
            if (!userData) {
                reject(new CustomError(errors.en.noDatafound, StatusCodes.BAD_REQUEST))
            } else {
                const editdata = {
                   isDelete: true
                }
                const userObj = await userModel.updateOne({ _id: userId }, editdata, { new: true });
                resolve(userObj)
            }
        } catch (err) {
            reject(err)
        }
    });
}

//********* Status Change****** */

function statusUser(body: any, userId: Object): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const { isActive } = body
            const userData: any = await userModel.findOne({ _id: userId });
            if (!userData) {
                reject(new CustomError(errors.en.noDatafound, StatusCodes.BAD_REQUEST))
            } else {
                const editdata = {
                    ...body,
                    isActive: isActive
                }
                const userObj = await userModel.updateOne({ _id: userId }, editdata, { new: true });
                resolve(userObj)
            }
        } catch (err) {
            reject(err)
        }
    });
}




// Export default
export default {
    registerUser,
    editUser,
    getUser,
    userProfile,
    deleteUser,
    statusUser
} as const;
