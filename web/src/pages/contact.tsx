import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { AtSign, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="py-8 space-y-6">
      <h1 className="text-3xl">Contato</h1>

      <div>
        <h2 className="text-2xl">Fale Conosco</h2>
        <p className="text-zinc-300">
          Queremos muito ouvir o que você tem pra nos dizer.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-zinc-300 flex items-center gap-4">
          <InstagramLogo className="size-6" />
          <a
            href="https://www.instagram.com/vorticeconsultingetech"
            target="_blank"
          >
            @vorticeconsultingetech
          </a>
        </p>

        <p className="text-zinc-300 flex items-center gap-4">
          <Phone className="size-6" /> (32) 9 9971-6969
        </p>

        <p className="text-zinc-300 flex items-center gap-4">
          <WhatsappLogo className="size-6" />
          <a href="https://wa.me/5532999716969" target="_blank">
            (32) 9 9971-6969
          </a>
        </p>

        <p className="text-zinc-300 flex items-center gap-4">
          <AtSign className="size-6" />
          <a href="mailto:contato.vorticeconsulting@gmail.com">
            contato.vorticeconsulting@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
