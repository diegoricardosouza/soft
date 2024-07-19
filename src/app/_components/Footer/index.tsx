import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { Container } from "../Container";
import { LogoFooter } from "./LogoFooter";
import { Mascot } from "./Mascot";
import { TitleFooter } from "./TitleFooter";

export function Footer() {
  return (
    <footer className="w-full bg-darkGray bg-footer-texture bg-center bg-no-repeat bg-cover pt-[73px]">
      <Container type="div">
        <div className="flex flex-wrap flex-col items-center gap-5 sm:flex-row sm:gap-[80px] lg:flex-row lg:gap-[142px]">
          <LogoFooter className="w-[190px]" />

          <ul className="text-white flex items-center gap-5 footer-sociais">
            <li>
              <Link href="#">
                <ImFacebook size={23} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <SiInstagram size={23} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <AiOutlineYoutube size={33} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaLinkedinIn size={23} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-wrap flex-col gap-5 sm:flex-row sm:gap-[80px] lg:flex-row lg:gap-[142px] mt-[70px]">
            <div>
              <TitleFooter type="h3">DIVISÕES</TitleFooter>
              <ul className="pl-6 mt-3 menu-footer">
                <li>
                  <Link href="#">
                    Automotiva
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Montagem
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    LEDs
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Conectividade
                  </Link>
                </li>
              </ul>

              <TitleFooter type="h3" className="mt-[19px]">CONTATO</TitleFooter>
              <ul className="pl-6 mt-3 menu-footer">
                <li>
                  <Link href="#">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Telefones
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    E-mails
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <TitleFooter type="h3">UNIDADES</TitleFooter>
              <ul className="pl-6 mt-3 menu-footer">
                <li>
                  <Link href="#">
                    Matriz - Pato Branco
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Filial I - Curitiba
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Filial II - Penha
                  </Link>
                </li>
              </ul>

              <TitleFooter type="h3" className="mt-[47px]">SOBRE NÓS</TitleFooter>
              <ul className="pl-6 mt-3 menu-footer">
                <li>
                  <Link href="#">
                    História da empresa
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Política de Qualidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:mr-[-249px] lg:mb-[-115px] sm:hidden lg:block">
            <Mascot />
          </div>
        </div>
      </Container>

      <div className="border-t-orange border-t-[1px] py-5 lg:py-14 mt-[55px]">
        <Container type="div" className="flex flex-wrap flex-col lg:flex-row text-center lg:text-left items-center lg:gap-[170px]">
          <span className="text-white">© Soft Eletrônica 2024</span>

          <p className="text-white">
            Desenvolvido por &nbsp;
            <Link href="//www.dev2.com.br" target="_blank" className="transition-all hover:text-orange">
              Dev2 - Comunicação Integrada
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  )
}