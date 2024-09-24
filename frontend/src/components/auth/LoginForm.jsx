import React, { useMemo, useState } from "react";

import * as Yup from "yup";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import { login } from "@/services/apis/auth";

const LoginForm = ({ children, open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setErrorMsg(null);
      try {
        await login(values);
        formik.resetForm();
        setOpen(false);
      } catch (error) {
        console.log(error?.response?.data);
        setErrorMsg(error?.response?.data?.message || error.message);
      }
    },
  });

  return (
    <div>
      <Dialog open={open}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login?</DialogTitle>
            <div>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-5 mt-5"
              >
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    placeholder="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isError={formik.touched.email && formik.errors.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <small className="text-destructive">
                      {" "}
                      {formik.errors.email}{" "}
                    </small>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      placeholder="password"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isError={
                        formik.touched.password && formik.errors.password
                      }
                    />

                    <div
                      className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <small className="text-destructive">
                      {" "}
                      {formik.errors.password}{" "}
                    </small>
                  )}
                </div>
                {!!errorMsg && (
                  <small className="text-destructive"> {errorMsg} </small>
                )}
                <Button
                  type="submit"
                  loading={formik.isSubmitting}
                  onClick={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                  }}
                >
                  login
                </Button>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
