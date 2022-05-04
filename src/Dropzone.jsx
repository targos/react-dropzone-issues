import React from 'react';

export default function Dropzone(props) {
  const { getRootProps, getInputProps, isDragActive } = props;
  console.log(props);
  return (
    <div
      style={{
        border: '1px solid grey',
        padding: '1rem',
        borderRadius: '5px',
        borderColor: isDragActive ? 'blue' : 'grey',
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}
