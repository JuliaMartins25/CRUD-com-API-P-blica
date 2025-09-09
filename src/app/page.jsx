import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import {ThunderboltOutlined} from "@ant-design/icons";
import logo from "../../public/image/grifinoria.png";

export default function Home() {
return (
<div className="min-h-screen bg-gradient-to-br from-[#2a0e0e] via-[#5a1a1a] via-[#7b1113] to-[#2a0e0e] flex items-center justify-center p-6 font-serif">
  <div className="max-w-lg w-full bg-white/90 border-2 border-[#b8860b] rounded-xl shadow-[0_0_10px_rgba(184,134,11,0.2)] p-6 text-center">
    
    <div className="text-3xl font-bold text-[#b8860b] mb-2">
      SENAI VALINHOS
    </div>

    <div className="text-xl text-[#d4af37] mb-6">TURMA: 2TDS2</div>

    <div className="flex justify-center mb-6">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#b8860b] shadow-md">
        <Image src={logo} fill className="object-cover" alt="Avatar" />
      </div>
    </div>

    <div className="text-2xl font-semibold text-[#b8860b] mb-4">
      Julia Arruda Martins
    </div>

    <div className="italic text-[#d4af37]">
      “A felicidade pode ser encontrada até mesmo nas horas mais sombrias,
      se a pessoa se lembrar de acender a luz.”
    </div>
    <div className="mt-2 text-sm text-[#d4af37]">— Alvo Dumbledore</div>

    <div className="mt-6 flex justify-center">
      <Link href="/infomation">
        <Button
          type="primary"
          size="large"
          icon={<ThunderboltOutlined />}
          className="!bg-[#b8860b] !border-[#b8860b] hover:!bg-[#d4af37] hover:!border-[#d4af37] !text-[#2a0e0e]"
        >
          Ver Mais Sobre a API
        </Button>
      </Link>
    </div>

  </div>
</div>

);
}