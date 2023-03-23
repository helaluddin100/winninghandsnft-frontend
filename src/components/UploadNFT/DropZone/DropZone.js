import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
const DropZone = ({
  price,
  active,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  setImage,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToIPFS(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <div class=" create-item-list create-file-item ">
      <input
        type="file"
        id="file-8"
        className="inputfile"
        multiple
        {...getRootProps()}
      />
      <svg
        width="23"
        height="17"
        viewBox="0 0 23 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0898 6.31641C18.9492 4.27734 17.2617 2.625 15.1875 2.625C14.9062 2.625 14.625 2.66016 14.3789 2.73047C13.2539 1.32422 11.5312 0.375 9.5625 0.375C6.57422 0.375 4.07812 2.48438 3.48047 5.29688C1.37109 6.17578 0 8.21484 0 10.5C0 13.6289 2.49609 16.125 5.625 16.125H17.4375C20.2148 16.125 22.5 13.875 22.5 11.0625C22.5 8.91797 21.0938 7.01953 19.0898 6.31641ZM17.4375 14.4375H5.625C3.44531 14.4375 1.6875 12.6797 1.6875 10.5C1.6875 8.53125 3.12891 6.87891 5.0625 6.63281V6.5625C5.0625 4.10156 7.06641 2.0625 9.5625 2.0625C11.4258 2.0625 13.043 3.22266 13.7109 4.875C14.0977 4.52344 14.625 4.3125 15.1875 4.3125C16.418 4.3125 17.4375 5.33203 17.4375 6.5625C17.4375 6.98438 17.2969 7.37109 17.1211 7.72266C17.2266 7.72266 17.332 7.6875 17.4375 7.6875C19.3008 7.6875 20.8125 9.19922 20.8125 11.0625C20.8125 12.9258 19.3008 14.4375 17.4375 14.4375ZM10.4062 4.55859C10.2305 4.38281 9.98438 4.38281 9.80859 4.55859L6.15234 8.21484C5.97656 8.39062 5.97656 8.63672 6.15234 8.8125L6.75 9.41016C6.92578 9.58594 7.17188 9.58594 7.34766 9.41016L9.28125 7.44141V12.3281C9.28125 12.5742 9.45703 12.75 9.70312 12.75H10.5469C10.7578 12.75 10.9688 12.5742 10.9688 12.3281V7.44141L12.8672 9.41016C13.043 9.58594 13.2891 9.58594 13.4648 9.41016L14.0625 8.8125C14.2383 8.63672 14.2383 8.39062 14.0625 8.21484L10.4062 4.55859Z"
          fill="#FF7E01"
        />
      </svg>
    </div>
  );
};
export default DropZone;
