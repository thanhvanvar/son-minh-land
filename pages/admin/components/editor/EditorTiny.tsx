import React, { useEffect, useState, useRef, useCallback } from "react";
import { supabase } from "../../../../lib/supabaseClient";
const { v4: uuidv4 } = require("uuid");
import { Editor } from "@tinymce/tinymce-react";

export default function EditorTiny(props: any) {
  const uploadToSupabase = async (file: any) => {
    console.log(file);
    try {
      const { data, error } = await supabase.storage
        .from("project_image")
        .upload(uuidv4(), file);
      if (data) {
        console.log(data);
        return `https://vyjeeoqetducftdoemqr.supabase.co/storage/v1/object/public/project_image/${data.path}`;
      } else {
        console.error(error);
        return null;
      }
    } catch (error) {
      console.error("Error uploading to Supabase:", error);
      return null;
    }
  };
  function dataURItoBlob(dataURI: any) {
    // Chuyển đổi dữ liệu base64 thành đối tượng Blob
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  return (
    <>
      <Editor
        apiKey="4u5329rm4xy88u4blzdf6fe3ue23yp4cwf76k6i5otutm4zb"
        value={props.value}
        onEditorChange={props.onEditorChange}
        init={{
          height: 600,
          menubar: " insert format tools table help",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar: `undo redo| link code image | formatselect | bold italic backcolor | \
                                      alignleft aligncenter alignright alignjustify | \
                                      bullist numlist outdent indent | removeformat | help`,

          image_title: true,
          automatic_uploads: true,
          file_picker_types: "image",
          images_upload_base_path: `https://api.cloudinary.com/v1_1/image/upload`,
          images_upload_credentials: true,
          images_upload_handler: (blobInfo, success, failure) => {
            var reader = new FileReader();
            console.log(blobInfo);
            console.log(reader);
            console.log(success);

            const formData = new FormData();
            formData.append("file", blobInfo.blob(), blobInfo.filename());

            reader.onload = () => {
              // const fileContent = reader.result;
              // const blob = dataURItoBlob(fileContent);

              // // Tạo một đối tượng File từ đối tượng Blob (có thể thêm tên tệp nếu cần)
              // const file = new File([blob], blobInfo.filename());
              // console.log(file);
              uploadToSupabase(formData)
                .then((url) => {
                  if (url) {
                    console.log(url);
                    success(url);
                    console.log(success(url));
                  } else {
                    console.log("error");
                    failure("Error uploading image");
                  }
                })
                .catch((error) => {
                  console.error(error);
                  failure("Error uploading image");
                });
            };
            reader.readAsDataURL(blobInfo.blob());
          },
        }}
      />
    </>
  );
}
