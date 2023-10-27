import React from "react";
import NextLink from "next/link";
import { Link} from "@nextui-org/react";
import {getCookie} from "cookies-next";
import {toast} from "react-toastify";

export const onErrorImage = (e) => {
    e.target.src = '/image-ali-2.png';
};

export function checkLoginhtml() {
    return (
        <>
            Chưa đăng nhập, Vui lòng bấm vào đây để <Link as={NextLink} href={`/user/signin`}><a>đăng nhập</a></Link>
        </>
    )
}
export function removeDiacritics(text) {
    return text
        .normalize('NFD') // Chuẩn hóa thành Unicode Composition
        .replace(/[\u0300-\u036f]/g, ''); // Loại bỏ tất cả các dấu diacritics (dấu thanh/tone)
}

export function toastError(content) {
    let error = toast.error(content, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return error;
}
export function toastWarn(content) {
    let warn = toast.warn(content, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return warn;
}

export function toastSuccess(content) {
    const success = toast.success(content, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return success;
}

export function toastInfo(content) {
    const info = toast.info(content, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return info;
}

export const themeSelect = (theme) => ({
    ...theme,
    borderRadius: 5,
    colors: {
        ...theme.colors,
        primary25: '#ddd',
        primary: '#2dbe6c',
    },
})

export function savePostProperty(formData) {
    fetch(`https://api.alinhadat.vn/posts/save?token=${getCookie('token')}`, {
        method: 'POST',
        // @ts-ignore
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === false) {
                toast.error(data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                if (data.data === '1') {
                    toast.success(data.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else {
                    toast.info(data.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }

            }
        });
}

export function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].keyword === nameKey) {
            return myArray[i];
        }
    }
}

export function checkLogin() {

    const isLoggedIn = true; // Giả sử đã đăng nhập
    if (!isLoggedIn) {
        router.push('/user/signin'); // Chuyển hướng đến trang đăng nhập
    }
}
