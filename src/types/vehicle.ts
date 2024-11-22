export interface VehicleData {
  placa: string;
  marca: string;
  modelo: string;
  anoFabricacao: number;
  anoModelo: number;
  cor: string;
  municipio: string;
  uf: string;
  chassi: string;
  motor: string;
  combustivel: string;
  potencia: string;
  cilindradas: string;
  renavam: string;
  capacidadeMaximaTracao: string;
  capacidadeCarga: string;
  pesoBrutoTotal: string;
  quantidadePassageiros: number;
  numeroCarroceria: string;
  tipoCarroceria: string;
  tipoMontagem: string;
  tipoRemarcacao: string;
  terceiroEixo: string;
  eixoTraseiroDiferencial: string;
  restricoes: {
    tipo: string;
    descricao: string;
    status: 'error' | 'warning' | 'success';
    icon: 'AlertCircle' | 'CheckCircle' | 'XCircle' | 'AlertTriangle' | 'DollarSign' | 'ShoppingBag' | 'Tool' | 'Award';
  }[];
}