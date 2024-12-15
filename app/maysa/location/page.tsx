import { Header } from "@/components/header";
import Link from "next/link";

export default function Location() {
  return (
    <main>
      <Header />
      <div className="p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4">Localização da Coleta</h2>
          <div className="h-64 bg-gray-200 rounded-lg mb-4">
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
        </section>

        <section>
          <h3 className="font-bold mb-2">Data escolhida para coleta</h3>
          <div className="border rounded-lg p-3">
            <input
              type="text"
              value="22/10/2024 17:30"
              readOnly
              className="w-full bg-transparent"
            />
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-2">Enviar mensagem para o doador:</h3>
          <textarea
            className="w-full border rounded-lg p-3 h-32"
            placeholder="Digite sua mensagem..."
          />
        </section>

        <Link href="/maysa/interesse-enviado">
          <button className="w-full bg-[#C3D744] py-4 rounded-lg font-bold">
            Enviar Interesse
          </button>
        </Link>
      </div>
    </main>
  );
}
