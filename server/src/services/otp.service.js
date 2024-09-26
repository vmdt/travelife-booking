const UserModel = require("../models/user.model");
const OTPModel = require("../models/otp.model");
const { NotFoundError, BadRequestError } = require("../utils/error.response");
const { generateOtp } = require("../repositories/otp.repo");
const { publishDirectMessage } = require("../queues/auth.producer");

const EXCHANGE_AUTH = "travel-auth";
const ROUTING_AUTH = "auth";

class OTPService {
	static sendOTP = async (email) => {
		const user = await UserModel.findOne({ email });
		if (!user) throw new NotFoundError("User not found");
		const otp = await generateOtp(email);

		const channel = await require("../server").channel;
		const messageDetails = {
			otpCode: otp.otp,
			receiver: user.email,
			template: "otp",
		};
		await publishDirectMessage(
			channel,
			EXCHANGE_AUTH,
			ROUTING_AUTH,
			JSON.stringify(messageDetails),
		);
		return null;
	};

	static verifyOTP = async (email, otpCode) => {
		const otp = await OTPModel.findOne({ email, otp: otpCode });
		if (!otp) throw new BadRequestError("Invalid OTP code");

		return { otp };
	};
}

module.exports = OTPService;
