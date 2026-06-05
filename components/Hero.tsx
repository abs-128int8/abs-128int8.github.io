import { FaGithub } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

export default function Hero() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-6xl font-bold">
        @abs-128int8
      </h1>

      <div className="mt-8 flex justify-center gap-6">
        <a href="https://qiita.com/abs-128int8"
          target="_blank"
          rel="noreferrer"
          className="
            text-3xl
            text-green-500
            hover:scale-110
            transition">
          <SiQiita />
        </a>
        <a href="https://github.com/abs-128int8"
          target="_blank"
          rel="noreferrer"
          className="
            text-3xl
            text-black
            hover:scale-110
            transition">
          <FaGithub />
        </a>
      </div>
    </section >
  );
}