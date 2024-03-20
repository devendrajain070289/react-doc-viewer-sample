import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

function App() {
  const docs = [
    { 
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: 'demo.docx',
    },
    { 
      uri: "https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls",
      fileType: "xls",
      fileName: 'tests-example.xls',
    },
    { 
      uri: require("./file/c4611_sample_explain.pdf"),
      fileType: "pdf",
      fileName: 'c4611_sample_explain.pdf',
    },
    { 
      uri: require("./file/image1.jpg"),
      fileType: "jpg",
      fileName: 'image1.jpg',
    },
  ];

  return (
    <>
    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:1000}} />;
    </>
  );
}

export default App;
