import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1 text-[#8B4513]">
                {label}
            </label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor 
                        apiKey="yavfcfw0doud0q6buikts3lhgssbslj2zpq6o636dmh5hpdy"  // your API key here
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image", "advlist", "autolink", "lists", "link",
                                "charmap", "preview", "anchor", "searchreplace",
                                "visualblocks", "code", "fullscreen", "insertdatetime",
                                "media", "table", "help", "wordcount"
                            ],
                            toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style: `
                                body { 
                                    background-color: #FAF0E6; 
                                    color: #8B4513; 
                                    font-family: Helvetica, Arial, sans-serif; 
                                    font-size: 14px; 
                                }
                            `,
                        }}
                        onEditorChange={(content) => onChange(content)}
                    />
                )}
            />
        </div>
    );
}
