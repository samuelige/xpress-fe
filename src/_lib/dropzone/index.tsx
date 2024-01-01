import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';

interface DragAndDropSectionProps {
  onDrop: (acceptedFiles: File[]) => void;
  emptyState?: string;
  emptyStateSize?: Record<string, number>;
  accept?: any;
  height: any;
  acceptanceText?: string;
  onFileDialogCancel?: () => void;
  hideOnDropValue?: boolean
}

const DragAndDropSection: React.FC<DragAndDropSectionProps> = (props) => {
  const { onDrop, onFileDialogCancel, emptyState, accept, emptyStateSize, height, acceptanceText, hideOnDropValue } = props;

  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const dropzoneOptions: DropzoneOptions = {
    onDrop: onDropCallback,
    onFileDialogCancel,
    accept,
  };

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isFocused,
  } = useDropzone(dropzoneOptions);


  return (
    <div style={height && {height, padding: '3rem', marginTop: '0.5rem'}}
      {...getRootProps()}
      className={`border-dashed border-2 ${
        isDragAccept
          ? 'border-success-400'
          : isDragReject
          ? 'border-error-400'
          : isFocused
          ? 'border-primary-400'
          : 'border-black-200'
      } flex flex-col  justify-center items-center rounded-lg text-center`}
    >
      <input {...getInputProps()} />
      {acceptedFiles.length === 0 ? (
        <div  className={` flex flex-col items-center  m-auto justify-center`}>
          {
            emptyState && (<Image  src={emptyState || ""} alt="emptyState" width={emptyStateSize?.width} height={emptyStateSize?.height}/>)
          }
          <br/>
          <div className="flex flex-col text-center ">
            <div className="flex flex-row space-x-4 justify-center mt-7">
              <span
                className="text-black-300 font-semibold text-sm cursor-pointer"
              >
                Click to upload
              </span>{" "}
              <span className="text-black-300  text-sm">or drag and drop</span>
            </div>
            <span className="text-black-400 mt-4 text-xs">{acceptanceText || "CSV or XLSX"}</span>
          </div>
        </div>
      ) :  !hideOnDropValue ? (
        <div>
          <p>Accepted Files:</p>
          <ul>
            {acceptedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center m-auto justify-center">
          {
            emptyState && (<Image src={emptyState || ""} alt="emptyState" width={emptyStateSize?.width} height={emptyStateSize?.height}/>)
          }
          <br/>
          <div className="flex flex-col text-center ">
            <div className="flex flex-row space-x-4 justify-center mt-7">
              <span
                className="text-black-300 font-semibold text-sm cursor-pointer"
              >
                Click to upload
              </span>{" "}
              <span className="text-black-300 text-sm">or drag and drop</span>
            </div>
            <span className="text-black-400 mt-4 text-xs">{acceptanceText || "CSV or XLSX"}</span>
          </div>
        </div>
      )
    }
    </div>
  );
};

export default DragAndDropSection;
