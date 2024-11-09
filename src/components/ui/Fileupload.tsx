"use client";

import { useState } from "react";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/extension/file-upload";
import { Paperclip } from "lucide-react";

const FileSvgDraw = (): React.JSX.Element => {
  return (
    <>
      <svg
        className="w-20 h-20 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-xl text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF
      </p>
    </>
  );
};

const FileUploaderTest = (): React.JSX.Element => {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 3,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  return (

    <div className="flex items-center justify-center flex-col mb-5">

    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropZoneConfig}
      className="relative h-[40rem] w-[80rem] rounded-lg p-2"
    >
      <FileInput className="outline-dashed outline-1 outline-white">
        <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
          <FileSvgDraw />
        </div>
      </FileInput>
      <FileUploaderContent>
        {files &&
          files.length > 0 &&
          files.map((file, i) => (
            <FileUploaderItem key={i} index={i}>
              <Paperclip height={50} width={50} className="h-[5rem] w-[5rem] stroke-current" />
              <span className="text-2xl">{file.name}</span>
            </FileUploaderItem>
          ))}
      </FileUploaderContent>
    </FileUploader>

        {
          files && 
          files?.length > 0 && 

            (<div className="flex items-center justify-center">

                  <button className="flex items-center justify-center text-white text-xl bg-green-500 border border-white rounded-xl h-[3rem] w-[14rem] cursor-pointer">Upload Files</button>


            </div>)


        }

     </div>

  );
};

export default FileUploaderTest;
