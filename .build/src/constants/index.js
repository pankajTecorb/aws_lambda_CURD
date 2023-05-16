"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFERRAL_POINTS = exports.fcm = exports.permissions = exports.success = exports.errors = void 0;
exports.errors = {
    en: {
        "adminWithSameEmail": "Admin with same Email already exist.",
        "phoneNumberAlreadyExists": "An account with phoneNumber already exist.",
        "emailAlreadyExists": "An account with Email Id already exist.",
        "noSuchAccount": "No such account exist with this email.",
        "WrongPassword": "Wrong Password Please fill Correct Password.",
        "accountAlreadyExist": "Account with given Phone number and Role already exist.",
        "noSuchAccountExist": "No such account exist.",
        "invalidMongoId": "{{key}} must be a valid mongo ID",
        "noDatafound": "No Record Found",
        "alreadyExist": "An account with given phoneNumber or email already exists",
        "Exists": "Already Exists! Please try again",
        "categoryExist": "With This Name/Position Category Already Exists",
        "userExist": "User already Exist",
        "phoneNumberTaken": "Phone number already taken by some other user.",
        "invalidAction": "Invalid action",
        "unprocessableEntity": "Unprocessable entity",
        "somethingwrong": "Something went wrong",
        "invalidBookingInfo": "Invalid Booking Info",
        "accountBlocked": "Account blocked by admin.",
        "sessionExpired": "Session expired! Please login again.",
        "noToken": "Invalid token",
        "unAuthRole": "Unauthorized role! Access denied",
        "incorrectOldPass": "Please enter correct old password",
        "accountUnverifiedAdmin": "Your Account is unverified, please contact Admin",
        "accountUnverified": "Account is not verified",
        "bannerExist": "With This Role,Position/Site Banner already Exist",
        "subVendorExist": "Sub-Vendor Already Exist",
        "featureExist": " This  Feature Name already Exist on This Categorys",
        "reviewExist": " This  Review Question  already Exist on This Categorys",
        "incorrectPin": "Please enter correct Pin",
        "pinExpired": "Pin has been expired",
        "imageMandatory": "Image not provided, please upload an image.",
        "accountRejectedAdmin": "Your Account is disapproved by admin, please contact Admin",
        "lesswalletPoint": "Your Wallet Points less please get more points and try again",
        "cityExists": "City with this Name already Exist , Try with New Name",
        "userNameTaken": "User id is already in use, try another.",
        "otpAuthNeeded": "You need to authenticate with OTP, session expired",
        "alreadyAddFavourite": "You Already Add this Business as Favourite",
        "alreadyAddHelpful": "You Already Add this Review as Helpful",
        "alreadyFollow": "You Already follow this",
        "duplicateData": "Duplicacy in email or phonenumber",
        "expiredCoupon": "Coupon has been expired",
        "invalidCoupon": "No such coupon exist",
        "errorInSendingOtp": "Error in sending otp, please try again later",
        "cuisineExist": "Cuisine With this Name already exist",
        "errorInSendingPromotion": "Error occured while sending promotion to customers",
        "errorInSendingOffer": "Error occured while sending offers to customers",
        "notSufficient": "You don't have sufficient wallet points ! please add",
        "alreadySubscribe": "You have  already subscribe",
        "notHavePoints": "You don't have sufficient wallet point to advertise this promotion !please add points"
    }
};
exports.success = {
    en: {
        "signupSuccessful": "Signup sucessfully",
        "loginSuccessful": "Login sucessfully",
        "accountExists": "Account already exist",
        "noSuchAccountExist": "No such account exist",
        "respondSuccess": "You have responded successfully",
        "RecordFound": "Record found",
        "issueReported": "issue Reported Successfully",
        "logOutSuccessful": "User logOut successfully",
        "userComment": "User Comments successfully",
        "accountCheckSuccessful": "Account Checked Successfully",
        "otpSendSuccessful": "Otp Send Successfully",
        "otpverifysuccessful": "Otp Verified Successfully",
        "succssDefault": "Success",
        "recordFetched": "Record fetched sucessfully",
        "reviewUpdate": "Review has been updated successfully",
        "reviewSubmit": "Review has been submitted successfully"
    }
};
exports.permissions = {
    'ASSOCIATE': {
        1: "Can view everything on the page including analytics",
        2: "Can send invite links",
        3: "Can redeem vouchers",
        4: "Can view and clear pending call backs",
        5: "Can view guest history",
        6: "Can retrieve invoices",
        7: "Can add money to the wallet",
        8: "Can view guest contact number if the guest has agreed to share his contact details",
    },
    'MANAGER': {
        9: "Can reply to reviews",
        10: "Can red flag reviews",
        11: "Can send whatsapp promotions",
        12: "Can send vouchers",
        13: "Can post promotions as advertisements",
        14: "Can update the information on the page and add pictures",
        15: "Can add and delete vouchers and promotions",
    },
    'ADMIN': {
        16: "Can add and delete users and set their levels",
    }
};
exports.fcm = {
    businessAdd: {
        title: "New Business Register!",
        body: "Hey Admin, New Business Register {{businessName}}"
    },
};
exports.REFERRAL_POINTS = 10;
