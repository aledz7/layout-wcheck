import React from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  DollarSign, 
  ShoppingBag, 
  Wrench, 
  Award 
} from 'lucide-react';

const icons = {
  AlertCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  DollarSign,
  ShoppingBag,
  Tool: Wrench,
  Award
};

interface RestrictionCardProps {
  tipo: string;
  descricao: string;
  status: 'error' | 'warning' | 'success';
  icon: keyof typeof icons;
}

const statusColors = {
  error: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  success: 'bg-green-100 text-green-800'
};

const RestrictionCard: React.FC<RestrictionCardProps> = ({ tipo, descricao, status, icon }) => {
  const IconComponent = icons[icon];
  
  return (
    <div className={`p-4 rounded-lg ${statusColors[status]} h-full`}>
      <div className="flex flex-col items-center text-center gap-2">
        <IconComponent className="w-6 h-6" />
        <h3 className="font-semibold text-sm">{tipo}</h3>
        <p className="text-xs">{descricao}</p>
      </div>
    </div>
  );
};

export default RestrictionCard;