"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocalização não é suportada pelo seu navegador.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError("Não foi possível obter a localização. Verifique as permissões.");
        console.error("Erro ao obter localização:", err);
      }
    );
  }, []);

  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Agendamento" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 text-black">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg mb-2 py-6">Localização da Coleta</h2>
            {location ? (
              <div className="p-4 bg-gray-100 rounded-lg">
                <p>
                  <strong>Latitude:</strong> {location.latitude}
                </p>
                <p>
                  <strong>Longitude:</strong> {location.longitude}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Use os dados acima para verificar sua localização no Google Maps.
                </p>
              </div>
            ) : error ? (
              <div className="p-4 bg-red-100 rounded-lg text-red-600">
                {error}
              </div>
            ) : (
              <div className="p-4 bg-gray-100 rounded-lg">
                Obtendo localização...
              </div>
            )}
          </div>

          <div>
            <h2 className="text-lg mb-2">Data escolhida para coleta</h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy HH:mm"
              className="w-full border rounded-lg p-3"
              placeholderText="Escolha a data e hora"
            />
          </div>

          <Link
            href="/elone/agendamento"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold mt-8"
          >
            Continuar
          </Link>
        </div>
      </div>
    </main>
  );
}
