import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
            >
                <input type="text" placeholder="Full Name ..." {...register("fullName")} />
                <p style={{ color: "red" }}>{errors.fullName?.message}</p>
                <input type="text" placeholder="Email ..." {...register("email")} />
                <p style={{ color: "red" }}>{errors.email?.message}</p>
                <input type="number" placeholder="Age ..." {...register("age")} />
                <p style={{ color: "red" }}>{errors.age?.message}</p>
                <input type="password" placeholder="Password ..." {...register("password")} />
                <p style={{ color: "red" }}>{errors.password?.message}</p>
                <input type="password" placeholder="Confirm Password ..." {...register("confirmPassword")} />
                <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;
