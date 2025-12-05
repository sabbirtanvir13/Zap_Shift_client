
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();

    const handelRegistration = (data) => {
        console.log(data);

        const profileImage = data.photo[0];

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                // Upload Image
                const formData = new FormData();
                formData.append('image', profileImage);

                const image_API_URL =
                    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const imageURL = res.data.data.url;
                        console.log(imageURL);

                        // Update Firebase Profile
                        const userProfile = {
                            displayName: data.name,
                            photoURL: imageURL
                        };

                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log("User profile updated successfully");
                                navigate(location.state||'/')
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center">Welcome to Zap-Shift</h3>
            <p className="text-center">Please Register</p>

            <form className="card-body" onSubmit={handleSubmit(handelRegistration)}>
                <fieldset className="fieldset">

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="input"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500">Email is required</p>}

                    {/* Photo Upload */}
                    <label className="label">Profile Photo</label>
                    <input
                        type="file"
                        {...register("photo", { required: true })}
                        className="file-input file-input-bordered w-full"
                    />
                    {errors.photo && <p className="text-red-500">Photo is required</p>}

                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="input"
                        placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500">Name is required</p>}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                        })}
                        className="input"
                        placeholder="Password"
                    />

                    {errors.password?.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p className="text-red-500">Password must be at least 6 characters</p>
                    )}
                    {errors.password?.type === "pattern" && (
                        <p className="text-red-500">
                            Must contain uppercase, lowercase, number & special character
                        </p>
                    )}

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>

                <p>
                    Already have an account?
                    <Link
                        state={location.state}
                        className="text-blue-500 underline ml-1" to="/login">Login</Link>
                </p>
            </form>

            <SocialLogin />
        </div>
    );
};

export default Register;
