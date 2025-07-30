import React from 'react';
import { Download, FileText } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    fetch('/resume/Nishil Resume (1).pdf', { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          link.href = '/resume/Nishil Resume (1).pdf';
          link.download = 'Nishil_Pathak_Resume.pdf';
        } else {
          link.href = 'https://drive.google.com/uc?export=download&id=1UVvlM3iZuWz77r4NROQInQ4NuOdFp9Qe';
          link.download = 'Nishil_Pathak_Resume.pdf';
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(() => {
        link.href = 'https://drive.google.com/uc?export=download&id=1UVvlM3iZuWz77r4NROQInQ4NuOdFp9Qe';
        link.download = 'Nishil_Pathak_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
    >
      <Download size={20} />
      <span>Download Resume</span>
    </button>
  );
};

export default ResumeDownload;