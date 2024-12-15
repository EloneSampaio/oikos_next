import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ReportModal({ isOpen, onClose, onConfirm }: ReportModalProps) {
  const router = useRouter();
  if (!isOpen) return null;

  const handleConfirm = () => {
    router.push("/maysa/report-form1");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm text-black">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Denunciar Doação
        </h2>

        <p className="text-center mb-6">
          Tem certeza que deseja denunciar essa doação?
        </p>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 text-white text-center py-3 rounded-lg font-bold"
          >
            Não
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 bg-red-600 text-white text-center py-3 rounded-lg font-bold"
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
