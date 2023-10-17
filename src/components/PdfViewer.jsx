// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const pdfjs = await import('pdfjs-dist/build/pdf');
const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFViewer = ( {pdf_url} ) => {
  
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="w-full max-w-full h-screen bg-gray-500">
      <Viewer fileUrl={pdf_url} plugins={[ defaultLayoutPluginInstance, ]} />
    </div>
  );
}

export default PDFViewer;