import React, { useEffect, useState } from 'react';
import { VehicleData } from './types/vehicle';
import RestrictionCard from './components/RestrictionCard';

export default function App() {
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [protocolo, setProtocolo] = useState('');
  const [horario, setHorario] = useState('');

  useEffect(() => {
    setProtocolo(`WCHECK${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
    setHorario(new Date().toLocaleString('pt-BR'));

    // Set mock data immediately
    setVehicleData({
      placa: 'ABC1234',
      marca: 'VOLKSWAGEN',
      modelo: 'GOL 1.0',
      anoFabricacao: 2020,
      anoModelo: 2021,
      cor: 'PRATA',
      municipio: 'SÃO PAULO',
      uf: 'SP',
      chassi: '9BWAG5BX8LP000000',
      motor: 'CCZ000000',
      combustivel: 'FLEX',
      potencia: '75 CV',
      cilindradas: '999 CC',
      renavam: '12345678901',
      capacidadeMaximaTracao: '1200 KG',
      capacidadeCarga: '450 KG',
      pesoBrutoTotal: '1450 KG',
      quantidadePassageiros: 5,
      numeroCarroceria: 'CAR123456',
      tipoCarroceria: 'HATCHBACK',
      tipoMontagem: 'ORIGINAL',
      tipoRemarcacao: 'NÃO POSSUI',
      terceiroEixo: 'NÃO POSSUI',
      eixoTraseiroDiferencial: 'CONVENCIONAL',
      restricoes: [
        {
          tipo: 'Chassi Remarcado',
          descricao: 'Sem registro de remarcação',
          status: 'success',
          icon: 'Tool'
        },
        {
          tipo: 'Restrições Nacionais',
          descricao: 'Nenhuma restrição encontrada',
          status: 'success',
          icon: 'CheckCircle'
        },
        {
          tipo: 'Restrições Estaduais',
          descricao: 'Nenhuma restrição encontrada',
          status: 'success',
          icon: 'CheckCircle'
        },
        {
          tipo: 'Leilão',
          descricao: 'Sem registro de leilão',
          status: 'success',
          icon: 'DollarSign'
        },
        {
          tipo: 'Batida Integral ou Parcial',
          descricao: 'Veículo com registro de sinistro parcial',
          status: 'warning',
          icon: 'AlertTriangle'
        },
        {
          tipo: 'Aceitação em Seguros',
          descricao: 'Veículo com restrições para seguros',
          status: 'warning',
          icon: 'Award'
        },
        {
          tipo: 'Comercialização',
          descricao: 'Veículo apto para comercialização',
          status: 'success',
          icon: 'ShoppingBag'
        }
      ]
    });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto">
        {vehicleData && (
          <>
            {/* Header */}
            <div className="bg-[#263d75] text-white p-4 rounded-md mb-8 text-center">
              <h1 className="text-2xl font-bold">CONSULTA INFORM CAR</h1>
            </div>

            {/* Info Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Logo */}
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop"
                  alt="Car Brand Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Protocol Info */}
              <div className="space-y-2">
                <p className="font-semibold">Confidencial Para: Cliente WCheck</p>
                <p>Horário: {horario}</p>
                <p>Protocolo: {protocolo}</p>
                <p>Placa Consultada: {vehicleData.placa}</p>
              </div>

              {/* WCheck Logo & Print */}
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=60&h=60&fit=crop"
                  alt="WCheck"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button
                  onClick={handlePrint}
                  className="w-4/5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-colors print:hidden"
                >
                  Imprimir
                </button>
              </div>

              {/* QR Code */}
              <div className="flex items-center justify-center">
                <img
                  src="https://codigosdebarrasbrasil.com.br/wp-content/uploads/2019/09/codigo_qr-300x300.png"
                  alt="QR Code"
                  className="w-24 h-24"
                />
              </div>
            </div>

            {/* Restrictions */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Restrições</h2>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {vehicleData.restricoes.map((restricao, index) => (
                  <RestrictionCard key={index} {...restricao} />
                ))}
              </div>
            </div>

            {/* Vehicle Data */}
            <div className="bg-[#263d75] text-white p-4 rounded-t-lg text-center">
              <h2 className="text-xl font-bold">BASE NACIONAL - DADOS DO VEÍCULO</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 rounded-b-lg overflow-hidden">
              {Object.entries({
                Placa: vehicleData.placa,
                Marca: vehicleData.marca,
                Modelo: vehicleData.modelo,
                'Ano Fabricação': vehicleData.anoFabricacao,
                'Ano Modelo': vehicleData.anoModelo,
                Cor: vehicleData.cor,
                Município: vehicleData.municipio,
                UF: vehicleData.uf,
                Chassi: vehicleData.chassi,
                Motor: vehicleData.motor,
                Combustível: vehicleData.combustivel,
                Potência: vehicleData.potencia,
                Cilindradas: vehicleData.cilindradas,
                Renavam: vehicleData.renavam,
                'Capacidade Máxima de Tração': vehicleData.capacidadeMaximaTracao,
                'Capacidade de Carga': vehicleData.capacidadeCarga,
                'Peso Bruto Total (PBT)': vehicleData.pesoBrutoTotal,
                'Quantidade de Passageiros': vehicleData.quantidadePassageiros,
                'Número Carroceria': vehicleData.numeroCarroceria,
                'Tipo Carroceria': vehicleData.tipoCarroceria,
                'Tipo Montagem': vehicleData.tipoMontagem,
                'Tipo Remarcação': vehicleData.tipoRemarcacao,
                'Terceiro Eixo': vehicleData.terceiroEixo,
                'Eixo Traseiro Diferencial': vehicleData.eixoTraseiroDiferencial,
              }).map(([label, value], index) => (
                <React.Fragment key={index}>
                  <div className="bg-blue-50 p-3 text-center font-semibold border-r border-b border-white">
                    {label}
                  </div>
                  <div className="bg-gray-50 p-3 text-center border-r border-b border-white">
                    {value}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}