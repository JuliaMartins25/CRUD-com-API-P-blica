import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import {ThunderboltOutlined} from "@ant-design/icons";


export default function Home() {
return (
<div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6 font-serif">
<div className="max-w-lg w-full bg-white border-4 border-yellow-900 rounded-xl shadow-lg p-6 text-center">
<div className="text-3xl font-bold text-yellow-900 mb-2">
SENAI VALINHOS
</div>


<div className="text-xl text-yellow-800 mb-6">TURMA: 2TDS2</div>


<div className="flex justify-center mb-6">
<div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-900 shadow-md">
<Image
src="/avatar.jpg" 
fill
className="object-cover"
/>
</div>
</div>


<div className="text-2xl font-semibold text-yellow-900 mb-4">
Julia Arruda Martins
</div>


<div className="italic text-yellow-800">
“A felicidade pode ser encontrada até mesmo nas horas mais sombrias,
se a pessoa se lembrar de acender a luz.”
</div>
<div className="mt-2 text-sm text-yellow-700">— Alvo Dumbledore</div>
<div className="mt-6 flex justify-center">
<Link href="/infomation">
                    <Button 
                        type="primary" 
                        size="large"
                        icon={<ThunderboltOutlined />}
                        className="!bg-yellow-900 !border-yellow-900 hover:!bg-yellow-800 hover:!border-yellow-800 !text-white"
                    >
                        Ver Mais Sobre a API
                    </Button>
                </Link>
                </div>
</div>
</div>
);
}