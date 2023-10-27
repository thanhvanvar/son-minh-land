import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Login() {
  const supabase = useSupabaseClient();
  return (
    <>
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 justify-center ">
        <div className="grid grid-cols-12 gap-8">
          <div className={`col-span-12`}>
            <p className="text-3xl font-bold text-center">Đăng nhập</p>
          </div>
          <div className={`col-span-12 flex justify-center`}>
            <div className="w-[300px]">
              <Auth
                supabaseClient={supabase}
                providers={[]}
                appearance={{ theme: ThemeSupa }}
                theme="light"
                localization={{
                  variables: {
                    sign_in: {
                      email_label: "Email",
                      password_label: "Mật khẩu",
                      email_input_placeholder: "Địa chỉ email của bạn",
                      password_input_placeholder: "Mật khẩu của bạn",
                      button_label: "Đăng nhập",
                      loading_button_label: "Đăng nhập...",
                    },
                    sign_up: {
                      email_label: "Email",
                      password_label: "Mật khẩu",
                      email_input_placeholder: "Địa chỉ email của bạn",
                      password_input_placeholder: "Mật khẩu của bạn",
                      link_text: "Bạn chưa có tài khoản? Đăng ký",
                      button_label: "Đăng ký",
                      loading_button_label: "Đăng ký...",
                    },
                    magic_link: {
                        link_text:'Đã có tài khoản? Đăng nhập'
                    },
                    forgotten_password: {
                      email_label: "Email",
                      password_label: "Mật khẩu",
                      email_input_placeholder: "Địa chỉ email của bạn",
                      button_label: "Đặt lại mật khẩu",
                    //   link_text: "Quên mật khẩu?",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
