import nodemailer from "nodemailer";

const email = 'workcubicus@gmail.com';
console.log({ email });
const pass = 'ljelwabvzprnryqj';

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
});


export const mailOptions = {
    from: email,
    to: email,
};
