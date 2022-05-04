import React from 'react';
import Layout from './Layout';
import Dropzone from './Dropzone';
import { useDropzone } from 'react-dropzone';

export default function Group() {
  const dropzone = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
  });

  return (
    <Layout>
      <Dropzone {...dropzone} />
    </Layout>
  );
}
