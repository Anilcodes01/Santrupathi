import { Plus } from 'lucide-react';

export default function AddButton() {
  return (
    <div className="rounded-md flex items-center justify-center bg-teal-700 p-1 w-7 h-7 shadow-lg hover:bg-teal-800 transition-colors duration-500 cursor-pointer">
      <Plus size={20} className="text-white" />
    </div>
  );
}