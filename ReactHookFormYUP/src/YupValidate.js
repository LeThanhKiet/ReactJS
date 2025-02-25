import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required("FullName là bắt buộc"),
    email: yup.string().email().required("Email là bắt buộc"),
    age: yup.number().positive().integer().min(18, "Vui lòng nhập tuổi lớn hơn 18").required(),
    password: yup.string().min(4).max(20).required("Mật khẩu là bắt buộc"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Mật khẩu không khớp, vui lòng nhập lại")
        .required("Đây là bắt buộc"),
});

export default schema;
