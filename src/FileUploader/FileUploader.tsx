import React, { forwardRef } from 'react';
import { useDropzone, DropzoneProps } from 'react-dropzone';

export interface FileUploaderProps extends DropzoneProps {
  onDrop: (files: any) => void;
  uploadContent?: string;
  dragActiveContent?: string;
  className?: string;
}

const FileUploader = forwardRef<HTMLDivElement, FileUploaderProps>(function ({ onDrop, uploadContent, dragActiveContent, className }, ref) {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`file-upload ${className}`} ref={ref}>
      <input {...getInputProps()} />
      <div  >{
        isDragActive ?
          dragActiveContent ? dragActiveContent : "Drop the files here ..."
          :
          uploadContent ? uploadContent : "Drag 'n' drop some files here, or click to select files"}
      </div>
    </div>
  );
});

export default FileUploader;
