import { Header } from "@/components/header";
import Link from "next/link";

export default function Schedule() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Agendamento" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 text-black">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg mb-2 py-6">Localização da Coleta</h2>
            <div className="h-64 bg-gray-100 rounded-lg mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-0.1276!3d51.5074!2z!5e0!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-2">Data escolhida para coleta</h2>
            <input
              type="text"
              value="22/10/2024 17:30"
              readOnly
              className="w-full border rounded-lg p-3"
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
