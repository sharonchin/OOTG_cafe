"use client";
import * as React from "react";
import { Button, Divider, Grid, Modal, TextField } from "@mui/material";
import FormInput from "./FormInput";
import AVAILABILITY from "@/constants/AVAILABILITY";
import { useDropzone } from "react-dropzone";
import { CreateProductInput } from "@/lib/validations/product.schema";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { handleApiError } from "@/lib/helpers";
import { useRouter } from "next/navigation";
import { apiCreateProduct } from "@/lib/api-requests";
import error from "next/error";
import router from "next/router";
import toast from "react-hot-toast";

const selectedStyle = {
  backgroundColor: "#778CCC",
};

const NewItem = () => {
  const [file, setFile] = React.useState<File[] | undefined>(undefined);
  const [path, setPath] = React.useState<string>("");
  const store = useStore();
  const methods = useForm<CreateProductInput>({
    defaultValues: {
      img: "",
    },
  });
  const cafe = useSession();

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  useEffect(() => {
    register("cafeId", { value: cafe?.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register]);

  const ImageUpload = () => {
    const onDrop = React.useCallback((acceptedImages: File[]) => {
      setFile(acceptedImages);
      setPath(URL.createObjectURL(acceptedImages[0]));
      setValue("img", "true");
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    return (
      <div
        {...getRootProps()}
        className="p-4 bg-white rounded-xl h-96 flex justify-center items-center"
      >
        <input {...getInputProps()} />
        {path ? (
          <img src={path} height={500} width={500} />
        ) : (
          <div>
            {isDragActive ? (
              <p>Drop the file here...</p>
            ) : (
              <p>Drag 'n' drop some file here, or click to select file...</p>
            )}
          </div>
        )}
      </div>
    );
  };

  async function NewItemFunction(credentials: CreateProductInput) {
    if (!file) {
      console.error("No image selected");
      return;
    }
    const formData = new FormData();

    formData.append("file", "files[0]");

    formData.append("upload_preset", "feriptks");

    try {
      store.setRequestLoading(true);

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/devlognxn/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      const values = {
        ...credentials,
        file: data.public_id,
      };
      try {
        const img = await apiCreateProduct(JSON.stringify(values));
        if (img) {
          toast.success("Image uploaded");
          return router.push("/item");
        }
      } catch (error: any) {
        if (error instanceof Error) {
          handleApiError(error);
        } else {
          toast.error(error.message);

          console.log("Error message:", error.message);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      store.setRequestLoading(false);
    }
  }

  const onSubmitHandler: SubmitHandler<CreateProductInput> = (values) => {
    NewItemFunction(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <div className=" flex flex-row justify-around items-center bg-[#C2D7F3] p-10 w-full gap-5 ">
            <div className=" flex flex-col">
              <h1 className="text-2xl font-bold pl-5 pb-3">Image</h1>
              <ImageUpload />
            </div>
            <div className="flex flex-col gap-3">
              <FormInput label="Name" name="productName" />
              <FormInput label="Price" name="productPrice" />
              <FormInput label="Description" name="productDescription" />
              <div className="flex flex-row justify-around pt-2 gap-3">
                <label>
                  <div className="flex items-center gap-2 ">
                    <input type="radio" value={1 as AVAILABILITY} />
                    <h1>Available</h1>
                  </div>
                </label>
                <label>
                  <div className="flex items-center gap-2">
                    <input type="radio" value={2 as AVAILABILITY} />
                    <h1>Unavailable</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-1/2 gap-3">
            <Button
              variant="contained"
              style={selectedStyle}
              className=" bg-[#778ccc] text-white"
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={selectedStyle}
              className=" bg-[#778ccc] text-white"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NewItem;
