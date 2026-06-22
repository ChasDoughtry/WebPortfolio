import "../styles/ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-header">
          <h2>Resume</h2>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <iframe
          src="/Doughtry_Resume.pdf"
          title="Resume"
          className="resume-frame"
        />

        <div className="resume-footer">
          <a href="/Doughtry_Resume.pdf" download className="download-btn">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
